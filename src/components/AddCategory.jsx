import { useState } from "react";

const AddCategory = ({ setCategories, categories }) => {
    const [category, setCategory] = useState('');

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if( category.trim().length <= 1 ) return;
        if (categories.includes(category)) return;
        setCategories([...categories, category]);
        setCategory('');
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={category}
                onChange={handleChange}
            />
        </form>
    );
};

export default AddCategory;