import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form >
            <input className='' type="text" placeholder='name' />
            <br />
            <input type="email" placeholder='Email' />
            <br />
            <textarea placeholder='Message' />
            <br />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default ContactForm