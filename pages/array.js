import React from 'react'

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const Array = (props) => {
  let newArray = []
  for (var index in array) {
    if (array[index] > props.number) {
      newArray.push(array[index])

    }
  }
  
    return (
    <div>
       <h1> {
              newArray.map((array) => (
                  array
                
              ))
            }
        </h1>
    </div>
    )
  
}

export default Array