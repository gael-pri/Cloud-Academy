'use client'
import styles from "@/app/page.module.css";
import { usePathname } from 'next/navigation';

export default function GroupePage({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    let arrayPath = pathname.split('/');
    let dossier = arrayPath[1];

    if (!dossier)  {
        return (
            <>
                <div className={styles.center}>
                Cloud Academy
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className={styles.groupePage}>
                    {children}
                </div>
            </>
        );
}
}