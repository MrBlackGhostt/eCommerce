import { useEffect } from "react"
import { Card } from "../index"

import { useSelector, useDispatch } from "react-redux"

import {
  selectLoading,
  selectError,
  selectProducts,
  fetchProducts,
} from "../../features/product/productSlice"

export const ProductCard = () => {
  const dispatch = useDispatch()

  const product = useSelector(selectProducts)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (loading) {
    return (
      <h3 className='items-stretch overflow-x-auto flex justify-between gap-1 mt-10 px-5 max-md:max-w-full max-md:flex-wrap'>
        Loading...
      </h3>
    )
  }

  if (error) {
    return (
      <h3 className='items-stretch overflow-x-auto flex justify-between gap-1 mt-10 px-5 max-md:max-w-full max-md:flex-wrap'>
        error
      </h3>
    )
  }

  return (
    <div className='items-stretch overflow-x-auto flex justify-between gap-1 mt-10 px-5 max-md:max-w-full max-md:flex-wrap'>
      {product.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          category={product.category}
          name={product.title}
          image={product.image}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  )
}
