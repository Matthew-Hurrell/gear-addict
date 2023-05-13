import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import Rig from './Rig';
import Seperator from '../../components/Seperator';
import Hero from '../../components/Hero';
import CommentCreateForm from '../comments/CommentCreateForm';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Comment from '../comments/Comment';

const RigPage = () => {
    const { id } = useParams();
    const [rig, setRig] = useState({ results: [] });
    const [rigData, setRigData] = useState(null);
    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [comments, setComments] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: rig }, { data: comments }] = await Promise.all([
                    axiosReq.get(`/rigs/${id}`),
                    axiosReq.get(`/comments/?rig=${id}`),
                ]);
                setRig({results: [rig]});
                setRigData(rig);
                setComments(comments);
            } catch(err) {
                console.log(err);
            }
        };

        handleMount();
    }, [id]);

    return (
        <div>
            {rigData && <Hero righeader title={`${rigData.name}`} />}
            <Seperator />
            <Rig {...rig.results[0]} setRigs={setRig} />
            {currentUser ? (
                <CommentCreateForm
                    profile_id={currentUser.profile_id}
                    profileImage={profile_image}
                    rig={id}
                    setRig={setRig}
                    setComments={setComments}
                />
            ) : comments.results.length ? (
                "Comments"
            ) : null}
            {comments.results.length ? (
                comments.results.map(comment => (
                    <Comment key={comment.id} {...comment} />
                ))
            ) : currentUser ? (
                <span>No comments yet, be the first to comment!</span>
            ) : (
                <span>No comments yet, sign in or sign up to comment</span>
            )}
        </div>
    )
}

export default RigPage;