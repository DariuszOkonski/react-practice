import React, { useState } from 'react'

const Form = ({onClickHandler, isFetched}) => {

    const [title, setTitle] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const id = Math.floor(Math.random() * 1000000000)

        onClickHandler({
            id,
            title,
            type: 'ADD'
        })

        setTitle('');
    }

    const handleChange = (evt) => {
        setTitle(evt.target.value)
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    title:
                    <input 
                        type="text" 
                        onChange={handleChange} 
                        value={title}
                        disabled={!isFetched}
                    />
                </label>

                <button disabled={!isFetched}>submit</button>
            </form>
            <hr />
        </div>
     );
}
 
export default Form;