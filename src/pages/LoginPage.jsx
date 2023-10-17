import React from "react";

const LoginPage = () => {
	return (
		<div className='container'>
			<form style={{ display: "flex", gap: "40px" }}>
				<label>
					Email or username
					<input type='text' />
				</label>
				<label>
					Password
					<input type='password' />
				</label>
			</form>
		</div>
	);
};

export default LoginPage;
