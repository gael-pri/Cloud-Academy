'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { BottomMenu, BottomMenuProps } from "@/app/components/bottomMenu";

export default function MenuAccueil() {
    const pathname = usePathname();
    let arrayPath = pathname.split('/');
    let dossier = arrayPath[1];
    let id = arrayPath[2];
  
    if (!dossier) {
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
  }