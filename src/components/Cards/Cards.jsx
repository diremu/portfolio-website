import './Cards.css'

export default function Cards() {

    return (
        <>
        <div id="cards-container">
            <a href="#first-card"  className="cards enlarged">
                <div id="first-card">
                <h1>Education</h1>
            </div>
            </a>
            <a href="#second-card"  className="cards">
                <div id="second-card">
                <h1>Education</h1>
            </div>
            </a>
            <a href="#third-card"  className="cards">
                <div id="third-card">
                <h1>Education</h1>
            </div>
            </a>
        </div>
        </>
    )
}