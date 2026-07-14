export type ClientLogo = {
  name: string;
  image?: string;
  /** Logo has no alpha channel (opaque background) — needs a light chip instead of an invert filter. */
  needsLightBg?: boolean;
};

export const clientLogos: ClientLogo[] = [
  { name: "Wilson", image: "/logos/wilson.svg" },
  { name: "Salomon", image: "/logos/salomon.webp" },
  { name: "Judith Leiber", image: "/logos/judith-leiber.avif" },
  { name: "Kat Maconie", image: "/logos/kat-maconie.avif" },
  { name: "instaRUNWAY", image: "/logos/instarunway.avif" },
  { name: "MR-START", image: "/logos/mr-start.avif" },
  { name: "Moher", image: "/logos/moher.avif" },
  { name: "Moto Avenue", image: "/logos/moto-avenue.webp" },
  {
    name: "Creative Florist",
    image: "/logos/creative-florist.webp",
    needsLightBg: true,
  },
];
