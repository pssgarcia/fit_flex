import { JourneyOptions } from "./JourneyOptions";
import swimming from "../assets/swimming.jpg";
import boxing from "../assets/boxing.jpg";
import yoga from "../assets/yoga.jpg";
import fitness from "../assets/fitness.jpg";
import wellness from "../assets/wellness.jpg";

export function Journey() {
	return (
		<section id="journey" className="flex flex-col lg:flex-row lg:gap-5 gap-24 md:gap-28 font-semibold bg-lightGold w-full justify-center py-10 md:py-14 lg:pb-36 lg:pt-20 lg:px-7">
			<section className="flex flex-col lg:flex-row gap-24 lg:gap-6">
				<aside className="flex flex-col md:flex-row lg:flex-col md:justify-center items-center gap-24 md:gap-28">
					<figure className="w-80 md:w-[39%] lg:w-56 h-72 lg:h-64">
						<img className="w-full h-full" src={swimming} alt="swimming" />
						<figcaption className="text-center bg-white p-5 text-lg">
							Swimming
						</figcaption>
					</figure>
					<figure className="w-80 md:w-[39%] lg:w-56 h-72 lg:h-64">
						<img className="w-full h-full" src={boxing} alt="boxing" />
						<figcaption className="text-center bg-white p-5 text-lg">
							Boxing
						</figcaption>
					</figure>
				</aside>
				<aside className="flex flex-col md:flex-row md:justify-center items-center gap-24">
					<figure className="w-80 md:w-[39%] lg:w-56 h-72 lg:h-64">
						<img className="w-full h-full" src={yoga} alt="yoga" />
						<figcaption className="text-center bg-white p-5 text-lg">
							Yoga
						</figcaption>
					</figure>
				</aside>
				<aside className="flex flex-col lg:flex-col md:flex-row md:justify-center items-center gap-24 md:gap-28">
					<figure className="w-80 md:w-[39%] lg:w-56 h-72 lg:h-64">
						<img className="w-full h-full" src={fitness} alt="fitness" />
						<figcaption className="text-center bg-white p-5 text-lg">
							Fitness
						</figcaption>
					</figure>
					<figure className="w-80 md:w-[39%] lg:w-56 h-72 lg:h-64">
						<img className="w-full h-full" src={wellness} alt="wellness" />
						<figcaption className="text-center bg-white p-5 text-lg">
							Wellness
						</figcaption>
					</figure>
				</aside>
			</section>
			<article className="w-80 md:w-full md:items-start md:pl-6 lg:justify-center flex flex-col items-center gap-y-8 lg:gap-y-12">
				<h2 className="text-4xl md:text-5xl font-bold">Fitness Journey</h2>
				<JourneyOptions variety={"Endless Variety"} description={"Choose from more than 50 types of sports offered by over 10000 partners."} />
				<JourneyOptions variety={"Discover something new"} description={"Sick of the same old? You'll never get bored with us. Discover new activities every day."} />
				<JourneyOptions variety={"Combine activities"} description={"Like to switch things up? A multi-sport plan is the way to go."} />
			</article>
		</section>
	);
}
