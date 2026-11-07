function Intro() {
    const user = {
        userName: "Kelechi Nwofor",
        age: 29
    }
    const skills = ["HTML, CSS, React"]
    return (
        <div className="bg-amber-200 border border-black/30 py-10 px-6 m-8 w-fit">
            <h2 className="font-bold text-4xl">{user.userName}</h2>

            <p>
                I am {user.age} years old
            </p>

            <p>
                I have skills in {skills.join(", ")}
            </p>
        </div>
    )
}

export default Intro;