import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import RigCard from './RigCard';
import Asset from '../../components/Asset';
import BrokenInstruments from '../../assets/gear-addict-broken-instruments.jpeg';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchMoreData } from '../../utils/utils';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const RigsList = ({ message, filter = "", title, slice_num, query, saved }) => {
    const [rigs, setRigs] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const currentUser = useCurrentUser();

    const fetchRigs = async () => {
        try {
            const { data } = await axiosReq.get(`/rigs/?${filter}search=${query}`);
            setRigs(data);
            setHasLoaded(true);
        } catch (err) {
            // console.log(err);
        }
    };

    useEffect(() => {
        const fetchRigs = async () => {
            try {
                const { data } = await axiosReq.get(`/rigs/?${filter}search=${query}`);
                setRigs(data);
                setHasLoaded(true);
            } catch (err) {
                // console.log(err);
            }
        }

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchRigs();
        }, 1000);
        return () => {
            clearTimeout(timer);
        };

    }, [filter, pathname, query, currentUser]);

    return (
        <section className='bg-slate-100 px-5 py-12 lg:py-24'>

            {/* Title */}
            {title && <h2 className='text-center text-3xl lg:text-4xl text-black mb-14'>{title}</h2>}

            {/* Rigs Loop */}
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
                                        saved ? (
                                            <RigCard key={rig.id} {...rig} setRigs={setRigs} saved fetchRigs={fetchRigs} />
                                        ) : (
                                            <RigCard key={rig.id} {...rig} setRigs={setRigs} />
                                        )
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

                        // No Rigs Display
                        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
                            <div className='bg-zinc-800 flex justify-center items-center py-10 px-10'>
                                <h2 className='text-white text-2xl'>{message}</h2>
                            </div>
                            <Asset message={message} src={BrokenInstruments} alt="Illustration of broken instruments" />
                        </div>
                    )}
                </>
            ) : (

                // Loading Spinner
                <div className='container mx-auto'>
                    <div className='flex items-center justify-center'>
                        <Asset spinner />
                    </div>
                </div>
            )}
        </section>
    )
}

export default RigsList