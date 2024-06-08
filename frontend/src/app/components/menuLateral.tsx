'use client'
import styles from "@/app/page.module.css";
import { usePathname } from 'next/navigation';
import { chemin } from "@/app/functions/globalTitles"
import { sousMenu } from "@/app/functions/subMenu"
import { cheminId } from "../functions/globalId";
import { stringify } from "querystring";

export default function MenuLateral() {

    const pathname = usePathname();
    let arrayPath = pathname.split('/');
    let dossier = arrayPath[1];
    let id: number = parseInt(arrayPath[2]);
    let chapId = cheminId(dossier, id);
    let titre = (dossier == 'chapter') ? chemin('section', chapId) : chemin(dossier, id);
    let menu = sousMenu(dossier, id);
    let url = "http://localhost:3000/article/ecrire?chapitre=" + id;
    if (!dossier ) {

    } else {
    return (
        <>
            <div className={styles.menuLateral}>
                <h4>{titre}</h4>
                <div className={styles.menu}>{menu}</div>
                <p><a href={url} className={styles.button}>Nouvel article</a></p>
            </div>
        </>
    )
}
}