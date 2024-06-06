import styles from "@/app/page.module.css";

export interface TopMenuProps {
    name: string;
    description: string;
    id_category: string;
};
export function TopMenu({name, description, id_category}: TopMenuProps) {
    return <a href={`/category/${id_category}`} className={styles.card}>
            <h2>
                {name} <span>-&gt;</span>
            </h2>
            <p>{description}</p>
            </a>
}
