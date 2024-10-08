// Site-related constants
export const SITE_TITLE = 'Phoenix Energy - Renewable Energy Solutions';
export const SITE_DESCRIPTION = 'Providing renewable energy solutions to help create a sustainable future.';

// Define constants for the paths in your app
export const HOME_PAGE = '/';
export const ABOUT_PAGE = '/about';
export const SERVICES_PAGE = '/services';
export const CONTACT_PAGE = '/contact-us';
export const SOLAR = '/embedded-systems';
export const WHEELING = '/wheeling';

// Navigation links using the constants
export const NAV_LINKS = [
  { name: 'About', path: ABOUT_PAGE, subMenu: []},
  { name: 'Solutions', path: SERVICES_PAGE , 
    subMenu: [{name: 'Embedded Solar', path: SOLAR},
            {name: 'Wheeled Power', path: WHEELING},
            ]},
  { name: 'Our Projects', path: SERVICES_PAGE, subMenu: []},
  { name: 'Contact', path: CONTACT_PAGE , subMenu: []},
];


// URL-related constants
export const BASE_URL = 'https://phoenixenergy.com';



// Other constants (e.g., API endpoints, contact info)
export const CONTACT_EMAIL = 'info@phoenixenergy.com';
export const PHONE_NUMBER = '+123 456 7890';
