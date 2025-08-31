import Link from "next/link";
import DynamicIcon from "../../icons/dynamic-icons";

import * as LucideIcons from "lucide-react";
interface BasicCardProps {
  title: string;
  description: string;
  titleIcon?: keyof typeof LucideIcons;
  badge: string;
  updatedAt: string;
  features: any[];
  link: string;
}

export default function ComponentCard({
  title,
  description,
  titleIcon = "Circle",
  badge,
  updatedAt,
  features,
  link,
}: BasicCardProps) {
  return (
    <div>
      <div className="border-2 border-gray-300 rounded-xl p-5">
        <div className="mb-2 flex items-center text-[14px]">
          {/* Icon box */}
          <div className="flex h-[35px] w-[35px] items-center justify-center rounded rounded-3 bg-sky-100">
            <DynamicIcon name={titleIcon} size={18} className="text-cyan-700" />
          </div>

          {/* Right content */}
          <div className="ml-3 flex flex-col">
            <span className="text-[18px]">{title}</span>
            <div className="mt-1 flex items-center gap-2">
              <span className="badge text-xs badge-soft badge-accent">
                {badge}
              </span>
              <span className="text-xs text-gray-500">
                {" "}
                Updated {updatedAt}
              </span>
            </div>
          </div>
        </div>
        <div className="text-[14px] text-gray-500">{description}</div>

        <div className="mt-3">
          <span className="text-xs">Features:</span>
          <ul className="list-disc pl-3 marker:text-cyan-500">
            {features.map((featureItem, index) => (
              <li className="text-xs text-gray-500" key={index}>
                {featureItem}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={link}
          className="mt-3 btn btn-sm bg-cyan-600  hover:bg-cyan-500 rounded-lg w-full flex items-center justify-center gap-2"
        >
          <div className="text-xs text-white" >View Demo</div>
          <DynamicIcon name="ArrowRight" size={14} className="text-white" />
        </Link>
      </div>
    </div>
  );
}
