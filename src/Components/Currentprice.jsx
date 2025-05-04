import React, { useEffect } from 'react';

function Currentprice({ search, price, setPrice }) {
  
  const fetchCurrentPrice = async (cryptoId) => {
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`);
      const data = await res.json();
      setPrice(data[cryptoId]?.usd || 'Not Found');
    } catch (error) {
      console.error('Error fetching price:', error);
      setPrice('Error');
    }
  };

  useEffect(() => {
    if (search) {
      fetchCurrentPrice(search.toLowerCase());
    }
  }, [search]);

  return (
    <div className='Currentprice'>
      <div className="price-info">
        <h2>Overall</h2>
        <h3>{search}</h3>
        <p>: ${price}</p>
      </div>
    </div>
  );
}

export default Currentprice;
