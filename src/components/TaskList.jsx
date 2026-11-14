import TaskItem from "./TaskItem";
import tasks from "../data/tasks";

function TaskList() {
    return (
        <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            {
                tasks.map(task => {
                    return (
                        <TaskItem 
                            key={task.id}
                            title={task.title}
                            completed={task.completed}
                            priority={task.priority}
                            dueDate={task.dueDate}
                        />
                    )
                })
            }
        </div>
    )
}

export default TaskList;