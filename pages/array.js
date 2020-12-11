import React from 'react'

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

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