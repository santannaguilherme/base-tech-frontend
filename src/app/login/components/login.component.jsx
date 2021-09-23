const Login = () => {
  return (
    <form>
      <h3>Login</h3>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Senha</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Entrar
      </button>
      <p className="forgot-password text-right">
         <a href="#">Esqueci a Senha</a>
      </p>
    </form>
  );
};

export default Login
