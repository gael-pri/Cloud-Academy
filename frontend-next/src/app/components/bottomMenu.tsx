import styles from "@/app/page.module.css";

export interface BottomMenuProps {
    name: string;
    description: string;
    id: string;
};
export function BottomMenu({name, description, id}: BottomMenuProps) {
    return <a href={`/category/${id}`} className={styles.card}>
            <h2>
                {name} <span>-&gt;</span>
            </h2>
            <p>{description}</p>
            </a>
}
