import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Journey } from "./components/Journey";
import { GetStarted } from "./components/GetStarted";
import { Amenities } from "./components/Amenities";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
	return (
		<>
			<Navigation />
			<Header />
			<main className="w-full">
				<Journey />
				<GetStarted />
				<Amenities />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export default App;
