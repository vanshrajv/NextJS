import "./globals.css";
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "CampusConnect | Student Management Portal",
  description: "A modern student management portal for campus teams."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><AppShell>{children}</AppShell></body>
    </html>
  );
}
