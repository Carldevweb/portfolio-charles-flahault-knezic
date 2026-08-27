import type { Project } from "../models/project.model";

export const projects: Project[] = [
  {
    slug: "statunox",
    name: "Statunox",
    eyebrow: "Supervision HTTP / HTTPS",
    year: "2026",
    status: "Produit complet",
    role: "Conception & développement full stack",
    summary:
      "Une plateforme bilingue qui contrôle régulièrement des sites et des API, signale leurs indisponibilités et conserve l’historique de leur fonctionnement.",
    impact:
      "Depuis un même tableau de bord, chaque utilisateur suit ses services, consulte les incidents et reçoit une notification lorsqu’un problème apparaît ou se résout.",
    repositoryUrl: "https://github.com/Carldevweb/Statunox",
    stack: [
      "Java 21",
      "Spring Boot",
      "Angular",
      "PostgreSQL",
      "SSE",
      "Docker",
    ],
    visual: {
      kind: "dashboard",
      alt: "Aperçu conceptuel du tableau de bord Statunox avec trois services supervisés",
    },
    context: [
      "Un site ou une API peut devenir indisponible sans que son responsable le remarque immédiatement. Statunox automatise les contrôles HTTP/HTTPS et rassemble les résultats dans un tableau de bord.",
      "Chaque compte dispose de ses propres services surveillés. L’utilisateur peut s’inscrire, vérifier son adresse e-mail, consulter l’état actuel, parcourir l’historique et recevoir des alertes d’incident ou de rétablissement.",
    ],
    problem: [
      "Les contrôles automatiques devaient distinguer une panne réelle d’un échec réseau isolé, tout en empêchant un utilisateur de surveiller une adresse interne ou privée depuis le serveur.",
      "Le tableau de bord devait afficher rapidement les nouveaux états sans actualisation manuelle. Les comptes et leurs données devaient également rester strictement séparés.",
    ],
    architecture: [
      {
        title: "Interface Angular",
        description: "Une application organisée par fonctionnalités affiche les services, les graphiques et l’historique en français ou en anglais. Les changements arrivent via Server-Sent Events (SSE).",
      },
      {
        title: "API Spring Boot",
        description: "Une API organisée en modules distincts gère les comptes, les services surveillés, les contrôles HTTP, les incidents et les notifications.",
      },
      {
        title: "PostgreSQL",
        description: "La base conserve les comptes, les contrôles et les incidents. Flyway versionne son schéma et l’historique des contrôles est conservé pendant 90 jours.",
      },
      {
        title: "Exploitation",
        description: "Docker Compose lance l’ensemble des services. Des sondes de santé, la documentation OpenAPI et GitHub Actions facilitent les contrôles techniques.",
      },
    ],
    features: [
      "Contrôles HTTP/HTTPS automatiques ou lancés à la demande",
      "État lisible de chaque service : opérationnel, dégradé, indisponible ou en pause",
      "Ouverture et résolution automatiques des incidents",
      "Métriques sur 24 h, 7 j et 30 j",
      "Sessions sécurisées par JWT dans des cookies HttpOnly et protection contre les requêtes CSRF",
      "Notifications d’incident et de rétablissement",
      "Interface bilingue et responsive",
      "Documentation OpenAPI et contrôles automatisés avec GitHub Actions",
    ],
    challenges: [
      {
        title: "Empêcher la surveillance d’adresses internes",
        problem:
          "Un utilisateur renseigne l’adresse du site ou de l’API à surveiller. Sans contrôle, cette adresse pourrait rediriger le serveur vers un réseau local ou privé qui ne doit pas être accessible.",
        solution:
          "L’API accepte uniquement HTTP ou HTTPS, résout le nom de domaine avant chaque requête et chaque redirection, puis bloque les plages d’adresses locales et privées. Cette protection limite les attaques de type SSRF.",
      },
      {
        title: "Éviter les alertes après un échec isolé",
        problem:
          "Un ralentissement ou une coupure réseau ponctuelle ne signifie pas toujours que le service surveillé est réellement en panne. Une alerte immédiate créerait de faux incidents.",
        solution:
          "Statunox ouvre un incident après deux échecs consécutifs, puis le résout au premier contrôle réussi. Chaque tentative de notification est enregistrée pour conserver une trace de l’envoi.",
      },
      {
        title: "Actualiser le tableau de bord sans rechargement",
        problem:
          "Lorsqu’un contrôle modifie l’état d’un service, l’utilisateur doit voir le changement rapidement sans actualiser manuellement la page.",
        solution:
          "Le serveur transmet les mises à jour au navigateur via Server-Sent Events (SSE), un flux unidirectionnel adapté à ce besoin. Les actions de l’utilisateur restent gérées par l’API REST.",
      },
    ],
    results: [
      "Un parcours complet, de la création du compte à la consultation d’un incident.",
      "Des contrôles planifiés, un historique et des alertes réunis dans une même application.",
      "Un monolithe modulaire qui sépare les responsabilités tout en conservant un déploiement simple.",
    ],
    learnings: [
      "Contrôler une URL fournie par l’utilisateur fait partie du fonctionnement métier autant que de la sécurité réseau.",
      "Un flux serveur vers navigateur suffit lorsque l’interface doit recevoir des mises à jour sans dialogue permanent.",
      "Des responsabilités documentées permettent de faire évoluer un monolithe sans mélanger ses domaines métier.",
    ],
  },
  {
    slug: "archboard",
    name: "Archboard",
    eyebrow: "Gestion de projet par tableau Kanban",
    year: "2026",
    status: "Application full stack",
    role: "Développement full stack",
    summary:
      "Une application Kanban qui permet de regrouper des projets dans des espaces de travail, d’organiser les tâches en colonnes et de suivre leur avancement.",
    impact:
      "L’utilisateur crée ses tableaux, ajoute des cartes et les déplace par glisser-déposer. Le serveur vérifie les droits et conserve l’ordre validé.",
    repositoryUrl: "https://github.com/Carldevweb/archboard",
    stack: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "Angular",
      "Angular CDK",
      "PostgreSQL",
    ],
    visual: {
      kind: "image",
      src: "/projects/archboard-cover.png",
      alt: "Écran de connexion Archboard avec une composition de cartes Kanban",
    },
    detailVisual: {
      kind: "image",
      src: "/projects/archboard-board.webp",
      alt: "Tableau Archboard composé de quatre colonnes contenant des tâches de développement",
    },
    context: [
      "Archboard reprend le fonctionnement d’un tableau Kanban : un utilisateur crée un espace de travail, y ajoute des tableaux, puis répartit ses tâches dans des colonnes comme « À faire », « En cours » ou « Terminé ».",
      "L’interface Angular rend les manipulations directes, notamment le glisser-déposer. L’API Spring Boot conserve les données et décide si chaque action est autorisée.",
    ],
    problem: [
      "Déplacer une carte paraît simple, mais l’opération change sa colonne et sa position. Elle doit aussi être refusée si l’utilisateur n’a pas accès au tableau concerné.",
      "L’interface peut afficher immédiatement le déplacement pour rester fluide, mais le serveur doit valider les droits, la destination et l’ordre avant d’enregistrer le résultat.",
    ],
    architecture: [
      {
        title: "Application Angular",
        description: "L’interface présente les espaces, tableaux, colonnes et cartes. Angular CDK gère le glisser-déposer et les guards protègent les pages authentifiées.",
      },
      {
        title: "API sécurisée",
        description: "Spring Security authentifie les requêtes avec JWT. Des contrôles communs vérifient que l’utilisateur peut accéder à chaque ressource.",
      },
      {
        title: "Domaine Kanban",
        description: "Le modèle représente les espaces de travail, les tableaux, les colonnes, les cartes et les actions enregistrées dans le fil d’activité.",
      },
      {
        title: "Persistance",
        description: "JPA et Hibernate enregistrent les données dans PostgreSQL. Chaque ressource reste rattachée à son propriétaire pour contrôler les accès.",
      },
    ],
    features: [
      "Inscription et connexion",
      "Récupération du mot de passe",
      "Création et gestion des espaces de travail",
      "Création et consultation des tableaux",
      "Création de colonnes et de cartes Kanban",
      "Glisser-déposer avec Angular CDK",
      "Fil d’activité",
      "Vérification centralisée des droits d’accès",
    ],
    challenges: [
      {
        title: "Garantir la cohérence lors du déplacement d’une carte",
        problem:
          "Lorsqu’une carte est déplacée dans le tableau Kanban, le serveur peut refuser l’opération si l’utilisateur n’a pas les droits nécessaires ou si la destination est invalide.",
        solution:
          "Le backend vérifie les droits d’accès, la colonne de destination et l’ordre des cartes avant de valider le déplacement. L’interface affiche ensuite l’état confirmé par le serveur.",
      },
      {
        title: "Centraliser la gestion des autorisations",
        problem:
          "Répéter les mêmes contrôles d’accès dans chaque contrôleur augmente le risque d’oubli et rend le code plus difficile à maintenir.",
        solution:
          "Les vérifications d’autorisation sont regroupées dans des composants communs afin de sécuriser les ressources avant l’exécution des opérations métier.",
      },
    ],
    results: [
      "Un parcours authentifié pour créer un espace, ouvrir un tableau et organiser ses tâches.",
      "Un glisser-déposer fluide dans Angular, avec une validation finale assurée par le serveur.",
      "Des droits d’accès appliqués de manière cohérente aux espaces, tableaux, colonnes et cartes.",
    ],
    learnings: [
      "Définir clairement le propriétaire de chaque ressource simplifie ensuite toutes les vérifications d’accès.",
      "Les règles d’autorisation doivent être appliquées côté serveur, au plus près des opérations qu’elles protègent.",
      "Une interface qui anticipe le résultat d’une action doit aussi savoir revenir à l’état précédent si le serveur la refuse.",
    ],
  },
  {
    slug: "villa-deste",
    name: "Villa d’Este",
    eyebrow: "Menu de restaurant par QR code",
    year: "2026",
    status: "Projet client freelance · En cours",
    role: "Compréhension du besoin, conception & développement full stack",
    summary:
      "Un projet client freelance pour rendre le menu du restaurant accessible par QR code et permettre à l’équipe de gérer les plats depuis une interface dédiée.",
    impact:
      "Le développement fonctionnel est en cours. L’intégration graphique finale interviendra après réception des maquettes réalisées par la webdesigner.",
    repositoryUrl: "https://github.com/Carldevweb/villa-deste",
    stack: ["Java 25", "Spring Boot", "Angular", "TypeScript", "PostgreSQL", "SCSS"],
    visual: {
      kind: "image",
      src: "/projects/villa-cover.webp",
      alt: "Façade du restaurant Villa d’Este",
    },
    context: [
      "La cliente souhaite proposer aux visiteurs un menu mobile accessible immédiatement en scannant un QR code, sans installation ni création de compte.",
      "L’équipe du restaurant doit disposer d’un espace distinct pour gérer les catégories, les plats, les descriptions, les prix et leur disponibilité. Les échanges avec la cliente permettent de préciser ces besoins pendant le développement.",
      "La structure fonctionnelle est développée en parallèle du travail graphique. L’apparence définitive dépend des maquettes que la cliente fait réaliser par une webdesigner.",
    ],
    problem: [
      "Le visiteur doit consulter rapidement le menu sur son téléphone, alors que l’équipe a besoin d’outils de gestion protégés pour modifier des informations conservées en base de données.",
      "Les plats et leurs prix doivent pouvoir évoluer sans modifier le code. Dans le même temps, l’intégration graphique doit rester adaptable aux futures maquettes validées par la cliente.",
    ],
    architecture: [
      {
        title: "Menu public Angular",
        description: "Une interface pensée d’abord pour mobile affiche le menu et ses catégories dès l’ouverture du lien associé au QR code.",
      },
      {
        title: "Administration",
        description: "Un espace séparé permet aux comptes autorisés de créer, modifier et supprimer les éléments du menu.",
      },
      {
        title: "API Spring Boot",
        description: "L’API applique les règles de gestion. Le code est séparé entre présentation HTTP, cas d’usage, domaine métier et accès aux services techniques.",
      },
      {
        title: "PostgreSQL",
        description: "La base conserve les catégories, les plats, leurs descriptions, leurs prix et leur ordre d’affichage.",
      },
    ],
    features: [
      "Menu public adapté aux téléphones et aux écrans plus larges",
      "Navigation par catégories",
      "Création, modification et suppression des plats et des prix",
      "Interface d’administration dédiée",
      "API REST organisée par domaine fonctionnel",
      "Environnement PostgreSQL local via Docker",
    ],
    challenges: [
      {
        title: "Permettre la mise à jour du menu sans modifier le code",
        problem:
          "Les plats, descriptions et prix changent au fil de l’activité du restaurant. Les intégrer directement dans l’interface obligerait à modifier l’application pour chaque changement.",
        solution:
          "Les libellés propres à l’interface restent dans Angular. Les catégories, plats et prix sont conservés dans PostgreSQL, puis fournis au menu public et à l’administration par l’API Spring Boot.",
      },
      {
        title: "Séparer le parcours du visiteur et celui de l’équipe",
        problem:
          "Le visiteur doit accéder au menu sans compte, tandis que les fonctions de modification doivent rester réservées aux personnes autorisées du restaurant.",
        solution:
          "Angular sépare le menu public de l’espace d’administration. Ils partagent uniquement les modèles de données nécessaires, tandis que l’accès à la gestion est protégé.",
      },
      {
        title: "Avancer avant la livraison des maquettes finales",
        problem:
          "Le développement fonctionnel a commencé alors que l’identité graphique définitive dépend encore du travail de la webdesigner choisie par la cliente.",
        solution:
          "La structure des pages, les règles métier et les échanges avec l’API sont développés séparément du rendu final. Les maquettes pourront ainsi être intégrées après validation sans reprendre le socle fonctionnel.",
      },
    ],
    results: [
      "Un socle full stack en cours de réalisation pour le menu public et son administration.",
      "Des données métier modifiables depuis l’espace de gestion et affichées dans le menu public.",
      "Une séparation entre le développement fonctionnel et la future intégration des maquettes de la webdesigner.",
    ],
    learnings: [
      "Concevoir d’abord le parcours mobile réel répond directement au contexte d’utilisation après le scan du QR code.",
      "Séparer les données du restaurant, les textes d’interface et le rendu graphique facilite leurs évolutions indépendantes.",
      "Sur un projet client, les validations et les dépendances externes doivent être intégrées au déroulement du développement.",
    ],
    nextSteps: [
      "Réception des maquettes réalisées par la webdesigner",
      "Validation des maquettes avec la cliente",
      "Intégration graphique dans l’application Angular",
      "Recette fonctionnelle avec la cliente",
      "Préparation du déploiement après validation",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
