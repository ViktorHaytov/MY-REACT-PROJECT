import { useForm } from "../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const {onLoginSubmit} = useContext(AuthContext);
  const {bookValues, changeHandler, onSubmit} = useForm({
    email: '',
    password: '',
  },onLoginSubmit);
  return (
    <div className="container">
      <h1>Login</h1>
      <form method="POST" onSubmit={onSubmit}>
        <label htmlFor="usuario">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={bookValues.email}
          onChange={changeHandler}
        />
        <label htmlFor="contrasena">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={bookValues.password}
          onChange={changeHandler}
        />
        <input type="submit" className="btn submit" value="Login" />
      </form>
    </div>
  );
};