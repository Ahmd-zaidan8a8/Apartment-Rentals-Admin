import { Link } from "react-router-dom";


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

        <div className="author-1 col">
            <img src="src/images/ahmad-photo.png" alt="Author1" />
          <Link to="https://github.com/Ahmd-zaidan8a8">Ahmad Zaidan</Link> 
          </div>
          <div className="author-2 col">

            <Link to="https://github.com/magdakorgul">Magdalena Korgul</Link>
            </div>
            </div>
        </div>
    )
    
}

export default About;