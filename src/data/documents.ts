export type DocumentFile = {
  label: string;
  filename: string;
  href: string;
  note?: string;
};

export const documents: DocumentFile[] = [
  {
    label: "CV (English)",
    filename: "alex-teringer-cv.pdf",
    href: "/documents/alex-teringer-cv.pdf",
    note: "Phone & full address withheld from the public copy — available on request.",
  },
  {
    label: "職務経歴書 (Work history, Japanese)",
    filename: "alex-teringer-shokumu-keirekisho.pdf",
    href: "/documents/alex-teringer-shokumu-keirekisho.pdf",
  },
];
