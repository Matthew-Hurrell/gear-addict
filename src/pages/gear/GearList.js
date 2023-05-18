import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq, axiosRes } from '../../api/axiosDefaults';
import GearCard from './GearCard';
import Asset from '../../components/Asset';
import BrokenInstruments from '../../assets/gear-addict-broken-instruments.jpeg';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchMoreData } from '../../utils/utils';

const GearList = ({ message, filter="", title, query }) => {
    const [gear, setGear] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    const fetchGear = async () => {
        try {
            const {data} = await axiosReq.get(`/gear/?${filter}search=${query}`);
            setGear(data);
            setHasLoaded(true);
            // console.log(filter);
            // console.log(`/gear/?${filter}search=${query}`);
            // console.log(data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const fetchGear = async () => {
            try {
                const {data} = await axiosReq.get(`/gear/?${filter}search=${query}`);
                setGear(data);
                setHasLoaded(true);
                // console.log(filter);
                // console.log(`/gear/?${filter}search=${query}`);
                // console.log(data);
            } catch(err) {
                console.log(err);
            }
        }

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchGear();
        }, 1000);
        return () => {
            clearTimeout(timer);
        };

    }, [filter, pathname, query]);

    return (
        <section className='bg-slate-100 px-5 py-12 lg:py-24'>

            {title && <h2 className='text-center text-3xl lg:text-4xl text-black mb-14'>{title}</h2>}

            {hasLoaded ? (  
                <>
                    {gear.results.length ? (
                        <InfiniteScroll 
                            children={
                                gear.results.map(gear => (
                                    <GearCard key={gear.id} {...gear} setGear={setGear} fetchGear={fetchGear} />
                                ))
                            }
                            dataLength={gear.results.length}
                            loader={<Asset spinner />}
                            hasMore={!!gear.next}
                            next={() => fetchMoreData(gear, setGear)}
                            className='container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'
                        />
                    ) : (
                        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
                            <div className='bg-zinc-800 flex justify-center items-center py-10 px-10'>
                                <h2 className='text-white text-2xl'>{message}</h2>
                            </div>
                            <Asset message={message} src={BrokenInstruments} alt="Illustration of broken instruments" />
                        </div>
                    )}
                </>
            ) : (
                <div className='container mx-auto'>
                    <div className='flex items-center justify-center'>
                        <Asset spinner />
                    </div>
                </div>
            )}

        </section>
    )
}

export default GearList