
<head>
  <style>
    body{
        background-color:#FFF;
    }
    form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 6rem;
    padding: 1.5rem;
    width: 21.875rem;
    height: 25rem;
    border-radius: 5px;
    background-color: white;
    color: black;
   
    }

    input[type="email"],
    input[type="password"] {
      display: block;
      margin-bottom: 10px;
      padding: 10px;
      border:none;
      width: 80%;
      box-sizing: border-box;
      outline: none;
    }

    button[type="submit"] {
      background-color: #182E59;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
</head>

<body>
  <form action="{{ route('password.update') }}" method="POST">
  {{method_field('POST')}}`
    @csrf
    <h1>Reset Password</h1><br><br>
    <input type="hidden" name="token" value="{{ $token }}">
    <input type="email" name="email" placeholder="Email">
    <input type="password" name="password" placeholder="Password">
    <input type="password" name="password_confirmation" placeholder="Confirm Password">
    <br><br><button type="submit">RESET PASSWORD</button>
  </form>
</body>