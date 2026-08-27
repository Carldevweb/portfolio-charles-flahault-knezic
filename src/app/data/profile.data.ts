export const profile = {
  name: "Charles Flahault Knezic",
  role: "Développeur Full Stack Java / Angular",
  shortRole: "Full Stack Java / Angular",
  email: "carlflahault@gmail.com",
  githubUrl: "https://github.com/Carldevweb",
  linkedinUrl: "https://www.linkedin.com/in/charles-flahault-knezic/",
  cvUrl: "/documents/cv-charles-flahault-knezic.pdf",
  availability: "Ouvert aux opportunités Java / Angular",
  introduction:
    "Je transforme des besoins métier en applications web complètes : une interface Angular pour les utilisateurs, une API Spring Boot pour les règles métier et PostgreSQL pour les données.",
} as const;

export const navigation = [
  { label: "À propos", href: "/#a-propos" },
  { label: "Projets", href: "/#projets" },
  { label: "Stack", href: "/#stack" },
  { label: "Parcours", href: "/#parcours" },
  { label: "Contact", href: "/#contact" },
] as const;

export const stackGroups = [
  {
    name: "Backend",
    description: "Règles métier, API sécurisées et accès aux données",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "REST API",
      "JPA / Hibernate",
      "Maven",
    ],
  },
  {
    name: "Frontend",
    description: "Parcours utilisateur clairs, responsives et accessibles",
    technologies: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    name: "Données & tests",
    description: "Données persistantes et comportements vérifiés",
    technologies: ["PostgreSQL", "JUnit", "Postman"],
  },
  {
    name: "Conception & outils",
    description: "Conception, versionnement et documentation du projet",
    technologies: ["Git", "GitHub", "Codex", "UML"],
  },
] as const;

export const journey = [
  {
    period: "2026",
    title: "Conception d’applications full stack",
    place: "Projets personnels et projet client freelance",
    description:
      "Développement d’applications Java / Angular de bout en bout : compréhension du besoin, règles métier, sécurité, interface utilisateur et vérification des parcours.",
  },
  {
    period: "2024",
    title: "Développeur Full Stack Java",
    place: "M2i Formation",
    description:
      "Approfondissement de Java, Spring Boot, Angular, TypeScript, Docker et des pratiques agiles.",
  },
  {
    period: "2022",
    title: "Développeur Web & Mobile",
    place: "ENI École Informatique · RNCP niveau 5",
    description:
      "Formation professionnalisante de niveau Bac+2 : conception web, développement en couches, bases de données et travail en équipe.",
  },
] as const;

export const workflow = [
  ["01", "Comprendre le besoin", "Identifier les utilisateurs, leurs actions et les contraintes du projet avant de choisir une solution."],
  ["02", "Structurer la solution", "Définir les règles métier, les données et les échanges entre l’interface et l’API."],
  ["03", "Développer par étapes", "Construire des fonctionnalités complètes, du traitement côté serveur jusqu’au parcours Angular."],
  ["04", "Vérifier les parcours", "Tester les règles métier, les erreurs, l’accessibilité et les actions importantes pour l’utilisateur."],
  ["05", "Préparer la livraison", "Versionner, documenter et automatiser les contrôles nécessaires à une livraison reproductible."],
] as const;
