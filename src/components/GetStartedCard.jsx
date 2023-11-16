import * as FaIcons from "react-icons/fa";

export function GetStartedCard({ activities, description, src, alt }) {
	return (
		<figure className="w-80 md:w-[45%]">
			<img className="w-full h-60 md:h-72" src={src} alt={alt} />
			<figcaption className="flex p-3 md:p-4 flex-col gap-y-4 items-center bg-white">
				<h3 className="font-bold text-xl">{activities}</h3>
				<p className="text-center text-grayBg">{description}</p>
				<button className="text-2xl hover:scale-125 duration-300">
					<FaIcons.FaLongArrowAltRight />
				</button>
			</figcaption>
		</figure>
	);
}
