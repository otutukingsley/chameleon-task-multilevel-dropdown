import "./App.css"
import { ExampleNavs } from "./dropdown"
// import ExampleNav from "./ExampleNav"
const App = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/#" className="logo">
          Logo
        </a>
        <ExampleNavs />
      </div>
    </header>
  )
}

export default App
