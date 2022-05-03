import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        {/* <img
          className="sidebarImage"
          src="https://github.com/puniakeshav/images/blob/main/prasenjeet.jpg?raw=true"
          alt=""
        />
        <h2> Prasanjeet tirubhavan</h2>
        <p>Assistant Professor</p>
        <p>  Dept of Humanities & Social Sciences, IIT Jodhpur</p>
        <p>eMail: prasenjeet@iitj.ac.in</p>
        <p>Ph.D.: Delhi University</p>
        <p>Anthropology of Material Objects, STS studies in Sociology, Political Ecology, Tourism and Youth Subcultures</p> */}
      </div>
      <div className="sidebarItem">
        <img
          className="sidebarImage"
          src="https://github.com/puniakeshav/images/blob/main/Keshav.jpeg?raw=true"
          alt=""
        />
        <h2> Keshav</h2>
        <p>B.Tech undergraduate </p>
        <p>Dept of Computer Science & Engineering,IIT Jodhpur</p>
        <p>eMail: keshav.1@iitj.ac.in</p>
      </div>
      <div className="sidebarItem">
        <img
          className="sidebarImage"
          src="https://github.com/puniakeshav/images/blob/main/sanskriti.jpeg?raw=true"
          alt=""
        />
        <h2> Sanskriti</h2>
        <p>B.Tech undergraduate </p>
        <p>Dept of Bioscience & Bioengineering,IIT Jodhpur</p>
        <p>eMail: hedaoo.1@iitj.ac.in</p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div> */}
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div> */}
      <span className="sidebarTitle">UNDER THE GUIDANCE OF</span>
      <h3>Professor Prasenjeet A. Tribhuvan</h3>
    </div>
  );
}
