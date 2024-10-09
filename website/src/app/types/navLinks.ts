
// Define the structure for a sub-menu item
export interface SubMenu {
    name: string;
    path: string;
    category: string;
  }
  
  // Define the structure for a navigation link
  export interface NavLink {
    name: string;
    path: string;
    subMenu: SubMenu[]; // Array of SubMenu objects
  }
  