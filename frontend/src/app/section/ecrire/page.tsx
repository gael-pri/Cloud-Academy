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
        let myCategory = urlParams.get('categorie');
        const createData = {
            name: formValuesObject.title as string,
            categoryId: myCategory,
        };

        try {
            const response = await axios.post('http://localhost:2900/section/ecrire', createData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Failed to create section:', error.response?.data.message);
            } else {
                console.error('An unexpected error occurred:', error);
            }
        }
    }

    return (
        <div className={styles.formulaire}>
            <h2>Nouvelle section</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <br /><br />
                    <label htmlFor="title">Titre</label>
                    <br />
                    <input type="text" id="title" name="title" />
                </div>
                <div>
                    <br /><br />
                    <button type="submit">Ajouter</button>
                </div>
            </form>
        </div>
    );
}
