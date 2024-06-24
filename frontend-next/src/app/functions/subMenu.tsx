'use client'
import axios from "axios";
import { useEffect, useState, useLayoutEffect } from "react";
import { SectionProps, TopSection, TopChapter, ChapterProps } from "./globalProps";



export function sousMenu(dossier: string, id: number) {

  const [sections, setSection] = useState<SectionProps[]>([]);
  const [chapters, setChapter] = useState<ChapterProps[]>([]);
  const url = `http://localhost:2900/${dossier}/${id}`;

  useLayoutEffect(() => {
      const fetchSection = async () => {
        
          try {
              const result = await axios.get<SectionProps[]>(url);
              setSection(result.data);
          } catch (err) {
              console.log("error", err);
          }
      };
      fetchSection();
  }, [id, dossier,url])

  useLayoutEffect(() => {
    const fetchChapter = async () => {
        try {
            const result = await axios.get<ChapterProps[]>(url);
            setChapter(result.data);
        } catch (err) {
            console.log("error", err);
        }
    };
    fetchChapter();
  },[id])
  
return (
    <>
      {sections.map((section) => (
          <TopSection
          name={section.name}
          id_section={section.id_section}
          key={section.name}
          />
      ))}

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
