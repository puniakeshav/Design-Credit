import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./resources.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Resources() {
  return (
    <>
      <div className="resources">
      <div className="flex12">
      <div className="map">
      <h>Ayurveda Institute</h>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.090057076749!2d73.10909031484225!3d26.452825883327854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941eb41fe40b7e3%3A0x838372e08d0dad6c!2sUniversity%20College%20Of%20Ayurveda%2C%20DSRRAU%20JODHPUR!5e0!3m2!1sen!2sin!4v1651344595285!5m2!1sen!2sin" 
        width="400"
        height="300"
        style={{ border: "0", padding:"30px" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      </div>

      <div className="map">
        <h>Ayurveda Hospital, Mandore</h>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.718459512241!2d73.05846246483958!3d26.335614583379538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d61ba102d75%3A0xc9ddcba9defee3ea!2sAyurvedic%20Hospital%2C%20Magra%20Punjala%2C%20Mandore%2C%20Jodhpur%2C%20Rajasthan%20342007!5e0!3m2!1sen!2sin!4v1651345495271!5m2!1sen!2sin" 
        width="400" 
        height="300" 
        style={{border:"10px", padding:"30px"}} 
        allowfullscreen="" 
        loading="lazy" 
        >
        </iframe></div>

        {/* <div className="map">
        <h>Ayurveda Hospital, Mandore</h>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.6507410456766!2d73.05512031483967!3d26.337806583378555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39419333f21af5f9%3A0x27548edc480bd372!2sAyurvedic%20Hospital!5e0!3m2!1sen!2sin!4v1651345991951!5m2!1sen!2sin"
         width="400" 
         height="300" 
         style={{border:"10px", padding:"30px"}}
         allowfullscreen="" 
         loading="lazy" 
         ></iframe></div> */}

<div className="map">
        <h>Phalodi</h>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.8565056159005!2d72.35622721485767!3d27.12932928303485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3940eaed8546f4cb%3A0xc4709013a4e6dc23!2sPhalodi!5e0!3m2!1sen!2sin!4v1651346393272!5m2!1sen!2sin" 
        width="400" 
        height="300" 
        style={{border:"10px", padding:"30px"}} 
        allowfullscreen="" 
        loading="lazy" 
        ></iframe></div>

        </div>
        
        <Sidebar />
      </div>
      
    </>
  );
}
