import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
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
					<li>Contact Us</li>
				</ul>
			</div>
		</div>
	</div>
	{/* <!-- //page --> */}

	{/* <!-- contact --> */}
	<div className="contact py-sm-5 py-4">
		<div className="container py-xl-4 py-lg-2">
			{/* <!-- tittle heading --> */}
			<h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
				<span>Contact</span>
				<span> Us</span>
			</h3>
			{/* <!-- //tittle heading --> */}
			<div className="row contact-grids agile-1 mb-5">
				<div className="col-sm-4 contact-grid agileinfo-6 mt-sm-0 mt-2">
					<div className="contact-grid1 text-center">
						<div className="con-ic">
							<i className="fas fa-map-marker-alt rounded-circle"></i>
						</div>
						<h4 className="font-weight-bold mt-sm-4 mt-3 mb-3">Address</h4>
						<p>Dankuni,Hooghly
							<label>WestBengal, India</label>
						</p>
					</div>
				</div>
				<div className="col-sm-4 contact-grid agileinfo-6 my-sm-0 my-4">
					<div className="contact-grid1 text-center">
						<div className="con-ic">
							<i className="fas fa-phone rounded-circle"></i>
						</div>
						<h4 className="font-weight-bold mt-sm-4 mt-3 mb-3">Call Us</h4>
						<p>+918697828148
						</p>
					</div>
				</div>
				<div className="col-sm-4 contact-grid agileinfo-6">
					<div className="contact-grid1 text-center">
						<div className="con-ic">
							<i className="fas fa-envelope-open rounded-circle"></i>
						</div>
						<h4 className="font-weight-bold mt-sm-4 mt-3 mb-3">Email</h4>
						<p>samaponghosh2002@gmail.com
						</p>
					</div>
				</div>
			</div>
			{/* <!-- form --> */}
			<form action="#" method="post">
				<div className="contact-grids1 w3agile-6">
					<div className="row">
						<div className="col-md-6 col-sm-6 contact-form1 form-group">
							<label className="col-form-label">Name</label>
							<input type="text" className="form-control" name="Name" placeholder="" required=""/>
						</div>
						<div className="col-md-6 col-sm-6 contact-form1 form-group">
							<label className="col-form-label">E-mail</label>
							<input type="email" className="form-control" name="Email" placeholder="" required=""/>
						</div>
					</div>
					<div className="contact-me animated wow slideInUp form-group">
						<label className="col-form-label">Message</label>
						<textarea name="Message" className="form-control" placeholder="" required=""> </textarea>
					</div>
					<div className="contact-form">
						<input type="submit" value="Submit" />
					</div>
				</div>
			</form>
			{/* <!-- //form --> */}
		</div>
	</div>
    </div>
  )
}
