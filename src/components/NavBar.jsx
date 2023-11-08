import logo from "../assets/fit_flex.png"

export function NavBar() {
	return (
		<nav className="flex justify-between items-center w-[95%]">
			<figure>
            <img src={logo} className="w-20 h-16" alt="logo" />
         </figure>
			<ul className="flex gap-x-5">
				<li>
					<a href="#" className="text-darkGold hover:text-lightGold">Home</a>
				</li>
				<li>
					<a href="#" className="text-darkGold hover:text-lightGold">Journey</a>
				</li>
				<li>
					<a href="#" className="text-darkGold hover:text-lightGold">Get Started</a>
				</li>
				<li>
					<a href="#" className="text-darkGold hover:text-lightGold">Amenities</a>
				</li>
				<li>
					<a href="#" className="text-darkGold hover:text-lightGold">Stories</a>
				</li>
				<li>
					<a href="#" className="text-darkGold hover:text-lightGold">Trial</a>
				</li>
				<li>
					<a href="#" className="text-darkGold hover:text-lightGold">Contact</a>
				</li>
			</ul>
		</nav>
	);
}
