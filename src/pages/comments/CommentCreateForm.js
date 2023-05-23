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
            // console.log(err);
        }
    };

    return (
        <div>
            <div className="flex items-center mb-5 justify-between">

                {/* Heading */}
                <h3 className="text-2xl lg:text-3xl text-center lg:text-left">Post a comment</h3>

                {/* Avatar */}
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profileImage} />
                </Link>
            </div>

            {/* Post Comment Form */}
            <form
                className=""
                onSubmit={handleSubmit}
            >

                {/* Comment Content */}
                <div>
                    <textarea
                        id="content"
                        name="content"
                        className="border-zinc-400 border-2 w-full px-2 py-0.5 font-normal text-black"
                        placeholder="That's awesome!"
                        value={content}
                        onChange={handleChange}
                        rows={4}
                    />
                </div>
                <div className="flex items-center justify-end mt-5">

                    {/* Submit Button */}
                    <button
                        className="text-white bg-green-700 px-3 py-2 font-bold hover:text-green-700 hover:scale-105 hover:bg-transparent border-2 border-green-700"
                        type="submit"
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CommentCreateForm