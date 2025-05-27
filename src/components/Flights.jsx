import './flights.css'
import Upload from '../assets/images/upload-icon.png'
import Turkish from '../assets/images/turkish.png'
import Icon from '../assets/images/FlightIcon.png'
import Todo from './Todo'

import { useRef, useState } from 'react';

const FlightCard = () => {
    const fileInput = useRef();
    console.log(fileInput);
    const [Image, setImage] = useState('')
    const ImgUpload = () => {
        const file = fileInput.current.files[0];
        const fileUrl = URL.createObjectURL(file);
        setImage(fileUrl);
    }

    return (
        <>
            <div className="flight-card">
                <div class="filter-section text-grey">
                    <div class="results f-20 text-grey">10 out of 177 Results</div>
                    <div class="line-divider"></div>

                    <div class="filters ">
                        <div class="section-title">Stops</div>
                        <label><input type="checkbox" /> 1 Stop</label>
                        <label><input type="checkbox" /> 2 Stops</label>
                    </div>

                    <div class="filters">
                        <div class="section-title">Booking Options</div>
                        <label><input type="checkbox" /> Book on Fickleflight</label>
                        <label><input type="checkbox" /> Official Airline Websites</label>
                    </div>

                    <div class="filters">
                        <div class="section-title">Flight Experience</div>
                        <label><input type="checkbox" /> No overnight flights</label>
                        <label><input type="checkbox" /> No long stop-overs</label>
                    </div>

                    <div class="line-divider"></div>

                    <div class="filters">
                        <div class="section-title">Airlines</div>
                        <label><input type="checkbox" /> Singapore Airlines</label>
                        <label><input type="checkbox" /> Qatar Airways</label>
                    </div>
                </div>
                <div>
                    <p className='text-grey f-18'>10 out of 177 Results</p>
                    <div class="result-card">
                        <div className='d-flex-center'>
                            <img src={Turkish} alt='turkish' /><span>Turkish Airlines</span>
                        </div>
                        <div className='flex-col text-grey'>
                            <div className='d-flex-center gap-30'>
                                <h4 className='text-primary f-21 m-0'>11:45</h4>
                                <img src={Icon} alt='Flight-Icon' />
                                <h4 className='text-primary f-21 m-0'>4:45</h4>
                            </div>
                            <div className='d-flex-center gap-30'>
                                <p>SIN</p>
                                <p>15H 55M, Non-stop</p>
                                <p>LAX</p>
                            </div>
                        </div>
                        <div className='flight-price'>
                            <h4>
                                S$ 730
                            </h4>
                        </div>
                    </div>
                    <div class="result-card">
                        <div className='d-flex-center'>
                            <img src={Turkish} alt='turkish' /><span>Turkish Airlines</span>
                        </div>
                        <div className='flex-col text-grey'>
                            <div className='d-flex-center gap-30'>
                                <h4 className='text-primary f-21 m-0'>11:45</h4>
                                <img src={Icon} alt='Flight-Icon' />
                                <h4 className='text-primary f-21 m-0'>4:45</h4>
                            </div>
                            <div className='d-flex-center gap-30'>
                                <p>SIN</p>
                                <p>15H 55M, Non-stop</p>
                                <p>LAX</p>
                            </div>
                        </div>
                        <div className='flight-price'>
                            <h4>
                                S$ 730
                            </h4>
                        </div>
                    </div>
                    <div class="result-card">
                        <div className='d-flex-center'>
                            <img src={Turkish} alt='turkish' /><span>Turkish Airlines</span>
                        </div>
                        <div className='flex-col text-grey'>
                            <div className='d-flex-center gap-30'>
                                <h4 className='text-primary f-21 m-0'>11:45</h4>
                                <img src={Icon} alt='Flight-Icon' />
                                <h4 className='text-primary f-21 m-0'>4:45</h4>
                            </div>
                            <div className='d-flex-center gap-30'>
                                <p>SIN</p>
                                <p>15H 55M, Non-stop</p>
                                <p>LAX</p>
                            </div>
                        </div>
                        <div className='flight-price'>
                            <h4>
                                S$ 730
                            </h4>
                        </div>
                    </div>
                    <div class="result-card">
                        <div className='d-flex-center'>
                            <img src={Turkish} alt='turkish' /><span>Turkish Airlines</span>
                        </div>
                        <div className='flex-col text-grey'>
                            <div className='d-flex-center gap-30'>
                                <h4 className='text-primary f-21 m-0'>11:45</h4>
                                <img src={Icon} alt='Flight-Icon' />
                                <h4 className='text-primary f-21 m-0'>4:45</h4>
                            </div>
                            <div className='d-flex-center gap-30'>
                                <p>SIN</p>
                                <p>15H 55M, Non-stop</p>
                                <p>LAX</p>
                            </div>
                        </div>
                        <div className='flight-price'>
                            <h4>
                                S$ 730
                            </h4>
                        </div>
                    </div>
                    <div class="result-card">
                        <div className='d-flex-center'>
                            <img src={Turkish} alt='turkish' /><span>Turkish Airlines</span>
                        </div>
                        <div className='flex-col text-grey'>
                            <div className='d-flex-center gap-30'>
                                <h4 className='text-primary f-21 m-0'>11:45</h4>
                                <img src={Icon} alt='Flight-Icon' />
                                <h4 className='text-primary f-21 m-0'>4:45</h4>
                            </div>
                            <div className='d-flex-center gap-30'>
                                <p>SIN</p>
                                <p>15H 55M, Non-stop</p>
                                <p>LAX</p>
                            </div>
                        </div>
                        <div className='flight-price'>
                            <h4>
                                S$ 730
                            </h4>
                        </div>
                    </div>

                </div>
                <div><p>Recent Bookings</p>
                    {/* <form>
                        <div className='file-container'>
                            <img src={Upload} />
                            <input ref={fileInput} onChange={ImgUpload} type='file' />
                        </div>
                        {Image ?
                            <img src={Image} height={100} width={100} alt='Image' />
                            :
                            ''
                        }
                    </form> */}
                    <Todo />
                </div>

            </div>
        </>
    )
};

export default FlightCard;