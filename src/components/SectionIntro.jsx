function SectionIntro({title, subTitle}) {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="font-bold text-5xl">{title}</h2>
            <p className="text-lg">{subTitle}</p>
        </div>
    )
}

export default SectionIntro;