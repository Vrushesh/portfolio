import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vrushesh Patel — Software Engineer",
  description: "Portfolio of Vrushesh Patel: Azure, Kubernetes, Go, Python, systems & infra.",
  openGraph: {
    title: "Vrushesh Patel — Software Engineer",
    description: "Portfolio: Azure Stack HCI, Arc-enabled VMs, GPU virtualization, operators.",
    url: "https://example.com",
    siteName: "Vrushesh Patel",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
