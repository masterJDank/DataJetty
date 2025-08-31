import DynamicIcon from "../../icons/dynamic-icons";

import * as LucideIcons from "lucide-react";
interface BasicCardProps {
  title: string;
  description: string;
  titleIcon?: keyof typeof LucideIcons;
  badge: string;
}

export default function ComponentCard({
  title,
  description,
  titleIcon = "Circle",
  badge
}: BasicCardProps) {
  return (
    <div className="border border-gray-300 rounded-xl p-4">
      <div className="mb-2 flex items-center text-[14px]">
        <div className="h-[35px] w-[35px] bg-cyan-200">
          <DynamicIcon
            name={titleIcon}
            size={16}
            className="shrink-0"
            color="cyan"
          />
        </div>
        <div className="ml-2 font-medium">{title}</div>
        <div className="badge" > 
            {badge}
        </div>
      </div>

      <div className="text-[14px] text-gray-400">{description}</div>
    </div>
  );
}
