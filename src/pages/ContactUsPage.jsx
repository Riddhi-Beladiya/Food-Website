import React from 'react'
import Userinfo from '../components/ContactUscomponents/Userinfo'
import GetinTouch from '../components/ContactUscomponents/GetinTouch'


const ContactUsPage = () => {
  return (
    <div className='pt-10'>
        <div>
        <div className="relative item-center">
        <div>
          <img
            src="https://t4.ftcdn.net/jpg/02/92/16/87/240_F_292168788_kdZavR8oHlZbs2FH0hTR4r8bEu5FWne6.jpg"
            alt="shop"
            className="w-full max-h-100"
          />
        </div>
        <div className="absolute top-[50%] w-full text-center">
          <h2 className="text-5xl text-red-500">CONTACT US</h2>
        </div>
      </div>
      <Userinfo />
        </div>
        <div>
            <GetinTouch/>
        </div>
    </div>
  )
}

export default ContactUsPage