import React, { useState, useEffect } from 'react';
import axios from 'axios';
const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle';

const Deck = () => {
  const [data, setData] = useState({ deck: null });

  useEffect(async () => {
    let deck = await axios.get(API_URL, {
      headers: { Accept: 'Access-Control-Allow-Origin *'}}
          );
    setData({deck: deck.data})
  }, []);

  return (
    <div>
      <h1 />
    </div>
  );
};
export default Deck;
