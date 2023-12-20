import './App.css';
import {BuildPage} from "./main/BuildPage.jsx" 
import { Header } from "./main/Header.jsx";
import {BrowserRouter,Link,Route,Routes} from "react-router-dom"
import {About} from "./NavigatePages/About.jsx"
import {Shop} from "./NavigatePages/Shop.jsx"
import {Skills} from "./NavigatePages/Skills.jsx"
import {Stories} from "./NavigatePages/stories.jsx"
import {Contracts} from "./NavigatePages/contracts.jsx"
function App() {
  return (
    <div className="App">
            <Header />
              <Routes>
                 <Route element={ <BuildPage/>} path='/'/>
                 <Route element={ <Shop/>} path='/shop'/>
                 <Route element={ <Skills/>} path='/skills'/>
                 <Route element={ <Stories/>} path='/stories'/>
                 <Route element={ <Contracts/>} path='/contracts'/>
                 <Route element={ <About/>} path='/about'/>
              </Routes>
              
    </div>
  );
}
export default App;
