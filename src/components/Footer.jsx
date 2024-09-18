import React from 'react';

const footerLinks = [
  { text: 'Home', hasSeparator: true },
  { text: 'FAQs', hasSeparator: true },
  { text: 'Railway Admin Login', hasSeparator: true },
  { text: 'MIS Report Login', hasSeparator: false }
];

function FooterLink({ text, hasSeparator }) {
  return (
    <div className="flex relative gap-3 items-start self-stretch px-3 py-0.5 my-auto whitespace-nowrap">
      <div>{text}</div>
      {hasSeparator && (
        <div className="flex absolute -right-px top-2/4 z-0 shrink-0 w-px h-3 bg-white -translate-y-2/4 translate-x-[0%]" />
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center px-72 py-4 w-full text-sm text-white bg-rose-900 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col px-4 w-full max-w-[1370px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-center items-start w-full max-md:max-w-full">
          <div className="grow shrink pt-0.5 pb-px min-w-[240px] w-[270px]">
            Copyright ©2019 RAILMADAD. All Rights Reserved.
          </div>
          <nav className="flex flex-col grow shrink justify-center items-start min-w-[240px] w-[406px] max-md:max-w-full">
            <div className="flex gap-1 items-center pt-px max-md:max-w-full">
              {footerLinks.map((link, index) => (
                <FooterLink key={index} text={link.text} hasSeparator={link.hasSeparator} />
              ))}
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;