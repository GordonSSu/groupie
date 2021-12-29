import '../styles/Post.css';
import React from 'react';

const Post = ({ host, timestamp, children, red }) => {
  const color = red ? "post-red" : "post";

  return (
    <div className={`${color} pt-4 pb-1 px-4 my-4`}>
      {host ? <h3>{host}</h3> : null}
      {timestamp ? <h6>{timestamp}</h6> : null}
      <p>{children}</p>
    </div>
  );
};

Post.defaultProps = {
  host: '',
  timestamp: ''
};

export default Post;
