import { ChangeDetectionStrategy, Component } from "@angular/core";
import { workflow } from "../../../../data/profile.data";
import { SectionHeadingComponent } from "../../../../shared/ui/section-heading/section-heading.component";

@Component({
  selector: "app-workflow-section",
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: "./workflow-section.component.html",
  styleUrl: "./workflow-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkflowSectionComponent {
  protected readonly workflow = workflow;
}
