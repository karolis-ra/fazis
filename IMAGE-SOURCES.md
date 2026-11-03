# Redesign Stock Image Sources

## User Gallery

On 2026-11-03 the gallery was switched to the user's own work and workplace
photographs from `public/images/gallery`. Web copies are in
`public/images/gallery-web`, with the original filename plus `.webp`.
The 40 originals are unchanged. Copies are EXIF-rotated, resized to fit within
1800 x 1800, and WebP-compressed at quality 82 (10,491,988 bytes in total).
Gallery data is read from the original folder at build time, preferring an
optimized copy when present and falling back to the original for new files.
The stock gallery and its stock-photo credit have been removed.

## Current Home Hero

On 2026-11-03 the user supplied `pexels-artbovich-6238610.jpg` and selected it
for the home hero. The web copy is `public/images/redesign/hero-hallway.jpg`
(2400 x 1602), resized and JPEG-compressed without changing the composition.
The filename identifies a Pexels image; no original photo page was supplied or
independently verified in this change. It is illustrative imagery, not a Fazis project.
The earlier kitchen hero file is retained for possible future use.

## User-Selected Home Hero

On 2026-10-18 the user supplied `kitchen nice.jpg` and selected it for the home
hero. Its web copy is `public/images/redesign/hero-kitchen.jpg` (2400 x 1602),
resized and JPEG-compressed without changing the composition. Its original
photographer and license were not supplied. It replaces the home hero and social
preview only; the stock photographs listed below remain in their other uses.

## User-Selected Contacts Hero

On 2026-10-18 the user supplied `contacts.jpg` for the contacts-page hero. Its web
copy is `public/images/redesign/hero-contacts.jpg`, JPEG-compressed without changing
the composition. The original photographer and license were not supplied.

Downloaded and verified on 2026-10-13. These are real stock photographs from
Unsplash and Pexels, not photographs of Fazis work. No generated images or assets
copied from competitor websites are included.

Use these images as illustrative service imagery only. Do not label them as
Fazis projects, completed installations, staff, clients, testimonials, or proof of
experience. Do not imply endorsement by a photographer, depicted person, property
owner, or product manufacturer. Stock licensing does not establish every possible
property, trademark, or personality release.

## Files and Credits

All local paths are relative to the repository root. File sizes below use decimal
KB (1 KB = 1,000 bytes). Every delivered file is JPEG and below 250 KB.

