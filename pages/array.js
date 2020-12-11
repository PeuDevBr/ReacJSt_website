import React from 'react'

var array = [1, 2, 3, 4, 5, 6, 7, 8]
const Array = () => {
  
    return (
    <div>
       <h1> {
              array.map((array) => (
                array
              ))
            }
        </h1>
    </div>
    )
  
}

export default Array