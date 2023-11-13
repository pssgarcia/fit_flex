import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Journey } from "./views/Journey";
import { GetStarted } from "./components/GetStarted";
import { Amenities } from "./components/Amenities";
// import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
	return (
		<>
      <Navigation />
      <Header />
			{/* <Router>	
				<Switch>
					<Route path='/' exact>
            <Home />
          </Route>
				</Switch>
			</Router> */}
			<main className="w-full">
				<Journey />
				<GetStarted />
				<Amenities />
			</main>
		</>
	);
}

export default App;
