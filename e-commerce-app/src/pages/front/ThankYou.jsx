import React from 'react'
import Breadcrumb from '../../components/Breadcrum'
import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <>
    <Breadcrumb/>
    <div className='mt-5 text-center mb-5'>
     <h2 className='mt-2'>Thank You for Shopping</h2>
     <Link to='/' className='primary-btn mt-2'>Continue Shopping</Link>
    </div>
    </>
  )
}

export default ThankYou