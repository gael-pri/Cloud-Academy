import styles from "@/app/page.module.css";

export interface TopChapterProps {
    title: string;
    id_chapter: string;
};
export function TopChapter({title, id_chapter}: TopChapterProps) {
    return <a href={`/chapter/${id_chapter}`} className={styles.menu}>
                <h2>{title}</h2>
            </a>
}