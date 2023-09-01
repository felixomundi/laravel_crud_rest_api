import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
function Loader() {
  return (
    <div className='container py-5'>
         <Spinner animation="border" variant="success" />
    </div>
  )
}

export default Loader