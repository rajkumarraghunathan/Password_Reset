import React from 'react'
import { FaHandsPraying } from 'react-icons/fa6'

const WelcomePage = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                <h1 className='text-bg-success p-3'>
                    Welcome <FaHandsPraying />
                </h1>
            </div>
        </div >
    )
}

export default WelcomePage