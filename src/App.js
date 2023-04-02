import React, { useState } from 'react'

const App = () => {
  const [data,setData] = useState({
    email:'',
    password:''
  })
  return (
    <div>
      <center>
        <form>
          <label>E-Mail</label><br/>
          <input type="text" /> <br/>
          <label>Password</label> <br/>
          <input type="password"/> <br/> 
          <input type="submit" value="Login"/> 
        </form>
      </center>
    </div>
  )
}

export default App
