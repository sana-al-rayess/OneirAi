
function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [nameError, setNameError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		let valid = true;
		if (!name.trim()) {
			setNameError("Name is required");
			valid = false;
		}
		if (!email.trim()) {
			setEmailError("Email is required");
			valid = false;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			setEmailError("Email is invalid");
			valid = false;
		}
		if (!password.trim()) {
			setPasswordError("Password is required");
			valid = false;
		} else if (password.trim().length < 6) {
			setPasswordError("Password must be at least 6 characters");
			valid = false;
		}
		if (valid) {
			// submit the form or perform other actions
			console.log("Form submitted");
		}
	};

	return (
		<div className="flex">
			<div className="flex">
				<a href="/" className="login-title-main white flex text-decoration-none">
					<img className="logo" src={Logo} alt="logo" />
				</a>
			</div>
			<div className="container">
				<input type="checkbox" id="chk" aria-hidden="true" />

				<div className="signup">
					<form onSubmit={handleSubmit}>
						<label htmlFor="chk" aria-hidden="true">
							Sign up
						</label>
						<input
							type="text"
							name="name"
							placeholder="Name"
							required
							className={`input-with-user-icon ${nameError ? "error" : ""}`}
							value={name}
							onChange={(e) => {
								setName(e.target.value);
								setNameError("");
							}}
						/>
						{nameError && <p className="error-message">{nameError}</p>}
						<input
							type="email"
							name="email"
							placeholder="Email"
							required
							className={`input-with-mail-icon ${emailError ? "error" : ""}`}
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								setEmailError("");
							}}
						/>
						{emailError && <p className="error-message">{emailError}</p>}
						<input
							type="password"
							name="password"
							placeholder="Password"
							required
							className={`input-with-lock-icon ${passwordError ? "error" : ""}`}
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
								setPasswordError("");
							}}
						/>
						{passwordError && <p className="error-message">{passwordError}</p>}
						<button>Sign up</button>
					</form>
				</div>

				<div className="login">
					<form onSubmit={handleSubmit}>
						<label htmlFor="chk" aria-hidden="true">
							Login
						</label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							required
							className={`input-with-mail-icon ${emailError ? "error" : ""}`}
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								setEmailError("");
							}}
						/>
						{/* <input type="password" name="pswd" placeholder="Password" required className="input-with-lock-icon"/> */}
						<input
							type="password"
							name="password"
							placeholder="Password"
							required
							className={`input-with-lock-icon ${passwordError ? "error" : ""}`}
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
								setPasswordError("");
							}}
						/>
						{passwordError && <p className="error-message">{passwordError}</p>}
						<button>Login</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;