import ellipse from '../assets/images/Ellipse 19.png';
import line from '../assets/images/Line 2.png';
import plane from '../assets/images/Vector (2).png';

export default function RecentSearches({ recentSearches }) {
    return (
        <>
            <h3 className='title'>
                Recent Searches
            </h3>
            <div className='container'>
                {recentSearches.map((value, index) => {
                    return (
                        <div className='recent-searches'>
                            <div className='card'>
                                <div>
                                    <h1>{value.from}</h1>
                                </div>
                                <div>
                                    <ul>
                                        <li><img src={ellipse} alt="ellipse" /></li>
                                        <li><img src={line} alt="line" className='line' /></li>
                                        <li><img src={plane} alt="plane" /></li>
                                        <li><img src={line} alt="line" className='line' /></li>
                                        <li><img src={ellipse} alt="ellipse" /></li>
                                    </ul>
                                </div>
                                <div>
                                    <h1>{value.to}</h1>
                                </div>

                            </div>
                            <p className='text-center depart'><strong>Depart on:</strong> {value.date}</p>
                        </div>
                    )
                })}

            </div>
        </>
    )
}