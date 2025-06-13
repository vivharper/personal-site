import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <div className="content-wrapper">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
