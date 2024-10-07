import Navigationbar from "@/components/navbar/Navbar";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { PostProvider } from "@/context/PostContext";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "ArtLab",
  description: "Cloud ERP system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-black">
      <head></head>
      <body className={montserrat.className}>
        <LanguageProvider>
          <PostProvider>
            <Navigationbar />
            <div className="overflow-hidden min-h-screen bg-black">
              {children}
            </div>
          </PostProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
