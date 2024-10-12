import React from 'react'
import memesData from '../memesData'


const Meme = () => {
    const [memeImage, setMemeImage] = React.useState('')


    const generateMeme = () => {
        const memesArray = memesData.data.memes  // Retrieve the memes array
        const randomIndex = Math.floor(Math.random() * memesArray.length)  // Generate a random index
        const memeUrl = memesArray[randomIndex].url  // Get the URL of the selected meme
        setMemeImage(memeUrl)  // Update the state with the new URL
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
