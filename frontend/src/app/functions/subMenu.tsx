'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { SectionProps, TopSection, TopChapter, ChapterProps } from "./globalProps";
import { cheminId } from "./globalId";


export function sousMenu(dossier: string, id: number) {
  if (!isNaN(id)) {
    /////////////////
    // Affichage des sections
    if (dossier == 'category') {
  const [sections, setSection] = useState<SectionProps[]>([]);
  useEffect(() => {
      const fetchData = async () => {
        const url = `http://localhost:2900/${dossier}/${id}`;
          try {
              const result = await axios.get<SectionProps[]>(url);
              setSection(result.data);
          } catch (err) {
              console.log("error", err);
          }
      };
      fetchData();
  })
  
return (
    <>
      {sections.map((section) => (
          <TopSection
          name={section.name}
          id_section={section.id_section}
          key={section.name}
          />
      ))}
    </>
);
    }
    /////////////////
    // Affichage des chapitres
    if (dossier == 'section') {
      const [chapters, setChapter] = useState<ChapterProps[]>([]);
      useEffect(() => {
        const fetchData = async () => {
          const url = `http://localhost:2900/section/${id}`;
            try {
                const result = await axios.get<ChapterProps[]>(url);
                setChapter(result.data);
            } catch (err) {
                console.log("error", err);
            }
        };
        fetchData();
      })
      
    return (
        <>
          {chapters.map((chapter) => (
            <TopChapter
            title={chapter.title}
            description={chapter.description}
            sectionId={chapter.sectionId}
            id_chapter={chapter.id_chapter}
            key={chapter.id_chapter}
            />
        ))}
        </>
    );
        }
      /////////////////
    // Affichage des chapitres
    if (dossier == 'chapter') {
      console.log("N° de chapitre: ", id);
      const [chapters, setChapter] = useState<ChapterProps[]>([]);
      let myId = cheminId(dossier, id);

      useEffect(() => {
        const fetchData = async () => {
          const url = `http://localhost:2900/section/${myId}`;
            try {
                const result = await axios.get<ChapterProps[]>(url);
                setChapter(result.data);
            } catch (err) {
                console.log("error", err);
            }
        };
        fetchData();
      })
      
    return (
        <>
          {chapters.map((chapter) => (
            <TopChapter
            title={chapter.title}
            description={chapter.description}
            sectionId={chapter.sectionId}
            id_chapter={chapter.id_chapter}
            key={chapter.id_chapter}
            />
        ))}
        </>
    );
  }  
  }
}
