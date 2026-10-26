# Design Guide

## Reference

Use the Stodio Webflow preview as the visual reference for this landing page: [Stodio preview](https://preview.webflow.com/preview/stodio?utm_medium=preview_link&utm_source=designer&utm_content=stodio&preview=b454773783ba8e114e16da009f08d8b7&workflow=sitePreview). The values below come from its Style Guide page. The duplicated `Primary BG` entries are recorded once under a clear name.

## Color Palette

| Token | Hex | Use |
|---|---|---|
| Brand | `#DE322D` | Primary buttons, links, and small emphasis |
| Text | `#0A0A0A` | Headings and main body text |
| Main background | `#FFFFFF` | Default page background and content surfaces |
| Muted | `#A5A5A5` | Secondary labels and decorative details; avoid for small body text |
| Secondary background | `#F1F2F1` | Alternate section backgrounds |
| Light background | `#F3F3F3` | Subtle callouts and quiet content areas |
| Divider | `#E6E6E6` | Borders and separators |

## Use on the Training Page

- Keep the page mostly white, with black text and generous spacing.
- Use the brand red for the main reservation action and a few small highlights. White button text is part of the reference palette.
- Separate sections with the two pale gray backgrounds or a thin divider. Avoid adding new brand colors, gradients, or decorative color treatments.
- Use muted gray for supporting details only; keep essential course information in the main text color.
- Keep the French copy and course facts grounded in the supplied brochure. Present its accreditation and health statements as brochure claims, not independently verified facts.

## Layout & Typography

- Use Geist sans-serif, large left-aligned headlines, generous whitespace, and a centered content width capped near 1440px.
- Keep corners consistently rounded: pills for actions and about 20–26px for large image and feature sections.
- Use responsive grids that stack cleanly on narrow screens. Keep the hero image prominent and place course facts close to the primary reservation action.

## Motion & Scrolling

- Use Lenis for smooth vertical and anchor scrolling. Disable it when `prefers-reduced-motion: reduce` is active.
- Keep motion restrained: a short hero entrance, a subtle red status-dot pulse, and slow image scale on hover. Use Tailwind `motion-safe`/`motion-reduce` variants and preserve visible keyboard focus.
- Style the native scrollbar with a slim red thumb and light-gray track; retain native scrolling behavior and avoid hiding the scrollbar.
- Keep global CSS limited to tokens, base styles, the scrollbar pseudo-elements, and keyframes referenced by Tailwind classes.
