function Badge({priority, children}) {
    let styles;
    switch(priority) {
        case "high":
            styles = "bg-red-400 text-white";
            break;
        case "medium": 
            styles = "bg-purple-200";
            break;
        case "low":
            styles = "bg-yellow-200";
            break;
    }
    return (
        <span className={`py-0.5 px-2 rounded-xl text-xs ${styles}`}>
            {children}
        </span>
    )
}

export default Badge;