import React from 'react'
import './Home/Home.css'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'


const Tdos = ({ data }) => {

  const { story } = data;
  // console.log(story)



  return (
    <div className="item">
      <div className='flex justify-between items-center'>
        <h3>{story}</h3>
        <div className='flex '>
         <BsFillPencilFill className='mr-2'></BsFillPencilFill>
         <AiFillDelete className='mx-3'></AiFillDelete>
        </div>
      </div>
    </div>
  )
}

export default Tdos