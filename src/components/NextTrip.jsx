import arrow from '../assets/images/Group.png';
import axios from 'axios';


export default function NextTrip({ nextTrip }) {
    
    return (
        <>
            <div className='next-titles pt-30'>
                <h3 className='text-primary'>
                    Plan your next trip
                </h3>
                <div className='d-flex-end'>
                    <a href="#!" className='text-primary'>View all destinations
                    </a>
                    <img src={arrow} alt='arrow' />
                </div>
            </div>
            <div className='next-titles'>
                <h1>Most Popular Destinations</h1>
            </div>
            <div className='next-trips-container'>

                <div className="cards-row">
                    {nextTrip.map((value, index) => {
                        return (
                            <div className="row-card" style={{ backgroundImage: `url(${value.image})` }}>
                                <div className="card-content">
                                    <h3 className="card-name" style={{ color:'black' }}>{value.title}</h3>
                                    <div className="card-price">
                                        <span style={{ color:'black' }}>From</span>
                                        <span className='price' style={{ color:'black' }}>{value.price}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}