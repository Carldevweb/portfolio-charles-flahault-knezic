import type { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./features/home/home-page/home-page.component").then(
        (module) => module.HomePageComponent,
      ),
    title: "Charles Flahault Knezic — Développeur Full Stack Java / Angular",
  },
  {
    path: "projects/:slug",
    loadComponent: () =>
      import("./features/projects/project-detail-page/project-detail-page.component").then(
        (module) => module.ProjectDetailPageComponent,
      ),
  },
  {
    path: "404",
    loadComponent: () =>
      import("./features/not-found/not-found-page/not-found-page.component").then(
        (module) => module.NotFoundPageComponent,
      ),
    title: "Page introuvable — Charles Flahault Knezic",
  },
  {
    path: "**",
    redirectTo: "404",
  },
];
