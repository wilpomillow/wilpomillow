import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProjectBySlug } from "@/app/lib/projects"

export default async function ProjectPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const isRobotics = Boolean((project as any).youtubeEmbed)

  return (
    <main className="paper">
      <div className="wrap">
        <div className="topRow">
          <Link className="backLink" href="/">
            ← Back
          </Link>

          <a className="pill" href={project.href} target="_blank" rel="noopener noreferrer">
            Visit ↗
          </a>
        </div>

        <header className="projectHeader">
          <div className="projectTitleRow">
            <div className="logoWrap logoWrapLarge">
              <Image
                src={project.logoSrc}
                alt={`${project.title} logo`}
                width={56}
                height={56}
                priority
              />
            </div>

            <div>
              <h1 className="h1">{project.title}</h1>
              <p className="pMuted">{project.description}</p>
              {project.firstRelease ? (
                <p className="releaseDate">First released: {project.firstRelease}</p>
              ) : null}
            </div>
          </div>
        </header>

        <section className="heroShot">
          {isRobotics ? (
            <div className="shotFrame videoFrame">
              <iframe
                src={(project as any).youtubeEmbed}
                title={`${project.title} demo video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shotFrame shotLink"
              aria-label={`Open ${project.title} in a new tab`}
            >
              <Image
                src={(project as any).screenshotSrc}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                className="shotImg"
                priority
              />
            </a>
          )}
        </section>

        {project.details ? (
          <section className="details">
            <h2 className="h2">Notes</h2>
            <p className="p">{project.details}</p>
          </section>
        ) : null}

        <footer className="footer footerCenter">
          <p className="pMuted">
            Copyright © {new Date().getFullYear()} Wilpo Millow. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  )
}