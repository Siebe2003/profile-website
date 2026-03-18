import React from "react";
import {
  TbMail,
  TbPhone,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbMapPin2,
} from "react-icons/tb";

function ContactInfo() {
  return (
    <ul className="flex flex-col gap-5 py-6 items-center text-sm opacity-70 md:text-base md:py-0 md:opacity-100 md:items-start">
      <li className="contact-info">
        <TbMail className="text-lg md:text-2xl shrink-0" />
        <a href="mailto:verhaegensiebe@gmail.com">verhaegensiebe@gmail.com</a>
      </li>
      <li className="contact-info">
        <TbPhone className="text-lg md:text-2xl shrink-0" /> +32 496 20 86 23
      </li>
      <li className="contact-info">
        <TbBrandLinkedin className="text-lg md:text-2xl shrink-0" />
        <a
          href="https://www.linkedin.com/in/siebe-verhaegen-64a9892a3/"
          className="text-ellipsis line-clamp-1"
        >
          https://www.linkedin.com/in/siebe-verhaegen-64a9892a3/
        </a>
      </li>
      <li className="contact-info">
        <TbBrandWhatsapp className="text-lg md:text-2xl shrink-0" />
        <a href="https://wa.me/32469208623">WhatsApp Chat</a>
      </li>
      <li className="contact-info">
        <TbMapPin2 className="text-lg md:text-2xl shrink-0" />
        2520 Ranst, Belgium
      </li>
    </ul>
  )
}

export default ContactInfo;
