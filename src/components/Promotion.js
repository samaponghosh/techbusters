import React from 'react'

import off1 from '../assets/images/off1.png';
import off2 from '../assets/images/off2.png';
import { Link } from 'react-router-dom';

export default function Promotion() {
  return (
    <div>
      <div className="join-w3l1 py-sm-5 py-4">
		<div className="container py-xl-4 py-lg-2">
			<div className="row">
				<Link to="/appliances" className="col-lg-6">
					<div className="join-agile text-left p-4">
						<div className="row">
							<div className="col-sm-7 offer-name">
								<h6>Smooth, Rich & Loud Audio</h6>
								<h4 className="mt-2 mb-3">Branded Headphones</h4>
								<p>Sale up to 25% off all in store</p>
							</div>
							<div className="col-sm-5 offerimg-w3l">
								<img src={off1} alt="" className="img-fluid"/>
							</div>
						</div>
					</div>
				</Link>
				<Link to="/phones" className="col-lg-6 mt-lg-0 mt-5">
					<div className="join-agile text-left p-4">
						<div className="row ">
							<div className="col-sm-7 offer-name">
								<h6>A Bigger Phone</h6>
								<h4 className="mt-2 mb-3">Smart Phones</h4>
								<p>Free shipping order over ₹500</p>
							</div>
							<div className="col-sm-5 offerimg-w3l">
								<img src={off2} alt="" className="img-fluid"/>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	</div>
    </div>
  )
}
