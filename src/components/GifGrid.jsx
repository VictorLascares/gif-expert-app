import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";
import Spinner from "./Spinner";

const GifGrid = ({ category }) => {
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


export default GifGrid;