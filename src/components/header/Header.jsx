import Logo from "../../images/logo.png";
import "./Header.css";
export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <div className="title-container">Strong Password Generator</div>
    </div>
  );
}
