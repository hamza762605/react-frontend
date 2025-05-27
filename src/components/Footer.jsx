import './footer.css';
import logo1 from '../assets/images/Logo (1).png';
import line from '../assets/images/Line 4.png';
import facebook from '../assets/images/Vector (4).png';
import instagram from '../assets/images/Vector (5).png';
import twitter from '../assets/images/Vector (6).png';


export default function Footer() {
    return (
        <>
            <div className="subscribe-container">
                <div className="subscribe-card">
                    <h2 className='text-primary fw-500 m-0'>Subscribe to our newsletter</h2>
                    <p className='font-30 m-0'>Get weekly updates</p>
                    <form className="subscribe-form">
                        <p>Fill in your details to join the party!</p>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-left">
                    <img src={logo1} alt='footer-logo' />
                    <p>
                        Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings.
                        We also have all your flight needs in your online shop.
                    </p>
                    <div className="social-icons">
                        <img src={facebook} alt="Facebook" />
                        <img src={instagram} alt="Instagram" />
                        <img src={twitter} alt="Twitter" />
                    </div>
                </div>

                <div><img src={line} alt='line' /></div>

                <div className="footer-right">
                    <div className="footer-column">
                        <h4 className='m-0'>Company</h4>
                        <ul>
                            <li>About Us</li>
                            <li>News</li>
                            <li>Careers</li>
                            <li>How we work</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className='m-0'>Support</h4>
                        <ul>
                            <li>Account</li>
                            <li>Support Center</li>
                            <li>FAQ</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className='m-0'>More</h4>
                        <ul>
                            <li>Covid Advisory</li>
                            <li>Airline Fees</li>
                            <li>Tips</li>
                            <li>Quarantine Rules</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}