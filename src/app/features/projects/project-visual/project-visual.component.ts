import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import type { ProjectVisual } from "../../../models/project.model";

@Component({
  selector: "app-project-visual",
  standalone: true,
  templateUrl: "./project-visual.component.html",
  styleUrl: "./project-visual.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectVisualComponent {
  readonly visual = input.required<ProjectVisual>();
  protected readonly chartHeights = [42, 48, 44, 55, 53, 61, 58, 67, 63, 71, 68, 76, 72, 80, 78, 84];
}
