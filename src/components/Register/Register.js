export const Register = () => {
    return (
      <div className="container">
      <h1>Register</h1>
      <form>
        <label htmlFor="correo">Email:</label>
        <input type="email" id="correo" name="correo" required />
        <label htmlFor="contrasena">Password:</label>
        <input type="password" id="contrasena" name="contrasena" required />
        <label htmlFor="confirmar-contrasena">Repeat password:</label>
        <input type="password" id="confirmar-contrasena" name="confirmar-contrasena" required />
        <button type="submit">Register</button>
      </form>
    </div>
    );
};