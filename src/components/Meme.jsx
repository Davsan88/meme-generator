import React, { useEffect } from 'react'
import memesData from '../memesData'


const Meme = () => {

    // 1. Initialize state for `meme` with topText, bottomText, and randomImage
    const [meme, setMeme] = React.useState({
        topText: 'One does not simply',
        bottomText: 'walk into Mordor',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => console.log(data.data.memes) )
    }, [])

    // // 2. Initialize state for all meme images from memesData
    // const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    // // 2. Function to generate a new meme image
    // const generateMeme = () => {
    //     // a. Retrieve the array of meme objects from allMemeImages
    //     const memesArray = allMemeImages.data.memes
    //     // b. Generate a random index based on the length of the memes array
    //     const randomIndex = Math.floor(Math.random() * memesArray.length)
    //     // c. Get the URL of the randomly selected meme
    //     const memeUrl = memesArray[randomIndex].url
    //     // d. Update the `meme` state with the new randomImage, keeping existing text
    //     setMeme(prevMeme => ({
    //         ...prevMeme,
    //         randomImage: memeUrl,
    //     }))

    //     console.log(memeUrl)
    // }

    // 8. Function to handle input changes and update the 'meme' state accordingly
    const handleChange = (event) => {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({...prevMeme, [name]: value}))
    }

    return (
        <main>
            <div className='container'>
                <div className='form'>
                    {/* 4. Input field for top text (currently not connected to state) */}
                    <label className='form__label' htmlFor='topText'>
                        Top text
                        <input
                            type="text"
                            id="topText"
                            name="topText"
                            placeholder='One does not simply'
                            className='form__input'
                            onChange={handleChange}
                            value={meme.topText}
                        />
                    </label>

                    {/* 5. Input field for bottom text (currently not connected to state) */}
                    <label className='form__label' htmlFor='bottomText'>
                        Bottom text
                        <input
                            type="text"
                            id="bottomText"
                            name="bottomText"
                            placeholder='Walk into Mordor'
                            className='form__input'
                            onChange={handleChange}
                            value={meme.buttomText}
                        />
                    </label>

                    {/* 6. Call the generateMeme function when the button is clicked */}
                    <button
                        className='form__button'
                        onClick={generateMeme}
                    >
                        Get a new meme image 🖼
                    </button>
                </div>

                {/* 7. Display the meme image using meme.randomImage from state */}
                <div className='meme'>
                    <img
                        className='meme__image'
                        src={meme.randomImage}
                        alt='Meme'
                    />
                    <span className='top'>{meme.topText}</span>
                    <span className='bottom'>{meme.bottomText}</span>
                </div>
            </div>
        </main>
    )
}

export default Meme
