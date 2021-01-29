// Dependencies
import React, { Component } from 'react'
import Footer from 'components/Base-Layout/Footer'
import Confirmed from 'components/Base-Layout/Confirmed-Card'
// Internals
import 'components/Confirmation-Page/Confirmed/index.css'
// import imgItem1 from "assets/images/he-s-her-lobster-nKK32qJheBY-unsplash.jpg";
// import imgItem2 from "assets/images/sirio-HXaMrVsIrVI-unsplash.jpg"; 

export default class index extends Component {
    render() {
        return (
            <div>
                <div className="container mb-5">
                    <Confirmed />
                    {/* <div className="d-flex justify-content-center summary-confirmed">
                        <div className="row">
                            <div className="col mr-5">
                                <h4>Order Summary - 17834509</h4>
                                <div className="table-responsive">
                                    <table className="table ">
                                        <tr>
                                            <th scope="row">
                                                <img src={imgItem1} alt="item1" width="75"></img>
                                            </th>
                                            <td>1</td>
                                            <td>Hand Bag</td>
                                            <td>10000 IDR</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <img src={imgItem2} alt="item2" width="75"></img>
                                            </th>
                                            <td>1</td>
                                            <td>Neklace</td>
                                            <td>720000 IDR</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="col ml-5">
                                <h4>Order Details - 17834509</h4>

                                <h5>Contact Detail</h5>
                                <h6 className="ml-3">JohnNewman@gmail.com</h6>
                                <h6 className="ml-3">+46 358963 34</h6>
                                <hr />

                                <h5>Shipping Address</h5>
                                <h6 className="ml-3">John Newman</h6>
                                <h6 className="ml-3">Sacramento, CA 942032</h6>
                                <hr />

                                <h5>Payment Method</h5>
                                <h6 className="ml-3">Tranfer Bank</h6>
                                <h6 className="ml-3">100 456 8932 a.n Samsons Jackson</h6>
                                <hr />

                            </div>
                        </div>
                    </div> */}
                </div>
                <Footer />
            </div>
        )
    }
}
