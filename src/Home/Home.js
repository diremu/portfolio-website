import Navbar from'../components/Navbar/Navbar';
import Introduction from '../components/Introduction/Introduction';
import './Home.css'

export default function Home() {
    return (
        <>
            <Navbar />
            <Introduction />
            <div id="home-div">
                <h2 id="home-div-heading">Intro</h2>
            </div>
        </>
    )
}