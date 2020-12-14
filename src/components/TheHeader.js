import "./TheHeader.css";

const TheHeader = () => {
  return (
    <header className="header">
      <div className="brand"></div>
      <ul className="links">
        <li className="link">Home</li>
        <li className="link">Documents</li>
        <li className="link">API</li>
        <li className="link">About</li>
        <li className="link">Log in</li>
        <li className="link cta">Sign up</li>
      </ul>
    </header>
  );
};

export default TheHeader;
