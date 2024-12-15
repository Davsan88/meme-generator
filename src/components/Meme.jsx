import React, { useState, useEffect } from 'react'
// import memesData from '../memesData'


const Meme = () => {

    // 1. State for the current meme, including text and image
    const [meme, setMeme] = useState({
        topText: 'One does not simply',  // Default top text
        bottomText: 'walk into Mordor',  // Default bottom text
        randomImage: 'http://i.imgflip.com/1bij.jpg'  // Default image URL
    })

    // 3. State to store all memes fetched from the API
    const [allMemes, setAllMemes] = useState()  // Stores the array of memes fetched

    // 2. Fetch memes from the API when the component mounts
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())  // Parse JSON response
            .then(data => setAllMemes(data.data.memes) )  // Save the memes array to state
    }, [])  // Empty dependency array ensures this runs only once when component mounts


    // 2. Function to generate a new meme image
    const generateMeme = () => {
        // b. Generate a random index based on the length of the memes array
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        // c. Get the URL of the randomly selected meme
        const memeUrl = allMemes[randomIndex].url
        // d. Update the `meme` state with the new randomImage, keeping existing text
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memeUrl,
        }))

        console.log(memeUrl)
    }

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
