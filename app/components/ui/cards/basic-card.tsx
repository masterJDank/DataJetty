import DynamicIcon from "../../icons/dynamic-icons";

import * as LucideIcons from "lucide-react";
interface BasicCardProps {
  title: string;
  description: string;
  titleIcon?: keyof typeof LucideIcons;
  children?: React.ReactNode;
  subText: String;
}

export default function BasicCard({
  title,
  description,
  subText,
  titleIcon = "Circle",
  children = "",
}: BasicCardProps) {
  return (
    <div className="border border-gray-300 rounded-xl p-4">
  <div className="mb-2 flex items-center text-[14px]">
    <DynamicIcon name={titleIcon} size={16} className="shrink-0" />
    <span className="ml-2 font-medium">{title}</span>
  </div>

  <div className="text-[14px] text-gray-400">{description}</div>
  <div className="mt-1 text-[12px] text-gray-400">{subText}</div>

  {children}
</div>

  );
}
