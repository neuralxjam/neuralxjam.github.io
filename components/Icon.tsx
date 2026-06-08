import type { IconType } from "react-icons";
import {
  SiPython,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiFastapi,
  SiDocker,
} from "react-icons/si";
import {
  LuGraduationCap,
  LuBookOpen,
  LuZap,
  LuBriefcase,
  LuSprout,
  LuAward,
  LuTrendingUp,
  LuCoffee,
  LuBot,
  LuLayers,
  LuLayoutDashboard,
  LuRocket,
  LuGitBranch,
  LuBrain,
  LuCircle,
  LuWrench,
  LuCompass,
  LuUsers,
  LuSearch,
  LuShield,
} from "react-icons/lu";

// Map a string key (used in lib/content.ts data) to an icon component.
const REGISTRY: Record<string, IconType> = {
  // tech / brand logos
  python: SiPython,
  javascript: SiJavascript,
  postgresql: SiPostgresql,
  react: SiReact,
  fastapi: SiFastapi,
  docker: SiDocker,
  // ui / line icons
  graduation: LuGraduationCap,
  book: LuBookOpen,
  zap: LuZap,
  briefcase: LuBriefcase,
  sprout: LuSprout,
  award: LuAward,
  trendingup: LuTrendingUp,
  coffee: LuCoffee,
  bot: LuBot,
  layers: LuLayers,
  dashboard: LuLayoutDashboard,
  rocket: LuRocket,
  gitbranch: LuGitBranch,
  brain: LuBrain,
  wrench: LuWrench,
  compass: LuCompass,
  users: LuUsers,
  search: LuSearch,
  shield: LuShield,
};

// Official brand colors for the tech logos (read well on dark navy).
const BRAND_COLOR: Record<string, string> = {
  python: "#4B8BBE",
  javascript: "#F7DF1E",
  postgresql: "#4F9BE8",
  react: "#61DAFB",
  fastapi: "#05998B",
  docker: "#2496ED",
};

export default function Icon({
  name,
  className = "h-5 w-5",
  brand = false,
}: {
  name: string;
  className?: string;
  brand?: boolean;
}) {
  const Cmp = REGISTRY[name] ?? LuCircle;
  const style = brand && BRAND_COLOR[name] ? { color: BRAND_COLOR[name] } : undefined;
  return <Cmp className={className} style={style} aria-hidden />;
}
