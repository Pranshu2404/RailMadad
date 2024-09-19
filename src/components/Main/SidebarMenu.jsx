import React from 'react';

const menuItems = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/752a24338021258dcca8703c7c16c9956c94c0569d641d2da6b3c856a033cc7b?placeholderIfAbsent=true&apiKey=b15609f616694ef19fbcd9e8c68bf22d',
    label: 'Train',
    value: 'train'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a5f28622390ad8b7cdad547ebc1da654fd7f45267e125574001c5cf82dbff273?placeholderIfAbsent=true&apiKey=b15609f616694ef19fbcd9e8c68bf22d',
    label: 'Station',
    value: 'station'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cd276fcae004030b55a00f2c215b1036a6b01d0c0807b2c83e47a459398a72cd?placeholderIfAbsent=true&apiKey=b15609f616694ef19fbcd9e8c68bf22d',
    label: 'Appreciation/ Rail Anubhav',
    value: 'appreciation'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6cb8a153ff66e77d2bced9d75c0cc39d8929f0842f81fb915da557970d4ef6e5?placeholderIfAbsent=true&apiKey=b15609f616694ef19fbcd9e8c68bf22d',
    label: 'Enquiry',
    value: 'enquiry'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f52c5653a624856de93aa6e2abe45e23ba2d86ac6319dc90fb09dd6442aa136?placeholderIfAbsent=true&apiKey=b15609f616694ef19fbcd9e8c68bf22d',
    label: 'Track Your Concern',
    value: 'track'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7dfc345cb27c6b6f0626066b6cb9613338cdd04a408ee74f8a17c649a2693c8?placeholderIfAbsent=true&apiKey=b15609f616694ef19fbcd9e8c68bf22d',
    label: 'Suggestions',
    value: 'suggestions'
  },
];

const SideBarMenu = ({ onSelect, selected }) => {
  return (
    <nav className="left-0 z-0 top-[21px] md:w-[152px] w-20 bg-rose-800 text-white uppercase text-center p-2 my-10 rounded-xl">
      {menuItems.map((item, index) => (
        <div
          key={index}
          onClick={() => onSelect(item.value)}
          className={`relative flex flex-col items-center py-4 border-b border-pink-800 cursor-pointer ${selected === item.value ? 'bg-rose-900' : ''}`}
        >
          <img loading="lazy" src={item.icon} alt={item.label} className="md:w-[35px] w-[20px] aspect-square" />
          <span className="mt-2 p-2 md:text-lg text-[10px]">{item.label}</span>
          {selected === item.value && (
            <>
              <div className="absolute top-0 right-0 w-1.5 bg-rose-900 h-full" />
              <div className="absolute top-1/2 right-0 -translate-y-1/2 border-y-[6px] border-r-[6px] border-white border-opacity-90" />
            </>
          )}
        </div>
      ))}
    </nav>
  );
};

export default SideBarMenu;
