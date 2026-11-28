function StoreItem({title, price, image}) {
    return (
        <article className="border border-black/50 rounded-3xl shadow-2xl overflow-hidden">
            <div className="border h-40 overflow-hidden">
                <img src={image} className="object-contain" />
            </div>
            
            <div className="p-4">
                <h3 className="font-bold text-xl">{title}</h3>

                <span className="text-xs font-semibold">${price}</span>
            </div>
        </article>
    )
}

export default StoreItem;