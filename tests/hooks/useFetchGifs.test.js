import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Probando hook useFetchGifs', () => {
    test('Debe de regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { gifs, isLoading } = result.current;

        expect( gifs ).toHaveLength(0);
        expect( isLoading ).toBeTruthy();
    });

    test('Debe de retornar un arreglo de images e isLoading en false', async () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        await waitFor(
            () => expect( result.current.gifs.length ).toBeGreaterThan(0)
        );

        const { gifs, isLoading } = result.current;

        expect( gifs.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    });
});