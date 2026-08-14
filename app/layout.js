import "./globals.css";

export const metadata = {
  title: "The Rolling Brush Painting Services",
  description: "Professional painting services in Hyderabad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
