import styles from "@/app/page.module.css";

export interface TopSectionProps {
    name: string;
    id_section: string;
};
export function TopSection({name, id_section}: TopSectionProps) {
    return <a href={`/section/${id_section}`} className={styles.card}>
                <h2>
                    {name} <span>-&gt;</span>
                </h2>
            </a>
}