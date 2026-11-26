import { NextResponse, type NextRequest } from "next/server";

/**
 * Pre-launch gate (restored from the original live deploy, Sep 2026).
 *
 * While the shop isn't publicly live, the real customer domain
 * (patisseries.com.au / www) shows an animated "coming soon" page (a looping
 * video rendered with Remotion + Higgsfield), but the full site stays reachable
 * at europatisseries.fly.dev for review.
 *
 * To GO LIVE: set SHOP_LIVE = true (or remove this file) and redeploy.
 */
const SHOP_LIVE = false;

const PUBLIC_HOSTS = new Set(["patisseries.com.au", "www.patisseries.com.au"]);

// Animated coming-soon: full-screen looping video (public/coming-soon.mp4) with
// a poster for instant paint and crisp, tappable contact links overlaid.
const COMING_SOON_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>Euro Patisserie — Coming Soon</title>
<meta name="description" content="Euro Patisserie Armadale — our new website is coming soon. Open 7 days, 7am–3pm. Order by phone or email." />
<meta name="robots" content="noindex" />
<meta name="theme-color" content="#050930" />
<meta property="og:title" content="Euro Patisserie — Coming Soon" />
<meta property="og:description" content="Our new website is on its way. Open 7 days — order by phone or email." />
<meta property="og:image" content="/coming-soon-poster.jpg" />
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%;background:#050930;color:#e6e9f5;overflow:hidden;
    font-family:system-ui,-apple-system,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased}
  .bg{position:fixed;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;background:#050930}
  .veil{position:fixed;inset:0;z-index:1;pointer-events:none;
    background:radial-gradient(120% 80% at 50% 42%, transparent 45%, rgba(5,9,48,.4) 100%)}
  .contact{position:fixed;left:0;right:0;bottom:0;z-index:2;display:flex;gap:14px;
    justify-content:center;flex-wrap:wrap;padding:22px 16px calc(24px + env(safe-area-inset-bottom))}
  .contact a{display:inline-flex;align-items:center;gap:9px;text-decoration:none;color:#e6e9f5;
    border:2px solid rgba(230,233,245,.42);background:rgba(5,9,48,.42);backdrop-filter:blur(7px);
    -webkit-backdrop-filter:blur(7px);padding:11px 20px;font-size:14px;font-weight:600;
    letter-spacing:.05em}
  .contact a:hover{border-color:#e6e9f5;background:rgba(5,9,48,.72)}
  .contact svg{width:16px;height:16px;stroke:#e6e9f5;stroke-width:2;fill:none}
  .sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;
    clip:rect(0 0 0 0);white-space:nowrap;border:0}
</style>
</head>
<body>
  <video class="bg" autoplay muted loop playsinline preload="metadata" poster="/coming-soon-poster.jpg">
    <source src="/coming-soon.mp4" type="video/mp4" />
  </video>
  <div class="veil"></div>
  <script>
    (function () {
      var v = document.querySelector("video.bg");
      if (!v) return;
      // Phones/portrait get the lighter 720x1280 vertical cut (1.4MB vs 7.2MB).
      var mobile =
        window.matchMedia("(max-width: 820px)").matches ||
        window.matchMedia("(orientation: portrait)").matches;
      if (mobile) {
        v.poster = "/coming-soon-poster-mobile.jpg";
        v.src = "/coming-soon-mobile.mp4";
        v.load();
      }
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    })();
  </script>

  <nav class="contact" aria-label="Contact Euro Patisserie">
    <a href="mailto:euro@patisseries.com.au">
      <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
      euro@patisseries.com.au
    </a>
    <a href="tel:+61398221234">
      <svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/></svg>
      (03) 9822 1234
    </a>
  </nav>

  <h1 class="sr">Euro Patisserie Armadale — our website is being rebuilt, coming soon. Open 7 days, 7am to 3pm. Order by email at euro@patisseries.com.au or call (03) 9822 1234. Visit us at 974 High St, Armadale VIC 3143.</h1>
</body>
</html>`;

export function proxy(req: NextRequest) {
  const host = (req.headers.get("host") || "").toLowerCase().split(":")[0];
  if (!SHOP_LIVE && PUBLIC_HOSTS.has(host)) {
    return new NextResponse(COMING_SOON_HTML, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "x-robots-tag": "noindex",
        "cache-control": "no-store",
      },
    });
  }
  return NextResponse.next();
}

export const config = {
  // Gate page requests on the public domain. Exclude Next internals, the API,
  // and any path with a file extension (so /coming-soon.mp4, the poster and
  // favicon are served as static files instead of the coming-soon HTML).
  matcher: ["/((?!_next|api/|.*\\.).*)"],
};
