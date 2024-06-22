import Article from './components/Article/Article';
import styles from './Homepage.module.scss';
import { data } from '../../data/articles';
import { useState,  ChangeEvent } from 'react';

function Content() {
    const  articles = data;
    const [filter, setFilter] = useState('');

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        const filter = e.target.value;
        setFilter(filter.trim().toLowerCase());
    }

    return (
        <div className="flex-fill container p-20">
            <h1 className="my-30">Découvrez nos nouveaux articles</h1>
            <div className={`card  d-flex flex-column p-20 ${styles.contentCard}`}>
                <div className={`d-flex flew-row justify-content-center align-items-center my-30 ${styles.searchBar}`}>
                <i className="fa-solid fa-magnifying-glass mr-15"></i>
                    <input onInput={ handleInput} className='flex-fill' type="text" placeholder="Rechercher" />
                </div>
                <div className={styles.grid}>
                    { articles
                        .filter((a) =>a.title.toLowerCase().startsWith(filter))
                        .map((a) => (
                            <Article 
                            id={a.id}
                            title={a.title}
                            image={a.image}
                            />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Content;