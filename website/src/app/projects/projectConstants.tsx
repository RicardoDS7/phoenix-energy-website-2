const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export interface ProjectInfo {
  id: number;
  testimonial: string;
  company: string;
  solutions: string;
  production: string;
  location: string;
  featured_image: string; // Path or URL to the image
}

export const projectDetails: ProjectInfo[] = [
    {
      id: 1,
      testimonial: "Our solar and battery investment ensures reliable power, optimizes production costs, and even generates additional revenue by selling excess energy back to the grid.",
      company: "Condrou Manufacturing",
      solutions: "Battery Energy Storage System (BESS)",
      production: "100 kWp + 120kWh",
      location: "Kempton Park, Gauteng, South Africa",
      featured_image: `${basePath}/images/projects/condrou-manufacturing-featured-image.webp`,
    },
    {
      id: 2,
      testimonial: "By investing in solar and battery storage, we cut electricity bills by 45%, secured reliable power, and set a path to complete energy independence.",
      company: "Cafe Mozart",
      solutions: "Battery Energy Storage System (BESS)",
      production: "100 kWp + 240kWh",
      location: "Midrand, Gauteng, South Africa",
      featured_image: `${basePath}/images/projects/cafe-mozart-featured-image.webp`,
    },
    {
      id: 3,
      testimonial: "By investing in solar, we were able to ensure affordable, uninterrupted power for our tenants, strengthen long-term relationships, reduce operational costs, and generate additional revenue by selling excess energy back to the grid.",
      company: "Framework Property Services",
      solutions: "Grid-Tied Solar",
      production: "270 kWp",
      location: "Rouxville, Gauteng, South Africa",
      featured_image: `${basePath}/images/projects/framework-property-services-featured-image.webp`,
    },
    {
      id: 4,
      testimonial: "Our solar and battery investment has reduced grid dependence and municipal costs by up to 80%, ensuring reliable amenities for our guests. These savings enable us to expand our system, securing long-term marketability and profitability.",
      company: "Portside Luxury Apartments",
      solutions: "Grid-Tied Solar",
      production: "41.25 kWp",
      location: "Cape Town, Western Cape, South Africa",
      featured_image: `${basePath}/images/projects/portside-luxury-properties-featured-image.webp`,
    },
    {
      id: 5,
      testimonial: "We reduced grid dependence by 95%, eliminated diesel use, and boosted production by 50% to help us meet our growing demand.",
      company: "Go Gourmet Hydroponics",
      solutions: "Battery Energy Storage System (BESS)",
      production: "33 kWp + 120kWh",
      location: "Pretoria, Gauteng, South Africa",
      featured_image: `${basePath}/images/projects/go-gourmet-hydrophonics-featured-image.webp`,
    },
  ];