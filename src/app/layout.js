// src/app/layout.js
import Navbar from "@/components/Navbar";
import "../app/globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kutumba Events",
  description: "Modern event discovery and branding experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
