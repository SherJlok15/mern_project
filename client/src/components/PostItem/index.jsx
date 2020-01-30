import React from 'react';
import { Link } from 'react-router-dom';

import './PostItem.scss';

const PostItem = ({ title, createdAt, _id, onRemove }) => {
  return (
    <div className="post-item">
      <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
      </Link>
      <p><i>Posted on {createdAt}</i></p>
      <a href="javascript://" onClick={onRemove.bind(this, _id)}>
        Remove
      </a>
      <Link to={`/post/${_id}/edit`}>Edit</Link>
    </div>
  );
}

export default PostItem;
