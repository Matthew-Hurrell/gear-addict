import { axiosReq } from "../api/axiosDefaults"

export const fetchMoreData = async (resource, setResource) => {
    try {
        const {data} = await axiosReq.get(resource.next);
        setResource(prevResource => ({
            ...prevResource,
            next:data.next,
            results: data.results.reduce((acc, cur) => {
                return acc.some((accResult) => accResult.id === cur.id)
                ? acc 
                : [...acc, cur];
            }, prevResource.results),
        }));
    } catch(err) {

    };
};

export const followHelper = (profile, clickedProfile, fan_id) => {
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
            fans_count: profile.fans_count + 1,
        }
    :
        profile;
}