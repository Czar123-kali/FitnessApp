import React from 'react'

const ItemCard = ({ item }) => {
  console.log('card' + item.name)
  return <div>{item.name}</div>
}

export default ItemCard
