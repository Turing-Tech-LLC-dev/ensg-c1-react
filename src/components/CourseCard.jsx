function CourseCard({Icon, title, price}) {
    return (
        <div className="flex flex-col gap-4 border border-black/30 shadow-lg py-8 px-6 rounded-3xl bg-blue-200">
            <span><Icon /></span>
            <h3>{title}</h3>
            <span>{price}</span>
        </div>
    )
}

export default CourseCard;