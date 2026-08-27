import { ChangeDetectionStrategy, Component } from "@angular/core";
import { journey } from "../../../../data/profile.data";
import { SectionHeadingComponent } from "../../../../shared/ui/section-heading/section-heading.component";

@Component({
  selector: "app-journey-section",
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: "./journey-section.component.html",
  styleUrl: "./journey-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JourneySectionComponent {
  protected readonly journey = journey;
}
