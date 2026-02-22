"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { portfolioSets } from "@/app/lib/projects"

type SetId = "digital" | "robotics"

const ACTIVE_SET_KEY = "wilpo_portfolio_active_set"

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`plusIcon ${open ? "isOpen" : ""}`}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      aria-hidden="true"
    >
      <path
        d="M9 3v12M3 9h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function HomePage() {
  const [active, setActive] = React.useState<SetId>("digital")
  const [hydrated, setHydrated] = React.useState(false)

  const [expandedSlug, setExpandedSlug] = React.useState<string | null>(null)
  const [isReflowAnimating, setIsReflowAnimating] = React.useState(false)

  const [sortKey, setSortKey] = React.useState<"release" | "name">("release")
  const [sortDir, setSortDir] = React.useState<"desc" | "asc">("desc")

  React.useEffect(() => {
    try {
      const saved = window.localStorage.getItem(ACTIVE_SET_KEY)
      if (saved === "digital" || saved === "robotics") setActive(saved)
    } catch {
      // ignore
    } finally {
      setHydrated(true)
    }
  }, [])

  React.useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(ACTIVE_SET_KEY, active)
    } catch {
      // ignore
    }
  }, [active, hydrated])

  const current = React.useMemo(
    () => portfolioSets.find((s) => s.id === active),
    [active]
  )

  const cardRefs = React.useRef<Record<string, HTMLElement | null>>({})

  const setCardRef = React.useCallback(
    (slug: string): React.RefCallback<HTMLElement> =>
      (node) => {
        cardRefs.current[slug] = node
      },
    []
  )

  const toggle = React.useCallback((slug: string) => {
    setExpandedSlug((cur) => {
      const next = cur === slug ? null : slug

      if (typeof window !== "undefined" && next && window.matchMedia("(min-width: 760px)").matches) {
        setIsReflowAnimating(true)
        window.setTimeout(() => setIsReflowAnimating(false), 260)
      } else {
        setIsReflowAnimating(false)
      }

      return next
    })
  }, [])

  React.useEffect(() => {
    setExpandedSlug(null)
  }, [active])

  const sortedProjects = React.useMemo(() => {
    const projects = current?.projects ? [...current.projects] : []
    const dir = sortDir === "asc" ? 1 : -1

    projects.sort((a, b) => {
      if (sortKey === "name") return a.title.localeCompare(b.title) * dir

      const ay = Number.parseInt(a.firstRelease, 10)
      const by = Number.parseInt(b.firstRelease, 10)
      const aYear = Number.isFinite(ay) ? ay : 0
      const bYear = Number.isFinite(by) ? by : 0

      if (aYear !== bYear) return (aYear - bYear) * dir
      return a.title.localeCompare(b.title) * dir
    })

    return projects
  }, [current, sortKey, sortDir])

  React.useEffect(() => {
    if (!expandedSlug) return
    const el = cardRefs.current[expandedSlug]
    if (!el) return

    const t = window.setTimeout(() => {
      try {
        el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
      } catch {
        const rect = el.getBoundingClientRect()
        window.scrollTo({
          top: window.scrollY + rect.top - window.innerHeight / 2 + rect.height / 2,
          behavior: "smooth"
        })
      }
    }, 420)

    return () => window.clearTimeout(t)
  }, [expandedSlug])

  if (!hydrated) {
    return (
      <main className="paper">
        <div className="wrap">
          <header className="hero heroCenter">
            <Image
                src="/images/wilpomillow_logo.png"
                alt="Wilpo Millow logo"
                width={440}
                height={160}
                priority
              />

              <p className="subtitle">WILPO MILLOW</p>
            <div className="toggleWrap" role="tablist" aria-label="Portfolio sets">
              <div className="toggleTrack isDigital">
                <div className="toggleIndicator" aria-hidden="true" />
                <button type="button" className="toggleOption isActive" disabled>
                  Digital
                </button>
                <button type="button" className="toggleOption" disabled>
                  Robotics
                </button>
              </div>
            </div>
          </header>
        </div>
      </main>
    )
  }

  return (
    <main className="paper">
      <div className="wrap">
        <header className="hero heroCenter">
          <Image
            src="/images/wilpomillow_logo.png"
            alt="Wilpo Millow logo"
            width={440}
            height={160}
            priority
          />

          <p className="subtitle">WILPO MILLOW</p>
          <div className="toggleWrap" role="tablist" aria-label="Portfolio sets">
            <div className={`toggleTrack ${active === "digital" ? "isDigital" : "isRobotics"}`}>
              <div className="toggleIndicator" aria-hidden="true" />
              <button
                type="button"
                className={`toggleOption ${active === "digital" ? "isActive" : ""}`}
                onClick={() => setActive("digital")}
                role="tab"
                aria-selected={active === "digital"}
              >
                Digital
              </button>
              <button
                type="button"
                className={`toggleOption ${active === "robotics" ? "isActive" : ""}`}
                onClick={() => setActive("robotics")}
                role="tab"
                aria-selected={active === "robotics"}
              >
                Robotics
              </button>
            </div>

            <div className="toggleLabels" aria-hidden="true">
              <span className="toggleHint">
                {active === "digital" ? "Showing Digital Solutions" : "Showing Robotics Solutions"}
              </span>
            </div>
          </div>
        </header>

        {current ? (
          <section className="section">
            <div className="sectionHead sectionHeadCenter">
              <div className="sortBar" aria-label="Sort projects">
                <div className="sortGroup">
                  <span className="sortLabel">Sort by</span>
                  <button
                    type="button"
                    className={`sortChip ${sortKey === "release" ? "isActive" : ""}`}
                    onClick={() => setSortKey("release")}
                  >
                    Release year
                  </button>
                  <button
                    type="button"
                    className={`sortChip ${sortKey === "name" ? "isActive" : ""}`}
                    onClick={() => setSortKey("name")}
                  >
                    Name
                  </button>
                </div>

                <button
                  type="button"
                  className="sortDirBtn"
                  onClick={() => setSortDir((d) => (d === "asc" ? "desc" : "asc"))}
                  aria-pressed={sortDir === "asc"}
                  title="Toggle ascending/descending"
                >
                  {sortDir === "asc" ? "Ascending ↑" : "Descending ↓"}
                </button>
              </div>
            </div>

            <div
              className="grid"
              data-has-expanded={expandedSlug ? "true" : "false"}
              data-animating={isReflowAnimating ? "true" : "false"}
            >
              {sortedProjects.map((p) => {
                const isOpen = expandedSlug === p.slug
                const youtubeEmbed = (p as any).youtubeEmbed as string | undefined

                return (
                  <article
                    key={p.slug}
                    ref={setCardRef(p.slug)}
                    className={`card cardFrost ${isOpen ? "isExpanded" : ""}`}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onClick={(e) => {
                      const el = e.target as HTMLElement | null
                      if (el?.closest("a, button, iframe")) return
                      toggle(p.slug)
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        toggle(p.slug)
                      }
                    }}
                  >
                    <div className="cardTop">
                      <div className="logoWrap">
                        <Image src={p.logoSrc} alt={`${p.title} logo`} width={44} height={44} />
                      </div>

                      <div className="cardMeta">
                        <h3 className="h3">{p.title}</h3>
                        <p className="pSmall">{p.description}</p>
                        <p className="releaseDate">First released: {p.firstRelease}</p>
                      </div>

                      <button
                        type="button"
                        className="expandBtn"
                        aria-expanded={isOpen}
                        aria-controls={`expand-${p.slug}`}
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggle(p.slug)
                        }}
                        title={isOpen ? "Collapse" : "Expand"}
                      >
                        <PlusIcon open={isOpen} />
                      </button>
                    </div>

                    <div id={`expand-${p.slug}`} className="expandPanel" data-open={isOpen ? "true" : "false"}>
                      <div className="expandInner">
                        {active === "robotics" && youtubeEmbed ? (
                          <div
                            className="thumb videoFrame"
                            onPointerDownCapture={(e) => e.stopPropagation()}
                            onClickCapture={(e) => e.stopPropagation()}
                          >
                            <iframe
                              src={youtubeEmbed}
                              title={`${p.title} demo video`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <a
                            className="thumb"
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${p.title} in a new tab`}
                            onPointerDownCapture={(e) => e.stopPropagation()}
                            onClickCapture={(e) => e.stopPropagation()}
                          >
                            <Image
                              src={(p as any).screenshotSrc}
                              alt={`${p.title} screenshot`}
                              fill
                              sizes="(max-width: 900px) 100vw, 1100px"
                              className="thumbImg"
                              priority={isOpen}
                            />
                          </a>
                        )}

                        <div className="cardActions">
                          <Link
                            className="btn"
                            href={`/projects/${p.slug}`}
                            onPointerDown={(e) => e.stopPropagation()}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Case study →
                          </Link>

                          <a
                            className="btnGhost"
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onPointerDown={(e) => e.stopPropagation()}
                            onClick={(e) => e.stopPropagation()}
                          >
                            Visit ↗
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        ) : null}

        <footer className="footer footerCenter">
          <p className="pMuted">Copyright © {new Date().getFullYear()} Wilpo Millow. All rights reserved.</p>
        </footer>
      </div>
    </main>
  )
}