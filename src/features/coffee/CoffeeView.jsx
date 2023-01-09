import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered as orderLatte } from './latte'
import { ordered as orderCappuccino } from './cappuccino'

const CoffeeView = () => {
  const numOfLatte = useSelector((state) => state.latte.numOfLatte )
  const numOfCappuccino = useSelector(state => state.cappuccino.numOfCappuccino)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>No of Latte: {numOfLatte} </h3>
      <h3>No of Cappuccino: {numOfCappuccino} </h3>
      <p>
        <button
          onClick={() => {
            console.log('Latte has been ordered!')
            dispatch(orderLatte(1))
          }}
          >Order 1 Latte
        </button>

        <button
          onClick={() => {
            console.log('Cappuccino has been ordered')
            dispatch(orderCappuccino(1))
          }}
          >Order 1 Cappuccino
          
        </button>

      </p>
      


    </div>
  )
}

export default CoffeeView