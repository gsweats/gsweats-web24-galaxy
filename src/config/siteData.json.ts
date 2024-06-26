export interface SiteDataProps {
  name: String; // kinda like an id... e.g. `gsweats`
  title: string;  // A "Display Name" if you will.. e.g. `GSweats.ca`
  htmlTitle: string;  // Default HTML Title
  htmlDescription: string; // Default HTML Description
  useViewTransitions?: boolean;
  useAnimations?: boolean;
  author: {
    name: string;
    email: string;
  };
  defaultImage: {
    src: string;
    alt: string;
  };
  // used for twitter cards when sharing a blog post on twitter
  twitter: {
    site: string;
    creator: string;
  };

  // EXTRAS
  analytics?: {
    ga?: {
      measurementId: string; // @example `G-12ABC3DE45`
    }
    gtm?: {
      id: string; // @example `GTM-1AB2CDEFG`
    }
  }

}

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "GSweats.ca",
  // Your website's title and description (meta fields)
  title: "GSweats.ca",
  htmlTitle: "GSweats.ca (a.k.a. GregSweats, Greg Stevens, etc.)",
  htmlDescription: "I smash buttons, then good stuff happens.",
  useViewTransitions: true,
  useAnimations: true,
  // Your information!
  author: {
    name: "GSweats",
    email: "holla@gsweats.ca",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/gsweats-logo.jpg",
    alt: "GSweats Logo (default meta tag from siteData.json.ts)",
  },

  // sharing on twitter? preview cards...unfurl?
  // @see `Seo.astro`
  twitter: {
    site: "@gsweatsss",
    creator: "@gsweatsss",
  },

  // Google Analytics (GA) & Google Tag Manager (GTM)
  analytics: {
    ga: {
      measurementId: "G-35X6WN2E63"
    },
    gtm: {
      id: "GTM-PQJNM999"
    }
  }

};

export default siteData;
