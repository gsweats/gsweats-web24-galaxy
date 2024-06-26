export interface SiteDataProps {
  name: String;
  title: string;
  description: string;
  useViewTransitions?: boolean;
  useAnimations?: boolean;
  author: {
    name: string;
    email: string;
    twitter: string; // used for twitter cards when sharing a blog post on twitter
  };
  defaultImage: {
    src: string;
    alt: string;
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
  name: "GSweats",
  // Your website's title and description (meta fields)
  title:
    "GSweats.ca (a.k.a. GregSweats, Greg Stevens, etc.)",
  description:
    "",
  useViewTransitions: true,
  useAnimations: true,
  // Your information!
  author: {
    name: "GSweats",
    email: "holla@gsweats.ca",
    // todo: Find out why twitter is here? and repeat of name?
    twitter: "gsweatsss",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/cosmic-themes-logo.jpg",
    alt: "GSweats Logo (default meta tag from siteData.json.ts)",
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
