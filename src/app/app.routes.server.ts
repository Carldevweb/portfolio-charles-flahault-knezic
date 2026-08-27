import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projects/:slug',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Client,
    async getPrerenderParams() {
      return [
        { slug: 'statunox' },
        { slug: 'archboard' },
        { slug: 'villa-deste' },
      ];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
