import Link from "next/link";

interface FooterProps {
  version: string;
  privacyPolicy: string;
  TermOfService: string;
  Support: string;
}

export default function Footer({
  version,
  privacyPolicy,
  TermOfService,
  Support,
}: FooterProps) {
  return (
    <footer className="  border-t border-gray-300 text-gray-500  bg-gray-50 backdrop-blur supports-[backdrop-filter]:bg-gray-50/95">
      <div className="mx-auto max-w-[1700px] px-10 py-3">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>© 2025 Selenite®. All rights reserved.</span>
            <span className="h-4 w-px bg-border" aria-hidden="true" />
            <button className="cursor-pointer text-xs font-normal text-muted-foreground transition-colors hover:text-foreground">
              {version}
            </button>
          </div>
          <nav className="flex items-center gap-6 text-xs">
            <Link
              href={privacyPolicy}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href={TermOfService}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
            <Link
              href={Support}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Support
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
