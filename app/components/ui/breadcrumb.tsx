"use client";

import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string; // If no href → it’s the current page
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <div className={`breadcrumbs text-sm  ${className ?? ""}`}>
      <ul>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index}>
              {isLast || !item.href ? (
                <span className="font-medium">{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
