import React from 'react'
import './storyReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://images.unsplash.com/photo-1523450001312-faa4e2e37f0f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                    profileSrc="https://avatars2.githubusercontent.com/u/5498438?s=460&u=4e5b374897adef54d34d634cf60f6a256decd0ff&v=4"
                    title="Colt Stele"
            />
            <Story image="https://images.unsplash.com/photo-1541904845547-0eaf866de232?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZGFuY2luZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    profileSrc="https://avatars2.githubusercontent.com/u/664177?s=460&u=b213da9f4df34b2fc2063a2038dfd476e54ce4a5&v=4"
                    title="Eduardo"
            />
            <Story image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    profileSrc="https://avatars2.githubusercontent.com/u/2840504?s=460&u=48a0f5a7dc6c6be0ed9b3a3db45699b0aa6d6bed&v=4"
                    title="Scott Moss"
            />
            <Story image="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    profileSrc="https://avatars0.githubusercontent.com/u/72989?s=460&u=d333c3048e3d6f8ed2a476a3564dba1fa5288b86&v=4"
                    title="Kazuya"/>
            <Story image="https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    profileSrc="https://avatars3.githubusercontent.com/u/20790473?s=460&u=45eeaaf287d9487fdc35769b311173953d0e4dab&v=4"
                    title="Nikhil Manee"/>
        </div>
    )
}

export default StoryReel;
