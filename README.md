# LUNA Grader

A fast, keyboard-driven way to grade assignments downloaded from **LUNA** (Kwansei Gakuin University's LMS), including scores, feedback comments and late flags, and to send the grades back to LUNA in its own upload format.

It runs entirely in your web browser. **Nothing is uploaded or stored anywhere except your own computer**: student files are read from your folders, and your grades are saved back into those same folders.

**Open the grader:** https://YOUR-GITHUB-USERNAME.github.io/2026_Assignment_Grader/ (or download `index.html` from this repository and double-click it).

[日本語の説明は下にあります](#日本語の説明)

---

## Contents

1. [What you need](#what-you-need)
2. [One-time setup](#one-time-setup)
3. [Grading an assignment, step by step](#grading-an-assignment-step-by-step)
4. [Keyboard shortcuts](#keyboard-shortcuts)
5. [Settings: scores, comment banks and formatting requirements](#settings)
6. [Word files and iPhone photos](#word-files-and-iphone-photos)
7. [Where your work is saved](#where-your-work-is-saved)
8. [Troubleshooting](#troubleshooting)
9. [Privacy](#privacy)
10. [For maintainers: publishing and building](#for-maintainers)

---

## What you need

- **Google Chrome or Microsoft Edge** on a Mac or Windows computer. Safari and Firefox can't open and save to folders the way the grader needs.
- Access to your course in LUNA.

Nothing needs to be installed.

---

## One-time setup

### 1. Make a "LUNA Assignments" folder for each class

Inside each class's folder on your computer, make a folder called **`LUNA Assignments`**. All of that class's LUNA downloads go here.

```
Academic Writing/                 ← your class folder (any name, anywhere)
└── LUNA Assignments/             ← make this
```

Folders kept in Box, Dropbox, OneDrive or iCloud work fine, and your saved grades then sync with them.

### 2. Add your classes in the grader

1. Open the grader and click **Add classes** (or **Edit classes and settings**).
2. Click **+ Add a class**, type the class name, and repeat for each class.
3. Click **Save**.

### 3. Choose each class's folder (once)

The first time you open a class, the grader asks you to choose its folder. Choose either the class folder or its `LUNA Assignments` folder. Chrome then asks for permission to view and save files in that folder. Click **Allow** (or **Edit files**).

Chrome remembers the folder. In later sessions you may be asked to click **Allow** once more; that's Chrome protecting your files.

---

## Grading an assignment, step by step

### 1. Download two things from LUNA

For each assignment, download both of these from LUNA into that class's `LUNA Assignments` folder:

| What | What it looks like | Why |
|---|---|---|
| **The students' submissions** (batch download) | A folder (or `.zip`) named like `2026_32017003_assignment_status_Week_1_Homework_…` containing files such as `32026337_essay.docx` | The work you're grading. The file names start with each student's ID. |
| **The feedback-comment upload file** | `2026_32017003_assignment_comment_format_250565.xlsx` | The spreadsheet LUNA accepts back, with one row per student. The grader fills in the scores and comments. |

Then:

- If the submissions arrived as a **`.zip`**, double-click it to unzip it (on Windows: right-click → *Extract All*).
- **Move the upload file into that assignment's download folder.** This keeps everything for one assignment together. Leaving it directly in `LUNA Assignments` also works.

```
LUNA Assignments/
└── 2026_32017003_assignment_status_Week_1_Homework_…/
    ├── 32026337_essay.docx                              ← students' work
    ├── 32026355_IMG_0655.HEIC
    ├── …
    ├── assignment_comment_250565.xlsx                   ← comes with the download
    └── 2026_32017003_assignment_comment_format_250565.xlsx   ← the upload file you moved here
```

The number at the end (here `250565`) is how the grader knows which upload file belongs to which download.

### 2. Open the class and the assignment

Open the grader, press the class's number (or click it), then press the assignment's number. Each assignment shows how many students submitted and how many you've graded.

### 3. Grade

- The **left** column lists students who submitted. **LATE** ones are marked in red, with a red banner above their work.
- The **middle** shows the student's work. If a student sent several files, switch between them with **← →**.
- The **right** side is where you give a score and a comment. Everything **saves automatically** as you type.

A typical rhythm: look at the work → press **1–9** for a quick score (or **S** to type one) → **C** to write a comment, or **Alt+1–9** to add one from your comment bank → **⌘/Ctrl+Enter** to save and move to the next student.

Use the list's drop-down to show **Ungraded**, **Flagged**, **Late** or **No submission** students. **N** jumps to the next ungraded student.

### 4. Save the upload file

When you've finished, click **Save LUNA upload file** (top right). The grader writes a new file into the assignment's download folder, named like:

> `2026_32017003_assignment_comment_format_250565_GRADED.xlsx`

It is a copy of LUNA's upload file with only the **Score** and **Feedback Comments** filled in. LUNA's original file is never changed. You can press Save again at any time; it overwrites the `_GRADED` file with your latest grades.

### 5. Upload it to LUNA

In LUNA, go to the assignment's **Batch registration (Feedback Comment)** screen and upload the `_GRADED.xlsx` file.

---

## Keyboard shortcuts

Press **?** in the grader to see these at any time.

| Key | Action |
|---|---|
| **1–9** on the start screens | Choose a class / an assignment |
| **J** or **↓** / **K** or **↑** | Next / previous student |
| **N** | Next *ungraded* student |
| **→** / **←** | Next / previous file of the same student |
| **1–9** | Quick score |
| **S** | Type a score (then **Enter** moves to the comment) |
| **C** | Type a comment |
| **Alt+1–9** (⌥ on Mac) | Add a comment from the comment bank (works while typing) |
| **⌘/Ctrl+Enter** | Save and go to the next student (works while typing) |
| **Esc** | Leave the text box so shortcuts work again (press twice to go back to the assignment list) |
| **F** | Flag / unflag the student for later |
| **Z** | Images and Word pages: fit to window / actual size |
| **R** | Images: rotate 90° |
| **I** | Word: show / hide full formatting details |
| **W** | Word: open the student's file in Word |
| **Space** | Audio / video: play / pause |
| **O** | Open the file in a new tab |
| **D** | Download the file |
| **/** | Search students |

If you click inside a PDF, the PDF viewer takes over the keyboard. Press **Esc** or click the right-hand panel to get the shortcuts back.

---

## Settings

Click **Settings**. Under **Settings for**, choose a class to give it its own settings, or choose *Default* for the settings used by any class that has none of its own.

- **Maximum score:** shown next to the score box; you're warned if a score goes above it.
- **Quick scores:** for example `10, 9, 8, 7, 6, 5, 0`. The first nine go on keys 1–9. For a simple *none / half / full* scheme, use `0, 5, 10`.
- **Word formatting requirements (optional):** font, font size, line spacing, margins, paper size and a word range. Each Word file then shows these as green ✓ or red ✗. Leave a box empty to skip that check.
- **Comment bank:** one comment per line. The first nine can be added with Alt+1–9, and the panel's **edit** link opens this directly.
- **Classes:** rename classes, change a class's folder (**Choose folder…**), or remove a class. Removing a class never touches its files.

---

## Word files and iPhone photos

### Word (.docx)

Word files are shown as pages, keeping the paper size, margins, fonts, sizes, spacing, indents, alignment, headers and footers, tables and page breaks.

Above each document, a **formatting summary** shows values read directly from the Word file itself:
- paper size and margins;
- main font and size, with percentages, so a stray sentence in another font shows up;
- line spacing and alignment;
- word count and page count.

Press **I** for the full breakdown, which adds paragraph spacing, first-line indent, the Japanese line grid and page numbers.

The page view is a close approximation, not Word itself:
- line and page breaks can fall slightly differently;
- a font that isn't installed on your computer is replaced, and the summary warns you when that happens;
- text boxes and drawn shapes may not appear exactly.

**The formatting summary is always exact.** To see the document exactly as Word shows it, press **W**.

**Making W open Word automatically (one-time):** the first time you press W, Chrome downloads a copy of the file. Click Chrome's download icon (top right), click **…** next to the file, and choose **Always open files of this type**. From then on, W opens the file straight in Word. These copies go to your Downloads folder; the student's original is never changed.

Older `.doc` files can't be previewed; press W or D to open them.

### iPhone photos (.HEIC)

HEIC photos are converted and shown like any other image. A large photo can take a few seconds the first time.

### Other files

PDFs, images (JPG, PNG and others), Excel files, text files, audio and video are shown directly. Anything else can be opened with **O** or downloaded with **D**.

---

## Where your work is saved

| What | Where |
|---|---|
| Your scores and comments, while you grade | `luna-grader_<number>.json` in the assignment's download folder (plus a backup copy in the browser) |
| The file you upload to LUNA | `…assignment_comment_format_<number>_GRADED.xlsx` in the same folder |
| Your classes, comment banks and settings | In the browser on this computer |

Because grades are saved in the assignment folder, you can close the browser at any time and continue later, even on another computer if the folder syncs (Box, Dropbox and so on). Your **settings** stay in the browser, so on another computer you add your classes again.

---

## Troubleshooting

| Problem | What to do |
|---|---|
| An assignment says **"upload file not downloaded yet"** | Download the feedback-comment upload file (`…assignment_comment_format_….xlsx`) from LUNA and put it in that assignment's folder. Your grades are safe meanwhile. |
| A **"still zipped"** or **"download in progress"** message | Wait for the download to finish, unzip it, then press **R** (Refresh). |
| Chrome asks for permission every time | This is normal Chrome behaviour for folders; click **Allow**. |
| "The folder can't be found any more" | The class folder was moved or renamed. Choose it again when asked. |
| **LUNA rejects the upload file** | Make sure you're uploading the **`…comment_format_…_GRADED.xlsx`** file, not the spreadsheet that came inside the download (`assignment_comment_<number>.xlsx`, which LUNA doesn't accept back). |
| Something looks out of date after an update | Reload with **⌘⇧R** (Mac) or **Ctrl+Shift+R** (Windows). The version number is at the bottom of the start screen. |
| A Word file shows a ⚠ font warning | The student used a font that isn't installed on your computer, so the page view substitutes it. The formatting summary still names the real font; press **W** to see it in Word. |

---

## Privacy

- The grader is a single web page with no server behind it. Student files and grades are never sent anywhere.
- All libraries are built into the page, so it makes no network requests at all after loading. You can check this in Chrome's developer tools (Network tab).
- GitHub only serves the page itself, like any website; it never sees your files or grades.
- If you prefer, download `index.html` and open it from your own computer. It works exactly the same way, completely offline.

---

## For maintainers

### Publishing on GitHub Pages

1. Create a **public** repository on GitHub (for example `2026_Assignment_Grader`) and push this folder to it.
2. On GitHub, open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute the grader is live at `https://<your-username>.github.io/<repository-name>/`. Put that link at the top of this README.

Every change pushed to `main` goes live for everyone straight away, so test changes locally before pushing.

### Building from source

`index.html` is generated; edit `src/grader.src.html` instead. To rebuild:

```
npm install
npm run build
```

`npm run build -- --personal` also produces `LUNA-Grader-personal.html` with the author's own class list and scoring defaults (this file is ignored by git).

### How it works (short version)

- The **student list** comes from the spreadsheet inside each batch download (`assignment_comment_<n>.xlsx`): IDs, names, submission times and late status (`Submission Status` = 2).
- **Files** are matched to students by the ID at the start of each file name.
- The **upload file** (`…assignment_comment_format_<n>.xlsx`) is copied with only the Score (column H) and Feedback Comments (column I) cells changed. Comments are written as shared strings, the way Excel does, and nothing else in the file is altered.
- Folder access uses the browser's File System Access API; folder handles are remembered in IndexedDB.

### Licences

The grader's own code: *choose a licence before publishing (for example MIT) and add it as `LICENSE`*.

Bundled libraries and their licences are listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

---

## 日本語の説明

LUNA からダウンロードした課題を、キーボード操作で素早く採点するためのツールです。点数・フィードバックコメント・提出遅れの確認ができ、LUNA の一括登録用ファイル（フィードバックコメント）に採点結果を書き込みます。

**すべてブラウザの中で動作します。** 学生のファイルや採点結果がインターネット上に送信・保存されることはありません。採点結果は、ご自分のパソコンの課題フォルダに保存されます。

### 必要なもの

- Mac または Windows の **Google Chrome** か **Microsoft Edge**（Safari・Firefox は非対応）
- インストールは不要です。

### 最初の準備（1回だけ）

1. 各授業のフォルダの中に **`LUNA Assignments`** というフォルダを作ります。
2. グレーダーを開き、**Add classes** から授業名を登録して **Save** を押します。
3. 授業を初めて開くときにフォルダの選択を求められるので、その授業のフォルダ（または `LUNA Assignments` フォルダ）を選び、Chrome の確認で **許可** を押します。

### 課題ごとの手順

1. LUNA から次の2つを `LUNA Assignments` フォルダにダウンロードします。
   - **提出物の一括ダウンロード**（`…assignment_status_課題名_…` という名前のフォルダ。zip の場合はダブルクリックで解凍）
   - **フィードバックコメントの一括登録用ファイル**（`…assignment_comment_format_番号.xlsx`）
2. 一括登録用ファイルを、その課題のダウンロードフォルダの中に移動します。
3. グレーダーで授業と課題を番号キーで選び、採点します。入力内容は自動で保存されます。
4. 採点が終わったら **Save LUNA upload file** を押します。ダウンロードフォルダに `…_GRADED.xlsx` が作成されます。
5. LUNA の「一括登録（フィードバックコメント）」画面で、その `_GRADED.xlsx` をアップロードします。

### 主なキー操作

| キー | 操作 |
|---|---|
| **J / K** | 次 / 前の学生 |
| **N** | 次の未採点の学生 |
| **→ / ←** | 同じ学生の次 / 前のファイル |
| **1〜9** | クイック採点 |
| **S / C** | 点数 / コメントを入力 |
| **Alt（⌥）+1〜9** | コメントバンクから挿入 |
| **⌘/Ctrl+Enter** | 保存して次の学生へ |
| **F** | 後で確認するためにフラグを付ける |
| **I / W** | Word：書式の詳細を表示 / Word で開く |
| **?** | ショートカット一覧 |

### 補足

- 提出遅れの学生は赤い「LATE」表示とバナーで示されます。
- Word ファイルはページ表示され、上部に書式（用紙サイズ・余白・フォント・文字サイズ・行間・語数など）がファイルから正確に読み取って表示されます。設定で授業ごとの書式要件を入力すると、合否が ✓ / ✗ で表示されます。
- iPhone の HEIC 写真もそのまま表示できます（初回は数秒かかることがあります）。
- 授業ごとに、最大点・クイック採点の点数・コメントバンクを設定できます（Settings → Settings for）。
