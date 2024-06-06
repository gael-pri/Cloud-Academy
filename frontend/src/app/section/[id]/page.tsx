'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { TopChapter, TopChapterProps } from "./topChapter";

export default function Page() {
  const pathname = usePathname();
  let arrayPath = pathname.split('/');
  let id = arrayPath[2];

  
  const [chapters, setChapter] = useState<TopChapterProps[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          const url = `http://localhost:2900/section/${id}`;
            try {
                const result = await axios.get<TopChapterProps[]>(url);
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
            id_chapter={chapter.id_chapter}
            key={chapter.id_chapter}
            />
        ))}
      </>
  );
}
