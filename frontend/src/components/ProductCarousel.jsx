import React from 'react'
import {Link} from 'react-router-dom'
import {Carousel, Image} from 'react-bootstrap'
import { useGetTopProductsQuery } from '../slices/productsApiSlice'
import Loader from './Loader'
import Message from './Message'

const ProductCarousel = () => {

    const { data:producs, isLoading, error} = useGetTopProductsQuery();

  return (
    <>
        {isLoading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
            <Carousel pause='hover' className='bg-primary mb-4'>
                {producs.map(product => (
                    <Carousel.Item key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            <Image src={product.image} alt={product.name} fluid/>
                            <Carousel.Caption className='carousel-caption'>
                                <h2>{product.name} ({product.price} Lei)</h2>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
        )}
    </>
  )
}

export default ProductCarousel