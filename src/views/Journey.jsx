import { JourneyOptions } from "../components/JourneyOptions";
import swimming from "../assets/swimming.jpg";
import boxing from "../assets/boxing.jpg";
import yoga from "../assets/yoga.jpg";
import fitness from "../assets/fitness.jpg";
import wellness from "../assets/wellness.jpg";

export function Journey() {
	return (
		<section className="flex flex-col gap-24 font-semibold bg-lightGold w-full justify-center py-10">
			<section className="flex flex-col gap-24">
				<aside className="flex flex-col items-center gap-24">
					<figure className="w-80 h-72">
						<img className="w-full h-full" src={swimming} alt="swimming" />
						<figcaption className="text-center bg-white p-5 text-lg">
							Swimming
						</figcaption>
					</figure>
					<figure className="w-80 h-72">
						<img className="w-full h-full" src={boxing} alt="boxing" />
						<figcaption className="text-center bg-white p-5 text-lg">
							Boxing
						</figcaption>
					</figure>
				</aside>
				<aside className="flex flex-col items-center gap-24">
					<figure className="w-80 h-72">
						<img className="w-full h-full" src={yoga} alt="yoga" />
						<figcaption className="text-center bg-white p-5 text-lg">
							Yoga
						</figcaption>
					</figure>
				</aside>
				<aside className="flex flex-col items-center gap-24">
					<figure className="w-80 h-72">
						<img className="w-full h-full" src={fitness} alt="fitness" />
						<figcaption className="text-center bg-white p-5 text-lg">
							Fitness
						</figcaption>
					</figure>
					<figure className="w-80 h-72">
						<img className="w-full h-full" src={wellness} alt="wellness" />
						<figcaption className="text-center bg-white p-5 text-lg">
							Wellness
						</figcaption>
					</figure>
				</aside>
			</section>
			<article className="w-80 flex flex-col items-center gap-y-8">
				<h2 className="text-4xl font-bold">Fitness Journey</h2>
				<JourneyOptions variety={"Endless Variety"} description={"Choose from more than 50 types of sports offerd by over 10000 partners."} />
				<JourneyOptions variety={"Discover something new"} description={"Sick of the same old? You'll never get bored with us. Discover new activities every day."} />
				<JourneyOptions variety={"Combine activities"} description={"Like to switch things up? A multi-sport plan is the way to go."} />
			</article>
		</section>
	);
}
