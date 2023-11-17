import * as FaIcons from "react-icons/fa";

export function Footer() {
	return (
		<footer className="p-10 flex flex-col items-center gap-y-7 lg:gap-y-10">
			<ul className="flex gap-x-4 md:gap-x-6 lg:gap-x-10 text-black">
				<li className="border rounded-full w-9 md:w-11 h-9 md:h-11 lg:w-12 lg:h-12 bg-white hover:bg-black hover:text-white hover:cursor-pointer flex items-center justify-center">
					<a href="#" className="text-xl lg:text-2xl">
						<FaIcons.FaFacebookF />
					</a>
				</li>
				<li className="border rounded-full w-9 md:w-11 h-9 md:h-11 lg:w-12 lg:h-12 bg-white hover:bg-black hover:text-white hover:cursor-pointer flex items-center justify-center">
					<a href="#" className="text-xl lg:text-2xl">
                  <FaIcons.FaInstagram />
               </a>
				</li>
				<li className="border rounded-full w-9 md:w-11 h-9 md:h-11 lg:w-12 lg:h-12 bg-white hover:bg-black hover:text-white hover:cursor-pointer flex items-center justify-center">
					<a href="#" className="text-xl lg:text-2xl">
                  <FaIcons.FaTwitter />
               </a>
				</li>
				<li className="border rounded-full w-9 md:w-11 h-9 md:h-11 lg:w-12 lg:h-12 bg-white hover:bg-black hover:text-white hover:cursor-pointer flex items-center justify-center">
					<a href="#" className="text-xl lg:text-2xl">
                  <FaIcons.FaYoutube />
               </a>
				</li>
			</ul>
         <article className="flex flex-col lg:flex-row lg:gap-x-14 items-center gap-y-2 md:gap-y-4 md:text-lg">
            <aside className="text-white flex gap-x-4 md:gap-x-6">
               <a href="#" className="hover:underline">Info</a>
               <a href="#" className="hover:underline">Support</a>
               <a href="#" className="hover:underline">Marketing</a>
            </aside>
            <aside className="text-white flex gap-x-4 md:gap-x-6">
               <a href="#" className="hover:underline">Terms of Use</a>
               <a href="#" className="hover:underline">Privacy Policy</a>
            </aside>
         </article>
         <p className="text-gray-400 text-sm md:text-base">&copy; Copyright 2023 Pedro Garcia</p>
		</footer>
	);
}
