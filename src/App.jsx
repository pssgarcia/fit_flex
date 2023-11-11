import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Journey } from "./components/Journey";
import { GetStarted } from "./components/GetStarted";

function App() {
  return (
   <>
      <NavBar />
      <Header />
      <main className="w-full">
        <Journey />
        <GetStarted />
      </main>
   </>
  )
}

export default App;