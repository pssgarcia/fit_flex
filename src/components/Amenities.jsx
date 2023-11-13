import { AmenitiesCard } from "./AmenitiesCard";
import pool from "../assets/pool.jpg";
import studios from "../assets/studios.jpg";
import lounge from "../assets/lounge.jpg";
import sauna from "../assets/sauna_.jpg";
import outdoor from "../assets/outdoor.jpg";
import court from "../assets/court.jpg";

export function Amenities() {
	return (
		<section id="home">
			<article>
				<h2>Amenities</h2>
				<p>
					Modern design and comfortable, all-inclusive luxury. With our
					extensive range of amenities, that includes sprawling outdoor
					terraces, we offer a space unlike any other in Vancouver. You'll love
					your time here.
				</p>
			</article>
			<section className="flex flex-col items-center">
				<AmenitiesCard amenity={"Pool and Jacuzzy"} src={pool} />
				<AmenitiesCard amenity={"Studios"} src={studios} />
				<AmenitiesCard amenity={"Lounge and Cafe"} src={lounge} />
				<AmenitiesCard amenity={"Sauna"} src={sauna} />
				<AmenitiesCard amenity={"Outdoor Spaces"} src={outdoor} />
				<AmenitiesCard amenity={"Basketball Court"} src={court} />
			</section>
		</section>
	);
}
