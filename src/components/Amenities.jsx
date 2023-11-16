import { AmenitiesCard } from "./AmenitiesCard";
import pool from "../assets/pool.jpg";
import studios from "../assets/studios.jpg";
import lounge from "../assets/lounge.jpg";
import sauna from "../assets/sauna_.jpg";
import outdoor from "../assets/outdoor.jpg";
import court from "../assets/court.jpg";

export function Amenities() {
	return (
		<section className="bg-white py-10 flex flex-col gap-y-10" id="amenities">
			<article className="flex flex-col items-center gap-y-5">
				<h2 className="font-bold text-3xl md:text-5xl">Amenities</h2>
				<p className="w-80 md:w-11/12 text-center text-lg md:text-xl text-grayBg">
					Modern design and comfortable, all-inclusive luxury. With our
					extensive range of amenities, that includes sprawling outdoor
					terraces, we offer a space unlike any other in Vancouver. You'll love
					your time here.
				</p>
			</article>
			<section className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6">
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
