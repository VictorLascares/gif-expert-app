const GifItem = ({ title, url }) => {
    return (
        <div className="card">
            <img src={url} alt={`Imagen de ${title}`} />
            <p>{title}</p>
        </div>
    );
};

export default GifItem;