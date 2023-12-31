import { GetStartedCard } from "./GetStartedCard";
import * as FaIcons from "react-icons/fa";
import jogging from "../assets/jogging.jpg";
import personalTraining from "../assets/personalTraining.jpg";
import massage from "../assets/massage.jpg";
import treadmill from "../assets/treadmill.jpg";

export function GetStarted() {
	return (
		<article id="getstarted">
			<section className="bg-getStartedBg bg-no-repeat bg-center bg-cover h-96 lg:h-[85vh] text-white">
				<section className="bg-[rgb(15,15,15,.40)] h-full mx-7 lg:pl-4 flex flex-col gap-9 lg:gap-12 items-start justify-center">
					<h2 className="w-64 text-4xl lg:text-6xl md:text-5xl md:w-full font-bold">Start Today</h2>
					<ul className="w-64 md:w-full flex flex-col gap-y-4 lg:gap-y-8 text-xl md:text-2xl">
						<li className="flex items-center gap-x-3">
							<span className="text-lightGold">
								<FaIcons.FaCheck />
							</span>
							<p>Your endless to-do-list</p>
						</li>
						<li className="flex items-center gap-x-3">
							<span className="text-lightGold">
								<FaIcons.FaCheck />
							</span>
							<p>Your struggles to get fit in the past</p>
						</li>
						<li className="flex items-center gap-x-3">
							<span className="text-lightGold">
								<FaIcons.FaCheck />
							</span>
							<p>Your stress and tension</p>
						</li>
					</ul>
					<button className="uppercase flex justify-center lg:w-60 bg-lightGold p-3 mr-20 text-grayBg font-bold md:text-xl md:p-4 hover:bg-darkGold hover:text-white">
						Get Started Now
					</button>
				</section>
			</section>
			<section className="bg-lightGold py-10 lg:py-16">
				<article className="flex justify-center pb-14">
					<h2 className="text-center font-bold text-3xl md:text-5xl w-72 md:w-full">Join now for just $15/month</h2>
				</article>
				<article className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center gap-6 lg:gap-12 items-center">
					<GetStartedCard
						src={jogging}
						alt={"jogging"}
						activities={"Unlimited Fitness"}
						description={
							"Elevate your wellness journey with cutting-edge equipment, personalized training, and a vibrant community. Your potential, unleashed."
						}
					/>
					<GetStartedCard
						src={personalTraining}
						alt={"personal-training"}
						activities={"Personal Training"}
						description={
							"Unlock your fitness potential with personalized guidance. Our expert trainers tailor workouts to your goals, ensuring success and growth."
						}
					/>
					<GetStartedCard
						src={massage}
						alt={"massage"}
						activities={"Message Therapy"}
						description={
							"Relax and rejuvenate with personalized massage therapy. Tailored sessions cater to your needs, promoting wellness, balance, and tranquility."
						}
					/>
					<GetStartedCard
						src={treadmill}
						alt={"treadmill"}
						activities={"Quick Workouts"}
						description={
							"Efficient quick workouts tailored to your schedule. Maximize results in minimal time, embracing a convenient and effective fitness routine."
						}
					/>
				</article>
			</section>
		</article>
	);
}
