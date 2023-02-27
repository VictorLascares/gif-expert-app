import { useState } from "react";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Demon Slayer', 'Dragon ball z']);


    return (
        <>
            <h1>GifExpertApp</h1>


            <ol>
                {
                    categories.map(category => <li key={ category } >{ category }</li>)
                }
            </ol>
        </>
    );
};


export default GifExpertApp;