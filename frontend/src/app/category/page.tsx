'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../page.module.css";
import { TopMenu, TopMenuProps } from "../components/bottomMenu";

export default function Home({ params }: { params: { id: string } }) {

  const [menus, setMenu] = useState<TopMenuProps[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get<TopMenuProps[]>("http://localhost:2900/category");
                setMenu(result.data);
            } catch (err) {
                console.log("error", err);
            }
        };
        fetchData();
    })

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          A long way to learn 
          <code className={styles.code}> Node, express, typescript and react</code>
        </p> 
      </div>

      <div className={styles.center}>
       Cloud Academy
      </div>

      <div className={styles.grid}>
        {menus.map((menu) => (
            <TopMenu
            name={menu.name}
            description={menu.description}
            id_category={menu.id_category}
            key={menu.name}
            />
        ))}
      </div>
    </main>
  );
}
