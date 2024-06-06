'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { TopMenu, TopMenuProps } from "./components/topMenu";

export default function Home() {
  const [menus, setMenu] = useState<TopMenuProps[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          const url = "http://localhost:2900/category";
            try {
                const result = await axios.get<TopMenuProps[]>(url);
                setMenu(result.data);
            } catch (err) {
                console.log("error", err);
            }
        };
        fetchData();
    })
  return (
        <>
          {menus.map((menu) => (
              <TopMenu
              name={menu.name}
              description={menu.description}
              id_category={menu.id_category}
              key={menu.name}
              />
          ))}
        </>
  );
}
