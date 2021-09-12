import React, { useState } from 'react'
import api from '../lib/api'
import Form from '../components/Form'

export default function NewPost() {
    const [ postData, setPostData ] = useState({}) 

    const inputHandler = event => {
        const { name, value } = event.target
        setPostData({...postData, [name]:value})
    }

    const postButton = async () => {
        const result = await api.createPost(postData)
    }

    return (
        <div className="container mx-auto px-20">
            <header className="flex justify-between">
                <h1 className="font-bold text-4xl text-purple-400">New post</h1>
                <p className="font-extralight text-4xl text-pink-400 mb-2">Ambrosía</p>
            </header>
            <Form
                inputHandler = { inputHandler }
            />
            <button 
                onClick={ postButton }
                className="rounded bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 hover:from-blue-200 text-white font-bold px-4 py-1" >
                    Post it!
            </button>
        </div>
    )
}
