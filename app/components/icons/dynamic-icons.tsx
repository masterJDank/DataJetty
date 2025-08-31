import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: keyof typeof LucideIcons;
}

export default function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = LucideIcons[name] as React.FC<LucideProps>;

  if (!Icon) {
    console.warn(`Lucide icon "${name}" does not exist.`);
    return null;
  }

  return <Icon {...props} />;
}
