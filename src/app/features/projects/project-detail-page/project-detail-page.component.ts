import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { SeoService } from "../../../core/services/seo.service";
import { profile } from "../../../data/profile.data";
import { getProject, projects } from "../../../data/projects.data";
import type { Project } from "../../../models/project.model";
import { ProjectVisualComponent } from "../project-visual/project-visual.component";

@Component({
  selector: "app-project-detail-page",
  standalone: true,
  imports: [RouterLink, ProjectVisualComponent],
  templateUrl: "./project-detail-page.component.html",
  styleUrl: "./project-detail-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailPageComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);

  protected readonly profile = profile;
  protected readonly project = signal<Project | null>(null);
  protected readonly nextProject = signal<Project | null>(null);

  protected getEmailComposeUrl(projectName: string): string {
    const recipient = encodeURIComponent(profile.email);
    const subject = encodeURIComponent(`Échange au sujet du projet ${projectName}`);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}`;
  }

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const project = getProject(params.get("slug") ?? "");
      if (!project) {
        void this.router.navigateByUrl("/404", { replaceUrl: true });
        return;
      }

      const currentIndex = projects.findIndex((item) => item.slug === project.slug);
      this.project.set(project);
      this.nextProject.set(projects[(currentIndex + 1) % projects.length]);
      this.seo.update({
        title: `${project.name} — Étude de cas · Charles Flahault Knezic`,
        description: project.summary,
        path: `/projects/${project.slug}`,
      });
    });
  }
}
