import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Probando <AddCategory />', () => {
    const categories = [];

    test('Debe de cambiar el valor de la caja de texto', () => {
        const setCategories = jest.fn();
        render(
            <AddCategory
                setCategories={setCategories}
                categories={categories}
            />
        );
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'Saitama' } });
        expect(input.value).toBe('Saitama');
    });

    test('Debe de llamar setCategories si el input tiene algun valor', () => {
        const category = 'Saitama';
        const setCategories = jest.fn();

        render(
            <AddCategory
                setCategories={setCategories}
                categories={categories}
            />
        );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole("form");
        fireEvent.change(input, { target: { value: category } });
        fireEvent.submit(form)

        expect( input.value ).toBe('');
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith([ category ]);
    });

    test('No debe de llamar el setCategory si el input esta vacio', () => {
        const setCategories = jest.fn();
        render(
            <AddCategory
                setCategories={setCategories}
                categories={categories}
            />
        );

        const form = screen.getByRole("form");
        fireEvent.submit(form);

        expect( setCategories ).not.toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(0);
    })
});