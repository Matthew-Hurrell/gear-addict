import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import RigCard from './RigCard';
import Asset from '../../components/Asset';
import BrokenInstruments from '../../assets/gear-addict-broken-instruments.jpeg';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchMoreData } from '../../utils/utils';

const RigsPage = ({ message, filter="", title, slice_num, query }) => {
    const [rigs, setRigs] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchRigs = async () => {
            try {
                const {data} = await axiosReq.get(`/rigs/?${filter}search=${query}`);
                setRigs(data);
                setHasLoaded(true);
                // console.log(filter);
                // console.log(`/rigs/?${filter}search=${query}`);
                // console.log(data);
            } catch(err) {
                console.log(err);
            }
        }

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchRigs();
        }, 1000);
        return () => {
            clearTimeout(timer);
        };

    }, [filter, pathname, query]);

    return (
        <section className='bg-white px-5 py-12 lg:py-24'>

            {title && <h2 className='text-center text-3xl lg:text-4xl text-black mb-14'>{title}</h2>}

            {hasLoaded ? (  
                <>
                    {rigs.results.length ? (
                        <InfiniteScroll 
                            children={
                                slice_num ? (
                                    rigs.results.slice(0, slice_num).map(rig => (
                                        <RigCard key={rig.id} {...rig} setRigs={setRigs} />
                                    ))
                                ) : (
                                    rigs.results.map(rig => (
                                        <RigCard key={rig.id} {...rig} setRigs={setRigs} />
                                    ))
                                )
                            }
                            dataLength={rigs.results.length}
                            loader={<Asset spinner />}
                            hasMore={!!rigs.next}
                            next={() => fetchMoreData(rigs, setRigs)}
                            className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'
                        />
                    ) : (
                        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
                            <div className='bg-zinc-800 flex justify-center items-center py-10 px-10'>
                                <h2 className='text-white text-2xl'>{message}</h2>
                            </div>
                            <Asset src={BrokenInstruments} alt="Illustration of broken instruments" />
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

export default RigsPage