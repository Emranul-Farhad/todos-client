import React from 'react'
import './Home/Home.css'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'


const Tdos = ({ data }) => {

  const { story, _id } = data;
  console.log()

  // todo delete
  const deletecontrol = (_id)=> {
    const url = `http://localhost:8000/delete/${_id}`
    fetch(url,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }


  return (
    <div className="item">
      <div className='flex justify-between items-center'>
        <h3>{story}</h3>
        <div className='flex '>
         <BsFillPencilFill className='mr-2 text-cyan-300'></BsFillPencilFill>
         <AiFillDelete onClick={()=>deletecontrol(_id) } className='mx-3 text-red-600'></AiFillDelete>
        </div>
      </div>
    </div>
  )
}

export default Tdos