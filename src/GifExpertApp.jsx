import { useState } from "react";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Demon Slayer', 'Dragon ball z']);

    const onAddCategory = () => {
        const categoria = prompt('Ingresa una cateogoria');
        setCategories([...categories, categoria]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <button onClick={ onAddCategory }>Agregar</button>
            <ol>
                {
                    categories.map(category => <li key={ category } >{ category }</li>)
                }
            </ol>
        </>
    );
};


export default GifExpertApp;