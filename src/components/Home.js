import React from 'react'

import { Link } from 'react-router-dom';
import Promotion from './Promotion';

import m1 from '../assets/images/m1.jpg'
import m2 from '../assets/images/m2.jpg'
import m3 from '../assets/images/m3.jpg'
import m4 from '../assets/images/m4.jpg'
import m5 from '../assets/images/m5.jpg'
import m6 from '../assets/images/m6.jpg'
import m7 from '../assets/images/m7.jpg'
import m8 from '../assets/images/m8.jpg'
import m9 from '../assets/images/m9.jpg'
import image1 from '../assets/images/image1.png'

export default function Home() {
  return (
    <>
      	<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
		{/* <!-- Indicators--> */}
		<ol className="carousel-indicators">
			<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
		</ol>
		<div className="carousel-inner">
			<div className="carousel-item item1 active">
				<div className="container">
					<div className="w3l-space-banner">
						<div className="carousel-caption p-lg-5 p-sm-4 p-3">
							<p>Get flat
								<span>10%</span> Cashback</p>
							<h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">The
								<span>Big</span>
								Sale
							</h3>
							<Link className="button2" to="/phones">Shop Now </Link>
						</div>
					</div>
				</div>
			</div>
			<div className="carousel-item item2">
				<div className="container">
					<div className="w3l-space-banner">
						<div className="carousel-caption p-lg-5 p-sm-4 p-3">
							<p>advanced
								<span>Wireless</span> earbuds</p>
							<h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">Best
								<span>Headphone</span>
							</h3>
							<Link className="button2" to="/phones">Shop Now </Link>
						</div>
					</div>
				</div>
			</div>
			<div className="carousel-item item3">
				<div className="container">
					<div className="w3l-space-banner">
						<div className="carousel-caption p-lg-5 p-sm-4 p-3">
							<p>Get flat
								<span>10%</span> Cashback</p>
							<h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">New
								<span>Standard</span>
							</h3>
							<Link className="button2" to="/phones">Shop Now </Link>
						</div>
					</div>
				</div>
			</div>
			<div className="carousel-item item4">
				<div className="container">
					<div className="w3l-space-banner">
						<div className="carousel-caption p-lg-5 p-sm-4 p-3">
							<p>Get Now
								<span>40%</span> Discount</p>
							<h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">Today
								<span>Discount</span>
							</h3>
							<Link className="button2" to="/phones">Shop Now </Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Link className="carousel-control-prev" to="#carouselExampleIndicators" role="button" data-slide="prev">
			<span className="carousel-control-prev-icon" aria-hidden="true"></span>
			<span className="sr-only">Previous</span>
		</Link>
		<Link className="carousel-control-next" to="#carouselExampleIndicators" role="button" data-slide="next">
			<span className="carousel-control-next-icon" aria-hidden="true"></span>
			<span className="sr-only">Next</span>
		</Link>
	</div>
    <div className="ads-grid py-sm-5 py-4">
		<div className="container py-xl-4 py-lg-2">
			{/* <!-- tittle heading --> */}
			<h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
				<span>O</span>ur
				<span>N</span>ew
				<span>P</span>roducts</h3>
			{/* <!-- //tittle h/eading --> */}
			<div className="row">
				{/* <!-- product left --> */}
				<div className="agileinfo-ads-display col-lg-9">
					<div className="wrapper">
						{/* <!-- first section --> */}
						<div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                            <Link to="/phones">
							<h3 className="heading-tittle text-center font-italic">New Brand Mobiles</h3>
                            </Link>
							<div className="row">
								<div className="col-md-4 product-men mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={m1} alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/LGdoubledoorRefrigerator" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/SamsungGalaxy">Samsung Galaxy J7</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">₹200.00</span>
												<del>₹280.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Samsung Galaxy J7" />
														<input type="hidden" name="amount" value="200.00" />
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
								<div className="col-md-4 product-men mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={m2} alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="SamsungGalaxy" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
											<span className="product-new-top">New</span>

										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="SamsungGalaxy">OPPO A37f</Link>
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
														<input type="hidden" name="item_name" value="OPPO A37f" />
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
								<div className="col-md-4 product-men mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={m3} alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="SamsungGalaxy" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
											<span className="product-new-top">New</span>

										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="SamsungGalaxy">Apple iPhone X</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">₹280.00</span>
												<del>₹300.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Apple iPhone X" />
														<input type="hidden" name="amount" value="280.00" />
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
						{/* <!-- second section --> */}
						<div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                            <Link to="/appliances">
							<h3 className="heading-tittle text-center font-italic">Tv & Audio</h3>
                            </Link>
							<div className="row">
								<div className="col-md-4 product-men mt-5">
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
												<del>₹340.00</del>
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
								<div className="col-md-4 product-men mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={m5} alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/LGdoubledoorRefrigerator" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
											<span className="product-new-top">New</span>

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
								<div className="col-md-4 product-men mt-5">
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
						{/* <!-- //second section --> */}
						{/* <!-- third section --> */}
						<div className="product-sec1 product-sec2 px-sm-5 px-3">
							<div className="row">
								<h3 className="col-md-4 effect-bg">Summer Carnival</h3>
								<p className="w3l-nut-middle">Get Extra 10% Off</p>
								<div className="col-md-8 bg-right-nut">
									<img src={image1} alt=""/>
								</div>
							</div>
						</div>
						{/* <!-- //third section --> */}
						{/* <!-- fourth section --> */}
						<div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
                            <Link to="/appliances">
							<h3 className="heading-tittle text-center font-italic">Large Appliances</h3>
                            </Link>
							<div className="row">
								<div className="col-md-4 product-men mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={m7} alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/LGdoubledoorRefrigerator" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<span className="product-new-top">New</span>
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
								<div className="col-md-4 product-men mt-5">
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
								<div className="col-md-4 product-men mt-5">
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
														<input type="hidden" name="item_name" value="Microwave Oven" />
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
						{/* <!-- //fourth section --> */}
					</div>
				</div>
                </div>
                </div>
                </div>
    <Promotion/>
    
    
    </>
  )
}
