import { SiZebpay } from "react-icons/si";
import { Link } from "react-router-dom";
import '../App.css'




function About(){
    return(
        <div className="About container mt-5">
            <div className="row">
           <div className="about-description col">
        <h1>Apartment Rentals Admin platform</h1>
        <p className="text-muted">The Apartment Rentals Admin platform serves as an admin dashboard for managing apartment listings. Admin can efficiently view, organize, and oversee the apartments displayed on the platform, ensuring a seamless experience for both users and property owners. </p>
        </div>
        </div>
        <div className="row">

        <div className="author col">
            <img src="src/images/ahmad-photo.png" alt="Author1" className="rounded-circle" />
            <br />
            <p>Ahmad Zaidan</p>
            <Link to="https://www.linkedin.com/in/ahmad-zaidan-03b276245/" style={{textDecoration:'none'}} className="author-link">LinkedIn</Link> 
            <br />
          <Link to="https://github.com/Ahmd-zaidan8a8" style={{textDecoration:'none'}} className="author-link">GitHub</Link> 
          </div>
          <div className="author col">
            <img src="src/images/magda-photo.jpeg" alt="Author2" className="rounded-circle" />
            <br />
            <p>Magda Korgul</p>
            <Link to="https://www.linkedin.com/in/magdalena-korgul/" style={{textDecoration:'none'}} className="author-link">LinkedIn</Link>
            <br />
            <Link to="https://github.com/magdakorgul" style={{textDecoration:'none'}} className="author-link">GitHub</Link>
            </div>
            </div>
        </div>
    )
    
}

export default About;