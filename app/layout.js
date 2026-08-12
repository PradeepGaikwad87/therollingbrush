import "./globals.css";
export const metadata = {
  title: "The Rolling Brush Painting Services | Hyderabad",
  description:
    "Professional interior, exterior, repainting, texture painting, Royal 3D painting, polish work and waterproofing services in Hyderabad and across Telangana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
