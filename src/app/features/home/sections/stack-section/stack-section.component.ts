import { ChangeDetectionStrategy, Component } from "@angular/core";
import { stackGroups } from "../../../../data/profile.data";
import { SectionHeadingComponent } from "../../../../shared/ui/section-heading/section-heading.component";

@Component({
  selector: "app-stack-section",
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: "./stack-section.component.html",
  styleUrl: "./stack-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackSectionComponent {
  protected readonly stackGroups = stackGroups;
}
