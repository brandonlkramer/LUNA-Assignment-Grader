# Third-party software

`index.html` bundles the following open-source libraries, unmodified, so that the app works offline and makes no network requests. Their licence texts are in the [`licenses`](licenses/) folder.

| Library | Version | Used for | Licence |
|---|---|---|---|
| [SheetJS Community Edition (xlsx)](https://git.sheetjs.com/sheetjs/sheetjs) | 0.18.5 | Reading LUNA's spreadsheets; Excel previews | Apache-2.0 |
| [JSZip](https://github.com/Stuk/jszip) | 3.10.2 | Writing the upload file; reading Word files | MIT (dual-licensed MIT or GPL-3.0; used under MIT) |
| [docx-preview](https://github.com/VolodymyrBaydalka/docxjs) | 0.4.1 | Page view of Word files | Apache-2.0 |
| [heic-to](https://github.com/hoppergee/heic-to) (includes [libheif](https://github.com/strukturag/libheif)) | 1.6.7 | Displaying iPhone HEIC photos | LGPL-3.0 |

## Note on heic-to / libheif (LGPL-3.0)

heic-to is included without modification. Its complete source code is available at https://github.com/hoppergee/heic-to (version 1.6.7, file `dist/iife/heic-to.js`). Under the LGPL you may replace it with a modified or newer version: put your version in `node_modules/heic-to` and rebuild with `npm run build` (see the README). The full texts of the GNU LGPL v3 and GNU GPL v3 are in `licenses/LGPL-3.0-only.txt` and `licenses/GPL-3.0-only.txt`.
