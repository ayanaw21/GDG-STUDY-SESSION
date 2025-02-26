import { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const AppContext = createContext();

const defaultList = JSON.parse(localStorage.getItem("list") || "[]");
const setLocalStorage = (tasks) => {
	localStorage.setItem("list", JSON.stringify(tasks));
};

export const AppProvider = ({ children }) => {
	const [tasks, setTasks] = useState(defaultList);
	const [editTask, setEditTask] = useState(null);
	const [newTitle, setNewTitle] = useState("");
	const [newDesc, setNewDesc] = useState("");
	const [newDueDate, setNewDueDate] = useState("");
	const [index, setIndex] = useState(0);
    
    const [isAddButtonOpen, setIsAddButtonOpen] = useState(false)
    const enableAdd = ()=>{
        setIsAddButtonOpen(true);
    }
    const disableAdd = ()=>{
        setIsAddButtonOpen(false)
    }


	const nextTask = () => {
		setIndex((prevIndex) => (prevIndex + 1) % tasks.length);
	};

	
	const prevTask = () => {
		setIndex((prevIndex) =>
			prevIndex === 0 ? tasks.length - 1 : prevIndex - 1
		);
	};

	
	const addTask = (taskTitle, taskDesc, dueDate) => {
		const newTask = {
			title: taskTitle,
			desc: taskDesc,
			dueDate: dueDate,
			id: nanoid(),
			completed: false,
		};

		const newTasks = [...tasks, newTask];
		setTasks(newTasks);
		setLocalStorage(newTasks);
		toast.success("Task added to list");
	};

	const removeTask = (taskId) => {
		const newTasks = tasks.filter((task) => task.id !== taskId);
		setTasks(newTasks);
		setLocalStorage(newTasks);
		toast.success("Task removed");
	};


	const handleEdit = (task) => {
		setEditTask(task);
	};

	
	const updateTask = (taskId, updatedTitle, updatedDesc, updatedDueDate) => {
		const updatedTasks = tasks.map((task) =>
			task.id === taskId
				? {
						...task,
						title: updatedTitle,
						desc: updatedDesc,
						dueDate: updatedDueDate,
				  }
				: task
		);
		setTasks(updatedTasks);
		setLocalStorage(updatedTasks);
		toast.success("Task updated successfully");
	};

	
	const taskCompleted = (taskId) => {
		const updatedTasks = tasks.map((task) =>
			task.id === taskId && !task.completed
				? { ...task, completed: true }
				: task
		);
		setTasks(updatedTasks);
		setLocalStorage(updatedTasks);
	};
    const handleSubmit = (e) => {
		e.preventDefault();
		if (!newTitle && !newDesc && !newDueDate) {
			toast.error("please provide input");
			return;
		}
		if (editTask) {
			updateTask(editTask.id, newTitle, newDesc, newDueDate);
			setEditTask(null); 
		} else {
			addTask(newTitle, newDesc, newDueDate);
		}
		setNewTitle("");
		setNewDesc("");
		setNewDueDate("");
	};


	const task = tasks[index];

	return (
		<AppContext.Provider
			value={{
				tasks,
				task,
				editTask,
				newTitle,
				newDesc,
                isAddButtonOpen,
				newDueDate,
                handleSubmit,
				removeTask,
				handleEdit,
				taskCompleted,
				prevTask,
				nextTask,
				addTask,
				updateTask,
				setEditTask,
				setNewTitle,
				setNewDesc,
				setNewDueDate,
                enableAdd,
                disableAdd
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
