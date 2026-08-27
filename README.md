# Portfolio Angular — Charles Flahault Knezic

Portfolio professionnel de développeur Full Stack Java / Angular. Le site présente le profil, la méthode de travail et trois réalisations réelles sous forme d’études de cas détaillées : Statunox, Archboard et Villa d’Este.

## Principes du projet

- priorité donnée aux projets et aux décisions techniques ;
- interface sombre, sobre, responsive et accessible ;
- monolithe frontend Angular modulaire ;
- architecture Angular basée sur des composants standalone et des pages chargées à la demande ;
- contenu TypeScript typé et versionné avec le code ;
- aucune base de données ni API sans besoin métier ;
- métadonnées SEO par route, Open Graph, sitemap, robots et données structurées.

## Stack du portfolio

- Angular 21 et TypeScript 5.9 ;
- Angular Router avec routes fonctionnelles chargées à la demande ;
- composants standalone en détection `OnPush` ;
- CSS natif avec design system interne ;
- build statique compatible avec les hébergeurs de SPA.

## Démarrage local

Prérequis : Node.js 22.13 ou supérieur et npm.

```powershell
npm install
npm run dev
```

L’application est ensuite disponible sur `http://localhost:4200`.

## Contrôles qualité

```powershell
npm run check
```

Ce script contrôle le code TypeScript puis produit le build Angular optimisé.

## Architecture

```text
src/app/
  core/                 Structure globale et services uniques
    layout/             Navigation et pied de page
    services/           Gestion du SEO
  data/                 Profil, parcours, stack et études de cas
  features/
    home/               Composition et sections de l’accueil
    projects/           Liste, visuels et pages projet
    not-found/          Page 404
  models/               Contrats TypeScript du domaine
  shared/ui/            Composants d’interface réutilisables
```

Les dépendances vont de la page vers ses fonctionnalités, puis vers les composants partagés, les données et les modèles. Les données ne connaissent jamais l’interface.

## Ajouter un projet

1. Ajouter l’image optimisée dans `public/projects/` si nécessaire.
2. Ajouter une entrée complète dans `src/app/data/projects.data.ts`.
3. Renseigner le contexte, le problème, l’architecture, les décisions, les résultats et les apprentissages.

La route `/projects/:slug`, le SEO et la navigation vers le projet suivant sont alimentés par ces données.

## Configuration SEO

Avant un build de production, définir l’URL publique :

```powershell
$env:SITE_URL = "https://votre-domaine.fr"
npm run build
```

Cette valeur alimente `robots.txt` et `sitemap.xml`. Les URL canoniques et Open Graph sont également ajustées dans le navigateur selon le domaine courant.

## Pourquoi aucun backend ni base de données ?

Le contenu change peu et ne nécessite ni compte administrateur, ni stockage de formulaire, ni données dynamiques. La couche `data/` pourra être remplacée par une API si un CMS ou un espace d’administration devient utile.
