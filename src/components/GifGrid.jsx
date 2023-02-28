import { useFetchGifs } from "../hooks/useFetchGifs";
import { Spinner, GifItem } from "./";

export const GifGrid = ({ category }) => {
    const { gifs, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                {isLoading ? <Spinner /> :
                    gifs.map(gif =>
                        <GifItem
                            key={gif.id}
                            {...gif}
                        />
                    )
                }
            </div>
        </>
    );
};