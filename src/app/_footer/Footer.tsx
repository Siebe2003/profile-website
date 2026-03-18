import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="w-full p-10 bg-background flex flex-col items-center gap-10 text-muted-foreground md:flex-row-reverse lg:gap-30 xl:gap-40 2xl:px-50">
      <div className="text-center md:text-start md:flex-1">
        <h2 className="font-bold mb-3 xl:mb-5">Contact me</h2>
        <div className="text-sm mb-2">verhaegensiebe@gmail.com</div>
        <div className="text-sm">+32 496 20 86 23</div>
      </div>
      <div className="text-center  md:text-start md:flex-1">
        <h2 className="font-bold mb-3 xl:mb-5">Find me on LinkedIn</h2>
        <a href="https://www.linkedin.com/in/siebe-verhaegen-64a9892a3/" className="text-sm mb-2">https://www.linkedin.com/in/siebe-verhaegen-64a9892a3/</a>
      </div>
      <div className="w-60 md:w-full md:flex-1">
        <Image width="900" height="264" src="/images/powered-by-bgg.png" alt="This website contains use of the BoardGameGeek API" />
      </div>
    </footer>
  );
}

export default Footer;
