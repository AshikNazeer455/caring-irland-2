import React from "react";
import './MyPage.css'
import {Contactimg} from './Contactimg'
import {AiOutlineInstagram,AiFillFacebook,AiOutlineWhatsApp} from 'react-icons/ai'


export const Footer = () => {
  return (
    <><></><Contactimg />
  
    <div _ngcontent-iof-c8="" class="footerContact">
      <div _ngcontent-iof-c8="" class="footernavlinkContainer">
        <div _ngcontent-iof-c8="" class="footerLinkrow">
          <a
            _ngcontent-iof-c8=""
            href="/"
            class="footerPageLink"
          >
            Home
          </a>
          <a href =""
          class="socialLink">
            <AiOutlineInstagram size={30} color="white"/>
          </a>
         
        </div>
        <div _ngcontent-iof-c8="" class="footerLinkrow">
          <a
            _ngcontent-iof-c8=""
            href="/about"
            class="footerPageLink"
          >
            About Us
          </a>
          <a href =""
          className="socialLink">
            <AiFillFacebook size={30} color="white"/>
          </a>
         
        </div>
        <div _ngcontent-iof-c8="" class="footerLinkrow">
          <a
            _ngcontent-iof-c8=""
            href="/services"
            class="footerPageLink"
          >
            Services
          </a>
          <a href =""
          className="socialLink">
            <AiOutlineWhatsApp size={30} color="white"/>
          </a>
          
        </div>
        <div _ngcontent-iof-c8="" class="footerLinkrow">
          <a
            _ngcontent-iof-c8=""
            href="/news"
            class="footerPageLink"
          >
            News
          </a>
          
        </div>
        <div _ngcontent-iof-c8="" class="footerLinkrow">
          <a
            _ngcontent-iof-c8=""
            href="/contact"
            class="footerPageLink"
          >
            Contact Us
          </a>
          
        </div>
        <div _ngcontent-iof-c8="" class="footerLinkrow">
          <a
            _ngcontent-iof-c8=""
            href="/gallery"
            class="footerPageLink"
          >
            Gallery
          </a>
        </div>
      </div>
      <div _ngcontent-iof-c8="" class="AddressContainer">
        <h2 _ngcontent-iof-c8="">Address</h2>
        <a
          _ngcontent-iof-c8=""
          target="_blank"
          href="https://goo.gl/maps/4veKurLxMdBG4tXw5"
        >
         Marsh Road, Bellergan,

Dundalla, Co-Louth,

Ireland A91FV40 
        </a>
      </div>
      <div _ngcontent-iof-c8="" class="PhoneContainer">
        <h2 _ngcontent-iof-c8="">Phone Number</h2>
        <div _ngcontent-iof-c8="" class="PhoneItem firstphoneItem">
          <div _ngcontent-iof-c8="" class="PhoneName">
            <p _ngcontent-iof-c8="" class="personName">
            
            </p>
            <p _ngcontent-iof-c8="" class="Designation">
            
            </p>
          </div>
          <div _ngcontent-iof-c8="" class="PhoneNumber">
            <a _ngcontent-iof-c8="" href="tel:+919539939160">
          
            </a>
          </div>
        </div>
        <div _ngcontent-iof-c8="" class="PhoneItem">
          <div _ngcontent-iof-c8="" class="PhoneName">
            <p _ngcontent-iof-c8="" class="personName">
        
            </p>
            <p _ngcontent-iof-c8="" class="Designation">
            
            </p>
          </div>
          <div _ngcontent-iof-c8="" class="PhoneNumber">
            <a _ngcontent-iof-c8="" href="">
            +353 89 263 8520
            </a>
          </div>
        </div>
      </div>
      <div _ngcontent-iof-c8="" class="EmailContainer">
        <h2 _ngcontent-iof-c8="">Email</h2>
        <a _ngcontent-iof-c8="" href="">
        cv@caringhandsireland.eu
        </a>
        <a _ngcontent-iof-c8="" href="">
        apply@caringhandsireland.eu
        </a>
      </div>
    </div></>
  );
};
