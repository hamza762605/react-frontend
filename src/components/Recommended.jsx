import arrow from '../assets/images/Group.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Recommended({ recommendedDestinations }) {
    const nav = useNavigate();
    const [flight,setFlight] = useState('Dubai')
        const search = ()=>{
            nav('/search',{state:{
                name:flight
            }})}
    return (
        <>
            <div className='next-titles d-flex-center'>
                <h1>Recomended Destinations</h1>
                <div className='d-flex-end'>
                    <button onClick={search} style={{ backgroundColor:'transparent',border:'none',cursor:'pointer' }}  className='text-primary'>View all destinations
                    </button>
                    <img src={arrow} alt='arrow' />
                </div>
            </div>
            <div className='next-trips-container'>

                <div className="cards-row">
                    {recommendedDestinations.map((value, index) => {
                        return (
                            <div className="rec-card">
                                <img src={value.image} alt="paris" />
                                <div className="rec-card-content">
                                    <div className="d-flex-column">
                                        <span className='rec-name'>{value.name}</span>
                                        <span className='rec-code'>{value.code}</span>
                                    </div>
                                    <h3 className='rec-price'>{value.price}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}