const { render, screen } = require("@testing-library/react");
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Probando el componente <GifGrid />', () => {
    const category = 'One Punch';
    test('Debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);

        // expect( screen.getByText('Cargando...') );
        expect(screen.getByText(category));
    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'asdasd',
                title: 'Seiya',
                url: 'https://seiya/seiya.gif'
            },
            {
                id: 'assdasd',
                title: 'Goku',
                url: 'https://goku/goku.gif'
            }
        ];
        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: false
        });
        render(<GifGrid category={category} />);
        expect( screen.getAllByRole('img')).toHaveLength(2);
    });
});
