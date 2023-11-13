import { useState } from "react";
import logo from "../assets/fit_flex.svg";
import * as FaIcons from "react-icons/fa";
// import { Link } from "react-router-dom";

export function Navigation() {
	const [open, setOpen] = useState(false);

	const toggleNavBar = () => {
		setOpen(!open);
	};

	return (
		<nav className="w-full shadow-md top-0 fixed left-0">
			<section className="md:flex font-bold md:text-lg text-2xl py-2 px-7 md:px-9 justify-between items-center bg-grayBg">
				<a href="/">
					<figure className="w-12 flex items-center">
						<img src={logo} className="w-full" alt="logo" />
					</figure>
				</a>
				<span
					onClick={toggleNavBar}
					className="text-3xl text-white absolute cursor-pointer right-8 top-4 md:hidden"
				>
					{open ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
				</span>
				<ul
					className={`md:flex md:ml-8 md:gap-x-8 md:items-center absolute md:static bg-grayBg w-full left-0 md:z-auto z-[-1] md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in ${open ? "top-14 opacity-100" : "top-[-490px]"}`}
				>
					<li className="my-7 md:my-0">
						<button className="text-darkGold hover:text-lightGold duration-200 focus:border-b-2 border-lightGold">
							Home
						</button>
					</li>
					<li className="my-7 md:my-0">
						<a
							href="/journey"
							className="text-darkGold hover:text-lightGold focus:border-b-2 border-lightGold"
						>
							Journey
						</a>
					</li>
					<li className="my-7 md:my-0">
						<a
							href="/getstarted"
							className="text-darkGold hover:text-lightGold"
						>
							Get Started
						</a>
					</li>
					<li className="my-7 md:my-0">
						<a href="/" className="text-darkGold hover:text-lightGold">
							Amenities
						</a>
					</li>
					<li className="my-7 md:my-0">
						<a href="/" className="text-darkGold hover:text-lightGold">
							Stories
						</a>
					</li>
					<li className="my-7 md:my-0">
						<a href="/" className="text-darkGold hover:text-lightGold">
							Contact
						</a>
					</li>
				</ul>
			</section>
		</nav>
	);
}
