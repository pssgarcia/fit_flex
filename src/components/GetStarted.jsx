import { GetStartedCard } from "./GetStartedCard";

export function GetStarted() {
	return (
		<article>
			<section>
				<h2>Start Today</h2>
				<ul>
					<li>Your endless to-do-list</li>
					<li>Your struggles to get fit in the past</li>
					<li>Your stress and tension</li>
				</ul>
				<button className="uppercase">Get Started Now</button>
			</section>
			<section>
				<h2>Join now for just $15/month</h2>
				<GetStartedCard
					activities={"Unlimited Fitness"}
					description={
						"Elevate your wellness journey with cutting-edge equipment, personalized training, and a vibrant community. Your potential, unleashed."
					}
				/>
				<GetStartedCard
					activities={"Personal Training"}
					description={
						"Unlock your fitness potential with personalized guidance. Our expert trainers tailor workouts to your goals, ensuring success and growth."
					}
				/>
				<GetStartedCard
					activities={"Message Therapy"}
					description={
						"Relax and rejuvenate with personalized massage therapy. Tailored sessions cater to your needs, promoting wellness, balance, and tranquility."
					}
				/>
				<GetStartedCard
					activities={"Quick Workouts"}
					description={
						"Efficient quick workouts tailored to your schedule. Maximize results in minimal time, embracing a convenient and effective fitness routine."
					}
				/>
			</section>
		</article>
	);
}
