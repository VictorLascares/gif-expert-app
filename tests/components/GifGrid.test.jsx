const { render, screen } = require("@testing-library/react");
import { GifGrid } from "../../src/components";

describe('Probando el componente <GifGrid />', () => {
    const category = 'One Punch';
    test('Debe de mostrar el loading inicialmente', () => {
        render(<GifGrid category={category} />);

        // expect( screen.getByText('Cargando...') );
        expect(screen.getByText(category));
    });

});
