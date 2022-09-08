import React from 'react'
import './Home/Home.css'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import Swal from 'sweetalert2'
import { useQuery } from '@tanstack/react-query'


const Tdos = ({ data, update , re}) => {

  const { story, _id } = data;
  console.log()



  // test

  // todo delete
  const deletecontrol = (_id)=> {
    const url = `http://localhost:8000/delete/${_id}`
    fetch(url,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data =>{
      if(data.deletedCount == 1){
        return (  
          console.log("cc"),
          Swal.fire({
            icon: 'error',
            title: 'delete',
            
          }),
          console.log("bb"),
          console.log("aa")
        )
      }
      console.log(data)})
      
  }


  return (
    <div className="item">
      <div className='flex justify-between items-center'>
        <h3>{story}</h3>
        <div className='flex '>
         <BsFillPencilFill onClick={update} className='mr-2 text-cyan-300'></BsFillPencilFill>
         <AiFillDelete onClick={()=>deletecontrol(_id)  } className='mx-3 text-red-600'></AiFillDelete>
        </div>
      </div>
    </div>
  )
}

export default Tdos