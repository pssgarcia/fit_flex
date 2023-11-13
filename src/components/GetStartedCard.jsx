import * as FaIcons from 'react-icons/fa';

export function GetStartedCard({ activities, description }) {
	return (
		<figure>
			<img src="" alt="" />
			<figcaption>
				<h3>{activities}</h3>
				<p>{description}</p>
				<button>
					<FaIcons.FaArrowRight />
				</button>
			</figcaption>
		</figure>
	);
}
