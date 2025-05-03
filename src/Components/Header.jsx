import React, { useState } from 'react'
import Logo from './Logo'
import Searchbar from './Searchbar'
import '../Styles/Header.css'
function Header() {
    const [price ,setPrice] =useState(null)
    const [search, setSearch] = useState('');
    const [history, setHistory] = useState([]);


    const fetchCurrentPrice =async(cryptoId) => {
        const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`)
        const data  =await res.json()
        setPrice(data[cryptoId]?.usd || 'Not Found')

    }
    const fetchHistory = async (cryptoId) => {
        const res =await fetch(`https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=180`)
        const data =await res.json()
        setHistory(data.prices || []);
    }

  
    const onSearch = () => {
      console.log("Button clicked!");
      const cryptoId =search.toLowerCase();
      fetchCurrentPrice(cryptoId);
      fetchHistory(cryptoId);
    };

  return (
    <div className='Header'>
        <Logo />
        <Searchbar search={search} setSearch={setSearch} onSearch={onSearch}/>
        {price && (
        <div className="price-info">
          <h2>Current Price of {search}: ${price}</h2>
        </div>
      )}

      {history.length > 0 && (
        <div className="history">
          <h3>Price history (last 6 months):</h3>
          <ul>
            {history.slice(0, 10).map((entry, index) => (
              <li key={index}>
                {new Date(entry[0]).toLocaleDateString()}: ${entry[1].toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header