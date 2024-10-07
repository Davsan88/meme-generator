import React from 'react'


const Meme = () => {
    return (
        <main>
            <form className='form'>
                <label className='form__label'>
                    <span>
                        Top text
                    </span>
                    <input type="text" placeholder='Top text' className='form__input'/>
                </label>
                <label className='form__label'>
                    <span>
                        Bottom text
                    </span>
                    <input type="text" placeholder='Buttom text' className='form__input'/>
                </label>
                <button className='form__button'>Get a new meme image 🖼</button>
            </form>
        </main>
    )
}

export default Meme
