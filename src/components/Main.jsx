import React from 'react';
import GrievanceForm from './Main/GrievanceForm';
import '../App.css';

const links = [
  { href: "https://www.irctc.co.in/nget/", title: "Ticket Booking", img: "booking-icon-1.png", text: "Ticket Booking" },
  { href: "https://enquiry.indianrail.gov.in/", title: "Train Enquiry", img: "booking-icon-2.png", text: "Train Enquiry" },
  { href: "http://www.indianrail.gov.in/", title: "Reservation Enquiry", img: "booking-icon-3.png", text: "Reservation Enquiry" },
  { href: "https://rr.irctc.co.in/#/home", title: "Retiring Room Booking", img: "booking-icon-4.png", text: "Retiring Room Booking" },
  { href: "http://www.indianrailways.gov.in/", title: "Indian Railways", img: "booking-icon-5.png", text: "Indian Railways" },
  { href: "https://play.google.com/store/apps/details?id=com.cris.utsmobile&hl=en_IN", title: "UTS Ticketing", img: "booking-icon-6.png", text: "UTS Ticketing" },
  { href: "https://www.fois.indianrail.gov.in/RailSAHAY/index.jsp", title: "Freight Business", img: "booking-icon-7.png", text: "Freight Business" },
  { href: "https://parcel.indianrail.gov.in/", title: "Railway Parcel Website", img: "booking-icon-2.png", text: "Railway Parcel Website" },
];

function Main() {
  return (
    <div className='bg-cover bg-center bg-no-repeat bg-fixed min-h-screen flex flex-col md:flex-row p-6 md:p-10 bg-custom-background w-full'>
      <div className='flex flex-col items-center justify-center md:items-start w-full md:w-1/2 mb-8 md:mb-0'>
        <ul className="impLinks grid grid-cols-2 gap-4 md:grid-cols-4 h-auto">
          {links.map(({ href, title, img, text }, index) => (
            <li key={index}>
              <a href={href} title={title} target="_blank" rel="noopener noreferrer" className="block text-center p-4 rounded-lg shadow-md hover:bg-gray-100 transition">
                <span className="icon">
                  <img src={`https://railmadad.indianrailways.gov.in/madad/final/images/${img}`} width="61" height="61" alt={title} className="mx-auto" />
                </span>
                <span className="block mt-2 text-white text-sm font-semibold">
                  {text.split(' ').map((word, i) => <>{word}<br key={i} /></>)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full md:w-1/2'>
        <GrievanceForm />
      </div>
    </div>
  );
}

export default Main;
