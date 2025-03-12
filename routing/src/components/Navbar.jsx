import React from "react";
import logo from "../assets/logo.png";
import { useNavigate ,NavLink } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
	return (
		<div className="flex   justify-around items-center px-[8%] py-4 ">
			<img
				src={logo}
				alt="Logo"
				className="h-10 rounded-3xl px-4 w-70 bg-black text-white"
			/>
			<ul className="flex gap-6 items-center py-2.5 px-7 rounded-4xl  shadow-[0_2px_30px_0_rgba(0,0,0,0.1)]">
				<NavLink to='/'>
					<li className="cursor-pointer">Home</li>
				</NavLink>
				<NavLink to='/products'>
					<li className="cursor-pointer">Products</li>
				</NavLink>{" "}
				<NavLink to='/about'>
					<li className="cursor-pointer">About</li>
				</NavLink>{" "}
				<NavLink to='/contact'>
					<li className="cursor-pointer">Contact</li>
				</NavLink>
				<NavLink to='/jobs'>
					<li className="cursor-pointer">Jobs</li>
				</NavLink>
			</ul>
			<button onClick={()=>navigate('/about')} className=" bg-black outline-0 text-white px-6 py-3 rounded-[30px]  shadow-md ">
				Get Started
			</button>
		</div>
	);
};

export default Navbar;
