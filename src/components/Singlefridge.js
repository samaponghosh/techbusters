import React from 'react'
import { Link } from 'react-router-dom'
import sii1 from '../assets/images/sii1.jpg';
import sii2 from '../assets/images/sii2.jpg';
import sii3 from '../assets/images/sii3.jpg';

export default function Singlefridge() {
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
					<li>Single Product 2</li>
				</ul>
			</div>
		</div>
	</div>
	{/* <!-- //page --> */}
	{/* <!-- Single Page --> */}
	<div className="banner-bootom-w3-agileits py-5">
		<div className="container py-xl-4 py-lg-2">
			{/* <!-- tittle heading --> */}
			<h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
				<span>S</span>ingle
				<span>P</span>age</h3>
			{/* <!-- //tittle heading --> */}
			<div className="row">
				<div className="col-lg-5 col-md-8 single-right-left ">
					<div className="grid images_3_of_2">
						<div className="flexslider">
							<ul className="slides">
								<li data-thumb={sii1}>
									<div className="thumb-image">
										<img src={sii1} data-imagezoom="true" className="img-fluid" alt=""/> </div>
								</li>
								<li data-thumb={sii2}>
									<div className="thumb-image">
										<img src="{sii2}" data-imagezoom="true" className="img-fluid" alt=""/> </div>
								</li>
								<li data-thumb={sii3}>
									<div className="thumb-image">
										<img src={sii3} data-imagezoom="true" className="img-fluid" alt=""/> </div>
								</li>
							</ul>
							<div className="clearfix"></div>
						</div>
					</div>
				</div>

				<div className="col-lg-7 single-right-left simpleCart_shelfItem">
						<h3 className="mb-3">LG 260 L 3 Star Frost-Free Double-Door Refrigerator</h3>
						<p className="mb-3">
						<span className="item_price">₹220.00</span>
						<del className="mx-2 font-weight-light">₹250.00</del>
						<label>Free delivery</label>
					</p>
					<div className="single-infoagile">
						<ul>
								<li className="mb-3">
								Cash on Delivery Eligible.
							</li>
							<li className="mb-3">
								Shipping Speed to Delivery.
							</li>
							<li className="mb-3">
								EMI starts at ₹958.
							</li>
							<li className="mb-3">
								3 offers from
								<span className="item_price">₹220.00</span>
							</li>
						</ul>
					</div>
					<div className="product-single-w3l">
							<p className="my-3">
									<i className="far fa-hand-point-right mr-2"></i>
							Free standard installation within
							<label>48 hours</label> of delivery</p>
						<ul>
								<li className="mb-1">
								Frost Free Double Door: Auto defrost to stop ice-build up
							</li>
							<li className="mb-1">
								Capacity 260 L: Suitable for families with 2 to 3 members
							</li>
							<li className="mb-1">
								Energy Rating: 3 Star
							</li>
							<li className="mb-1">
								Warranty: 1 year warranty on product and 10 years warranty on compressor
							</li>
							<li className="mb-1">
								Shelf Type: Toughened Glass to withstand the weight of heaviest vessels
							</li>
							<li className="mb-1">
								Inverter Compressor: Energy efficient, less noise & more durable
							</li>
							<li className="mb-1">
								Also included in the box: User manual, Warranty card
							</li>
						</ul>
						<p className="my-sm-4 my-3">
								<i className="fas fa-retweet mr-3"></i>Net banking & Credit/ Debit/ ATM card
						</p>
					</div>
					<div className="occasion-cart">
						<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
							<form action="#" method="post">
								<fieldset>
									<input type="hidden" name="cmd" value="_cart" />
									<input type="hidden" name="add" value="1" />
									<input type="hidden" name="business" value=" " />
									<input type="hidden" name="item_name" value="Double-Door Refrigerator" />
									<input type="hidden" name="amount" value="220.00" />
									<input type="hidden" name="discount_amount" value="1.00" />
									<input type="hidden" name="currency_code" value="Rupees" />
									<input type="hidden" name="return" value=" " />
									<input type="hidden" name="cancel_return" value=" " />
									<input type="submit" name="submit" value="Add to cart" className="button" />
								</fieldset>
							</form>
						</div>

					</div>

				</div>
			</div>
		</div>
	</div>
    </div>
  )
}
