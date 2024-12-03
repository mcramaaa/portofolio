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
  // {
  //   value: "#Pricing",
  //   label: "Pricing",
  //   refKey: "pricing",
  // },
  // {
  //   value: "#Testimoni",
  //   label: "Testimoni",
  //   refKey: "testi",
  // },
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
  education: [
    {
      name: "UIN Sunan Ampel Surabaya",
      prodi: "Bachelor of Mathematics",
      year: "Aug 2018 - Nov 2022",
      value: "3.44 / 4.00",
    },
  ],
  organitation: [
    {
      name: "Olimpiade Matematika UINSA 2019",
      position: "Wakil Ketua Pelaksana",
      year: "Nov 2018 - Oct 2019",
    },
    {
      name: "Olimpiade Matematika UINSA 2020",
      position: "Ketua Pelaksana",
      year: "Nov 2019 - Oct 2020",
    },
    {
      name: "Olimpiade Matematika UINSA 2021",
      position: "BPH Teknis",
      year: "Nov 2020 - Oct 2021",
    },
  ],
  about:
    "I am a Fullstack Developer with a Bachelor's degree in Mathematics from Universitas Islam Negeri Sunan Ampel (UINSA). I have experience designing and developing mobile and web applications, as well as websites for e-commerce, company profiles, catalogs, and back-office systems. Proficient in JavaScript libraries, TypeScript, Next.js, and React, with basic knowledge of Nest.js and Express.js. I enjoy learning new things and tackling challenges, and I am accustomed to collaborating with back-end teams, designers, and clients to create high-quality, user-friendly web products.",
  email: "rama28moch@gmail.com",
  phone: "+6281234567890",
  address: "Sidoarjo, Jawa Timur, Indonesia",
  onlineProfile: [
    {
      icon: <FaGithub />,
      url: "https://github.com/mcramaaa",
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
      icon: <FaGithub />,
      title: "Github",
      value: 85,
    },
    {
      icon: <FaJsSquare />,
      title: "JavaScript",
      value: 90,
    },
    {
      icon: <BiLogoTypescript className="text-9xl" />,
      title: "TypeScript",
      value: 90,
    },
    {
      icon: <FaReact />,
      title: "React",
      value: 80,
    },
    {
      icon: <FaReact />,
      title: "React Native",
      value: 80,
    },
    {
      icon: <SiNextdotjs />,

      title: "Next Js",
      value: 90,
    },
    {
      icon: <SiNestjs />,
      title: "Nest Js",
      value: 60,
    },
    {
      icon: <SiMysql />,

      title: "MySQL",
      value: 75,
    },
    {
      icon: <SiNginx />,
      title: "Nginx",
      value: 75,
    },
    {
      icon: <FaUbuntu />,
      title: "Ubuntu Linux",
      value: 95,
    },
    {
      icon: <IoLogoFigma />,
      title: "Figma",
      value: 95,
    },
    {
      icon: <SiAdobepremierepro key={11} />,
      title: "Adobe Premiere Pro",
      value: 90,
    },
    {
      icon: <SiAdobeaftereffects key={12} />,
      title: "Adobe After Effects",
      value: 90,
    },
    {
      icon: <SiAdobeillustrator key={13} />,
      title: "Adobe Illustrator",
      value: 100,
    },
    {
      icon: <SiAdobephotoshop key={14} />,
      title: "Adobe Photoshop",
      value: 85,
    },
    {
      icon: <SiAdobeindesign key={15} />,
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
      url: "https://www.instagram.com/mch.rama__/",
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
    // {
    //   url: "/",
    //   icon: <FaFacebookF />,
    // },
    {
      url: "https://www.instagram.com/alphasosmed.project/",
      icon: <FaInstagram />,
    },
    // {
    //   url: "/",
    //   icon: <FaTwitter />,
    // },
    {
      url: "https://api.whatsapp.com/send?phone=6281330129266&text=Hai%20Mch%20Rama",
      icon: <FaWhatsapp />,
    },
  ],
};
