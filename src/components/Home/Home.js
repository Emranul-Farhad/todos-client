import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import Tdos from '../Tdos'



const Home = () => {


  // todo get from data base
  const [get, setGate] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setGate(data));
  }, [])
 

  // form submit handel
  const submit = event =>{
    event.preventDefault();
    const tododata = {
      inputvalue : event.target.story.value
    }
    console.log(tododata)
  }

  
  
  


  return (
    <div>
      <div>
        <div className='mt-5'>
          <form onSubmit={submit} >
            <input className='pb-1 outline-none border-b-2 border-cyan-300' type="text" name='story' placeholder='Type here' />
            <input className="mx-5 bg-cyan-300 hover:bg-cyan-500 text-black font-bold py-2 px-4 border  rounded" type="submit" />
          </form>
        </div>

        <div >
          {
            get.map(data => <Tdos key={data.id} data={data} > </Tdos>)
          }
        </div>
        <p>a b c d e f g h 1234567890 q </p>
      </div>
    </div>
  )
}

export default Home