import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Probando <AddCategory />', () => {
    const seCategories = () => {};
    const categories = [];

    test('Debe de cambiar el valor de la caja de texto', () => {
        render( 
            <AddCategory 
                setCategories={seCategories} 
                categories={categories} 
            /> 
        );
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value : 'Saitama' } });
        expect(input.value).toBe('Saitama');


    });
});