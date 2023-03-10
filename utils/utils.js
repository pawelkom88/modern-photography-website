import mini1 from "../assets/images/mini1.jpg";
import mini2 from "../assets/images/mini2.jpeg";
import mini3 from "../assets/images/mini3.jpg";
import shutter1 from "../assets/images/shutter-1.webp";
import shutter2 from "../assets/images/shutter-2.webp";
import case1 from "../assets/images/case-1.jpg";
import case2 from "../assets/images/case-2.jpg";
import case3 from "../assets/images/case-3.jpg";
import case4 from "../assets/images/case-4.jpg";

export const shutterOpen = shutter1;
export const shutterClosed = shutter2;

export const aboutImages = {
  mini1,
  mini2,
  mini3,
};

export const caseImages = {
  case1,
  case2,
  case3,
  case4,
};

export const internalLinks = [
  { id: 1, name: "About", href: "/about" },
  { id: 2, name: "Portfolio", href: "/portfolio" },
  { id: 3, name: "Contact", href: "/contact" },
];

export const extrenalLinks = [
  {
    id: 1,
    href: "facebook.com",
    img: (
      <svg
        style={{ width: "20px", heigh: "20px" }}
        role="img"
        aria-labelledby="FacebookDesc Facebook"
        viewBox="0 0 24 24"
        fill="#e7e5ef">
        <title>Facebook icon</title>
        <desc id="Facebook">Click here to visit our Facebook page</desc>
        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
      </svg>
    ),
  },
  {
    id: 2,
    href: "instagram.com",
    img: (
      <svg
        style={{ width: "28px", heigh: "28px" }}
        role="img"
        aria-labelledby="InstagramDesc Instagram"
        viewBox="0 0 30 30"
        fill="#e7e5ef">
        <title>Instagram icon</title>
        <desc id="Instagram">Click here to see our photos on Instagram</desc>
        <circle cx="15" cy="15" r="4" />

        <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
      </svg>
    ),
  },
  // {
  //   id: 3,
  //   href: "/about",
  //   img: (
  //     <svg
  //       style={{ width: "20px", height: "20px" }}
  //       role="img"
  //       aria-labelledby="FacebookDesc Facebook"
  //       viewBox="0 0 24 24"
  //       fill="#e7e5ef">
  //       <title>Facebook icon</title>
  //       <desc id="Facebook">Click here to visit our Facebook page</desc>
  //       <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
  //     </svg>
  //   ),
  // },
];

export const linksLeft = [
  { id: 1, href: "/about", content: "About" },
  { id: 2, href: "/", content: "Offer" },
  { id: 3, href: "/about", content: "Offer" },
];

export const linksRightDesktop = [
  { id: 1, href: "/about", content: "Instagram" },
  { id: 2, href: "/about", content: "Contact" },
];

export const info = [
  { id: 1, href: "insta", content: "Instagram" },
  { id: 2, href: "face", content: "Facebook" },
  { id: 3, href: "youtube", content: "youtube" },
];

export const collection = { mini1, mini2 };
