import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                setCategories={setCategories}
                categories={categories}
            />
            <ol>
                {
                    categories.map(category => <li key={ category } >{ category }</li>)
                }
            </ol>
        </>
    );
};


export default GifExpertApp;