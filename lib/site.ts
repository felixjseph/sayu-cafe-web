export const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Visit Us", href: "#visit" },
  { label: "Gallery", href: "#gallery" },
] as const

export const LOCATION = {
  address: "South Poblacion, San Fernando, Cebu 6018",
  city: "Philippines",
  email: "sayucafe.cebu@gmail.com",
  mapUrl: "https://maps.app.goo.gl/rHWq9ka1DfBReaUw8",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15709.296251990521!2d123.7082561!3d10.1628431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a97f4507c9f393%3A0xbe052ac3ec74f8ae!2sSayu%20Caf%C3%A9!5e0!3m2!1sen!2sph!4v1790413388637!5m2!1sen!2sph",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=10.1628431%2C123.7082561",
  latitude: 10.1628431,
  longitude: 123.7082561,
} as const

export const HOURS = [{ days: "Monday - Sunday", shortDays: "Mon - Sun", hours: "9:00 am - 10:00 pm" }] as const

export const EXTERNAL_LINKS = {
  menu: "https://drive.google.com/drive/folders/1FwD2sK_wSdAutekcSr5_9Ou630CZUJvj?usp=sharing",
  facebook: "https://www.facebook.com/sayucafe",
  messenger: "https://m.me/sayucafe",
  instagram: "https://www.instagram.com/sayucafe.cebu/",
  tiktok: "https://www.tiktok.com/@sayucafe.cebu",
} as const
