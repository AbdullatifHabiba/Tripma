import { Inter } from "next/font/google";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import Navbar from "../Components/Navbar";
import Banar from "../Components/Banar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trimpa",
  description: "Flight booking made easy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {children}
      </body>
    </html>
  );
}