| Local file | Dimensions | Bytes / KB | Photographer | Verified photo page | License |
| --- | --- | --- | --- | --- | --- |
| `public/images/redesign/hero-home.jpg` | 1920 x 1284 | 243,280 / 243.3 KB | [Christian Mackie](https://unsplash.com/@mackiec) | [Grey pendant lamp](https://unsplash.com/photos/grey-pendant-lamp-SxBca4GcC9k) | [Unsplash License](https://unsplash.com/license) |
| `public/images/redesign/lighting.jpg` | 1200 x 800 | 95,718 / 95.7 KB | [Pierre Ch&#226;tel-Innocenti](https://unsplash.com/@chatelp) | [White pendant lamp](https://unsplash.com/photos/white-pendant-lamp-pxoZSTdAzeU) | [Unsplash License](https://unsplash.com/license) |
| `public/images/redesign/installation.jpg` | 1200 x 1797 | 206,090 / 206.1 KB | [Ksenia Chernaya](https://www.pexels.com/@kseniachernaya/) | [An electrician using pliers to repair the AC power plugs and sockets](https://www.pexels.com/photo/an-electrician-using-pliers-to-repair-the-ac-power-plugs-and-sockets-5691590/) | [Pexels License](https://www.pexels.com/license/) |
| `public/images/redesign/security.jpg` | 1200 x 845 | 67,518 / 67.5 KB | [Jakub &#379;erdzicki](https://unsplash.com/@jakubzerdzicki) | [A white camera sitting next to a white container](https://unsplash.com/photos/a-white-camera-sitting-next-to-a-white-container-MPP2M-PC3Gw) | [Unsplash License](https://unsplash.com/license) |
| `public/images/redesign/interior.jpg` | 1400 x 933 | 200,745 / 200.7 KB | [Francesca Tosolini](https://unsplash.com/@fromitaly) | [Living room interior](https://unsplash.com/photos/living-room-interior-6japTIjUQoI) | [Unsplash License](https://unsplash.com/license) |

Total delivered image weight: 813,351 bytes (813.4 KB).

## Download URLs and Optimization

The image URLs were obtained from their verified photo pages. The host image
services performed resizing and JPEG compression at quality 80; the images retain
their original compositions and aspect ratios. No local image-processing
dependencies were installed.

- `hero-home.jpg`: https://images.unsplash.com/photo-1563298723-dcfebaa392e3?fit=max&fm=jpg&q=80&w=1920
- `lighting.jpg`: https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?fit=max&fm=jpg&q=80&w=1200
- `installation.jpg`: https://images.pexels.com/photos/5691590/pexels-photo-5691590.jpeg?auto=compress&fm=jpg&fit=max&w=1200&q=80
- `security.jpg`: https://images.unsplash.com/photo-1723186508830-ef518623fa6a?fit=max&fm=jpg&q=80&w=1200
- `interior.jpg`: https://images.unsplash.com/photo-1560185127-6ed189bf02f4?fit=max&fm=jpg&q=80&w=1400

## Visual Fit and Integration Notes

- `hero-home.jpg`: Bright white modern kitchen with two clearly visible pendant
  lights and recessed ceiling lights. The full photograph leaves open wall space
  toward the left for desktop copy. For narrow mobile `cover` layouts, start with
  a horizontal focal position around 60% so both pendants remain in the image;
  keep the upper part visible. Final crop and text contrast must be checked in
  the actual hero layout. This is a verified alternative to the suggested kitchen
  candidate, whose exact photo page and author could not be established.
- `lighting.jpg`: A complete white pendant fixture against a teal wall, photographed
  in Paris, France according to its source page. The fixture is left of center;
  use approximately `30% 50%` as a starting focal position for square crops.
- `installation.jpg`: Hands, pliers, exposed wiring, and recessed modular wall
  fittings during installation. No recognizable face and no US breaker panel.
  The fittings appear European-style, but the source does not confirm the country.
  This is a portrait photo; center a landscape crop around the wiring and hands
  and verify that the tool remains visible. Do not use it as an instructional
  example of electrical safety or claim the worker is a Fazis employee.
- `security.jpg`: White indoor security camera with other smart-home sensors on a
  clean light background. Camera lens and product shapes are clear; preserve the
  right-hand camera when cropping. Do not claim a specific model is supplied or
  installed by Fazis unless independently confirmed.
- `interior.jpg`: Optional bright furnished living room, with ceiling and table
  lighting. This is a different room from the kitchen hero, suitable for supporting
  residential-service content, not a project portfolio.

All five delivered images were opened and visually inspected. Their JPEG format,
pixel dimensions, and file sizes were checked from the local downloaded files.

## License Notes

The four Unsplash photo pages explicitly identify their images as free under the
[Unsplash License](https://unsplash.com/license), not Unsplash+. It permits free
commercial and non-commercial use and modification, with attribution appreciated
but not required. It excludes selling essentially unmodified images and building
a competing stock-image service.

The Pexels photo page identifies its image as free under the
[Pexels License](https://www.pexels.com/license/). Pexels permits free website and
marketing use and modification, with attribution appreciated but not required.
Its restrictions include implying endorsement, harmful portrayal of identifiable
people, unmodified resale, stock-platform redistribution, and trademark use.

The platform license pages remain the authoritative terms. Keep these source
credits with the assets even when the public design does not display attribution.
