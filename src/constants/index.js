import projects1 from "../assets/coding.jpg";
import projects2 from "../assets/bobo.jpg";
import projects3 from "../assets/buku.jpeg";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Halo semuanya! 🖐️",
  introduction:
    "I’m Jason Root, a creative frontend developer, crafting immersive and intuitive web experiences.",
  description:
    "Perkenalkan nama ku Rafly, dari Kelompok Jarvis! Hobiku membaca dan menulis.",
  resumeLinkText: "kepoin ig ku",
  resumeLink: "https://www.instagram.com/siregarafly_/profilecard/?igsh=MWc1eXppZDZpMGpnMA==",
};

export const PROJECTS = [
  {
    name: "Ngoding",
    description: "Masih belajar dikit-dikit",
    image: projects1,
    link: "https://github.com/your-github/streamerzz",
  },
  {
    name: "Tidur",
    description: "inisih pasti, siapa yang gak suka",
    image: projects2,
    link: "https://github.com/your-github/nutritrack",
  },
  {
    name: "baca buku",
    description: "terutama buku-buku detektif, sejarah, filsafat",
    image: projects3,
    link: "https://github.com/your-github/hairrevive",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "Halo, perkenalkan nama lengkapku Bagus Rafly Maulana Siregar, jenis kelamin laki-laki tempat tanggal lahirku di Semarang, 3 April 2006, dari Program Studi Informatika, Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Udayana",
    "Aku cukup familiar dengan pemrograman web dikarenakan sewaktu smk dulu sering pakai Tailwind, Bootstrap, React, tapi masih pemula. Karena aku gapunya pengalaman organisasi jadinya di bagian selanjutnya pakai pengalaman magang aja ya 🙏😁",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2012 — Sekarang",
    title: "Pendidikan ",
    location: "Bali",
    description: [
      "SD Negeri 2 Ubung -> 2012 - 2018",
      "SMP Negeri 10 Denpasar -> 2018 - 2021",
      "SMK Negeri 1 Denpasar -> 2021 - 2024",
      "Universitas Udayana -> 2024 - Sekarang",
    ],
  },
  {
    yearRange: "Desember 2022 - Februari 2023",
    title: "CV Harmoni Permata - Web Developer Internship",
    location: "Bali, Indonesia",
    description: [
      "Mengonversi desain dari Figma ke HTML, CSS, JavaScript untuk situs web henbuk.com (5+ halaman)  ",
      "Membuat situs web responsif menggunakan CSS (Bootstrap) ",
      "Menggunakan kontrol versi Git untuk berkolaborasi dalam pengembangan proyek (GitLab) ",
    ],
  },
  {
    yearRange: "Juni 2023 - September 2023",
    title: "PT. Hooki Global Kreasi - Web Developer Internship",
    location: "Bali, Indonesia",
    description: [
      "Membuat RESTful API menggunakan Laravel untuk website manajemen tugas",
      "Menjadi QA untuk melakukan pengujian pada website",
      "Menggunakan kontrol versi Git untuk berkolaborasi dalam pengembangan proyek (GitLab) ",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "Frontend Engineer, Google",
    feedback:
      "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
    image: person1,
  },
  {
    name: "Michael Anderson",
    title: "Product Manager, Facebook",
    feedback:
      "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
    image: person2,
  },
  {
    name: "Emily Davis",
    title: "Lead Designer, Amazon",
    feedback:
      "Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",
    image: person3,
  },
  {
    name: "David Lee",
    title: "Senior Developer, Microsoft",
    feedback:
      "Jason's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",
    image: person4,
  },
  {
    name: "Laura Martinez",
    title: "CTO, Shopify",
    feedback:
      "Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",
    image: person5,
  },
  {
    name: "Chris Brown",
    title: "Co-founder, Stripe",
    feedback:
      "Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
    image: person6,
  },
];

export const CONTACT_CONTENT = {
  headline: "Gas kalau mau kenalan!",
  description:
    "Terbuka dengan semua peluang kerjasama asal tidak melanggar hukum",
  email: "rafly34ms@gmail.com", telf: "085815689939",
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/siregarafly_/profilecard/?igsh=MWc1eXppZDZpMGpnMA==",
      ariaLabel: "Connect with me on Instagram",
      icon: "RiInstagramFill",
    },
  ],
  footerText: `© OPTIMUS Bagus Rafly. All rights reserved.`,
};
