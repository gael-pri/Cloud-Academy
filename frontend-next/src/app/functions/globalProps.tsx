import styles from "@/app/page.module.css";

export interface CategoryProps {
    name: string;
    description: string;
    id_category: string;
};
export function TopMenu({name, description, id_category}: CategoryProps) {
    return <a href={`/category/${id_category}`} className={styles.card}>
             <h2>{name}</h2>
            </a>
}
export interface SectionProps {
    name: string;
    id_section: string;
};
export function TopSection({name, id_section}: SectionProps) {
    return <a href={`/section/${id_section}`} className={styles.menu}>
                <h2>{name}</h2>
            </a>
}
export interface ChapterProps {
    title: string;
    description: string;
    sectionId: string;
    id_chapter: string;
};
export function TopChapter({title, description, sectionId, id_chapter}: ChapterProps) {
    return <a href={`/chapter/${id_chapter}`} className={styles.menu}>
                <h2>{title}</h2>
            </a>
}
export interface ArticleProps {
    title: string;
    subtitle: string;
    description: string;
    id_article: string;
    chapterId: string;
};
export function TopArticle({title, subtitle, description, id_article, chapterId}: ArticleProps) {
    return <div className={styles.listeArticles}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
                
            
}