import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar";
import Background from "../Components/Background";
import Banar from "../Components/Banar";
import Home from "./ui/home/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trimpa",
  description: "Flight booking made easy",
};

export default function RootLayout({ children, model }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banar />

        <Navbar />

        <Background>
          {model}
          <Home />

          {children}
        </Background>
      </body>
    </html>
  );
}
