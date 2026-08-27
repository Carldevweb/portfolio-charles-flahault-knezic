import { ChangeDetectionStrategy, Component, inject, OnInit } from "@angular/core";
import { SeoService } from "../../../core/services/seo.service";
import { ProjectsSectionComponent } from "../../projects/projects-section/projects-section.component";
import { AboutSectionComponent } from "../sections/about-section/about-section.component";
import { ContactSectionComponent } from "../sections/contact-section/contact-section.component";
import { HeroSectionComponent } from "../sections/hero-section/hero-section.component";
import { JourneySectionComponent } from "../sections/journey-section/journey-section.component";
import { StackSectionComponent } from "../sections/stack-section/stack-section.component";
import { WorkflowSectionComponent } from "../sections/workflow-section/workflow-section.component";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    StackSectionComponent,
    JourneySectionComponent,
    WorkflowSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: "Charles Flahault Knezic — Développeur Full Stack Java / Angular",
      description:
        "Découvrez les applications Java et Angular développées par Charles Flahault Knezic, avec leurs besoins, leurs fonctionnalités et leurs choix techniques.",
      path: "/",
    });
  }
}
