import PostItem from '@/components/PostItem'
import domain from '@/utils/config'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'


export default function Index({ postData }) {

  console.log("=====> Componenet : index")

  /*console.log("------------------------------------------- DEBUT ---------------------------------------")
  console.log(postData)
  console.log("-------------------------------------------- FIN   --------------------------------------")*/

  const [posts, setPosts] = useState(postData)


  return (
    <>
      <div>index Post</div>
      <div>

        {posts.map((item, index) => (

          <PostItem key={index} post={item} />
        ))}

      </div>

    </>

  )
}

export async function getStaticProps() {

  console.log("getStaticProps")

  
  const axios = require('axios');
  const axios2 = require('axios');

  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${domain}/posts`,
    headers: {
      'Content-Type': 'application/json'
    }  
  };

  async function makeRequest() {
    try {
      const response = await axios.request(config)
      
      //console.log(JSON.stringify(response.data))

      return (response.data)
    }
    catch (error) {
      console.log(error);
    }
  }

  const dd = await makeRequest()

  console.log(dd)


  //const response2 = await axios2.get(`${domain}/posts`)

  //console.log("--------------------------")

  //console.log(response2.data)

  return {
    props: {
      postData: dd
    },
  }
}

/*export async function getServerSideProps(context) {

  const response = await axios.get(`${domain}/posts}`)

  console.log("getServerSideProps")

  return {
    props: {
      post: response.data
    }
  }
}*/