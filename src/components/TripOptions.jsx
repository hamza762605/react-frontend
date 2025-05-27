

export default function TripOptions({ tripOptions }) {
    return (
        <>
            <h3 className='trip-title'>
                Prepare for your trip
            </h3>
            <div className='trips-container'>

                <div className='trips'>
                    <ul className='trip-menu'>
                        {tripOptions.map((value, index) => {
                            return (
                                <li className='grouped'>
                                    <img src={value.icon} alt={value.name} />
                                    <p>{value.name}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
