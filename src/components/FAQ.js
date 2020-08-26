import React, { useState } from 'react'
import Icon from '../components/Icon'

export default function FAQ({ FAQData }) {
    const [activeKey, setActiveKey] = useState(0)

    return (
        <div className={`w3pQ`}>
            <h2 className={`AdpW`}>{FAQData.h2}</h2>
            <div className={`wrap`} style={{maxWidth:`57.9rem`}}>
            {FAQData.posts.map(post => {
                return (
                    <div className={`GQl4 ${post.id===activeKey?`cK7u`:``}`} key={post.id} onClick={() => setActiveKey(post.id===activeKey?0:post.id)}>
                        <div className={`mgZo`}>
                            <div className={`JQK8`}>{post.title}</div>
                            <Icon icon="plus" className="YgUF"></Icon>
                        </div>
                        <div className={`IKP3`}>{post.content}</div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
