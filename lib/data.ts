import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import successLadderImg from "@/public/successLadder.png";
import reactFoodImg from "@/public/reacFfood.png";
import placePickerImg from "@/public/placePicker.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Online",
    description:
      "I graduated after 3 months of studying. Then I found an internship as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer Internship",
    location: "Ankara, Turkey",
    description:
      "I worked as a front-end developer intern for 1 month. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "SuccessLadder",
    description:
      "I worked as a full-stack developer on this project. This project helps students navigate their studies without getting overwhelmed by the large amount of information on the internet.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: successLadderImg,
  },
  {
    title: "rmtDev",
    description:
      "Coming soon...",
    tags: ["React", "Tailwind"],
    imageUrl: reactFoodImg,
  },
  {
    title: "Word Analytics",
    description:
      "Coming soon...",
    tags: ["React", "Tailwind",],
    imageUrl: placePickerImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
] as const;