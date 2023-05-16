import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import Rig from './Rig';
import Seperator from '../../components/Seperator';
import Hero from '../../components/Hero';
import CommentCreateForm from '../comments/CommentCreateForm';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Comment from '../comments/Comment';
import InfiniteScroll from 'react-infinite-scroll-component';
import Asset from '../../components/Asset';
import { fetchMoreData } from '../../utils/utils';

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
            <section className='bg-slate-100 px-5 py-12 lg:py-24'>
                <div className='container mx-auto flex flex-col-reverse lg:flex-row justify-between'>
                    <div className='w-full lg:w-8/12'>
                        <h3 className="text-2xl lg:text-3xl mb-1 lg:mb-7 text-left">Comments</h3>
                        {comments.results.length ? (
                            <div className='divide-y divide-zinc-800'>
                                <InfiniteScroll 
                                    children={
                                        comments.results.map(comment => (
                                            <Comment 
                                                key={comment.id} 
                                                {...comment} 
                                                setRig={setRig}
                                                setComments={setComments}
                                            />
                                        ))
                                    }
                                    dataLength={comments.results.length}
                                    loader={<Asset spinner />}
                                    hasMore={!!comments.next}
                                    next={() => fetchMoreData(comments, setComments)}
                                />
                            </div>
                        ) : currentUser ? (
                            <p className='text-left mt-3 lg:mt-5 text-lg'>No comments yet, be the first to comment!</p>
                        ) : (
                            <p className='text-left mt-3 lg:mt-5 text-lg'>No comments yet, sign in or sign up to comment</p>
                        )}
                    </div>
                    {currentUser ? (
                        <div className='w-full lg:w-3/12 mb-10 lg:mb-0'>
                            <CommentCreateForm
                                profile_id={currentUser.profile_id}
                                profileImage={profile_image}
                                rig={id}
                                setRig={setRig}
                                setComments={setComments}
                            />
                        </div>
                    ) : comments.results.length ? (
                        <div className='w-full lg:w-3/12 mb-10 lg:mb-0'>
                            <h3 className="text-2xl lg:text-3xl mb-5 text-left">Post a comment</h3>
                            <h3 className="text-base lg:text-xl mb-5 text-left">You need to be logged in to post comments!</h3>
                            <div className='flex items-center gap-5'>
                                <Link 
                                    className="text-white bg-green-700 px-3 py-2 font-bold hover:text-green-700 hover:scale-105 hover:bg-transparent border-2 border-green-700" 
                                    to="/signin"
                                >
                                    Log In
                                </Link>
                                <Link 
                                    className="text-white bg-amber-500 px-3 py-2 font-bold hover:text-amber-500 hover:scale-105 hover:bg-transparent border-2 border-amber-500" 
                                    to="/signup"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    ) : null}
                </div>
            </section>
        </div>
    )
}

export default RigPage;