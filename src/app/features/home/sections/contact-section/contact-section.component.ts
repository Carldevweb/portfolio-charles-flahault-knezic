import { ChangeDetectionStrategy, Component } from "@angular/core";
import { profile } from "../../../../data/profile.data";

@Component({
  selector: "app-contact-section",
  standalone: true,
  templateUrl: "./contact-section.component.html",
  styleUrl: "./contact-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  protected readonly profile = profile;
  protected readonly emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;
}
