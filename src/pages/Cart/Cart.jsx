import React from 'react'
import CommonSection from '../../components/UI/common-section/CommonSection'
import Helmet from '../../components/Helmet/Helmet'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import { deleteItem } from '../../store/shopping-cart/cartSlice'
import './index.scss';
import { Link } from 'react-router-dom'

const Cart = () => {
    const cartItems = useSelector((state) => state.cartReducer.cartItems);
    const totalAmount = useSelector((state) => state.cartReducer.totalAmount)

    return (
        <Helmet title='Cart'>
            <CommonSection title="Your Cart"/>
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            {cartItems.length === 0 ? <h5 className='text-center'>Your cart is empty</h5> :
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Title</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems.map((item, index) => (
                                                <Tr item={item} key={index} />
                                            ))
                                        }
                                    </tbody>
                                </table>
                            }
                            <div className='subtotal'>
                                <h6>Subtotal: <span className='text-[#df2020] text-xl'>${totalAmount}</span> </h6>
                                <p>Taxes and shipping will calculate at checkout</p>
                                <div className='subtotal__button mt-5 gap-3'>
                                    <button className='mr-3 py-2 px-2 bg-[#df2020] text-white rounded-md w-[180px] hover:text-white'>
                                        <Link to='/foods' className='hover:text-white'>Continue Shopping</Link>
                                    </button><button className='py-2 px-2 bg-[#df2020] text-white rounded-md w-[180px] hover:text-white'>
                                        <Link to='/checkout' className='hover:text-white'>Proceed to checkout</Link>
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

const Tr = props => {
    const {image01, title, price, quantity } = props.item;
    const dispatch = useDispatch();
    const handleDelete = (item) => {
        dispatch(deleteItem(item))
    }

    return (
        <tr>
            <td>
                <img src={image01} alt="" className='flex justify-center items-center m-auto w-10' />
            </td>
            <td>{title}</td>
            <td>${price}</td>
            <td>{quantity}px</td>
            <td><i className="ri-delete-bin-line cursor-pointer" onClick={() => handleDelete(props.item)}></i></td>
        </tr> 
    )
}
export default Cart