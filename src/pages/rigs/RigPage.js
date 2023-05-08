import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import Rig from './Rig';
import header from '../../assets/gear-addict-hero-2.jpg';
import Seperator from '../../components/Seperator';
import Hero from '../../components/Hero';

const RigPage = () => {
    const { id } = useParams();
    const [rig, setRig] = useState({ results: [] });
    const [rigData, setRigData] = useState(null);

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: rig}] = await Promise.all([
                    axiosReq.get(`/rigs/${id}`),
                ]);
                setRig({results: [rig]});
                console.log(rig);
                setRigData(rig);
                console.log(rig.name);
            } catch(err) {
                console.log(err);
            }
        }
        handleMount();
    }, [id]);

    return (
        <div>
            {rigData && <Hero righeader title={`${rigData.name}`} />}
            <Seperator />
            <Rig {...rig.results[0]} setRigs={setRig} />
        </div>
    )
}

export default RigPage;