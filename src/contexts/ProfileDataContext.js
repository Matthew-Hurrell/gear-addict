import React from 'react';
import { createContext, useContext, useEffect, useState } from "react";
import { useCurrentUser } from "./CurrentUserContext";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { fanHelper, unfanHelper } from "../utils/utils";

export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
    const [profileData, setProfileData] = useState({
        pageProfile: { results: [] },
        popularProfiles: { results: [] },
    });

    const currentUser = useCurrentUser();

    const handleFan = async (clickedProfile) => {
        try {
            const { data } = await axiosRes.post('/fans/', {
                idol: clickedProfile.id
            });

            setProfileData(prevState => ({
                ...prevState,
                pageProfile: {
                    results: prevState.pageProfile.results.map((profile) =>
                        fanHelper(profile, clickedProfile, data.id)
                    ),
                },
                popularProfiles: {
                    ...prevState.popularProfiles,
                    results: prevState.popularProfiles.results.map((profile) =>
                        fanHelper(profile, clickedProfile, data.id)
                    ),
                },
            }));
        } catch (err) {
            // console.log(err);
        }
    };

    const handleUnfan = async (clickedProfile) => {
        try {
            await axiosRes.delete(`/fans/${clickedProfile.fan_id}`);

            setProfileData(prevState => ({
                ...prevState,
                pageProfile: {
                    results: prevState.pageProfile.results.map((profile) =>
                        unfanHelper(profile, clickedProfile)
                    ),
                },
                popularProfiles: {
                    ...prevState.popularProfiles,
                    results: prevState.popularProfiles.results.map((profile) =>
                        unfanHelper(profile, clickedProfile)
                    ),
                },
            }));
        } catch (err) {
            // console.log(err);
        }
    }

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(
                    '/profiles/?ordering=-fans_count'
                );
                setProfileData(prevState => ({
                    ...prevState,
                    popularProfiles: data,
                }))
            } catch (err) {
                // console.log(err);
            }
        };

        handleMount();
    }, [currentUser]);

    return (
        <ProfileDataContext.Provider value={profileData} >
            <SetProfileDataContext.Provider value={{ setProfileData, handleFan, handleUnfan }} >
                {children}
            </SetProfileDataContext.Provider>
        </ProfileDataContext.Provider>
    )
}