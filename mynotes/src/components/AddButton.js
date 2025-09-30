import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Addicon } from '../assets/add.svg'

const AddButton = () => {
  return (
    <div className='floating-button'>
        <Link to='note/new/'>
            <Addicon/>
            <h1 style={{ fontSize: '16px', color: 'white', marginTop: '4px', textAlign: 'center' }}>Soumya</h1>
        </Link>
    </div>
  )
}

export default AddButton