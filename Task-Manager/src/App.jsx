import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Form from "./Form";
import Tasks from "./Tasks";

const App = () => {
	return (
		<section className="section-center">
			<ToastContainer position="top-center" />
			<Tasks />
			<Form />
		</section>
	);
};

export default App;
