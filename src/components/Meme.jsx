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


    // 4. Function to generate a new random meme image
    const generateMeme = () => {
        // Generate a random index based on the length of the memes array
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        // Get the URL of the randomly selected meme
        const memeUrl = allMemes[randomIndex].url
        // Update the `meme` state with the new randomImage, keeping existing text
        setMeme(prevMeme => ({
            ...prevMeme,  // Preserve existing state properties
            randomImage: memeUrl,  // Update the randomImage property
        }))

        console.log(memeUrl)
    }

    // 5. Function to handle input changes and update the corresponding state
    const handleChange = (event) => {
        const {value, name} = event.currentTarget  // Destructure name and value from event
        setMeme(prevMeme => ({
            ...prevMeme,  // Preserve existing state properties
            [name]: value  // Dynamically update the property matching the input's name
        }))
    }

    return (
        <main>
            <div className='container'>
                <div className='form'>
                    {/* Input field for top text */}
                    <label className='form__label' htmlFor='topText'>
                        Top text
                        <input
                            type="text"
                            id="topText"
                            name="topText"
                            placeholder='One does not simply'
                            className='form__input'
                            onChange={handleChange}  // Update state on change
                            value={meme.topText}  // Controlled input value
                        />
                    </label>

                    {/* Input field for bottom text */}
                    <label className='form__label' htmlFor='bottomText'>
                        Bottom text
                        <input
                            type="text"
                            id="bottomText"
                            name="bottomText"
                            placeholder='Walk into Mordor'
                            className='form__input'
                            onChange={handleChange}  // Update state on change
                            value={meme.buttomText}  // Controlled input value
                        />
                    </label>

                    {/* Call the generateMeme function when the button is clicked */}
                    <button
                        className='form__button'
                        onClick={generateMeme}  // Generate a new meme on click
                    >
                        Get a new meme image 🖼
                    </button>
                </div>

                {/* Display the meme image using meme.randomImage from state */}
                <div className='meme'>
                    <img
                        className='meme__image'
                        src={meme.randomImage}  // Display the current meme image
                        alt='Meme'
                    />
                    <span className='top'>{meme.topText}</span>  {/* Top text overlay */}
                    <span className='bottom'>{meme.bottomText}</span>  {/* Bottom text overlay */}
                </div>
            </div>
        </main>
    )
}

export default Meme
