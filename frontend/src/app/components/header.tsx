import styles from "@/app/page.module.css";

export default function Header() {
    return (
        <>
            <div className={styles.description}>
                <p>
                A long way to learn 
                <code className={styles.code}> Node, express, typescript and react</code>
                </p> 
            </div>
        </>
    )
}