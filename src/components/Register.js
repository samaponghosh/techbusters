import React from 'react'

export default function Register() {
  return (
    <div>
      <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-hidden="true">
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title">Register</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					<form action="#" method="post">
						<div className="form-group">
							<label className="col-form-label">Your Name</label>
							<input type="text" className="form-control" placeholder=" " name="Name" required=""/>
						</div>
						<div className="form-group">
							<label className="col-form-label">Email</label>
							<input type="email" className="form-control" placeholder=" " name="Email" required=""/>
						</div>
						<div className="form-group">
							<label className="col-form-label">Password</label>
							<input type="password" className="form-control" placeholder=" " name="Password" id="password1" required=""/>
						</div>
						<div className="form-group">
							<label className="col-form-label">Confirm Password</label>
							<input type="password" className="form-control" placeholder=" " name="Confirm Password" id="password2" required=""/>
						</div>
						<div className="right-w3l">
							<input type="submit" className="form-control" value="Register"/>
						</div>
						<div className="sub-w3l">
							<div className="custom-control custom-checkbox mr-sm-2">
								<input type="checkbox" className="custom-control-input" id="customControlAutosizing2"/>
								<label className="custom-control-label" htmlFor="customControlAutosizing2">I Accept to the Terms & Conditions</label>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}
