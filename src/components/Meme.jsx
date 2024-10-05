import React from 'react'

const Meme = () => {
    return (
        <form>
            <label for="topText">Top text</label>
            <input type="text" />
            <label for="bottomText">Bottom text</label>
            <input type="text" placeholder=''/>
            <button>Get a new meme image</button>
        </form>
    )
}

export default Meme
