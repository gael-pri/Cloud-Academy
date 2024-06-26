import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "@/app/page.module.css";
import Header from "@/app/components/header";
import MenuLateral from "./components/menuLateral";
import MenuAccueil from "./components/MenuAccueil";
import GroupePage from "./components/groupePage";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Cloud Academy",
  description: "Generated by create next app",
};
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
     
          <Header />

          <div className={styles.centerGroupe}>
            <MenuLateral />   
            <GroupePage >{children}</GroupePage>
          </div>
          
          <div className={styles.grid}>
            <MenuAccueil />
          </div>

        </main>
      </body>
    </html>
  );
}
