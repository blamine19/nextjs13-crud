import domain from '@/utils/config'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import React from 'react'


function PostItem(props) {

    const post = props.post


    const handleClickDelete = (postId) => {

        const axios = require('axios')

        let config = {
            method: 'delete',
            url: `${domain}/posts/${postId}`,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        async function makeRequest() {
            try {

                const response = await axios.request(config)

                /*const updatedPosts = posts.filter(post => post._id !== postId)
        
                console.log(updatedPosts)
        
                setPosts(updatedPosts)
        
                console.log(JSON.stringify(response.data))*/

                router.push('/posts')

            }
            catch (error) {
                console.log(error);
            }
        }

        makeRequest();
    }

    const handleClickUpdate = (postId) => {
        // Logic to handle Update action
        console.log('Update clicked for post with ID:')
        props.onUpdate(postId)
    }

    const router = useRouter()


    return (
        <div className="card mb-3">
            <h5 src={post.imageUrl} className="card-img-top" alt="Post" />
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.details}</p>

                <div className="btn-group" role="group" aria-label="Post Actions">
                    <button type="button" className="btn btn-primary" onClick={() => { router.push(`/posts/${post._id}`) }}>Edit</button>&nbsp;&nbsp;&nbsp;

                    
                    <Link href="/posts/addpost">
                        <button type="button" className="btn btn-primary" >ADD - Link</button>
                    </Link>

                    &nbsp;&nbsp;&nbsp;

                    <button type="button" className="btn btn-danger" onClick={() => handleClickDelete(post._id)}>Delete</button>

                </div>
            </div>

        </div>
    )
}

export default PostItem