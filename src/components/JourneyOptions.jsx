export function JourneyOptions({ variety, description }) {
	return (
		<aside className="flex flex-col items-start w-64 md:w-full">
			<h3 className="text-2xl mb-3">{variety}</h3>
			<p className="font-normal md:text-lg lg:text-xl">{description}</p>
		</aside>
	);
}






