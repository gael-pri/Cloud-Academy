import styles from "@/app/page.module.css";

export interface TopSectionProps {
    name: string;
    id_section: string;
};
export function TopSection({name, id_section}: TopSectionProps) {
    return <a href={`/section/${id_section}`} className={styles.menu}>
                <h2>{name}</h2>
            </a>
}