'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { ArticleProps, TopArticle } from "@/app/functions/globalProps";

export default function Page() {
  const pathname = usePathname();
    let arrayPath = pathname.split('/');
    let dossier = arrayPath[1];
    let id = arrayPath[2];

  const [articles, setArticle] = useState<ArticleProps[]>([]);
  useEffect(() => {
      const fetchData = async () => {
        const url = `http://localhost:2900/${dossier}/${id}`;
          try {
              const result = await axios.get<ArticleProps[]>(url);
              setArticle(result.data);
          } catch (err) {
              console.log("error", err);
          }
      };
      fetchData();
  })
  
  return (
      <>
        {articles.map((article) => (
          <TopArticle
          title={article.title}
          subtitle={article.subtitle}
          description={article.description}
          id_article={article.id_article}
          chapterId={article.chapterId}
          key={article.id_article}
          />
      ))}
      </>
  );
}
