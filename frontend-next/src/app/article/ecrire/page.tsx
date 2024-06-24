'use client'
import React from 'react';
import axios from 'axios';
import styles from "@/app/page.module.css";

export default function EcrirePage() {
    async function handleFormSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const formValuesObject: Record<string, FormDataEntryValue> = {};
        formData.forEach((value, key) => {
            formValuesObject[key] = value;
        });

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let myChapter = urlParams.get('chapitre');
        const createData = {
            title: formValuesObject.title as string,
            description: formValuesObject.description as string,
            chapterId: myChapter,
        };

        try {
            const response = await axios.post('http://localhost:2900/article/ecrire', createData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Failed to create article:', error.response?.data.message);
            } else {
                console.error('An unexpected error occurred:', error);
            }
        }
    }

    return (
        <div className={styles.formulaire}>
            <h2>Nouvel article</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <br /><br />
                    <label htmlFor="title">Titre</label>
                    <br />
                    <input type="text" id="title" name="title" />
                    <br /><br />
                    <label htmlFor="description">Description</label>
                    <br />
                    <input type="text" id="description" name="description" />
                </div>
                <div>
                    <br /><br />
                    <button type="submit">Ajouter</button>
                </div>
            </form>
        </div>
    );
}
