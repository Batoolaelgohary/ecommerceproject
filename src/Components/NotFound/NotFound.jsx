import React from 'react'
import error from '../../images/error.svg'
import { Helmet } from 'react-helmet'

export default function NotFound() {
  return (
    <>

<Helmet>
  <title>Not-Found</title>
  </Helmet>

    <div className='container w-50 py-5 my-5'>
        <img src={error} alt="404Error" />
      
    </div>
    </>
  )
}
