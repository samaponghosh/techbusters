import React from 'react'
import image_ab from '../assets/images/ab.jpg'
import { Link } from 'react-router-dom'

export default function About() {
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
					<li>About Us</li>
				</ul>
			</div>
		</div>
	</div>
	{/* <!-- //page --> */}

	{/* <!-- about --> */}
	<div className="welcome py-sm-5 py-4">
		<div className="container py-xl-4 py-lg-2">
			{/* <!-- tittle heading --> */}
			<h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
				<span>About</span>
				<span> Us</span></h3>
			{/* <!-- //tittle heading --> */}
			<div className="row">
				<div className="col-lg-6 welcome-left">
					<h3>Welcome</h3>
					<h4 className="my-sm-3 my-2">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta erat sit amet eros sagittis, quis hendrerit
						libero aliquam. Fusce semper augue ac dolor efficitur, a pretium metus pellentesque.</p>
				</div>
				<div className="col-lg-6 welcome-right-top mt-lg-0 mt-sm-5 mt-4">
					<img src={image_ab} className="img-fluid" alt=" "/>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}
