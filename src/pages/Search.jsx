import Hero from '../components/Hero';
import FlightCard from '../components/Flights';
import { useLocation } from 'react-router-dom';

export default function Search() {
    const location = useLocation();
    const { name } = location?.state ?? 'undefined'
    return (
        <>
            <Hero headingText='Where are you off too?' showRadioButtons={false} mainClass='hero height-360' headingClass='text-start m-0'  />
            <FlightCard />
        </>
    )
}