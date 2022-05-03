import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Jodhpur's</span>
        <span className="headerTitleLg">Indigenous Medicines </span>
      </div>
      <img
        className="headerImg"
        src="https://github.com/puniakeshav/images/blob/main/home.jpg?raw=true&h=650&w=940"
        alt=""
      />
    </div>
  );
}
