import { useEffect, useState } from "react";
import axios from "axios";
import { CategoryProps, SectionProps, ChapterProps } from "@/app/functions/globalProps";

export function cheminId(dossier: string, id: number) {
  if (!isNaN(id)) {
    let myid:number = id - 1;
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
        const sectionId = sections.length > 0 ? sections[myid].name : "No id available";
        return sectionId;
    }
        /////////////////
    // section
    if (dossier == 'chapter' && myid) {
      const [chapters, setChapter] = useState<ChapterProps[]>([]);
        useEffect(() => {
            const fetchData = async () => {
              const url = `http://localhost:2900/chapter`;
                try {
                    const result = await axios(url);
                    setChapter(result.data);
                } catch (err) {
                    console.log("error", err);
                }
            };
            fetchData();
            
        })
        const chapId = chapters.length > 0 ? chapters[myid].sectionId : "No title available";
        return chapId;
    }
  }
}