import React, {  useState } from 'react'
import classes from './style.module.css'


function Form() {

  const [input,setInput]=useState({
    FirstName : '',
    LastName :'',
    Email : '',
    Number : ''

  })
  const [data,setData]=useState([])
  const[contactDetail,setContactDetail]=useState({})  

  const handleChange=(e)=>{
      // console.log(e.target.value)
      // console.log(e.target.name)
      
      setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
      console.log(input)      
  }

  const handleContact =(e)=>{
    const target=e.target;
    console.log(target.type);
    console.log(target.value);
    const value = target.value;
    const name = target.name;

    
    setContactDetail({...contactDetail, [name]: value})
    console.log(contactDetail)   
  }


  const handleSubmit=(e)=>{
    e.preventDefault()
    setData([...data,input])
    console.log(input)
    
  }
 
  return (
    <div className={classes.Container}>
      <form>
       <div className={classes.Form}>
          <div>
                <label className={classes.Label} >First Name</label>
                <input className={classes.Input}  type='text' placeholder='UserName' onChange={handleChange} value={input.FirstName} name='FirstName'/>
          </div>
        <div>
              <label className={classes.Label} >Last Name</label>
              <input  className={classes.Input} type='text' placeholder='LastName'onChange={handleChange} value={input.LastName} name='LastName'/>  
        </div>
        <div>
              <select name='isemailselected' onChange={handleContact} value={contactDetail['isemailselected']}>
              <option>Choose option</option>
                <option value='Yes'>Mail</option>
                <option value='No'>Mobile Number</option>        
              </select>
              <div>
               { contactDetail['isemailselected'] === 'Yes' ?
                                <>
                                    <label className={classes.Label}>Enter Email</label>
                                    <input type="text" onChange={handleChange} value={input.Email} name="Email" />
                                </>
                                :null
                                                }
                      { contactDetail['isemailselected'] === 'No' ? <><label className={classes.Label}>Enter Mobile</label>
                                                                      <input type="text" onChange={handleChange} value={input.Number} name='Number'/>
                                  </>
                                :null
                            }
          
              </div>
        </div>   </div>            
      </form>
    </div>
  )
}

export default Form