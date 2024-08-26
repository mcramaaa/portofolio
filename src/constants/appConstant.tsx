import { BiLogoTypescript } from "react-icons/bi";
import { FaDocker, FaJsSquare, FaLinkedinIn, FaReact } from "react-icons/fa";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaUbuntu,
  FaWhatsapp,
} from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { IoLogoFigma } from "react-icons/io5";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
} from "react-icons/si";

export const NAVMENU = [
  {
    value: "/",
    label: "Home",
    refKey: "home",
  },
  {
    value: "#Pricing",
    label: "Pricing",
    refKey: "pricing",
  },
  {
    value: "#Testimoni",
    label: "Testimoni",
    refKey: "testi",
  },
  {
    value: "/contact",
    label: "Contact",
    refKey: "contact",
  },
];

export const ABOUTME = {
  firstName: "Mochamad",
  lastName: "Ramadhani",
  position: ["Designer", "Programmer"],
  about:
    "I am a Front End Developer with a Bachelor's degree in Mathematics from UINSA, currently working at PT. MAGNER INTERNATIONAL GROUP and PT. BBIZ TEKNOLOGI SOLUSI. Since August 2023, I have been developing and designing web applications and websites for e-commerce, company profiles, catalogs, and back-office purposes. I have expertise in JavaScript libraries, TypeScript, Next.js, sustainable IT, and React, with some knowledge of Nest.js. I closely collaborate with back-end developers, designers, and clients, and also design graphic elements using Adobe Photoshop and Illustrator, combining creativity with technical skills to deliver high-quality, user-friendly web products.",
  email: "rama28moch@gmail.com",
  phone: "+6281234567890",
  address: "Sidoarjo, Jawa Timur, Indonesia",
  onlineProfile: [
    {
      icon: <FaGithub />,
      url: "https://glints.com/id/profile/public/a6d2f74d-7598-4147-8d73-05d1f4abe816",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/mochamad-ramadhani-644666202",
    },
    {
      icon: <GoStarFill className="rotate-2" />,
      url: "https://glints.com/id/profile/public/a6d2f74d-7598-4147-8d73-05d1f4abe816",
    },
  ],
  skils: [
    {
      title: "Github",
      value: 85,
    },
    {
      title: "JavaScript",
      value: 90,
    },
    {
      title: "TypeScript",
      value: 90,
    },
    {
      title: "React",
      value: 80,
    },
    {
      title: "Next Js",
      value: 90,
    },
    {
      title: "Nest Js",
      value: 60,
    },
    {
      title: "MySQL",
      value: 75,
    },
    {
      title: "Nginx",
      value: 75,
    },
    {
      title: "Ubuntu Linux",
      value: 95,
    },
    {
      title: "Figma",
      value: 95,
    },
    {
      title: "Adobe Premiere Pro",
      value: 90,
    },
    {
      title: "Adobe After Effects",
      value: 90,
    },
    {
      title: "Adobe Illustrator",
      value: 100,
    },
    {
      title: "Adobe Photoshop",
      value: 85,
    },
    {
      title: "Adobe Indesign",
      value: 90,
    },
  ],
  sosmed: [
    {
      url: "/",
      icon: <FaFacebookF />,
    },
    {
      url: "https://www.instagram.com/alphasosmed.project/",
      icon: <FaInstagram />,
    },
    {
      url: "/",
      icon: <FaTwitter />,
    },
    {
      url: "/",
      icon: <FaWhatsapp />,
    },
  ],
};

export const ABOUTMARQUEE = [
  <FaGithub key={0} />,
  <FaJsSquare key={1} />,
  <BiLogoTypescript className="text-9xl" key={2} />,
  <FaReact key={3} />,
  <SiNextdotjs key={4} />,
  <SiNestjs key={5} />,
  <FaDocker key={6} />,
  <SiNginx key={7} />,
  <SiMysql key={8} />,
  <FaUbuntu key={9} />,
  <IoLogoFigma key={10} />,
  <SiAdobepremierepro key={11} />,
  <SiAdobeaftereffects key={12} />,
  <SiAdobeillustrator key={13} />,
  <SiAdobephotoshop key={14} />,
  <SiAdobeindesign key={15} />,
];

export const FOOTER = {
  open: "",
  email: "",
  address:
    "Skyloft Soho No.1868 Ciputra World, Jl. Mayjen Sungkono No.89, Gunung Sari, Dukuhpakis, Surabaya, East Java 60224",
  sosmed: [
    {
      url: "/",
      icon: <FaFacebookF />,
    },
    {
      url: "https://www.instagram.com/alphasosmed.project/",
      icon: <FaInstagram />,
    },
    {
      url: "/",
      icon: <FaTwitter />,
    },
    {
      url: "/",
      icon: <FaWhatsapp />,
    },
  ],
};
