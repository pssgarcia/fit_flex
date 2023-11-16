import * as FaIcons from "react-icons/fa";

export function Footer() {
	return (
		<footer className="p-10 flex flex-col items-center gap-y-7">
			<ul className="flex gap-x-4 md:gap-x-6 text-black">
				<li className="border rounded-full w-9 md:w-11 h-9 md:h-11 bg-white flex items-center justify-center">
					<a href="#" className="text-xl">
						<FaIcons.FaFacebookF />
					</a>
				</li>
				<li className="border rounded-full w-9 md:w-11 h-9 md:h-11 bg-white flex items-center justify-center">
					<a href="#" className="text-xl">
                  <FaIcons.FaInstagram />
               </a>
				</li>
				<li className="border rounded-full w-9 md:w-11 h-9 md:h-11 bg-white flex items-center justify-center">
					<a href="#" className="text-xl">
                  <FaIcons.FaTwitter />
               </a>
				</li>
				<li className="border rounded-full w-9 md:w-11 h-9 md:h-11 bg-white flex items-center justify-center">
					<a href="#" className="text-xl">
                  <FaIcons.FaYoutube />
               </a>
				</li>
			</ul>
         <article className="flex flex-col items-center gap-y-2 md:gap-y-4 md:text-lg">
            <aside className="text-white flex gap-x-4 md:gap-x-6">
               <a href="#">Info</a>
               <a href="#">Support</a>
               <a href="#">Marketing</a>
            </aside>
            <aside className="text-white flex gap-x-4 md:gap-x-6">
               <a href="#">Terms of Use</a>
               <a href="#">Privacy Policy</a>
            </aside>
         </article>
         <p className="text-gray-400 text-sm md:text-base">&copy; Copyright 2023 Pedro Garcia</p>
		</footer>
	);
}
