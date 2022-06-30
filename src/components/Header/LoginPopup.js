function LoginPopup() {
  return (
    <div className="popup-container">
      <div className="wrapper">
        <form>
          <input type="email"></input>
          <input type="password"></input>
          <br></br>
          <button className="login-btn">LogIn</button>
        </form>
      </div>
    </div>
  );
}
export default LoginPopup;
