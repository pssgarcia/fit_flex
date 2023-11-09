import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Journey } from "./components/Journey";

function App() {
  return (
   <>
      <NavBar />
      <Header />
      <main className="w-full">
        <Journey />
      </main>
   </>
  )
}

export default App;