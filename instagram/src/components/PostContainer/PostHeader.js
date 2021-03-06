import React from "react";
// import "./Posts.css";
import PropTypes from "prop-types";

const PostHeader = props => {
    return (
        <div className="post-header">
            <div className="post-thumb-wrapper">
                <img
                    className="post-thumb"
                    alt="post header"
                    src={props.thumbnailUrl}
                />
            </div>
            <div>{props.username}</div>
        </div>
    );
};

PostHeader.propTypes = {
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string
};

export default PostHeader;