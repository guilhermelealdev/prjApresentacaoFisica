import { NavBar } from "./components/NavBar"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"
import "./App.css"

export default function App() {

  return (
    <div className="container">
    <NavBar />
    <br />
    <Header />
    <br />
    <Main />
    <br />
    <Footer />
    </div>
  )
}