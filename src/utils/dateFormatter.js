export function formatDate(dueDate) {
    return new Date(dueDate).toLocaleDateString("en-US", {
        weekday: "short",
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}

