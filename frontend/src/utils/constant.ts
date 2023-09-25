import logo from '../../public/logo.png';

const BASE_URL = 'http://localhost:3001';
const GB_CURRENCY = Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

const Deals = [
  {
    id: 1,
    name: 'All Deal',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/all_deals.jpg',
  },
  {
    id: 2,
    name: 'Deal of the Day',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg',
  },
  {
    id: 3,
    name: 'Lightning Deal',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/trending.jpg',
  },
  {
    id: 4,
    name: 'Mobiles Electronics',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg',
  },
  {
    id: 5,
    name: 'Electronics',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/electronics.jpg',
  },
  {
    id: 6,
    name: 'Mobile & Computer Accessories',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/computer_accessories.jpg',
  },
  {
    id: 1,
    name: 'All Deal',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/all_deals.jpg',
  },
  {
    id: 2,
    name: 'Deal of the Day',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg',
  },
  {
    id: 3,
    name: 'Lightning Deal',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/trending.jpg',
  },
  {
    id: 4,
    name: 'Mobiles Electronics',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg',
  },
  {
    id: 5,
    name: 'Electronics',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/electronics.jpg',
  },
  {
    id: 6,
    name: 'Mobile & Computer Accessories',
    imageUrl:
      'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/computer_accessories.jpg',
  },
];

const homeDecorImg = [
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/BTFGW/Home_Decor_-_PCQC_-_Resized._SY232_CB595940621_.jpg',
    text: 'Home Decor',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/BTFGW/HF_-_PCQC_-_Resized._SY232_CB595940621_.jpg',
    text: 'Home Furnishing',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/BTFGW/HS_-_PCQC_-_Resized._SY232_CB595940621_.jpg',
    text: 'Home Storage',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/BTFGW/IL_-_PCQC_-_Resized._SY232_CB595940621_.jpg',
    text: 'Lighting Solutions',
  },
];
const homeCleanerImg = [
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_376x232_4._SY232_CB600489960_.jpg',
    text: 'Spin mops, wipes & more',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_376x232_3._SY232_CB600489960_.jpg',
    text: 'Bathroom hardware & accessories',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_376x232_7._SY232_CB600489960_.jpg',
    text: 'Hammers, screwdrivers & more',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_376x232_5._SY232_CB600489960_.jpg',
    text: 'Extension boards, plugs & more',
  },
];
const mesStyle = [
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-372-232._SY232_CB636110853_.jpg',
    text: 'Clothing ',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-372-232._SY232_CB636110853_.jpg',
    text: 'Footwear',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg',
    text: 'Watches',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF_4-372-232._SY232_CB636110853_.jpg',
    text: 'Bag & Wallet',
  },
];

export {
  BASE_URL,
  GB_CURRENCY,
  logo,
  Deals,
  homeDecorImg,
  homeCleanerImg,
  mesStyle,
};
