import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const RoutLayout = () => {
	return (
		<div>
			<Navbar />
			<div className="container flex justify-center items-center w-full h-[80vh]">
				<Outlet />
			</div>
		</div>
	);
};

export default RoutLayout;
