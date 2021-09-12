import React from 'react'

export default function Form(props) {
    let { inputHandler } = props
    return (
        <div>
            <form className="flex flex-col w-100">
                <label htmlFor="title" ></label>
                <input className="rounded my-4 p-3 border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent" 
                onChange={inputHandler}
                type="text" 
                name="title" 
                placeholder="Type your title..."></input>
                <label htmlFor="image" ></label>
                <input className="rounded my-4 p-3 border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent" 
                onChange={inputHandler}
                type="text" 
                name="image" 
                placeholder="Add an URL image..."></input>
                <label htmlFor="content" ></label>
                <textarea className="rounded my-4 p-3 border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent" 
                onChange={inputHandler}
                type="text"
                name="content" 
                placeholder="Inspire yourself and type...."></textarea>
            </form>
        </div>
    )
}
