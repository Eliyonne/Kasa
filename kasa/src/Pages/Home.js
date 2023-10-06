import '../App.scss';
import HOMEIMG from "../ressources/img/Homeimg.png"
import "../Styles/Home.scss"
import Cards from '../Composants/Cards/Cards';


function Home(){
    return (
            <div>
                <img src={HOMEIMG} alt="Un fond" className='Homeimg'/>
                <Cards />
            </div>
        )
}


// function Home() {
//     return (
//         <div className="">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                 className="App-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 >
//                 Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

export default Home;