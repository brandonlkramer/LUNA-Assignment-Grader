// Builds index.html from src/grader.src.html by inlining the libraries from node_modules,
// so the finished app is one self-contained file that makes no network requests.
//
//   npm install
//   npm run build                 -> index.html (public version)
//   npm run build -- --personal   -> also keeps the author's own class list and scoring defaults
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const lib = p => fs.readFileSync(path.join(root, "node_modules", p), "utf8").replace(/<\/script/gi, "<\\/script");
let h = fs.readFileSync(path.join(__dirname, "grader.src.html"), "utf8");
h = h.replace("/*JSZIP*/", () => lib("jszip/dist/jszip.min.js"))
     .replace("/*DOCXPREVIEW*/", () => lib("docx-preview/dist/docx-preview.min.js"))
     .replace("/*HEICTO*/", () => lib("heic-to/dist/iife/heic-to.js"))
     .replace("/*XLSX*/", () => lib("xlsx/dist/xlsx.full.min.js"));
const personal = process.argv.includes("--personal");
h = personal
  ? h.replace(/\/\*PERSONAL\*\/|\/\*END\*\//g, "")
  : h.replace(/\/\*PERSONAL\*\/[\s\S]*?\/\*END\*\//g, m => m.startsWith("/*PERSONAL*/[") ? "[]" : "");
const out = path.join(root, personal ? "LUNA-Grader-personal.html" : "index.html");
fs.writeFileSync(out, h);
console.log("Wrote " + path.relative(root, out) + " (" + (h.length / 1e6).toFixed(2) + " MB)");
