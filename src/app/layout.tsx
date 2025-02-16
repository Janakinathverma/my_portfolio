import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children} {/* This renders the page content */}
        <Footer /> {/* ✅ Footer remains */}
      </body>
    </html>
  );
}
