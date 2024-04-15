import React from 'react'

import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      	{/* <drrriv className="agile-main-top">
		<div className="container-fluid">
			<div className="row main-top-w3l py-2">
				<div className="col-lg-4 header-most-top">
					<p className="text-white text-lg-left text-center">Offer Zone Top Deals & Discounts
						<i className="fas fa-shopping-cart ml-1"></i>
					</p>
				</div>
				<div className="col-lg-8 header-right mt-lg-0 mt-2">
					
					<ul>
						<li className="text-center border-right text-white">
							<Link className="play-icon popup-with-zoom-anim text-white" to="#small-dialog1">
								<i className="fas fa-map-marker mr-2"></i>Select Location</Link>
						</li>
						<li className="text-center border-right text-white">
							<Link to="#" data-toggle="modal" data-target="#exampleModal" className="text-white">
								<i className="fas fa-truck mr-2"></i>Track Order</Link>
						</li>
						<li className="text-center border-right text-white">
							<i className="fas fa-phone mr-2"></i> +918697828148
						</li>
						<li className="text-center border-right text-white">
							<Link to="/login" data-toggle="modal" data-target="#exampleModal" className="text-white">
								<i className="fas fa-sign-in-alt mr-2"></i> Log In </Link>
						</li>
						<li className="text-center text-white">
							<Link to="/register" data-toggle="modal" data-target="#exampleModal2" className="text-white">
								<i className="fas fa-sign-out-alt mr-2"></i>Register </Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</drrriv> */}
	<div className="header-bot">
		<div className="container">
			<div className="row header-bot_inner_wthreeinfo_header_mid">
				{/* <!-- logo --> */}
				<div className="col-md-3 logo_agile">
					<h1 className="text-center">
						<Link to="/" className="font-weight-bold font-italic">
							Techbusters
						</Link>
					</h1>
				</div>
				{/* <!-- //logo -->
				<!-- header-bot --> */}
				<div className="col-md-9 header mt-4 mb-md-0 mb-4">
					<div className="row">
						{/* <!-- search --> */}
						<div className="col-10 agileits_search">
							<form className="form-inline" action="#" method="post">
								<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required/>
								<button className="btn my-2 my-sm-0" type="submit">Search</button>
							</form>
						</div>
						{/* <!-- //search -->
						<!-- cart details --> */}
						{/* <div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
							<div className="wthreecartaits wthreecartaits2 cart cart box_1">
								<form action="#" method="post" className="last">
									<input type="hidden" name="cmd" value="_cart"/>
									<input type="hidden" name="display" value="1"/>
									<button className="btn w3view-cart" type="submit" name="submit" value="">
										<i className="fas fa-cart-arrow-down"></i>
									</button>
								</form>
							</div>
						</div> */}
						{/* <!-- //cart details --> */}
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- shop locator (popup) -->
	<!-- //header-bottom -->
	<!-- navigation --> */}
	<div className="navbar-inner">
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				{/* <div className="agileits-navi_search">
					<form action="#" method="post">
						<select id="agileinfo-nav_search" name="agileinfo_search" className="border" required="">
							<option value="">All Categories</option>
							<option value="Televisions">Televisions</option>
							<option value="Headphones">Headphones</option>
							<option value="Computers">Computers</option>
							<option value="Appliances">Appliances</option>
							<option value="Mobiles">Mobiles</option>
							<option value="Fruits &amp; Vegetables">Tv &amp; Video</option>
							<option value="iPad & Tablets">iPad & Tablets</option>
							<option value="Cameras & Camcorders">Cameras & Camcorders</option>
							<option value="Home Audio & Theater">Home Audio & Theater</option>
						</select>
					</form>
				</div> */}
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
				    aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto text-center mr-xl-5">
						<li className="nav-item mr-lg-2 mb-lg-0 mb-2">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						{/* <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
							<Link className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Electronics
							</Link>
							<div className="dropdown-menu">
								<div className="agile_inner_drop_nav_info p-4">
									<h5 className="mb-3">Mobiles, Computers</h5>
									<div className="row">
										<div className="col-sm-6 multi-gd-img">
											<ul className="multi-column-dropdown">
												<li>
													<Link to="/phones">All Mobile Phones</Link>
												</li>
												<li>
													<Link to="/phones">All Mobile Accessories</Link>
												</li>
												<li>
													<Link to="/phones">Cases & Covers</Link>
												</li>
												<li>
													<Link to="/phones">Screen Protectors</Link>
												</li>
												<li>
													<Link to="/phones">Power Banks</Link>
												</li>
												<li>
													<Link to="/phones">All Certified Refurbished</Link>
												</li>
												<li>
													<Link to="/phones">Tablets</Link>
												</li>
												<li>
													<Link to="/phones">Wearable Devices</Link>
												</li>
												<li>
													<Link to="/phones">Smart Home</Link>
												</li>
											</ul>
										</div>
										<div className="col-sm-6 multi-gd-img">
											<ul className="multi-column-dropdown">
												<li>
													<Link to="/phones">Laptops</Link>
												</li>
												<li>
													<Link to="/phones">Drives & Storage</Link>
												</li>
												<li>
													<Link to="/phones">Printers & Ink</Link>
												</li>
												<li>
													<Link to="/phones">Networking Devices</Link>
												</li>
												<li>
													<Link to="/phones">Computer Accessories</Link>
												</li>
												<li>
													<Link to="/phones">Game Zone</Link>
												</li>
												<li>
													<Link to="/phones">Software</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
							<Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Appliances
							</Link>
							<div className="dropdown-menu">
								<div className="agile_inner_drop_nav_info p-4">
									<h5 className="mb-3">TV, Appliances, Electronics</h5>
									<div className="row">
										<div className="col-sm-6 multi-gd-img">
											<ul className="multi-column-dropdown">
												<li>
													<Link to="product2.html">Televisions</Link>
												</li>
												<li>
													<Link to="product2.html">Home Entertainment Systems</Link>
												</li>
												<li>
													<Link to="product2.html">Headphones</Link>
												</li>
												<li>
													<Link to="product2.html">Speakers</Link>
												</li>
												<li>
													<Link to="product2.html">MP3, Media Players & Accessories</Link>
												</li>
												<li>
													<Link to="product2.html">Audio & Video Accessories</Link>
												</li>
												<li>
													<Link to="product2.html">Cameras</Link>
												</li>
												<li>
													<Link to="product2.html">DSLR Cameras</Link>
												</li>
												<li>
													<Link to="product2.html">Camera Accessories</Link>
												</li>
											</ul>
										</div>
										<div className="col-sm-6 multi-gd-img">
											<ul className="multi-column-dropdown">
												<li>
													<Link to="product2.html">Musical Instruments</Link>
												</li>
												<li>
													<Link to="product2.html">Gaming Consoles</Link>
												</li>
												<li>
													<Link to="product2.html">All Electronics</Link>
												</li>
												<li>
													<Link to="product2.html">Air Conditioners</Link>
												</li>
												<li>
													<Link to="product2.html">Refrigerators</Link>
												</li>
												<li>
													<Link to="product2.html">Washing Machines</Link>
												</li>
												<li>
													<Link to="product2.html">Kitchen & Home Appliances</Link>
												</li>
												<li>
													<Link to="product2.html">Heating & Cooling Appliances</Link>
												</li>
												<li>
													<Link to="product2.html">All Appliances</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</li> */}
						<li className="nav-item mr-lg-2 mb-lg-0 mb-2">
							<Link className="nav-link" to="/about">About Us</Link>
						</li>
						{/* <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
							<Link className="nav-link" to="/phones">New Arrivals</Link>
						</li> */}
						<li className="nav-item">
						</li>
							{/* <div class="dropdownw">
  								<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    								Dropdown button
  								</button>
							<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								<li><Link class="dropdown-item" to="#">Action</Link></li>
								<li><Link class="dropdown-item" to="#">Another action</Link></li>
								<li><Link class="dropdown-item" to="#">Something else here</Link></li>
							</ul>
							</div> */}
					
						<li className="nav-item">
							<Link className="nav-link" to="/checkout">Cart</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contact">Contact Us</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</div>
	{/* <!-- //navigation --> */}
	</div>

  )
}
