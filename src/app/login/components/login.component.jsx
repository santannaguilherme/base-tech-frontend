import { useEffect, useState } from "react";
import Questions from "../../questions/components/question.component";
import service from "../../service";

const Login = () => {
  useEffect(() => {}, []);

  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handleSenha(event) {
    setSenha(event.target.value);
  }
  function handleSubmit() {
    setUser({ user: email, password: senha });
    service.login(user)
  }
  return (
    <div>
      <h3>Login</h3>

        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={handleEmail}
        />
        <label>Senha</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={handleSenha}
        />

      <button className="btn btn-primary btn-block" onClick={handleSubmit}>
        Entrar
      </button>
      <p className="forgot-password text-right">
        <a href="#">Esqueci a Senha</a>
      </p>
    </div>
  );
};

export default Login;
