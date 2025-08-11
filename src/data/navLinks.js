export const navLinks = [
  { text: "Home", url: "/", active: true },
  { text: "About Us", url: "/about-us", active: true },
  { text: "Shop", url: "/shop", active: true },
  { text: "Farm Life",  active: true,
    children: [
      { text: "Animals", url: "/farm-life/animals" },
      { text: "Plants", url: "/farm-life/plants" }
    ]
   },
  { text: "Animations", url: "/animations-6", active: true },
  { text: "Recipes", url: "/recipes", active: false },
  { text: "Contact", url: "/contact", active: true },
  { text: "test", url: "/testDome", active: true },
];

export const navLinksMobile = [
  { text: "Home", url: "/", active: true },
  { text: "About Us", url: "/about-us", active: true },
  { text: "Shop", url: "/shop", active: true },
  { text: "Animals", url: "/farm-life/animals", active: true },
  { text: "Plants", url: "/farm-life/plants", active: true },
  { text: "Animations", url: "/animations-6", active: false },
  { text: "Recipes", url: "/recipes", active: false },
  { text: "Contact", url: "/contact", active: true },
  { text: "test", url: "/testDome", active: false },
];
// export default navLinks;