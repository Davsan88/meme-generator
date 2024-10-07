import React from 'react'

const Meme = () => {
    return (
        <form>
            <div className='inputs'>
                <div className='inputs_-top'>
                    <label for="topText">Top text</label>
                    <input type="text" />
                </div>
                <div className='inputs__bottom'>
                    <label for="bottomText">Bottom text</label>
                    <input type="text" placeholder='' />
                </div>
            </div>
            <button>Get a new meme image</button>
        </form>
    )
}

export default Meme
