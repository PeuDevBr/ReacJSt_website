import React from 'react'



const Array = (props) => {
  
    return (
    <div>
       <h1> {
              props.array.map((array) => (
                array
              ))
            }
        </h1>
    </div>
    )
  
}

export default Array