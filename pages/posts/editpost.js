import domain from '@/utils/config'
import React from 'react'
import { useState } from 'react'



async function addPostAPI(post) {

    console.log('start')

    const axios = require('axios');

    let data = JSON.stringify({
        "title": "Serenity in Motion",
        "imageurl": "https://example.com/serenity_in_motion.jpg",
        "details": "Find peace and tranquility in the gentle motion of flowing rivers and calm waters."
    });

    let config = {
        method: 'post',
        url: domain + '/posts',
        headers: {
            'Content-Type': 'application/json'
        },
        data: post
    };

    async function makeRequest() {
        try {
            const response = await axios.request(config)

            console.log(JSON.stringify(response.data))
        }
        catch (error) {
            console.log(error);
        }
    }

    makeRequest()
}



async function getPost(postId) {

    const axios = require('axios')
   
    let config = {
        method: 'get',
        url: `${domain}/posts/${postId}`,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    async function makeRequest() {
        try {
            const response = await axios.request(config)
            console.log(JSON.stringify(response.data))
        }
        catch (error) {
            console.log(error)
        }
    }

    makeRequest();
}



function addPost() {

    const [title, setTitle] = useState('')
    const [imageurl, setImageurl] = useState('')
    const [details, setDetails] = useState('')

    function addPost(params) {

        const post = {
            title: title,
            imageUrl: imageurl,
            details: details
        }

        console.log(post)



        addPostAPI(post)
    }

    return (
        <>
            <div>Add Post</div>

            <div className="container">
                <form>
                    <div className="form-group row">
                        <label className="col-sm-1-12 col-form-label"></label>
                        <div className="col-sm-1-12">
                            <input type="text" className="form-control"
                                value={title} onChange={(e) => setTitle(e.target.value)} placeholder="" />
                        </div>
                    </div>

                    <br />

                    <div className="form-group row">
                        <label className="col-sm-1-12 col-form-label"></label>
                        <div className="col-sm-1-12">
                            <input type="text" className="form-control" name="imageurl"
                                value={imageurl} onChange={(e) => setImageurl(e.target.value)} placeholder="" />
                        </div>
                    </div>


                    <br />
                    <div className="form-group row">
                        <label className="col-sm-1-12 col-form-label"></label>
                        <div className="col-sm-1-12">
                            <input type="text" className="form-control" name="details"
                                value={details} onChange={(e) => setDetails(e.target.value)} placeholder="" />
                        </div>
                    </div>


                    <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                            <button type="button" className="btn btn-primary" onClick={addPost}>Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default addPost