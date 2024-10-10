// Import the types
import { NavLink } from '../types/navLinks';

// Site-related constants
export const SITE_TITLE = 'Phoenix Energy - Renewable Energy Solutions';
export const SITE_DESCRIPTION = 'Providing renewable energy solutions to help create a sustainable future.';

// Define constants for the paths in your app
export const HOME_PAGE = '/';
export const ABOUT_PAGE = '/about';
export const SOLUTIONS_PAGE = '#';
export const PROJECTS_PAGE = '/projects';
export const CONTACT_PAGE = '/contact-us';
export const SOLAR = '/solutions/embedded-systems';
export const WHEELING = '/solutions/wheeling';
export const CARBON_CREDITS = '/solutions/carbon-credits';
export const WASTE_VALOR = '/solutions/waste-valorization';
export const HYDROGEN = '/solutions/hydrogen-technologies';

// Navigation links using the constants
export const NAV_LINKS: NavLink[] = [
    { name: 'About', path: ABOUT_PAGE, subMenu: [] },
    {
      name: 'Solutions',
      path: SOLUTIONS_PAGE,
      subMenu: [
        { name: 'Embedded Solar', path: SOLAR, category: 'save', icon: './icons/Solar.svg' },
        { name: 'Wheeled Power', path: WHEELING, category: 'save', icon: './icons/Wheeling.svg' },
        { name: 'Waste Valorization', path: WASTE_VALOR, category: 'earn' , icon: './icons/Waste-Valorization.svg'},
        { name: 'Carbon Credits', path: CARBON_CREDITS, category: 'earn' , icon: './icons/Carbon-Credits.svg'},
        { name: 'Hydrogen Technologies', path: HYDROGEN, category: 'save' , icon: './icons/Hydrogen.svg'},
      ],
    },
    { name: 'Our Projects', path: PROJECTS_PAGE, subMenu: [] },
    { name: 'Contact', path: CONTACT_PAGE, subMenu: [] },
  ];


// URL-related constants
export const BASE_URL = 'https://phoenixenergy.com';



// Other constants (e.g., API endpoints, contact info)
export const CONTACT_EMAIL = 'info@phoenixenergy.com';
export const PHONE_NUMBER = '+123 456 7890';
