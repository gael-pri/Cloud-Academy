'use client'
import styles from "@/app/page.module.css";
import { usePathname } from 'next/navigation';
import { chemin } from "@/app/functions/globalTitles"
import { sousMenu } from "@/app/functions/subMenu"
import { buttonSection, buttonChapter, buttonArticle } from "./buttons";
import { cheminId } from "../functions/globalId";

export default function MenuLateral() {

    const pathname = usePathname();
    let arrayPath = pathname.split('/');
    let dossier = arrayPath[1];
    let id: number = parseInt(arrayPath[2]);
    let dossierId = cheminId(dossier, id);
    let myId: number = parseInt(dossierId);
    let titre = (dossier == "chapter") ? chemin('section', myId) : chemin(dossier, id);
    let button;
    let button2;

    switch (dossier) {
        case "category":
            button = buttonSection(dossier, id);
        break;
        case "section":
            button = buttonChapter(dossier, id);
        break;
        case "chapter":
            
            button = buttonArticle(dossier, id);
        break;
    }
    let menu = sousMenu(dossier, id);

    if (!dossier ) {

    } else {
        return (
            <>
                <div className={styles.menuLateral}>
                    <h4>{titre}</h4>
                    <div className={styles.menu}>{menu}</div>
                    {button}
                </div>
            </>
        )
        
    }
}