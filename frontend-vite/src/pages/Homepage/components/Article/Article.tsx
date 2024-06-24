import { useState } from 'react';
import styles from './Article.module.scss';

interface ArticleProps {
    id: number;
    title: string;
    image: string;
}

function Article({ title, image }: ArticleProps) {
        const[liked, setLikes] = useState(false);

        function handleClick() {
            setLikes(!liked);
        }

    return (
        <div onClick={handleClick} className={ styles.article }>
            <div className={ styles.imageContainer }>
                <img src={ image } alt="article" />
            </div>
            <div className={` ${ styles.articleTitle } d-flex flex-column justify-content-center align-items-center`}>
                <h3 className='mb-10'>{title}</h3>
                <i className={`fa-solid fa-heart ${liked ? "text-primary" : ""}`}></i>
            </div>
        </div>
    )
}

export default Article;