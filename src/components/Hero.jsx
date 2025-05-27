import hero from '../assets/images/hero.png';
import './hero.css';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero({ headingText = 'Let’s explore & travel the world', showRadioButtons = true, mainClass, headingClass,imgClass}) {
    const nav = useNavigate();
    const [flight,setFlight] = useState('Dubai')
    const search = ()=>{
        nav('/search',{state:{
            name:flight
        }})
    }

    const [date,setDate] =useState('')
    useEffect(()=>{
        const currentDate = new Date().toISOString().split('T')[0];
        setDate(currentDate);
    },[])
    const handleChange = (e) => {
        setDate(e.target.value);
      };
    const [tripType, setTripType] = useState('one-way')
    return (
        <div className={mainClass} >
            <img src={hero} alt='Hero' className='hero-image' />
            <div className='content'>
                <div className=''>
                    <h1 className={headingClass}>{headingText}</h1>
                    {headingText === 'Let’s explore & travel the world' && <p>Find the best destinations and the most popular stays!</p>}
                </div>
                <div className='flight-search'>
                    <div className='flight-options'>
                        <div>
                            <h2>Search Flights</h2>
                        </div>
                        {showRadioButtons && (
                            <div>
                                <label>
                                    <input
                                        type='radio'
                                        name='trip'
                                        value='return'
                                        checked={tripType === 'return'}
                                        onChange={() => setTripType('return')}
                                    />
                                    Return
                                </label>
                                <label>
                                    <input
                                        type='radio'
                                        name='trip'
                                        value='one-way'
                                        checked={tripType === 'one-way'}
                                        onChange={() => setTripType('one-way')}
                                    />
                                    One-way
                                </label>
                            </div>
                        )}
                    </div>

                    <form className='flight-form'>
                        <div className='input-group'>
                            <label>Departure</label>
                            <input type='text' placeholder='Singapore (SIN)' />
                        </div>

                        <div className='input-group'>
                            <label>Arrival</label>
                            <input type='text' placeholder='Los Angeles (LA)' />
                        </div>

                        <div className='input-group'>
                            <label>Date</label>
                            <input type="date" onChange={handleChange} value={date} />
                        </div>

                        <button type='submit' className='search-button'>Search Flights</button>
                    </form>
                </div>

            </div>
        </div>
    );
}