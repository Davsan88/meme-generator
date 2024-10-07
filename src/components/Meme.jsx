import React from 'react'


const Meme = () => {
    return (
        <main>
            <form className='form'>
                <label className='form__label' htmlFor='topText'>
                    Top text
                </label>
                <input 
                    type="text"
                    id="topText"
                    name="topText" 
                    placeholder='Top text' 
                    className='form__input'
                />

                <label className='form__label' htmlFor='bottomText'>
                Bottom text
                </label>
                <input 
                    type="text"
                    id="bottomText"
                    name="bottomText" 
                    placeholder='Buttom text' 
                    className='form__input'
                />
                <button className='form__button'>Get a new meme image 🖼</button>
            </form>
        </main>
    )
}

export default Meme
