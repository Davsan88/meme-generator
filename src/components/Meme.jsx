import React from 'react'
import memesData from '../memesData'


const Meme = () => {
    // 1. Initialize state for memeImage with an empty string
    const [memeImage, setMemeImage] = React.useState('')

    // 2. Function to generate a new meme image
    const generateMeme = () => {
        // a. Retrieve the array of meme objects from memesDa
        const memesArray = memesData.data.memes
        const randomIndex = Math.floor(Math.random() * memesArray.length)  
        const memeUrl = memesArray[randomIndex].url 
        setMemeImage(memeUrl)
        console.log(memeUrl)
    } 

    return (
        <main>
            <div className='form'>
                <label className='form__label' htmlFor='topText'>
                    Top text
                    <input
                        type="text"
                        id="topText"
                        name="topText"
                        placeholder='Top text'
                        className='form__input'
                    />
                </label>

                <label className='form__label' htmlFor='bottomText'>
                    Bottom text
                    <input
                        type="text"
                        id="bottomText"
                        name="bottomText"
                        placeholder='Buttom text'
                        className='form__input'
                    />
                </label>
                <button 
                    className='form__button'
                    onClick={generateMeme}
                    >
                    Get a new meme image 🖼</button>
            </div>
            <img src={memeImage} alt="Meme" />
        </main>
    )
}

export default Meme
