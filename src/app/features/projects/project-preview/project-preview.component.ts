import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import type { Project } from "../../../models/project.model";
import { ProjectVisualComponent } from "../project-visual/project-visual.component";

@Component({
  selector: "app-project-preview",
  standalone: true,
  imports: [RouterLink, ProjectVisualComponent],
  templateUrl: "./project-preview.component.html",
  styleUrl: "./project-preview.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectPreviewComponent {
  readonly project = input.required<Project>();
  readonly index = input.required<number>();
}
