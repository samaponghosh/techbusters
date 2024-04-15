import React from 'react'

import {Link} from 'react-router-dom';
import m4 from '../assets/images/m4.jpg';
import m5 from '../assets/images/m5.jpg';
import m6 from '../assets/images/m6.jpg';
import m7 from '../assets/images/m7.jpg';
import m8 from '../assets/images/m8.jpg';
import m9 from '../assets/images/m9.jpg';
import mm1 from '../assets/images/mm1.jpg';
import mm2 from '../assets/images/mm2.jpg';
import mm3 from '../assets/images/mm3.jpg';
import mm4 from '../assets/images/mm4.jpg';
import mm5 from '../assets/images/mm5.jpg';
import mm6 from '../assets/images/mm6.jpg';



export default function Appliances() {
  return (
    <>
      <div className="services-breadcrumb">
		<div className="agile_inner_breadcrumb">
			<div className="container">
				<ul className="w3_short">
					<li>
						<Link to="/">Home</Link>
						<i>|</i>
					</li>
					<li>Appliances</li>
				</ul>
			</div>
		</div>
	</div>
	{/* <!-- //page --> */}

	{/* <!-- top Products --> */}
	<div className="ads-grid  py-sm-5 py-4">
		<div className="container py-xl-4 py-lg-2">
			{/* <!-- tittle heading --> */}
			<h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
				<span>TV </span>
				&
				<span> Appliances</span></h3>
			{/* <!-- //tittle heading --> */}
			<div className="row">
				{/* <!-- product left --> */}
				<div className="agileinfo-ads-display col-lg-9">
					<div className="wrapper">
						{/* <!-- first section --> */}
						<div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
							<div className="row">
								<div className="col-md-4 product-men">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={m4} alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/LGdoubledoorRefrigerator" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/LGdoubledoorRefrigerator">Sony 80 cm (32 inches)</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">₹320.00</span>
												<del>₹340.00 </del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Sony 80 cm (32 inches)" />
														<input type="hidden" name="amount" value="320.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>

										</div>
									</div>
								</div>
								<div className="col-md-4 product-men mt-md-0 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={m5} alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/LGdoubledoorRefrigerator" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
											{/* <span className="product-new-top">New</span> */}

										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/LGdoubledoorRefrigerator">Artis Speaker</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">₹349.00</span>
												<del>₹399.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Artis Speaker" />
														<input type="hidden" name="amount" value="349.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>

										</div>
									</div>
								</div>
								<div className="col-md-4 product-men mt-md-0 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={m6} alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/LGdoubledoorRefrigerator" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/LGdoubledoorRefrigerator">Philips Speakers</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">₹249.00</span>
												<del>₹300.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Philips Speakers" />
														<input type="hidden" name="amount" value="249.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- //first section --> */}
						{/* <!-- second section  --> */}
						<div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
							<div className="row">
								<div className="col-md-4 product-men">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={m7} alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/LGdoubledoorRefrigerator" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										{/* <span className="product-new-top">New</span> */}
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/LGdoubledoorRefrigerator">Whirlpool 245</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">₹230.00</span>
												<del>₹280.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Whirlpool 245" />
														<input type="hidden" name="amount" value="230.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>

										</div>
									</div>
								</div>
								<div className="col-md-4 product-men mt-md-0 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={m8} alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/LGdoubledoorRefrigerator" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/LGdoubledoorRefrigerator">BPL Washing Machine</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">₹180.00</span>
												<del>₹200.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="BPL Washing Machine" />
														<input type="hidden" name="amount" value="180.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>

										</div>
									</div>
								</div>
								<div className="col-md-4 product-men mt-md-0 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={m9} alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/LGdoubledoorRefrigerator" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/LGdoubledoorRefrigerator">Microwave Oven</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">₹199.00</span>
												<del>₹299.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Whirlpool Microwave Oven" />
														<input type="hidden" name="amount" value="199.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- //second section --> */}
						{/* <!-- 3rd section --> */}
						<div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
							<div className="row">
								<div className="col-md-4 product-men">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={mm1} alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/LGdoubledoorRefrigerator" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/LGdoubledoorRefrigerator">boAt Rockerz Headset</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">₹320.00</span>
												<del>₹350.00</del>
											</div>
											{/* <span className="product-new-top">New</span> */}
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="boAt Rockerz Headset" />
														<input type="hidden" name="amount" value="320.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>

										</div>
									</div>
								</div>
								<div className="col-md-4 product-men mt-md-0 mt-5 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={mm2} alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/LGdoubledoorRefrigerator" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/LGdoubledoorRefrigerator">LG Boom Blast Speaker</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">₹180.00</span>
												<del>₹200.00</del>
											</div>
											{/* <span className="product-new-top">New</span> */}
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="LG Boom Blast Speaker" />
														<input type="hidden" name="amount" value="180.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>

										</div>
									</div>
								</div>
								<div className="col-md-4 product-men mt-md-0 mt-5 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={mm3} alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/LGdoubledoorRefrigerator" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/LGdoubledoorRefrigerator">Nikon Camera</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">₹230.00</span>
												<del>₹250.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Nikon Camera" />
														<input type="hidden" name="amount" value="230.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- //3rd section --> */}
						{/* <!-- fourth section --> */}
						<div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
							<div className="row">
								<div className="col-md-4 product-men">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={mm4} alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/LGdoubledoorRefrigerator" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/LGdoubledoorRefrigerator">Dry Iron</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">₹449.00</span>
												<del>₹549.00</del>
											</div>
											{/* <span className="product-new-top">New</span> */}
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Dry Iron" />
														<input type="hidden" name="amount" value="449.00" />
														<input type="hidden" name="discount_amount" value="449.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>

										</div>
									</div>
								</div>
								<div className="col-md-4 product-men mt-md-0 mt-5 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={mm6} alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/LGdoubledoorRefrigerator" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/LGdoubledoorRefrigerator">Induction Cooktop</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">₹145.00</span>
												<del>₹150.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Induction Cooktop" />
														<input type="hidden" name="amount" value="145.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 product-men mt-md-0 mt-5 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={mm5} alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/LGdoubledoorRefrigerator" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										{/* <span className="product-new-top">New</span> */}
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/LGdoubledoorRefrigerator">Hair Straightener</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">₹499.00</span>
												<del>₹550.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Hair Straightener" />
														<input type="hidden" name="amount" value="499.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- //fourth section --> */}
					</div>
				</div>
            </div>
    </div>
    </div>
    </>
  )
}
