import { ChangeDetectionStrategy, Component } from "@angular/core";
import { profile } from "../../../../data/profile.data";

@Component({
  selector: "app-hero-section",
  standalone: true,
  templateUrl: "./hero-section.component.html",
  styleUrl: "./hero-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  protected readonly profile = profile;
}
