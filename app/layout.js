import { Inter } from "next/font/google";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import  SessionProvider  from "@/Components/auth/SessionProvider";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Trimpa",
  description: "Flight booking made easy",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
        {children}
        </SessionProvider>
          
      </body>
    </html>
  );
}
