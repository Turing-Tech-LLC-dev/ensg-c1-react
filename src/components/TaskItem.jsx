import { formatDate } from "../utils/dateFormatter";
import Badge from "./Badge";

function TaskItem({title, completed, dueDate, priority}) {
    return (
        <div className={`${completed ? "bg-green-500" : "bg-white"} py-10 px-6 border border-black/20 shadow-xl rounded-3xl flex flex-col gap-4`}>
            <h3>{title}</h3>
            <div className="flex justify-between">
                <span>
                    {formatDate(dueDate)}
                </span>

                <Badge priority={priority}>
                    {priority}
                </Badge>
            </div>
        </div>
    )
}

export default TaskItem;