import React, { useState } from 'react';
import defaultPhoto from '../../assets/images/rob_default.JPG'

function About() {

    const [likeState, setLikeState] = useState(78);

    function handleLike() {
        setLikeState(likeState + 1)
    }

    return (
        <section>
            <img src={defaultPhoto} alt="default photo of Robert" className='rob' />
            <div><span><button onClick={handleLike}>šš¼</button></span>Page Likes: {likeState}</div>

            <p className='text-bg'>Hi my name is Rob, I am a web developer from New Jersey with a passion for technology.
                I specialize in full stack JavaScript development and have industry experience with Salesforce Apex.
                Interests include building healthy habits, learning new skills and connecting with fellow developers.
            </p>
            <ul className='list-container'>
                <li>š­ Iām currently working on a personal website to showcase my portfolio</li>
                <li>š± What I am learning: React</li>
                <li>š¬ Ask me about how I got my first job as a self taught developer</li>
                <li><a href="mailto:rob.evanik@gmail.com"> š« How to reach me: rob.evanik@gamil.com</a></li>
                <li>ā” Fun fact: If I'm not coding... I am playing golf šš¼āāļø or snowboarding š</li>
            </ul>
        </section>
    );
}

export default About;