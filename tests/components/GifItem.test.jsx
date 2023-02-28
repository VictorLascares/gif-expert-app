import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Probando el componente <GifItem />', () => {
    const title = 'Dragon Ball Z';
    const url = 'https://dragon-ball-z.com/goku.gif';
    test('Evaluando el snapshot', () => {
        const { container } = render(
            <GifItem
                title={title}
                url={url}
            />
        );

        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifItem title={title} url={url} /> );
        // screen.debug();

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(`Imagen de ${title}`);

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( `Imagen de ${title}` );
    });


    test('Debe de mostrar el titulo en el componente', () => {
        render( <GifItem title={title} url={url} /> );
        expect( screen.getByText(title) ).toBeTruthy();

    });
});