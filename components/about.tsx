"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Présentation");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      
      <SectionHeading>Présentation</SectionHeading>
      <p className="mb-3">
      Après avoir obtenu un diplôme{" "}
        <span className="font-medium">en génie logiciel</span>, j'ai décidé de poursuivre ma passion. 
         {" "}
        
        <span className="italic">Ce que je préfère dans la programmation,
        </span> c'est l'aspect résolution de problèmes. <span className="underline">j'aime</span> le sentiment de trouver enfin une solution à un problème.
        Ma pile principale est{" "}
        <span className="font-medium">
          Spring Boot, Angular and PostgreSQL
        </span>
        . Je connais également Nextjs, NestJS, Laravel and mySQL. je suis actuellement à la recherche d'un poste
         {" "}
        <span className="font-medium">à temps plein </span>en tant que développeur de logiciels.
      </p>

      <p>
        <span className="italic">Quand je ne code pas,</span>, j'aime faire le sport, regarder les matchs 
        de foot et tennis. J'aime aussi apprendre {" "}
        <span className="font-medium">de nouvelles choses.</span> J'apprends actuellement{" "}
        <span className="font-medium">DevOps </span>. J'essaie également d'apprendre Cryptomonnaie.
      </p>
    </motion.section>
  );
}
