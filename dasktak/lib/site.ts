// Central config for the Dastak Retreat demo.
// Replace the placeholder phone number, prices and distances with the property's real details before going live.

export const site = {
  name: "Dastak Retreat",
  tagline: "Slate Godam • Kangra Valley",
  address: "Slate Godam, Dharamshala, Kangra, Himachal Pradesh 176215",
  phoneDisplay: "+91 99999 99999",
  phoneHref: "tel:+919999999999",
  whatsappNumber: "919999999999",
  email: "stay@dastakretreat.com",
  mapsQuery: "Slate Godam, Dharamshala, Himachal Pradesh",
  legalEntity: "A unit of Ashwaneel Enterprises LLP",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage =
  "Hi Dastak Retreat! I found you through your website and would love to know about availability and direct-booking rates.";

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=13&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapsQuery)}`;

export const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const navLinks = [
  { label: "Suites & Rooms", href: "#suites" },
  { label: "Experiences", href: "#experiences" },
  { label: "The Valley", href: "#valley" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export type Suite = {
  id: string;
  name: string;
  kicker: string;
  description: string;
  image: string;
  size: string;
  view: string;
  sleeps: string;
  price: number;
  amenities: string[];
  categories: ("valley" | "pets" | "family")[];
  badge?: string;
};

export const suites: Suite[] = [
  {
    id: "kangra-valley-suite",
    name: "The Kangra Valley Suite",
    kicker: "Signature Suite",
    description:
      "Floor-to-ceiling glass frames the Dhauladhar range from the moment you wake. Warm timber, hand-loomed throws and a deep window seat made for doing nothing at all.",
    image: unsplash("1582719478250-c89cae4dc85b", 1200),
    size: "480 sq ft",
    view: "Panoramic valley",
    sleeps: "2 adults + 1 child",
    price: 6800,
    amenities: ["King bed", "Panoramic balcony", "Rain shower", "High-speed WiFi"],
    categories: ["valley"],
    badge: "Most booked",
  },
  {
    id: "misty-mountain-room",
    name: "Misty Mountain Balcony Room",
    kicker: "Balcony Room",
    description:
      "Step out onto a private deck as the morning mist rolls through the pines. Your first cup of Kangra tea, served where the clouds sit lower than you do.",
    image: unsplash("1596394516093-501ba68a0ba6", 1200),
    size: "360 sq ft",
    view: "Dhauladhar & pine forest",
    sleeps: "2 adults",
    price: 4900,
    amenities: ["Queen bed", "Private sun deck", "Tea station", "High-speed WiFi"],
    categories: ["valley"],
  },
  {
    id: "pet-friendly-cottage",
    name: "Pet-Friendly Family Cottage",
    kicker: "Cottage",
    description:
      "A standalone cottage with its own fenced lawn — room for the kids to run, the dog to roam, and the grown-ups to finally sit still by the fire.",
    image: unsplash("1449158743715-0a90ebb6d2d8", 1200),
    size: "720 sq ft",
    view: "Forest & garden",
    sleeps: "4 adults + 2 pets",
    price: 8900,
    amenities: ["King + twin beds", "Private lawn", "Pet beds & bowls", "High-speed WiFi"],
    categories: ["pets", "family"],
    badge: "Pets stay free",
  },
];

export const suiteFilters = [
  { id: "all", label: "All stays" },
  { id: "valley", label: "Valley views" },
  { id: "pets", label: "Pet friendly" },
  { id: "family", label: "Families" },
] as const;

export const gallery = [
  { src: unsplash("1506905925346-21bda4d32df4", 1600), alt: "Peaks rising above a sea of clouds at sunrise" },
  { src: unsplash("1544735716-392fe2489ffa", 1600), alt: "Snow-capped Himalayan ridge above green hills" },
  { src: unsplash("1582719478250-c89cae4dc85b", 1600), alt: "Suite bedroom with timber floors and wide windows" },
  { src: unsplash("1441974231531-c6227db76b6e", 1600), alt: "Sunlit forest trail through tall trees" },
  { src: unsplash("1510798831971-661eb04b3739", 1600), alt: "Lit cabin beside a lake on a winter evening" },
  { src: unsplash("1576092768241-dec231879fc3", 1600), alt: "A glass of freshly brewed mountain tea" },
  { src: unsplash("1519681393784-d120267933ba", 1600), alt: "Milky Way over a mountain silhouette" },
  { src: unsplash("1626621341517-bbf3d9990a23", 1600), alt: "Snowy Himalayan trail with hikers" },
];
