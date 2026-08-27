import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SiteFooterComponent } from "../core/layout/site-footer/site-footer.component";
import { SiteHeaderComponent } from "../core/layout/site-header/site-header.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
