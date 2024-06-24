import styles from "@/app/page.module.css";
import { cheminId } from "../functions/globalId";

export function buttonSection (dossier: string, id: number) {
    let url = "http://localhost:3000/section/ecrire?categorie=" + id;
    let nomUrl = 'Nouvelle section';
    return (
        <div className={styles.button}>
            <p><a href={url}>{nomUrl}</a></p>
        </div>
    )
}

export function buttonChapter (dossier: string, id: number) {
    let url = "http://localhost:3000/chapter/ecrire?section=" + id;
    let nomUrl = 'Nouveau chapitre';
    return (
        <div className={styles.button}>
            <p><a href={url}>{nomUrl}</a></p>
        </div>
    )
}

export function buttonArticle (dossier: string, id: number) {
    let url = "http://localhost:3000/article/ecrire?chapitre=" + id;
    let nomUrl = 'Nouvel article';
    return (
        <div className={styles.button}>
            <p><a href={url}>{nomUrl}</a></p>
        </div>
    )
}