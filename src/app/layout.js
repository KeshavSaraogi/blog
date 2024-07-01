import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import AuthProvider from '@/providers/AuthProvider'
import { ThemeContextProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Keshav Saraogi Blog App",
  description: "Personal Blog App!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                    {children}
                  <Footer />
                </div>
              </div>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
