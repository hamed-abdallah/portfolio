import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import acceuielImg from "@/public/accueil.png";
import authImg from "@/public/auth.png";
import dashImg from "@/public/dash.png";
import devImg from "@/public/DevOps.png";

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "Présentation",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Formation",
    hash: "#formation",
  },
  {
    name: "Expérience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Développeur full stack",
    location: "INRITS",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "De août 2024 ",
  },
  {
    title: "Stage PFE",
    location: "Satoripop sousse",
    description:
      "Développement d'un micro service : centre de notification qui permet aux entreprises d'envoyer et de gérer des notifications à leurs clients ou à leurs employés via 4 types de channel : EMAIL, SMS, PUSH et CHAT (Whatsapp,Messanger, Slack et Line) Tech : JHipster(Spring Boot/Angular), Bitbucket, PostgreSQL, micro service, Figma",
    icon: React.createElement(CgWorkAlt),
    date: "De février 2023 à septembre 2023",
  },
  {
    title: "Stage d'été",
    location: "LEONI TUNISIE M'ssken",
    description:
      "Développement d'une platforme de suivi de l'enregistrement du système SAP(ERP), heure de présence et heure de compensations Tech : Angular, Spring Boot, PostgreSQL.",
    icon: React.createElement(CgWorkAlt),
    date: "De juillet 2022 à août 2022",
  },
  {
    title: "Stage PFE : Technicien",
    location: "Global consulting Sousse",
    description:
      "Développement d'une platforme pour vendre des services de sécurité",
    icon: React.createElement(CgWorkAlt),
    date: "De février 2020 à mai 2020",
  },
] as const;

export const formationData = [
  {
    title: "Cycle d'ingénieur en informatique",
    location: "Polytechnique Sousse",
    icon: React.createElement(LuGraduationCap),
    date: "D'octobre 2020 à septembre 2023",
  },
  {
    title: "Licence Appliquée en Sciences et Technologies de l'Information et de lacommunication",
    location: "ECOLE SUPERIEURE DES SCIENCES ET DE TECHNOLOGIE DE HAMMAM SOUSSE Hammam Sousse, Tunisie",
   icon: React.createElement(LuGraduationCap),
    date: "De septembre 2016 à juillet 2020",
  },
  {
    title: "Baccalauréat TECHNIQUE",
    location: "LYCÉE TECHNIQUE OTHMEN CHATTI M'SEKEN",
  icon: React.createElement(LuGraduationCap),
    date: "De septembre 2015 à juillet 2016",
  },
] as const;
export const projectsData = [
  {
    title: "Centre de notification",
    description:
      "centre de notification qui permet aux entreprises d'envoyer et de gérer des notifications à leurs clients ou à leurs employés via 4 types de channel : EMAIL, SMS, PUSH et CHAT.",
    tags: ["JHipster(Spring Boot/Angular),", "Bitbucket,", "PostgreSQL,", "microservice,"],
    imageUrl: dashImg,
  },
  {
    title: "Suivi heure de presence",
    description:
      "Une platforme de suivi de l'enregistrement du système SAP(ERP), heure de présence et heure de compensations.",
    tags: ["Spring Boot", "Angular", "PostgreSQL"],
    imageUrl: acceuielImg,
  },
  {
    title: "gestion de congés",
    description:
      "Une platform gestion des congés et des absences consiste à traiter les demandes de congés du personnel, et à tenir un registre du nombre de jours pris et restants à chaque employé selon le solde prévu par le Code du travail ou la convention collective.",
    tags: ["Laravel", "Angular", "MongoDB"],
    imageUrl: authImg,
  },
    
 /* {
    title: "Gestion de scolarité",
    description:
      "Etablir et mettre à jour les fichiers pédagogiques et administratifs. Elaborer les emplois du temps en lien avec les enseignants",
      tags: ["Spring MVC", "Spring Boot", "Angular", "PostgreSQL"],

  },*/
  {
    title: "Projet intégré Devops",
    description:
      "Mise en place d'un pipeline CI/CD pour l'automatisation du déploiement d'un site webexistant.",
    tags: ["Gitlab", "Docker", "Jenkins", "Kubernetes", "Azure", "Prometheus", "Terraform"],
  imageUrl: devImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Nest.js",
  "Git",
  "Spring boot",
  "Angular",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Python",
] as const;

