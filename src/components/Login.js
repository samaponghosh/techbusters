import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-hidden="true">
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title text-center">Log In</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					<form action="#" method="post">
						<div className="form-group">
							<label className="col-form-label">Username</label>
							<input type="text" className="form-control" placeholder=" " name="Name" required=""/>
						</div>
						<div className="form-group">
							<label className="col-form-label">Password</label>
							<input type="password" className="form-control" placeholder=" " name="Password" required=""/>
						</div>
						<div className="right-w3l">
							<input type="submit" className="form-control" value="Log in"/>
						</div>
						<div className="sub-w3l">
							<div className="custom-control custom-checkbox mr-sm-2">
								<input type="checkbox" className="custom-control-input" id="customControlAutosizing"/>
								<label className="custom-control-label" htmlFor="customControlAutosizing">Remember me?</label>
							</div>
						</div>
						<p className="text-center dont-do mt-3">Don't have an account?
							<Link to="/register" data-toggle="modal" data-target="#exampleModal2">
								Register Now</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}
