import React from 'react'
import src from '../images/riccardo-chiarini-365677-unsplash-min.jpg'

export default function About({ aboutPost }) {
    const post = aboutPost;
    return (
        <div className={`ujXU`}>
            <div className={`wrap`}>
                <div className={`cLYv`}>
                    <div className={`ULM5`}>
                        <h2 className={`jh6n`}>{post.title}</h2>
                        <div className={`fElI`}>{post.excerpt}</div>
                        <div className={`MrnB`} dangerouslySetInnerHTML={{__html: post.body}}></div>
                    </div>
                    <div className={`sLF5`}><img className={`LXUu`} src={src} /></div>
                </div>
            </div>
        </div>
    )
}
