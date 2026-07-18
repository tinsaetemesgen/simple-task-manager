type TaskFormProps = {
    title: string;
    description: string;
    setTitle: (value: string) => void;
    setDescription: (value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
};


function TaskForm({
    title,
    description,
    setTitle,
    setDescription,
    onSubmit,
}: TaskFormProps) {

    return (
        <form
            onSubmit={onSubmit}
            className="bg-white p-4 rounded-lg shadow mb-6"
        >

            <div className="space-y-4">

                <input
                    type="text"
                    placeholder="Task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border rounded-lg p-3"
                    required
                />


                <textarea
                    placeholder="Task description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border rounded-lg p-3 h-24"
                />


                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
                >
                    Add Task
                </button>

            </div>

        </form>
    );
}


export default TaskForm;