import React from 'react'
import { addItems } from '../../helpers/getProducts'

const Home = () => {

    const handler = () => {
        addItems()
    }


  return (
    <button className='btn btn-warning btn-block' onClick={handler}>SET Items</button>
  )
}

export default Home