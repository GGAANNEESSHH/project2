import React from 'react'
import { useState } from 'react'

function FormRadio() {
const [input,setInput]=useState({
        Fname:'',
        Lname:'',        
        phone:'',
        email:''
})
const[data,setData]=useState([])
const [contact,setContact]=useState({})

const handlechange =(e)=>{
    console.log(e.target.value)
    const {name,value}=e.target
    setInput((prev)=>({...prev,[name]:value}))
    console.log(input)
}
const handleContact=(e)=>{
        const x=e.target.value   
        setContact(x)
        console.log(contact)
}
const handleSubmit=(e)=>{
    e.preventDefault()
    setData([...data,input])
    console.log(data)        
}
    


  return (
    <div>
        <form onSubmit={handleSubmit}>
            
            <input value={input.Fname} onChange={handlechange} placeholder='First Name' name='Fname'/>
              <br></br>
            <input onChange={handlechange} value={input.Lname} placeholder='Last Name' name='Lname'/>

                <br></br>
                <h6>How should we contact you?</h6>
            <label>
               <input type='radio' name='g' onClick={handleContact} value='phone'/>
                Phone                
            </label>    
            <label >
               <input name='g' type='radio'value='email' onClick={handleContact}/>
                Email                
            </label>
            <br></br>

            {contact === 'phone' ?<>

                <lable>phone</lable>
                <input value={input.phone} type='number' onChange={handlechange} name='phone' />    
            
            </>:null}
            
            {contact === 'email' ? <input value={input.email} type='email' onChange={handlechange} name='email' />:null}
            <br></br>
            <button type='button'value='submit'>Submit</button>
        </form>

    </div>
  )
}

export default FormRadio