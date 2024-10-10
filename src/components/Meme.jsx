import React from 'react'
import memesData from '../memesData'


const Meme = () => {
    const memesArray = memesData.data.memes


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
                <button className='form__button'>Get a new meme image 🖼</button>
            </div>
        </main>
    )
}

export default Meme
