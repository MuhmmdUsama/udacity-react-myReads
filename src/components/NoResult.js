import React from 'react'

const NoResult = () => {
  return (
    <div className="book">
    <div className="book-top">
      <div
        // className="book-cover"
        style={{
          width: 500,
          height: 193,
          backgroundImage: 'url("https://cdn-icons-png.flaticon.com/512/2621/2621165.png")', 
          backgroundSize:'contain',
          backgroundRepeat:'no-repeat'  
        
        }}
      ></div>

      <div className="book-shelf-changer">
        <select >
          <option value="none" disabled>
          No Result...
          </option>
          
        </select>
      </div>
    </div>
    <div className="book-title">No Result</div>
    <div className="book-authors">No Result</div>
  </div>
    
  )
}

export default NoResult