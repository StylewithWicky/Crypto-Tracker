import React from 'react'
import Currentprice from './Currentprice'
import Pricehistory from './Pricehistory'
import '../Styles/Main.css'
function Main() {
  return (
    <div className='Main'>
        <Currentprice />
        <Pricehistory />
    </div>
  )
}

export default Main