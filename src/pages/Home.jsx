import { useEffect, useState } from 'react';
import '../components/home.css';
import hotel from '../assets/images/Hotel Icon.png';
import attractions from '../assets/images/Attractions Icon.png';
import eats from '../assets/images/Eats Icon.png';
import commute from '../assets/images/Commute icon.png';
import taxi from '../assets/images/Taxi Icon.png';
import movies from '../assets/images/Movies icon.png';
import paris from '../assets/images/paris.jpg';
import greece from '../assets/images/greece.jpg';
import norway from '../assets/images/norway.jpg';
import tuscany from '../assets/images/tuscany.jpg';
import bali from '../assets/images/bali.jpg';
import swiss from '../assets/images/swiss.jpg';
import boracay from '../assets/images/boracay.jpg';
import palawan from '../assets/images/palawan.jpg';
import suits from '../assets/images/suits.jpg';
import shores from '../assets/images/shores.jpg';
import hut from '../assets/images/hut.jpg';
import inn from '../assets/images/inn.jpg';
import TripOptions from '../components/TripOptions';
import RecentSearches from '../components/RecentSearches';
import NextTrip from '../components/NextTrip';
import Recommended from '../components/Recommended';
import Stay from '../components/Stay';
import Hero from '../components/Hero';
import axios from 'axios';


export default function Home() {
    const [recentSearches, setRecentSearches] = useState([
        {
            id: 1,
            from: 'SIN',
            to: 'LAX',
            date: '7 Sep 2021'
        },
        {
            id: 2,
            from: 'MY',
            to: 'DUB',
            date: '9 Sep 2021'
        },
    ]);
    const [tripOptions, setTripOptions] = useState([
        {
            id: 1,
            name: 'Hotel',
            icon: hotel
        },
        {
            id: 2,
            name: 'Attractions',
            icon: attractions
        },
        {
            id: 3,
            name: 'Eats',
            icon: eats
        },
        {
            id: 4,
            name: 'Commute',
            icon: commute
        },
        {
            id: 5,
            name: 'Taxi',
            icon: taxi
        },
        {
            id: 6,
            name: 'Movies',
            icon: movies
        },
    ]);

    const [popularDestinations, setPopularDestinations] = useState([
        // {
        //     id: 1,
        //     name: 'Paris',
        //     image: paris,
        //     price: '$699'
        // },
        // {
        //     id: 2,
        //     name: 'Greece',
        //     image: greece,
        //     price: '$1079'
        // },
        // {
        //     id: 3,
        //     name: 'Norway',
        //     image: norway,
        //     price: '$895'
        // },
        // {
        //     id: 4,
        //     name: 'Tuscany',
        //     image: tuscany,
        //     price: '$1245'
        // },
    ]);
    const [recommendedDestinations, setRecommendedDestinations] = useState([
        {
            id: 1,
            name: 'Bali',
            image: bali,
            price: '$899',
            code: '4D3N'
        },
        {
            id: 2,
            name: 'Swiss',
            image: swiss,
            price: '$900',
            code: '5D4N'
        },
        {
            id: 3,
            name: 'Boracay',
            image: boracay,
            price: '$699',
            code: '3D2N'
        },
        {
            id: 4,
            name: 'Palawan',
            image: palawan,
            price: '$789',
            code: '4D3N'
        },
    ]);
    const [stayDestinations, setStayDestinations] = useState([
        {
            id: 1,
            name: 'Matterhorn Suites',
            image: suits,
            price: '$575',
            reviws: '4.9',
            rating: '(60 reviews)'
        },
        {
            id: 2,
            name: 'Discovery Shores',
            image: shores,
            price: '$699',
            reviws: '4.8',
            rating: '(116 reviews)'
        },
        {
            id: 3,
            name: 'Arctic Hut',
            image: hut,
            price: '$799',
            reviws: '4.7',
            rating: '(78 reviews)'
        },
        {
            id: 4,
            name: 'Lake LouiseInn',
            image: inn,
            price: '$899',
            reviws: '4.6',
            rating: '(63 reviews)'
        },
    ]);

    const allProducts = () =>{
        axios.get('https://fakestoreapi.com/products').then((response)=>{
            const firstFour = response.data.slice(0, 4);
            setPopularDestinations(firstFour)
        }).catch((err)=>{
            console.log(err,'err');
        })
    }
     function mergeArrays(...arrays) {
  return arrays.flat(Infinity);
}
const merged = mergeArrays([1, 2], [3, 4], [5, [6, 7],[8,9]]);
console.log(merged);
    useEffect(()=>{
        allProducts()
    },[])

    return (
        <>
            
            <Hero mainClass='hero' headingClass='m-0' />
            <RecentSearches recentSearches={recentSearches} />
            <TripOptions tripOptions={tripOptions} />
            <NextTrip nextTrip={popularDestinations} />
            <Recommended recommendedDestinations={recommendedDestinations} />
            <Stay stayDestinations={stayDestinations} />
            
        </>
    )
}