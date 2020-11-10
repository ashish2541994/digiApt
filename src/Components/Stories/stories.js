import React, { Component } from 'react';
import Stories, { WithSeeMore } from 'react-insta-stories'
import './stories.css'
const Story = () => {
    const storyContent= {
        width: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
        margin: 'auto'
    };
const Story2 = ({ action, isPaused }) => {
	return <div style={{ ...contentStyle, background: 'Aquamarine', color: '#16161d' }}>
		<h1 style={{ marginTop: '85%', marginBottom: 0 }}>Thanks For Giving Opportunity 🌝</h1>
		<h4>Have a Very Nice Day 🎉</h4>
	</div>
}
    const stories2 = [
       
        {
            content: ({ action, story }) => {
                return <WithSeeMore story={story} action={action}><div style={{ background: 'pink', padding: 20 }}>
                    <h1 style={{ marginTop: '80%', marginBottom: 0 }}>🌝</h1>
                    <h1 style={{ marginTop: 5 }}>Whatsapp and Instagram Stories</h1>
                </div></WithSeeMore>
            },
            seeMoreCollapsed: ({ toggleMore, action }) => <p style={customSeeMore} onClick={() => toggleMore(true)}>See More message →</p>,
            seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: 'white' }}><h2>Content for see more feature.</h2><p style={{ textDecoration: 'underline' }} onClick={close}>Go on, close this popup.</p></div>,
            duration: 5000
        },
        {
            url: 'https://picsum.photos/1080/1920',
            seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: 'white' }}><h2>Content for see more feature.</h2><p style={{ textDecoration: 'underline' }} onClick={close}>Go on, close this popup.</p></div>
        },
        {
            url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            type: 'video'
        },
        {
            content: Story2
        }
    ]
    
    const image = {
        display: 'block',
        maxWidth: '100%',
        borderRadius: 4,
    }
    
    const code = {
        background: '#eee',
        padding: '5px 10px',
        borderRadius: '4px',
        color: '#333'
    }
    
    const contentStyle = {
        background: 'salmon',
        width: '100%',
        padding: 20,
        color: 'white'
    }
    
    const customSeeMore = {
        textAlign: 'center',
        fontSize: 14,
        bottom: 20,
        position: 'relative'
    }
    
	return (
        <div className="stories">
					<Stories storyStyles={storyContent} loop keyboardNavigation defaultInterval={8000} stories={stories2} onStoryEnd={(s, st) => console.log('story ended', s, st)} onAllStoriesEnd={(s, st) => console.log('all stories ended', s, st)} onStoryStart={(s, st) => console.log('story started', s, st)} />
				</div>
	);
};

export default Story;