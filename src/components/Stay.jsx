import arrow from '../assets/images/Group.png';
import video from '../assets/images/video.png';
import vector from '../assets/images/Vector (3).png';
export default function Stay({ stayDestinations }) {
    return (
        <>
            <div className='next-titles d-flex-center'>
                <h1>Popular Stays</h1>
                <div className='d-flex-end'>
                    <a href="#!" className='text-primary'>View all stays
                    </a>
                    <img src={arrow} alt='arrow' />
                </div>
            </div>
            <div className='next-trips-container'>

                <div className="cards-row">
                    {stayDestinations.map((value, index) => {
                        return (
                            <div className="stay-card">
                                <img className='radius-20' src={value.image} alt={value.name} />
                                <div className="stay-card-content">
                                    <div className="space-between">
                                        <span className='stay-name'>Entire bungalow</span>
                                        <span className='stay-code'><img src={video} className='video' alt='video' /></span>
                                    </div>
                                    <h3 className='stay-name m-0'>{value.name}</h3>
                                    <p className='stay-code m-0'>{value.price}/night</p>
                                    <p className='d-flex'>
                                        <img src={vector} className='star' alt='star' /><strong>{value.reviws}</strong> &nbsp;&nbsp;<span className='text-primary'> {(value.rating)}</span>
                                    </p>
                                    <button className='btn btn-primary'>More Details</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}