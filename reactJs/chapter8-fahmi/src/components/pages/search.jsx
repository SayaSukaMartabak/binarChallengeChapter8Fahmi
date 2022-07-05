import React from 'react'

function Cari(){
  return(
    <div className="form">
     <form>
      <h1>Mencari jati diri</h1>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="username" required />
       </div>
        <button className="btn btn-primary">
         <input type="submit" />
       </button>
     </form>
   </div>
  )
}

export default Cari;


