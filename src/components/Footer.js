import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
		<div className="footer-top-first">
			<div className="container py-md-5 py-sm-4 py-3">
				{/* <!-- footer first section --> */}
				<h2 className="footer-top-head-w3l font-weight-bold mb-2">Electronics :</h2>
				<p className="footer-main mb-4">
					If you're considering a new laptop, looking for a powerful new car stereo or shopping for a new HDTV, we make it easy to
					find exactly what you need at a price you can afford. We offer Every Day Low Prices on TVs, laptops, cell phones, tablets
					and iPads, video games, desktop computers, cameras and camcorders, audio, video and more.</p>
				{/* <!-- //footer first section --> */}
				{/* <!-- footer second section --> */}
				<div className="row w3l-grids-footer border-top border-bottom py-sm-4 py-3">
					<div className="col-md-4 offer-footer">
						<div className="row">
							<div className="col-4 icon-fot">
								<i className="fas fa-dolly"></i>
							</div>
							<div className="col-8 text-form-footer">
								<h3>Free Shipping</h3>
								<p>on orders over $100</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 offer-footer my-md-0 my-4">
						<div className="row">
							<div className="col-4 icon-fot">
								<i className="fas fa-shipping-fast"></i>
							</div>
							<div className="col-8 text-form-footer">
								<h3>Fast Delivery</h3>
								<p>World Wide</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 offer-footer">
						<div className="row">
							<div className="col-4 icon-fot">
								<i className="far fa-thumbs-up"></i>
							</div>
							<div className="col-8 text-form-footer">
								<h3>Big Choice</h3>
								<p>of Products</p>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- //footer second section --> */}
			</div>
		</div>
		{/* <!-- footer third section --> */}
		<div className="w3l-middlefooter-sec">
			<div className="container py-md-5 py-sm-4 py-3">
				<div className="row footer-info w3-agileits-info">
					{/* <!-- footer categories --> */}
					<div className="col-md-9 col-sm-6 footer-grids">
						<h3 className="text-white font-weight-bold mb-3">Categories</h3>
						<ul>
							<li className="mb-3">
								<Link to="/phones">Mobiles </Link>
							</li>
							<li className="mb-3">
								<Link to="/phones">Computers</Link>
							</li>
							<li className="mb-3">
								<Link to="/phones">TV, Audio</Link>
							</li>
							<li className="mb-3">
								<Link to="product2.html">Smartphones</Link>
							</li>
							<li className="mb-3">
								<Link to="/phones">Washing Machines</Link>
							</li>
							<li>
								<Link to="product2.html">Refrigerators</Link>
							</li>
						</ul>
					</div>
					{/* <!-- //footer categories --> */}
					{/* <!-- quick links --> */}
					<div className="col-md-3 col-sm-6 footer-grids mt-sm-0 mt-4">
						<h3 className="text-white font-weight-bold mb-3">Quick Links</h3>
						<ul>
							<li className="mb-3">
								<Link to="/about">About Us</Link>
							</li>
							<li className="mb-3">
								<Link to="/contact">Contact Us</Link>
							</li>
							<li className="mb-3">
								<Link to="/checkout">Checkout</Link>
							</li>
							<li className="mb-3">
								<Link to="/payment">Payment</Link>
							</li>
							{/* <li className="mb-3">
								<Link to="/help">Help</Link>
							</li> */}
							{/* <li className="mb-3">
								<Link to="/faqs">Faqs</Link>
							</li> */}
							{/* <li className="mb-3">
								<Link to="/terms">Terms of use</Link>
							</li>
							<li>
								<Link to="/privacypolicy">Privacy Policy</Link>
							</li> */}
						</ul>
					</div>
					{/* <div className="col-md-3 col-sm-6 footer-grids mt-md-0 mt-4">
						<h3 className="text-white font-weight-bold mb-3">Get in Touch</h3>
						<ul>
							<li className="mb-3">
								<i className="fas fa-map-marker"></i> 123 Sebastian, USA.</li>
							<li className="mb-3">
								<i className="fas fa-mobile"></i> 333 222 3333 </li>
							<li className="mb-3">
								<i className="fas fa-phone"></i> +222 11 4444 </li>
							<li className="mb-3">
								<i className="fas fa-envelope-open"></i>
								<Link to="mailto:example@mail.com"> mail 1@example.com</Link>
							</li>
							<li>
								<i className="fas fa-envelope-open"></i>
								<Link to="mailto:example@mail.com"> mail 2@example.com</Link>
							</li>
						</ul>
					</div> */}
					{/* <div className="col-md-3 col-sm-6 footer-grids w3l-agileits mt-md-0 mt-4"> */}
						{/* <!-- newsletter --> */}
						{/* <h3 className="text-white font-weight-bold mb-3">Newsletter</h3>
						<p className="mb-3">Free Delivery on your first order!</p>
						<form action="#" method="post">
							<div className="form-group">
								<input type="email" className="form-control" placeholder="Email" name="email" required=""/>
								<input type="submit" value="Go"/>
							</div>
						</form> */}
						{/* <!-- //newsletter --> */}
						{/* <!-- social icons --> */}
						{/* <div className="footer-grids  w3l-socialmk mt-3">
							<h3 className="text-white font-weight-bold mb-3">Follow Us on</h3>
							<div className="social">
								<ul>
									<li>
										<Link className="icon fb" to="#">
											<i className="fab fa-facebook-f"></i>
										</Link>
									</li>
									<li>
										<Link className="icon tw" to="#">
											<i className="fab fa-twitter"></i>
										</Link>
									</li>
									<li>
										<Link className="icon gp" to="#">
											<i className="fab fa-google-plus-g"></i>
										</Link>
									</li>
								</ul>
							</div>
						</div> */}
						{/* <!-- //social icons --> */}
					{/* </div> */}
				</div>
				{/* <!-- //quick links --> */}
			</div>
		</div>
		{/* <!-- //footer third section --> */}

		{/* <!-- footer fourth section --> */}
		{/* <div className="agile-sometext py-md-5 py-sm-4 py-3">
			<div className="container">
				
				<div className="sub-some">
					<h5 className="font-weight-bold mb-2">Mobile & Tablets :</h5>
					<ul>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Android Phones</Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Smartphones</Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Feature Phones</Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Unboxed Phones</Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Refurbished Phones</Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2"> Tablets</Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">CDMA Phones</Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Value Added Services</Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Sell Old</Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Used Mobiles</Link>
						</li>
					</ul>
				</div>
				<div className="sub-some mt-4">
					<h5 className="font-weight-bold mb-2">Computers :</h5>
					<ul>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Laptops </Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Printers</Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Routers</Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Ink & Toner Cartridges</Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Monitors</Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Video Games</Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Unboxed & Refurbished Laptops</Link>
						</li>
						<li>
							<Link to="/phones" className="border-right pr-2">Assembled Desktops</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Data Cards</Link>
						</li>
					</ul>
				</div>
				<div className="sub-some mt-4">
					<h5 className="font-weight-bold mb-2">TV, Audio & Large Appliances :</h5>
					<ul>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">TVs & DTH</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Home Theatre Systems</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Hidden Cameras & CCTVs</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Refrigerators</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Washing Machines</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2"> Air Conditioners</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Cameras</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Speakers</Link>
						</li>
					</ul>
				</div>
				<div className="sub-some mt-4">
					<h5 className="font-weight-bold mb-2">Mobile & Laptop Accessories :</h5>
					<ul>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Headphones</Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Power Banks </Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Backpacks</Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Mobile Cases & Covers</Link>
						</li>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Pen Drives</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">External Hard Disks</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2"> Mouse</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Smart Watches & Fitness Bands</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">MicroSD Cards</Link>
						</li>
					</ul>
				</div>
				<div className="sub-some mt-4">
					<h5 className="font-weight-bold mb-2">Appliances :</h5>
					<ul>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Trimmers</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Hair Dryers</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Emergency Lights</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Water Purifiers </Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Electric Kettles</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Hair Straighteners</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Induction Cooktops</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Sewing Machines</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2"> Geysers</Link>
						</li>
					</ul>
				</div>
				<div className="sub-some mt-4">
					<h5 className="font-weight-bold mb-2">Popular on Electro Store</h5>
					<ul>
						<li className="m-sm-1">
							<Link to="/phones" className="border-right pr-2">Offers & Coupons</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Couple Watches</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Gas Stoves</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2"> Air Coolers</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Air Purifiers</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Headphones</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2"> Headsets</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Pressure Cookers</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Sandwich Makers</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Air Friers</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Irons</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">LED TV</Link>
						</li>
						<li className="m-sm-1">
							<Link to="product2.html" className="border-right pr-2">Sandwich Makers</Link>
						</li>
					</ul>
				</div>
				
				<div className="sub-some child-momu mt-4">
					<h5 className="font-weight-bold mb-3">Payment Method</h5>
					<ul>
						<li>
							<img src="images/pay2.png" alt=""/>
						</li>
						<li>
							<img src="images/pay5.png" alt=""/>
						</li>
						<li>
							<img src="images/pay1.png" alt=""/>
						</li>
						<li>
							<img src="images/pay4.png" alt=""/>
						</li>
						<li>
							<img src="images/pay6.png" alt=""/>
						</li>
						<li>
							<img src="images/pay3.png" alt=""/>
						</li>
						<li>
							<img src="images/pay7.png" alt=""/>
						</li>
						<li>
							<img src="images/pay8.png" alt=""/>
						</li>
						<li>
							<img src="images/pay9.png" alt=""/>
						</li>
					</ul>
				</div>
				
			</div>
		</div> */}
		
    </div>
  )
}
