import React from 'react'


const Meme = () => {
    return (
        <main>
            <form className='form'>
                <label className='form__label'>
                    <input type="text" placeholder='Top text' className='form__input'/>
                </label>
                <label className='form__label'>
                    <input type="text" placeholder='Buttom text' className='form__input'/>
                </label>
                <button className='form__button'>Get a new meme image 🖼</button>
            </form>
        </main>
    )
}

export default Meme
