import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RNA Traders",
    short_name: "RNA",
    description:
      "RNA Traders is a trusted business group in Jeddah, Saudi Arabia, offering travel, hospitality, media production, and business support services.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#005468",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
