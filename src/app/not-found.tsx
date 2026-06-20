import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body>
        <div style={{ padding: "2rem", textAlign: "center", fontFamily: "sans-serif" }}>
          <h2>404 — Page not found</h2>
          <Link href="/en" style={{ color: "#0070f3" }}>Go home</Link>
        </div>
      </body>
    </html>
  );
}
