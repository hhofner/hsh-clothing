import React from 'react';

import CustomButtom from "../custom-button/custom-buttom.component";
import CartItem from "../cart-item/cart-item.component";
import './cart-dropdown.styles.scss';

import { withRouter } from 'react-router-dom';

import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

const CartDropdown = ({ cartItems, history }) => (
    <div className={"cart-dropdown"}>
        <div className={"cart-items"}>
            {cartItems.length ? (
                    cartItems.map(cartItem =>
                        (<CartItem key={cartItem.id} item={cartItem}/>)))
                :
                (
                    <span className={"empty-message"}>Your cart is empty</span>
                )
            }

        </div>
        <CustomButtom onClick={() => history.push('/checkout')}>
            GO TO CHECKOUT
        </CustomButtom>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
