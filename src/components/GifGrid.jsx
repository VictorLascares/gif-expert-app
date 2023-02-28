import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        getGifs(category).then( newGifs => setGifs(newGifs));
    }, []);

    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                {
                    gifs.map(gif => 
                        <GifItem 
                            key={gif.id}
                            { ...gif }
                        />
                    )
                }
            </div>
        </>
    );
};


export default GifGrid;