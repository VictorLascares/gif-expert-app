import { renderHook } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Probando hook useFetchGifs', () => {
    test('Debe de regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { gifs, isLoading } = result.current;

        expect( gifs ).toHaveLength(0);
        expect( isLoading ).toBeTruthy();

    });
});