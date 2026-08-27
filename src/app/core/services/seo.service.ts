import { DOCUMENT } from "@angular/common";
import { inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

export type SeoMetadata = {
  title: string;
  description: string;
  path: string;
};

@Injectable({ providedIn: "root" })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  update(metadata: SeoMetadata): void {
    const documentOrigin = this.document.location?.origin;
    const origin = documentOrigin && documentOrigin !== "null" && documentOrigin !== "http://ng-localhost"
      ? documentOrigin
      : "https://portfolio-charles-flahault-knezic.vercel.app";
    const url = new URL(metadata.path, origin).toString();
    const image = new URL("/og.png", origin).toString();

    this.title.setTitle(metadata.title);
    this.meta.updateTag({ name: "description", content: metadata.description });
    this.meta.updateTag({ property: "og:title", content: metadata.title });
    this.meta.updateTag({ property: "og:description", content: metadata.description });
    this.meta.updateTag({ property: "og:url", content: url });
    this.meta.updateTag({ property: "og:image", content: image });
    this.meta.updateTag({ name: "twitter:title", content: metadata.title });
    this.meta.updateTag({ name: "twitter:description", content: metadata.description });
    this.meta.updateTag({ name: "twitter:image", content: image });

    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement("link");
      canonical.rel = "canonical";
      this.document.head.append(canonical);
    }
    canonical.href = url;
  }
}
