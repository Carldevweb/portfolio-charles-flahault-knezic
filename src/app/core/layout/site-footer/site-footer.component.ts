import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { profile } from "../../../data/profile.data";

@Component({
  selector: "app-site-footer",
  standalone: true,
  templateUrl: "./site-footer.component.html",
  styleUrl: "./site-footer.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly profile = profile;
  protected readonly emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;
}
