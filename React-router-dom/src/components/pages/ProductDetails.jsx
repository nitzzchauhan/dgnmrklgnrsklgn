import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const params = useParams()
    console.log(params)
  return (
    <div>Product Details of {params.id}</div>
  )
}
