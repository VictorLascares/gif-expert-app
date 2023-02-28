import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Probando el componente <GifItem />', () => {
    const title = 'Dragon Ball Z';
    const url = 'https://dragon-ball-z.com';
    test('Evaluando el snapshot', () => {
        const { container } = render( 
            <GifItem 
                title={title} 
                url={url}
            />
        );

        expect(container).toMatchSnapshot();
    });
});