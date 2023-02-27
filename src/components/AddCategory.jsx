import { useState } from "react";

const AddCategory = ({ setCategories }) => {
    const [category, setCategory] = useState('');

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if( category.trim().length <= 1 ) return;
        setCategories(categories => [...categories, category]);
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