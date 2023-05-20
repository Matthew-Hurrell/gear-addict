import React, { useEffect, useState }  from 'react';

import Asset from "../../components/Asset";

import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const ProfilePage = () => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();

    useEffect(() => {
        setHasLoaded(true);
    }, [])

    const mainProfile = (
        <section>
            <div>
                    PROFILE
            </div>
        </section>
    );

    const mainProfileRigs = (
        <section>
            <div>
                RIGS
            </div>
        </section>
    );

    return (
        <div>
            <PopularProfiles />
            {hasLoaded ? (
                <>
                    {mainProfile}
                    {mainProfileRigs}
                </>
            ) : (
                <Asset spinner />
            )}
        </div>
    )
}

export default ProfilePage