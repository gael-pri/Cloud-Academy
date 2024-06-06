'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../page.module.css";
import { usePathname } from 'next/navigation';
import { TopSection, TopSectionProps } from "./topSection";

export default function Page() {
  const pathname = usePathname();
  let arrayPath = pathname.split('/');
  let id = arrayPath[2];

  const [sections, setSection] = useState<TopSectionProps[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          const url = `http://localhost:2900/category/${id}`;
            try {
                const result = await axios.get<TopSectionProps[]>(url);
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
