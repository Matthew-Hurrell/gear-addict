import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
    try {
        const { data } = await axiosReq.get(resource.next);
        setResource(prevResource => ({
            ...prevResource,
            next: data.next,
            results: data.results.reduce((acc, cur) => {
                return acc.some((accResult) => accResult.id === cur.id)
                    ? acc
                    : [...acc, cur];
            }, prevResource.results),
        }));
    } catch (err) {
        // console.log(err);
    };
};

export const fanHelper = (profile, clickedProfile, fan_id) => {
    return profile.id === clickedProfile.id
        ?
        {
            ...profile,
            fans_count: profile.fans_count + 1,
            fan_id,
        }
        : profile.is_owner
            ?
            {
                ...profile,
                idols_count: profile.idols_count + 1,
            }
            :
            profile;
}

export const unfanHelper = (profile, clickedProfile) => {
    return profile.id === clickedProfile.id
        ?
        {
            ...profile,
            fans_count: profile.fans_count - 1,
            fan_id: null,
        }
        : profile.is_owner
            ?
            { ...profile, idols_count: profile.idols_count - 1 }
            :
            profile;
}

export const setTokenTimestamp = (data) => {
    const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
    localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

export const shouldRefreshToken = () => {
    return !!localStorage.getItem('refreshTokenTimestamp');
};

export const removeTokenTimestamp = () => {
    localStorage.removeItem('refreshTokenTimestamp');
};