import { useState } from "react";

const AddCategory = () => {
    const [category, setCategory] = useState('');

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviando...');
    };

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={category}
                onChange={handleChange}
            />

            <button>Agregar</button>
        </form>
    );
};

export default AddCategory;