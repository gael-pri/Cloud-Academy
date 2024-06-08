'use client'
import styles from "@/app/page.module.css";
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    let arrayPath = pathname.split('/');
    let dossier = arrayPath[1];
    let id = arrayPath[2];
    return (
        <>
            { dossier !== '' ? <a href="http://localhost:3000"><h2 className={styles.siteTitle}>Cloud Academy</h2></a> : '' }
            
            <div className={styles.description}>
                <p>
                A long way to learn 
                <code className={styles.code}> Node, express, typescript and react</code>
                </p> 
            </div>
        </>
    )
}