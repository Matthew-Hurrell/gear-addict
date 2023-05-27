import { rest } from 'msw';

const baseURL = "https://gear-addict.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, ( req, res, ctx ) => {
        return res(ctx.json({
            pk: 5,
            username: "Matthew",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 5,
            profile_image: "https://res.cloudinary.com/dihur97qf/image/upload/v1/media/images/IMG_0049_it0xj1"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, ( req, res, ctx ) => {
        return res(ctx.status(200));
    }),
];