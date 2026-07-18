import type { Task } from "../types/types";


type TaskCardProps = {
    task: Task;
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
};


function TaskCard({
    task,
    onComplete,
    onDelete,
}: TaskCardProps) {

    return (
        <div className="bg-white p-4 rounded-lg shadow">

            <div className="flex justify-between items-start">

                <div>
                    <h2 className="text-xl font-semibold">
                        {task.title}
                    </h2>

                    <p className="text-gray-600 mt-1">
                        {task.description}
                    </p>
                </div>


                <div>

                    {task.status === "pending" && (
                        <button
                            onClick={() => onComplete(task.id)}
                            className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
                        >
                            Complete
                        </button>
                    )}


                    <button
                        onClick={() => onDelete(task.id)}
                        className="ml-2 bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                    >
                        Delete
                    </button>


                    <span className="ml-2 px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700">
                        {task.status}
                    </span>

                </div>

            </div>

        </div>
    );
}


export default TaskCard;