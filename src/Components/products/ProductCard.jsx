export default function ProductCard({name, price, description}) {
    return (
        <div className="product-card">
            <h3>{name}</h3>
            <p className="price">{price}</p>
            <p>{description}</p>
            <button>Comprar</button>
        </div>
    );

}
