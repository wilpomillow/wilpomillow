import Link from "next/link"

export default function NotFound() {
  return (
    <main className="paper">
      <div className="wrap">
        <h1 className="h1">Not found</h1>
        <p className="pMuted">That page doesn’t exist.</p>
        <div style={{ marginTop: 16 }}>
          <Link className="btn" href="/">Back home →</Link>
        </div>
      </div>
    </main>
  )
}
