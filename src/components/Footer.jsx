export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto container flex flex-col gap-8 py-10 px-4 md:flex-row md:items-center md:justify-between md:py-16 md:px-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Milan</span>
            <span>AI</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            The AI-powered unified platform for developers.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-center">
          <a
            href="mailto:contact@milanai.org"
            className="text-sm font-medium hover:text-primary transition-colors duration-200 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            contact@milanai.org
          </a>
          <div className="flex items-center gap-6 mt-2">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.08.66-.22.66-.48v-1.7c-2.67.6-3.23-1.13-3.23-1.13-.44-1.1-1.08-1.4-1.08-1.4-.88-.6.07-.6.07-.6.97.07 1.48 1 1.48 1 .87 1.52 2.27 1.07 2.83.82.08-.65.35-1.09.63-1.34-2.13-.25-4.37-1.07-4.37-4.76 0-1.05.37-1.93 1-2.6-.1-.24-.42-1.22.1-2.55 0 0 .8-.26 2.63 1a9.4 9.4 0 0 1 2.4-.33 9.4 9.4 0 0 1 2.4.33c1.83-1.26 2.63-1 2.63-1 .52 1.33.2 2.31.1 2.55.63.67 1 1.55 1 2.6 0 3.7-2.25 4.5-4.4 4.75.36.3.68.9.68 1.8v2.67c0 .26.16.57.67.48A10 10 0 0 0 12 2z" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container mx-auto flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4 px-4">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Milan AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
