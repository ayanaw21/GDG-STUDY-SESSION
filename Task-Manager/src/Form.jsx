// import React from 'react'
import { useEffect } from "react";

import { useGlobalContext } from "./context";
const Form = () => {
	const {editTask,setEditTask,newTitle,newDesc,newDueDate,setNewTitle,setNewDesc,setNewDueDate,handleSubmit, isAddButtonOpen,disableAdd} = useGlobalContext()
	

	useEffect(() => {
		if (editTask) {
			setNewTitle(editTask.title);
			setNewDesc(editTask.desc);
			setNewDueDate(editTask.dueDate);
		} else {
			setNewTitle("");
			setNewDesc("");
			setNewDueDate("");
		}
	}, [editTask]);

	
	return (
		<form onSubmit={handleSubmit} className={isAddButtonOpen ? 'form show-form' : 'form'} >
			
			<div className='form-control'>
				<label htmlFor="title">title</label>
				<input
					name="title"
					type="text"
					className="form-input"
					value={newTitle}
					onChange={(event) => setNewTitle(event.target.value)}
				/>
				<label htmlFor="desc">Description</label>
				<textarea
					value={newDesc}
					name="desc"
					onChange={(event) => setNewDesc(event.target.value)}
				/>
				<label htmlFor="date">date</label>
				<input
					name="date"
					type="date"
					value={newDueDate}
					onChange={(e) => setNewDueDate(e.target.value)} // Fixed here
				/>
				<button type="submit" className="btn" onClick={disableAdd}>
					{editTask ? "Update Task" : "Add Task"}
				</button>
				{editTask && (
					<button
						type="button"
						className="btn cancel-btn"
						onClick={() => setEditTask(null)} // Cancel editing
					>
						Cancel
					</button>
				)}
			</div>
		</form>
	);
};

export default Form;
