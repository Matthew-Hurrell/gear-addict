import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import RigCard from './RigCard';

const RigsPage = ({ message, filter="" }) => {
    const [rigs, setRigs] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchRigs = async () => {
            try {
                const {data} = await axiosReq.get(`/rigs/?${filter}`);
                setRigs(data);
                setHasLoaded(true);
            } catch(err) {
                console.log(err);
            }
        }

        setHasLoaded(false);
        fetchRigs();
    }, [filter, pathname]);

    return (
        <section className='bg-slate-100 px-5 py-12 lg:py-24'>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {hasLoaded ? (
                    <>
                        {rigs.results.length ? (
                            rigs.results.map(rig => (
                                <RigCard key={rig.id} {...rig} setRigs={setRigs} />
                            ))
                        ) : (
                            console.log('show no results message')
                        )}
                    </>
                ) : (
                    console.log('show loading spinner')
                )}
            </div>
        </section>
    )
}

export default RigsPage