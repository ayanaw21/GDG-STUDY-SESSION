import React from "react";
import Navbar from "./components/Navbar";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
	Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RoutLayout from "./layout/RoutLayout";
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import NotFound from "./components/NotFound";
import { jobsLoader } from "./pages/Jobs";
import Jobs from "./pages/Jobs";

import JobsLayout from "./layout/JobsLayout";
import JobDetails from "./components/JobDetails";


const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route  path="/" element={<RoutLayout />}>
				<Route index element={<Home />} />
				<Route path="products" element={<Products />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<ContactLayout />}>
					<Route path="info" element={<ContactInfo />} />
					<Route path="form" element={<ContactForm />} />
				</Route>
				<Route path="*" element={<NotFound />} />
				<Route path="jobs" element={<JobsLayout />}>
					<Route index element={<Jobs />} loader={jobsLoader} />
					<Route path=":id" element={<JobDetails />} />
				</Route>
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
