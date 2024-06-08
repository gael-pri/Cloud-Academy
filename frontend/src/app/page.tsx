'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { BottomMenu, BottomMenuProps } from "./components/bottomMenu";

export default function Home() {
  const [menus, setMenu] = useState<BottomMenuProps[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          const url = "http://localhost:2900/category";
            try {
                const result = await axios.get<BottomMenuProps[]>(url);
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
              <BottomMenu
              name={menu.name}
              description={menu.description}
              id_category={menu.id_category}
              key={menu.name}
              />
          ))}
        </>
  );
}
