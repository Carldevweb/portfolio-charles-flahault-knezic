import { ChangeDetectionStrategy, Component, ElementRef, HostListener, signal, viewChild } from "@angular/core";
import { RouterLink } from "@angular/router";
import { navigation, profile } from "../../../data/profile.data";

@Component({
  selector: "app-site-header",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./site-header.component.html",
  styleUrl: "./site-header.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  protected readonly navigation = navigation;
  protected readonly profile = profile;
  protected readonly mobileMenuOpen = signal(false);
  private readonly mobileMenu = viewChild<ElementRef<HTMLDetailsElement>>("mobileMenu");
  private readonly mobileMenuToggle = viewChild<ElementRef<HTMLElement>>("mobileMenuToggle");

  protected onMobileMenuToggle(event: Event): void {
    this.mobileMenuOpen.set((event.currentTarget as HTMLDetailsElement).open);
  }

  protected closeMobileMenu(): void {
    const menu = this.mobileMenu()?.nativeElement;
    if (!menu) {
      return;
    }

    menu.open = false;
    this.mobileMenuOpen.set(false);
  }

  @HostListener("document:keydown.escape", ["$event"])
  protected closeMobileMenuWithEscape(event: Event): void {
    if (!this.mobileMenuOpen()) {
      return;
    }

    event.preventDefault();
    this.closeMobileMenu();
    this.mobileMenuToggle()?.nativeElement.focus();
  }
}
