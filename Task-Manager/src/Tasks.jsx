import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Tasks = () => {
  const { tasks, task, removeTask, handleEdit, taskCompleted, prevTask, nextTask ,enableAdd,isAddButtonOpen} = useGlobalContext();
    console.log(isAddButtonOpen);
  return (
    tasks.length > 0 ? (
      <article className={isAddButtonOpen ? 'review hide-review' : 'review'} >
        <h4>Task Manager</h4>
        <div className="item">
          <h5>{task.title}</h5>
          <p>{task.desc}</p>
          <p>{task.dueDate}</p>
          <div className="btn-control">
            <button
              className="btn remove-btn"
              onClick={() => removeTask(task.id)}
            >
              Delete Task
            </button>
            <button
              className="btn edit-btn"
              onClick={() => handleEdit(task)}
            >
              Update Task
            </button>
            <button
              className={task.completed ? 'btn completed' : 'btn complete-btn'}
              onClick={() => taskCompleted(task.id)}
            >
              {task.completed ? "Completed" : "Mark as Complete"}
            </button>
          </div>
          <div className="btn-container">
            <button
              type="button"
              className="prev-btn"
              onClick={prevTask}
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              className="next-btn"
              onClick={nextTask}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
        <button className="btn add-btn" onClick={enableAdd}>add tasks</button>
      </article>
    ) : (
        <article className={isAddButtonOpen ? 'review hide-review' : 'review'}>
            <p>No tasks available. Add a task to get started!</p>
            <button  className="btn add-btn" style={{width : '100%' , marginTop : '1rem'}} onClick={enableAdd}>add tasks</button>
        </article>
    )
  );
};

export default Tasks;