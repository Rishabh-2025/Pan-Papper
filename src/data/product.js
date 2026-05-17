// src/data/products.js

// EXECUTIVE
// import executive1 from "../assets/images/products/executive/executive-1.jpg";
// import executive2 from "../assets/images/products/executive/executive-2.jpg";
// import executive3 from "../assets/images/products/executive/executive-3.jpg";

// // BAGS
// import bag1 from "../assets/images/products/bags/bag-1.jpg";
// import bag2 from "../assets/images/products/bags/bag-2.jpg";

// // FESTIVE
// import festive1 from "../assets/images/products/festive/festive-1.jpg";
// import festive2 from "../assets/images/products/festive/festive-2.jpg";

// // BAR
// import bar1 from "../assets/images/products/bar/bar-1.jpg";
// import bar2 from "../assets/images/products/bar/bar-2.jpg";

// // PREMIUM
// import premium1 from "../assets/images/products/premium/premium-1.jpg";
// import premium2 from "../assets/images/products/premium/premium-2.jpg";

const products = [
  {
    id: 1,
    category: "executive-accessories",

    title: "Executive Leather Folder",

    shortDesc: "Luxury office folder collection",

    description:
      "Premium executive office folder crafted with luxury finish, notebook section, card holder and metal pen support for business gifting.",

    colors: ["Black", "Brown", "Tan"],

    tags: [
      "executive",
      "office",
      "premium",
      "corporate",
      "folder",
    ],

    // images: [executive1, executive2, executive3],
  },

  {
    id: 2,
    category: "corporate-bags",

    title: "Business Laptop Bag",

    shortDesc: "Modern premium laptop bag",

    description:
      "Luxury business laptop bag with elegant design, travel comfort and custom corporate branding support.",

    colors: ["Black", "Grey"],

    tags: [
      "bags",
      "travel",
      "office",
      "laptop",
      "premium",
    ],

    // images: [bag1, bag2],
  },

  {
    id: 3,
    category: "festive-gifts",

    title: "Festive Luxury Hamper",

    shortDesc: "Premium festive gifting hamper",

    description:
      "Elegant festive gifting hamper with luxury packaging designed for festive campaigns and premium client gifting.",

    colors: ["Gold", "Red"],

    tags: [
      "festive",
      "luxury",
      "hamper",
      "celebration",
    ],

    // images: [festive1, festive2],
  },

  {
    id: 4,
    category: "bar-collection",

    title: "Luxury Bar Collection",

    shortDesc: "Premium celebration gifting set",

    description:
      "Luxury bar collection with premium accessories, elegant packaging and modern corporate gifting presentation.",

    colors: ["Black", "Silver"],

    tags: [
      "bar",
      "celebration",
      "gift set",
      "luxury",
    ],

    // images: [bar1, bar2],
  },

  {
    id: 5,
    category: "premium-gift-sets",

    title: "Premium Corporate Gift Box",

    shortDesc: "Luxury business gift collection",

    description:
      "Modern premium gifting collection designed for executive gifting, onboarding kits and corporate events.",

    colors: ["White", "Black", "Gold"],

    tags: [
      "premium",
      "gift box",
      "corporate",
      "luxury",
    ],

    // images: [premium1, premium2],
  },
];

export default products;