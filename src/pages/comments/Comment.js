import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import DropdownMenu from '../../components/DropdownMenu';
import { axiosRes } from '../../api/axiosDefaults';
import CommentEditForm from './CommentEditForm';

const Comment = (props) => {
    const {
        owner,
        content,
        profile_image,
        updated_at,
        profile_id,
        id,
        setRig,
        setComments,
    } = props;

    const [showEditForm, setShowEditForm] = useState(false);

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`);
            setRig(prevRig => ({
                results: [{
                    ...prevRig.results[0],
                    comments_count: prevRig.results[0].comments_count - 1,
                }]
            }));

            setComments(prevComments => ({
                ...prevComments,
                results: prevComments.results.filter((comment) => comment.id !== id),
            }));
        } catch(err) {

        }
    };

    return (
        <div className='py-5'>
            <article className='flex gap-10 items-center'>
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                {showEditForm ? (
                    <CommentEditForm 
                        id={id}
                        profile_id={profile_id}
                        content={content}
                        profileImage={profile_image}
                        setComments={setComments}
                        setShowEditForm={setShowEditForm}
                    />
                ) : (
                    <div className='w-full relative'>
                        <div className='flex flex-col lg:flex-row items-start lg:gap-5 lg:items-center justify-center lg:justify-start w-full mb-2'>
                            <h4 className='text-lg lg:text-xl'>{owner}</h4>
                            <p className='text-sm lg:text-base text-gray-600'>{updated_at}</p>
                            {is_owner && !showEditForm && (
                                <DropdownMenu handleEdit={() => setShowEditForm(true)} handleDelete={handleDelete} />
                            )}
                        </div>
                        <p className='text-left text-base lg:text-lg'>
                            {content}
                        </p>
                    </div>
                )}

            </article>
        </div>
    )
}

export default Comment