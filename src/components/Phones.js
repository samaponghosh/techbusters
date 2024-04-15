import React from 'react'

import {Link} from 'react-router-dom'

import m1 from '../assets/images/m1.jpg'
import m2 from '../assets/images/m2.jpg'
import m3 from '../assets/images/m3.jpg'
import mk1 from '../assets/images/mk1.jpg'
import mk2 from '../assets/images/mk2.jpg'
import mk3 from '../assets/images/mk3.jpg'
import mk4 from '../assets/images/mk4.jpg'
import mk5 from '../assets/images/mk5.jpg'
import mk6 from '../assets/images/mk6.jpg'
import mk7 from '../assets/images/mk7.jpg'
import mk8 from '../assets/images/mk8.jpg'
import mk9 from '../assets/images/mk9.jpg'

export default function Phones() {
  return (
    <div>
      <div className="services-breadcrumb">
		<div className="agile_inner_breadcrumb">
			<div className="container">
				<ul className="w3_short">
					<li>
						<Link to="/">Home</Link>
						<i>|</i>
					</li>
					<li>Electronics</li>
				</ul>
			</div>
		</div>
	</div>
	{/* <!-- //page --> */}

	{/* <!-- top Products --> */}
	<div className="ads-grid py-sm-5 py-4">
		<div className="container py-xl-4 py-lg-2">
			{/* <!-- tittle heading --> */}
			<h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
				<span>Mobiles </span>
				&
				<span> Computers</span></h3>
			{/* <!-- //tittle heading --> */}
			<div className="row">
				{/* <!-- product left --> */}
				<div className="agileinfo-ads-display col-lg-9">
					<div className="wrapper">
						{/* <!-- first section --> */}
						<div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
							<div className="row">
								<div className="col-md-4 product-men">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={m1} alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="single.html" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="single.html">Samsung Galaxy J7</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$200.00</span>
												<del>$280.00</del>
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
								<div className="col-md-4 product-men mt-md-0 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={m2} alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="single.html" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
											{/* <span className="product-new-top">New</span> */}

										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="single.html">OPPO A37f</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$230.00</span>
												<del>$250.00</del>
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
								<div className="col-md-4 product-men mt-md-0 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={m3} alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="single.html" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
											{/* <span className="product-new-top">New</span> */}

										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="single.html">Apple iPhone X</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$280.00</span>
												<del>$300.00</del>
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
							<div className="row">
								<div className="col-md-4 product-men">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={mk1} alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="single.html" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="single.html">Infinix Hot S3</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$300.00</span>
												<del>$320.00</del>
											</div>
											{/* <span className="product-new-top">New</span> */}
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Infinix Hot S3" />
														<input type="hidden" name="amount" value="300.00" />
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
											<img src={mk2} alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="single.html" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>

										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="single.html">Moto X4 (6 GB)</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$233.00</span>
												<del>$240.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Moto X4 (6 GB)" />
														<input type="hidden" name="amount" value="233.00" />
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
											<img src={mk3} alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="single.html" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="single.html">iVooMi i Series</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$249.00</span>
												<del>$260.00</del>
											</div>
											{/* <span className="product-new-top">New</span> */}
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="iVooMi i Series" />
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
						{/* <!-- 3rd section --> */}
						<div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
							<div className="row">
								<div className="col-md-4 product-men">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src={mk4} alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="single.html" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="single.html">Dell Vostro Laptop</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$252.00</span>
												<del>$260.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Dell Vostro Laptop" />
														<input type="hidden" name="amount" value="252.00" />
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
											<img src={mk5} alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="single.html" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="single.html">Acer Laptop</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$240.00</span>
												<del>$260.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Acer Laptop" />
														<input type="hidden" name="amount" value="240.00" />
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
											<img src={mk6} alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="single.html" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="single.html">Lenovo </Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$300.00</span>
												<del>$320.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Alcatel Tablet" />
														<input type="hidden" name="amount" value="300.00" />
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
											<img src={mk7} alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="single.html" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										{/* <span className="product-new-top">New</span> */}
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="single.html">Intex Power Bank</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$100.00</span>
												<del>$200.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Intex Power Bank" />
														<input type="hidden" name="amount" value="100.00" />
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
											<img src={mk8} alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="single.html" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										{/* <span className="product-new-top">New</span> */}
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="single.html">HP Wireless Printer</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$243.00</span>
												<del>$250.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="HP Wireless Printer" />
														<input type="hidden" name="amount" value="243.00" />
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
											<img src={mk9} alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="single.html" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="single.html">Alcatel Tablet</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$320.00</span>
												<del>$350.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Alcatel Tablet" />
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
							</div>
						</div>
						{/* <!-- //fourth section --> */}
					</div>
				</div>
				{/* <!-- //product left --> */}
				{/* <!-- product right --> */}
				{/* <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
					<div className="side-bar p-sm-4 p-3">
						<div className="search-hotel border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">Brand</h3>
							<form action="#" method="post">
								<input type="search" placeholder="Search Brand..." name="search" required=""/>
								<input type="submit" value=" "/>
							</form>
							<div className="left-side py-2">
								<ul>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Samsung</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Red Mi</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Apple</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Nexus</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Motorola</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Micromax</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Lenovo</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Oppo</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Sony</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">LG</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">One Plus</span>
									</li>
								</ul>
							</div>
						</div>
						
						<div className="left-side border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">Ram</h3>
							<ul>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">Less than 512 MB</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">512 MB - 1 GB</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">1 GB</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">2 GB</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">3 GB</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">5 GB</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">6 GB</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">6 GB & Above</span>
								</li>
							</ul>
						</div>
						
						<div className="range border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">Price</h3>
							<div className="w3l-range">
								<ul>
									<li>
										<Link to="#">Under $1,000</Link>
									</li>
									<li className="my-1">
										<Link to="#">$1,000 - $5,000</Link>
									</li>
									<li>
										<Link to="#">$5,000 - $10,000</Link>
									</li>
									<li className="my-1">
										<Link to="#">$10,000 - $20,000</Link>
									</li>
									<li>
										<Link to="#">$20,000 $30,000</Link>
									</li>
									<li className="mt-1">
										<Link to="#">Over $30,000</Link>
									</li>
								</ul>
							</div>
						</div>
						
						<div className="left-side border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">Discount</h3>
							<ul>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">5% or More</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">10% or More</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">20% or More</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">30% or More</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">50% or More</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">60% or More</span>
								</li>
							</ul>
						</div>
						
						<div className="left-side border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">Offers</h3>
							<ul>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">Exchange Offer</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">No Cost EMI</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">Special Price</span>
								</li>
							</ul>
						</div>
						
						<div className="left-side border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">Cash On Delivery</h3>
							<ul>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">Eligible for Cash On Delivery</span>
								</li>
							</ul>
						</div>
						
						<div className="left-side border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">New Arrivals</h3>
							<ul>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">Last 30 days</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">Last 90 days</span>
								</li>
							</ul>
						</div>
						<div className="left-side py-2">
							<h3 className="agileits-sear-head mb-3">Availability</h3>
							<ul>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">Exclude Out of Stock</span>
								</li>
							</ul>
						</div>
						
					</div> */}
					
				</div>
			</div>
		</div>
	</div>
    
  )
}
