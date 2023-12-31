import logo from '../../public/logo.png';

const BASE_URL = 'http://localhost:3001';
const GB_CURRENCY = Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

const productsBottom: any = [
  {
    image_url:
      'https://images-eu.ssl-images-amazon.com/images/I/615Bt2PzCtL._AC_UL320_SR320,320_.jpg',
    name: 'USB-C to USB-C Cable',
    price: '19.99',
    quantity: 1,
    description: 'description about image',
  },
  {
    image_url:
      'https://images-eu.ssl-images-amazon.com/images/I/51kEh+wYWLL._AC_UL320_SR320,320_.jpg',
    name: 'OnePlus Warp Charge Cable',
    price: '29.99',
    quantity: 1,
    description: 'description about image',
  },
  {
    image_url:
      'https://images-eu.ssl-images-amazon.com/images/I/51+Xck7N4VL._AC_UL320_SR320,320_.jpg',
    name: 'USB-C to USB-C Cable',
    price: '19.99',
    quantity: 1,
    description: 'description about image',
  },
  {
    image_url:
      'https://images-eu.ssl-images-amazon.com/images/I/41HYPIrcYQL._AC_UL320_SR320,320_.jpg',
    name: 'OnePlus Warp Charge Cable',
    price: '29.99',
    quantity: 1,
    description: 'description about image',
  },
  {
    image_url:
      'https://images-eu.ssl-images-amazon.com/images/I/61T-BidOUgL._AC_UL320_SR320,320_.jpg',
    name: 'USB-C to USB-C Cable',
    price: '19.99',
    quantity: 1,
    description: 'description about image',
  },
  {
    image_url:
      'https://images-eu.ssl-images-amazon.com/images/I/615X5v6NsIL._AC_UL320_SR320,320_.jpg',
    name: 'OnePlus Warp Charge Cable',
    price: '29.99',
    quantity: 1,
    description: 'description about image',
  },
];

const bestSellerData = [
  {
    img: 'https://m.media-amazon.com/images/I/41cf7cXivDL._AC_SY400_.jpg',
    title: 'Best Sellers',
  },
  {
    img: 'https://m.media-amazon.com/images/I/41KuRShR97L._AC_SY400_.jpg',
    title: 'Best Sellers',
  },
  {
    img: 'https://m.media-amazon.com/images/I/61m5Uu4OMJL._AC_SY400_.jpg',
    title: 'Best Sellers',
  },
  {
    img: 'https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_SY400_.jpg',
    title: 'Best Sellers',
  },
  {
    img: 'https://m.media-amazon.com/images/I/61Pg1H7U15L._AC_SY400_.jpg',
    title: 'Best Sellers',
  },
  {
    img: 'https://m.media-amazon.com/images/I/61rS2NX1vyL._AC_SY400_.jpg',
    title: 'Best Sellers',
  },
  {
    img: 'https://m.media-amazon.com/images/I/61zroMjd9FL._AC_SY400_.jpg',
    title: 'Best Sellers',
  },
  {
    img: 'https://m.media-amazon.com/images/I/61ERDR3tATL._AC_SY400_.jpg',
    title: 'Best Sellers',
  },
];
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
const headphonesImg = [
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boat_Desktop_Qc_2x._SY232_CB577919562_.jpg',
    text: 'Up to 70% off | Boat',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boult_Desktop_Qc_2x._SY232_CB577919562_.jpg',
    text: 'Up to 70% off | Boult',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Noise_Desktop_Qc_2x._SY232_CB577919562_.jpg',
    text: 'Up to 70% off | Noise',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Zebronics_Desktop_Qc_2x._SY232_CB577919562_.jpg',
    text: 'Up to 70% off | Zebronics',
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

const cricketImg = [
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_QC_TV_2X._SY232_CB578640810_.jpg',
    text: 'Up to 70% off TVs',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_QC_Jersey_2X._SY232_CB578640810_.jpg',
    text: 'Up to 70% off Jerseys',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_QC_Cricket_2X._SY232_CB578640810_.jpg',
    text: 'Up to 70% off Cricket',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_QC_Mob_2X._SY232_CB578640810_.jpg',
    text: 'Up to 70% off Mobiles',
  },
];

const gridData = [
  {
    title: 'Up to 70% off | Headphones',
    url: headphonesImg,
  },
  {
    title: 'Cricket Fever Offers',
    url: cricketImg,
  },
  {
    title: 'Revamp your home in style',
    url: homeDecorImg,
  },
  {
    title: 'Up to 60% off | Styles for men',
    url: mesStyle,
  },
  {
    title: 'All your home improvement needs',
    url: homeCleanerImg,
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
  productsBottom,
  headphonesImg,
  cricketImg,
  bestSellerData,
  gridData,
};
