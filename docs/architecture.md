# Architecture du portfolio Angular

## Décision

Le portfolio est un **monolithe frontend Angular modulaire** : une seule application à développer, tester et déployer, divisée en fonctionnalités autonomes.

Cette architecture correspond au besoin actuel. Elle évite un backend et une base de données inutiles tout en conservant des frontières explicites pour évoluer.

## Modules

| Module | Responsabilité | Peut dépendre de |
| --- | --- | --- |
| `core/` | Layout global et services uniques | `data` |
| `features/` | Pages et comportements orientés usage | `shared`, `data`, `models`, `core` |
| `shared/` | Interface générique et réutilisable | `models` |
| `data/` | Contenu typé du profil et des projets | `models` |
| `models/` | Contrats TypeScript | aucun autre module |

## Règles de dépendance

```text
app.routes → features → shared
                  ↓        ↓
                data → models
                  ↘
                   core services
```

- Les données ne connaissent jamais l’interface.
- Les composants partagés ne connaissent pas les pages.
- Une page compose des composants spécialisés ; elle ne duplique pas le contenu éditorial.
- Les études de cas partagent le même contrat `Project` et la même route dynamique.
- Les pages sont chargées à la demande avec Angular Router.

## Évolution possible

Si un CMS, un formulaire persistant ou un espace d’administration devient nécessaire :

1. conserver `Project` comme contrat du frontend ;
2. introduire un port de données dans la fonctionnalité projets ;
3. brancher un adaptateur HTTP à la place des données locales ;
4. ajouter le backend et sa base de données comme modules séparés dans le même dépôt.

Un service supplémentaire doit répondre à une responsabilité métier réelle, pas uniquement à une préférence technique.
