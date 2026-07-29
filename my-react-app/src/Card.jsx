import gitLogo from './assets/githubLogo.jpeg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={gitLogo} alt="github logo" />
            <h2 className="card-title">soloDev</h2>
            <p className="card-text">I am a FullStack Web Dev and I am studying react.</p>
        </div>
    );
}

export default Card