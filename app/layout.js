
import "./globals.css";

export const metadata = {
  title: "Promotion Major",
  description: "Your Major. Your Progress. Your Future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
