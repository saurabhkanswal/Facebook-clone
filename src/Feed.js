import React from 'react'
import './feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className='feed'> 
            <StoryReel/>
            <MessageSender />
            <Post
                profilePic="https://avatars0.githubusercontent.com/u/8406456?s=400&u=1d504a090f27bd13e59a7b09d97363f3ec7fb049&v=4"
                username="Rohitaaa"
                timestamp="..."
                message="What you say?"
                image="https://images.unsplash.com/photo-1511311219972-4df5faba0fd5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyaWVuZHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <Post
                profilePic="https://avatars0.githubusercontent.com/u/1000217?s=460&v=4"
                username="loit ron"
                timestamp="..."
                message="Happy as always"
                image="https://images.unsplash.com/photo-1601758260820-6342add57279?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8ZnJpZW5kc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <Post
                profilePic="https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4"
                username="dawa"
                timestamp="..."
                message="Friends forever.."
                image="https://images.unsplash.com/photo-1556918108-baaafd6a2010?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8d2VkZGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
        </div>
    )
}

export default Feed;
