import { ChangeDetectionStrategy, Component } from "@angular/core";
import { projects } from "../../../data/projects.data";
import { SectionHeadingComponent } from "../../../shared/ui/section-heading/section-heading.component";
import { ProjectPreviewComponent } from "../project-preview/project-preview.component";

@Component({
  selector: "app-projects-section",
  standalone: true,
  imports: [SectionHeadingComponent, ProjectPreviewComponent],
  templateUrl: "./projects-section.component.html",
  styleUrl: "./projects-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {
  protected readonly projects = projects;
}
