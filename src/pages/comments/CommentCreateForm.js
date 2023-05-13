import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from '../../components/Avatar';
import { axiosRes } from "../../api/axiosDefaults";


const CommentCreateForm = (props) => {
    const { rig, setRig, setComments, profileImage, profile_id } = props;
    const [content, setContent] = useState("");

    const handleChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axiosRes.post("/comments/", {
                content,
                rig,
            });

            setComments((prevComments) => ({
                ...prevComments,
                results: [data, ...prevComments.results],
            }));

            setRig((prevRig) => ({
                results: [
                    {
                        ...prevRig.results[0],
                        comments_count: prevRig.results[0].comments_count + 1,
                    },
                ],
            }));

            setContent("");

            } catch (err) {
                console.log(err);
            }
    };

    return (
        <section className='bg-slate-100 px-5 py-12 lg:py-24'>
                <div className='container mx-auto'>
                    <form 
                        className="" 
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <Link to={`/profiles/${profile_id}`}>
                                <Avatar src={profileImage} />
                            </Link>
                            <textarea
                                id="content"
                                name="content"
                                className=""
                                placeholder="That's awesome!"
                                value={content}
                                onChange={handleChange}
                                rows={4}
                            />
                        </div>
                        <button
                            className=""
                            type="submit"
                        >
                            Post
                        </button>
                    </form>
                </div>
            </section>
    );
};

export default CommentCreateForm