import { NavBar } from "./components/NavBar"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"
import { NavBar } from './components/NavBar';

export default function App() {

  return (
    <div className="container">
    <NavBar />
    <Header />
    <Main />
    <Footer />
    </div>
  )
}