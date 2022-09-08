
import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Test from '../Another/Test'
import Tdos from '../Tdos'
import { NavLink } from 'react-router-dom';


const Home = () => {


 

  const [text, setText] = useState("")
  // update todo
  const [isupdate , setIspdate] = useState("")



    // todo get from data base
  const [get, setGate] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/story')
      .then(res => res.json())
      .then(data => setGate(data));
  }, [])
   

  // form submit handel
  const submit = event => {
    event.preventDefault();
    const story = text
    console.log(story)
      if(isupdate === ""){
        const url = `http://localhost:8000/send`
        fetch(url, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ story })
        })
          .then(res => res.json())
          .then(data =>{
            if(data.insertedId){
              Swal.fire({
                icon: 'right',
                title: 'Success',
                text: 'added todos',
                
              })
             
            }
            setGate([...get ,{story}])
           
          })
         
      }
      else{
       const id = isupdate;
       const urls = `http://localhost:8000/post/${id}`
       console.groupEnd(urls)
       fetch(urls,{
        method : "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ story })
       })
       .then(res => res.json())
       .then(data => {
        console.log(data, "got from here")}) 
  
  }

}




  



  // updatre todo handel
  const updatetodo = (_id, story) => {
    setIspdate(_id);
    setText(story)
  }



  return (
    <div>
      <div>
        <div className='mt-5'>
          <form onSubmit={submit} { ...isupdate ? 'update' : "Add" } >
            <input className='pb-1 outline-none border-b-2 border-cyan-300' type="text" onChange={(e) => setText(e.target.value)} value={text} placeholder='Type here' />
            <input className="mx-5 bg-cyan-300 hover:bg-cyan-500 text-black font-bold py-2 px-4 border  rounded" type="submit" />
          </form>
        </div>

        <div >
          {
            get?.map(data =>
               <Tdos key={data._id} data={data} 
               update={() => updatetodo(data._id, data.story)}
               > </Tdos>)
          }
        </div>

      </div>
    </div>
  )
}

export default Home