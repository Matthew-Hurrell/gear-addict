import React, { useState } from "react";

import { axiosRes } from "../../api/axiosDefaults";

function CommentEditForm(props) {
    const { id, content, setShowEditForm, setComments } = props;

    const [formContent, setFormContent] = useState(content);

    const handleChange = (event) => {
        setFormContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.put(`/comments/${id}/`, {
                content: formContent.trim(),
            });
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.map((comment) => {
                return comment.id === id
                    ? {
                        ...comment,
                        content: formContent.trim(),
                        updated_at: "now",
                    }
                    : comment;
                }),
            }));
            setShowEditForm(false);
        } catch (err) {
            // console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="">
                <textarea
                    className="border-zinc-400 border-2 w-full px-2 py-0.5 font-normal text-black"
                    value={formContent}
                    onChange={handleChange}
                    rows={2}
                />
            </div>
            <div className="text-right">
                <button
                    className="mr-5 text-white bg-red-700 px-3 py-2 font-bold hover:text-red-700 hover:scale-105 hover:bg-transparent border-2 border-red-700"
                    onClick={() => setShowEditForm(false)}
                    type="button"
                >
                    Cancel
                </button>
                <button
                    className="text-white bg-green-700 px-3 py-2 font-bold hover:text-green-700 hover:scale-105 hover:bg-transparent border-2 border-green-700"
                    type="submit"
                    disabled={!content.trim()}
                >
                    Save
                </button>
            </div>
        </form>
    );
}

export default CommentEditForm;