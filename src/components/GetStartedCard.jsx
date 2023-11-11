import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export function GetStartedCard({ activities, description }) {
	return (
		<figure>
			<img src="" alt="" />
			<figcaption>
				<h3>{activities}</h3>
				<p>{description}</p>
				<button>
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</figcaption>
		</figure>
	);
}
