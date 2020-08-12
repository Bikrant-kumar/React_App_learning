import React from 'react'
import Label from '../Atoms/Label'

function Navbar() {
  
    return (
        <nav >
    <div className="nav-wrapper #b3e5fc light-blue lighten-3  ">
      <div className="brand-logo center black-text">
        <h3><Label text={"MY Restaurant"}/></h3>
        </div>
          {/* <NavbarTitle title={"TasteForever"}/> */}
    </div>
  </nav>
        
    )
}

export default Navbar

