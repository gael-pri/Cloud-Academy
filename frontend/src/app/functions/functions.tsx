
import axios from "axios";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { TopMenu, TopMenuProps } from "@/app/components/topMenu";

export function chemin() {
    const pathname = usePathname();
    let arrayPath = pathname.split('/');
    let dossier = arrayPath[1];
    let id = arrayPath[2];

    if (dossier == 'section') {

        const [categories, setCategory] = useState<TopMenuProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const urlTitre = `http://localhost:2900/category/${id}`;
        try {
            const result = await axios.get<TopMenuProps[]>(urlTitre);
            setCategory(result.data);
        } catch (err) {
            console.log("error", err);
        }
    };
    fetchData();
  })
    
    return (
        <>
          {categories.map((category) => (
              <TopMenu
              name={category.name}
              description=""
              id_category={category.id_category}
              key={category.name}
              />
          ))}
        </>
    );
}
}