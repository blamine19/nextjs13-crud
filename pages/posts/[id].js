import domain from '@/utils/config'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'



export default function editPost({ post }) {

  console.log("======> Componenet : editPost")

  const router = useRouter()

  //console.log(post)

  const [title, setTitle] = useState(post.title)
  const [imageurl, setImageurl] = useState(post.imageUrl)
  const [details, setDetails] = useState(post.details)


  function editPostClick(params) {

    //console.log("editPost")

    const postEdited = {
      title: title,
      imageUrl: imageurl,
      details: details
    }

    //console.log(postEdited)

    editPostAPI(postEdited)
  }


  async function editPostAPI(postEdited) {

    const axios = require('axios');

    let config = {
      method: 'put',
      url: domain + '/posts/' + post._id,
      headers: {
        'Content-Type': 'application/json'
      },
      data: postEdited
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config)

        //console.log(JSON.stringify(response.data))
      }
      catch (error) {
        console.log(error);
      }
    }

    makeRequest()
  }


  return (
    <>
      <div>Update Post</div>

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
              <button type="button" className="btn btn-primary" onClick={editPostClick}>Update</button>
            </div>

            <div>
              <button type="button" className="btn btn-primary" onClick={() => router.push("/posts")}>Lien to Posts</button>
            </div>

          </div>
        </form>
      </div>
    </>
  )
}



export async function getServerSideProps(context) {

  const response = await axios.get(`${domain}/posts/${context.query.id}`)

  console.log("getServerSideProps")

  return {
    props: {
      post: response.data
    }
  }
}