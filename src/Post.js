import React from 'react'
import {Avatar} from '@material-ui/core'
import './post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Post({profilePic, username, image, timestamp, message }) {
    return (
        <div className="post">
            <div className="post_top">
            <Avatar src={profilePic} className="post_avatar"/>
            <div className="post_topInfo">
            <h3>{username}</h3>
            <p>{timestamp}</p>
            </div></div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_image">
                <img src={image} alt=""/>
            </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutlineOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <ExpandMoreOutlinedIcon />
                    <AccountCircleIcon/>
                </div>
            </div>
        </div>
    )
}

export default Post;
