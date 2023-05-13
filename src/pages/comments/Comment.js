import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Avatar from '../../components/Avatar';

const Comment = (props) => {
    const {
        owner,
        content,
        profile_image,
        updated_at,
        profile_id,
    } = props;

    return (
        <div>
            <article>
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} />
                </Link>
                <span>{owner}</span>
                <span>{updated_at}</span>
                <p>
                    {content}
                </p>
            </article>
        </div>
    )
}

export default Comment