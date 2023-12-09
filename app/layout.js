import "./globals.css";
import { fredoka } from "./Font";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { ProgressBar } from "./components/ProgressBar";

export const metadata = {
  title: "Car Hub",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/CarLogo.svg" type="image/x-icon" />
      </head>
      <body className={fredoka.className}>
        <NavBar />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
