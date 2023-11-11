import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Journey } from "./components/Journey";
import { GetStarted } from "./components/GetStarted";
import { Amenities } from "./components/Amenities";

function App() {
  return (
   <>
      <NavBar />
      <Header />
      <main className="w-full">
        <Journey />
        <GetStarted />
        <Amenities />
      </main>
   </>
  )
}

export default App;