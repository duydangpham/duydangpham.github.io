# Website Image Slots

Drop replacement images into these folders using the exact same filenames. Keep the same aspect ratio where possible so the layout stays stable.

## Wired Into The Site

These files are already referenced by the Astro pages.

### Default Social Image: `public/images/`

| File | Recommended size | Used for |
| --- | ---: | --- |
| `og-default.jpg` | 1200 x 630 | Default Open Graph / social preview image |

### Homepage: `public/images/home/`

| File | Recommended size | Used for |
| --- | ---: | --- |
| `ecosystem-training-720x480.jpg` | 720 x 480 | Ecosystem row: Đào tạo / Chia sẻ |
| `ecosystem-consulting-720x480.jpg` | 720 x 480 | Ecosystem row: Tư vấn / Giải pháp |
| `ecosystem-ambrosia-720x480.jpg` | 720 x 480 | Ecosystem row: Ambrosia |
| `ecosystem-research-720x480.jpg` | 720 x 480 | Ecosystem row: Nghiên cứu |

### Đào Tạo: `public/images/dao-tao/`

| File | Recommended size | Used for |
| --- | ---: | --- |
| `hero-workshop-720x900.jpg` | 720 x 900 | Hero large image |
| `hero-seminar-720x430.jpg` | 720 x 430 | Hero seminar image |
| `hero-corporate-training-720x430.jpg` | 720 x 430 | Hero corporate training image |
| `academic-rmit-720x480.jpg` | 720 x 480 | RMIT Vietnam card |
| `academic-western-sydney-720x480.jpg` | 720 x 480 | Western Sydney University Vietnam card |
| `academic-fpt-school-of-business-720x480.jpg` | 720 x 480 | FPT School of Business card |
| `academic-gonzaga-720x480.jpg` | 720 x 480 | Gonzaga University card |
| `gallery-classroom-720x540.jpg` | 720 x 540 | Gallery slot 01 |
| `gallery-panel-public-seminar-720x540.jpg` | 720 x 540 | Gallery slot 02 |
| `gallery-executive-workshop-720x540.jpg` | 720 x 540 | Gallery slot 03 |
| `gallery-corporate-training-720x540.jpg` | 720 x 540 | Gallery slot 04 |
| `gallery-fulbright-gonzaga-720x540.jpg` | 720 x 540 | Gallery slot 05 |
| `gallery-ai-practice-720x540.jpg` | 720 x 540 | Gallery slot 06 |

### Tư Vấn: `public/images/tu-van/`

| File | Recommended size | Used for |
| --- | ---: | --- |
| `hero-ai-strategy-720x430.jpg` | 720 x 430 | Hero AI panel |
| `hero-ona-network-720x900.jpg` | 720 x 900 | Hero ONA panel |
| `hero-software-solutions-720x430.jpg` | 720 x 430 | Hero software panel |
| `software-digital-platforms-720x480.jpg` | 720 x 480 | Software card: Nền tảng số |
| `software-data-platforms-720x480.jpg` | 720 x 480 | Software card: Nền tảng dữ liệu |
| `software-ai-applications-720x480.jpg` | 720 x 480 | Software card: Ứng dụng AI |
| `software-custom-solutions-720x480.jpg` | 720 x 480 | Software card: Giải pháp riêng |

### Sự Kiện: `public/images/su-kien/`

| File | Recommended size | Used for |
| --- | ---: | --- |
| `hero-event-space-720x900.jpg` | 720 x 900 | Hero large image |
| `hero-banquet-table-720x430.jpg` | 720 x 430 | Hero table image |
| `hero-cuisine-720x430.jpg` | 720 x 430 | Hero cuisine image |
| `room-amber-720x480.jpg` | 720 x 480 | Amber room card |
| `room-ruby-720x480.jpg` | 720 x 480 | Ruby room card |
| `room-sapphire-720x480.jpg` | 720 x 480 | Sapphire room card |
| `room-diamond-720x480.jpg` | 720 x 480 | Diamond room card |
| `gallery-business-event-960x540.jpg` | 960 x 540 | Wide gallery tile |
| `gallery-fine-dining-detail-720x540.jpg` | 720 x 540 | Gallery tile |
| `gallery-private-meeting-room-720x540.jpg` | 720 x 540 | Gallery tile |
| `gallery-cocktail-reception-720x1080.jpg` | 720 x 1080 | Tall gallery tile |

### Nghiên Cứu: `public/images/nghien-cuu/`

| File | Recommended size | Used for |
| --- | ---: | --- |
| `hero-research-map-900x900.jpg` | 900 x 900 | Research hero visual background |

## Ready But Not Yet Wired

These files exist as prepared slots for future sections or blog/social images.

| Folder | Files |
| --- | --- |
| `public/images/nghien-cuu/` | `ona-network-720x480.jpg`, `ai-champion-720x480.jpg`, `infosec-720x480.jpg`, `digital-transformation-720x480.jpg` |
| `public/images/gioi-thieu/` | `profile-portrait-720x900.jpg`, `work-context-720x480.jpg` |
| `public/images/lien-he/` | `contact-hero-900x600.jpg` |
| `public/images/goc-nhin/` | `post-cover-1200x630.jpg`, `og-insights-1200x630.jpg` |
| `public/images/cong-bo-khoa-hoc/` | `publication-thumbnail-720x405.jpg` |

## Replacement Notes

- Keep the filename unchanged.
- JPG is safest for photos. If you use PNG or WebP, update the page path in `src/pages/...`.
- Match the aspect ratio first; the exact pixel size can be larger.
- Compress large photos before committing. A practical target is under 400 KB per image unless the image is hero-critical.
