import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SectionHeadingComponent } from "../../../../shared/ui/section-heading/section-heading.component";

@Component({
  selector: "app-about-section",
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: "./about-section.component.html",
  styleUrl: "./about-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {}
