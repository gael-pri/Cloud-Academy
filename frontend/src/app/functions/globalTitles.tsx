import { useEffect, useState } from "react";
import axios from "axios";
import { CategoryProps, SectionProps, ChapterProps } from "@/app/functions/globalProps";

export function chemin(dossier: string, id: number) {
  if (!isNaN(id)) {
    /////////////////
    // page d'accueil
    if (!dossier) {
      const title = 'Accueil';
      return title;
    }
    /////////////////
    // category
    if (dossier == 'category') {
      const [categories, setCategory] = useState<CategoryProps[]>([]);
        useEffect(() => {
            const fetchData = async () => {
              const url = `http://localhost:2900/category`;
                try {
                    const result = await axios(url);
                    setCategory(result.data);
                } catch (err) {
                    console.log("error", err);
                }
            };
            fetchData();
            
        })
        let myid:number = id - 1;
        const title = categories.length > 0 ? categories[myid].name : "No title available";
        return title;
    }

    /////////////////
    // section
    if (dossier == 'section') {
      const [sections, setSection] = useState<SectionProps[]>([]);
        useEffect(() => {
            const fetchData = async () => {
              const url = `http://localhost:2900/section`;
                try {
                    const result = await axios(url);
                    setSection(result.data);
                } catch (err) {
                    console.log("error", err);
                }
            };
            fetchData();
            
        })
        let myid:number = id - 1;
        const title = sections.length > 0 ? sections[myid].name : "No title available";
        return title;
    }
  }
}