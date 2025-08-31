import BasicCard from "@/app/components/ui/cards/basic-card";
import ComponentCard from "@/app/components/ui/cards/component-card";
import PageTitleDescription from "@/app/components/ui/page-title-and-description";
import React from "react";

interface designSystemHighlights {
  title: string;
  description: string;
  subDesc: string;
  cardIcon: any;
}
interface ComponentDemo {
  title: string;
  description: string;
  badge: string;
  cardIcon: any;
  link: string;
  buttonName: string;
  features: any[];
  updatedAt: string;
}

const UiGuide = () => {
  const pageTitle = "UI Guide";
  const PageDescription =
    "Complete design system and component library documentation";

  let designSystemHighlights: designSystemHighlights[] = [
    {
      title: "Typography System",
      description: "Standardized font sizes, weights, and line heights",
      subDesc: "14px base size, 400/500 weights, consistent spacing",
      cardIcon: "Code",
    },
    {
      title: "Color Palette",
      description: "Teal-blue primary, semantic colors, dark mode support",
      subDesc: "CSS variables, light/dark themes, accessible contrast",
      cardIcon: "Palette",
    },
    {
      title: "Component Library",
      description: "ShadCN/UI foundation with custom extensions",
      subDesc: "40+ components, consistent API, TypeScript ready",
      cardIcon: "Layers",
    },
    {
      title: "Interactive Patterns",
      description: "User feedback, loading states, form validation",
      subDesc: "Toast notifications, progress indicators, error handling",
      cardIcon: "Sparkles",
    },
  ];

  let components: ComponentDemo[] = [
    {
      title: "Display Cards",
      description:
        "Comprehensive collection of stat cards, simple chart cards, and analytics cards for dashboards",
      badge: "Complete",
      cardIcon: "ChartColumn",
      link: "/ui-guide",
      buttonName: "View Demo",
      updatedAt: "Sept 31, 2025",
      features: [
        "Stat cards with trends",
        "Simple chart widgets",
        "Analytics components",
        "Tabbed interface",
      ],
    },
    {
      title: "Overview",
      description: "Complete UI component library and design system guide",
      badge: "Complete",
      cardIcon: "Eye",
      link: "/ui-guide",
      buttonName: "View Demo",
      updatedAt: "Sept 31, 2025",
      features: [
        "Component showcase",
        "Design patterns",
        "Usage guidelines",
        "Best practices",
      ],
    },
    {
      title: "Templates",
      description: "Create and manage reusable templates",
      badge: "Complete",
      cardIcon: "Globe",
      link: "/ui-guide",
      buttonName: "View Demo",
      updatedAt: "Sept 31, 2025",
      features: [
        "Page templates",
        "Component templates",
        "Layout patterns",
        "Reusable designs",
      ],
    },
    {
      title: "Data Tables",
      description:
        "Comprehensive table components with pagination, filtering, sorting, and bulk operations",
      badge: "Complete",
      cardIcon: "Database",
      link: "/ui-guide",
      buttonName: "View Demo",
      updatedAt: "Sept 31, 2025",
      features: [
        "Basic & Enhanced tables",
        "Bulk selection",
        "Search & filtering",
        "Custom column rendering",
      ],
    },
    {
      title: "Color Palette",
      description: "Complete color system, CSS variables, and design tokens",
      badge: "Complete",
      cardIcon: "Palette",
      link: "/ui-guide",
      buttonName: "View Demo",
      updatedAt: "Sept 31, 2025",
      features: [
        "Primary colors",
        "Semantic tokens",
        "Dark mode",
        "Accessibility",
      ],
    },
    {
      title: "Typography",
      description: "Font hierarchy, sizes, weights, and typography guidelines",
      badge: "Complete",
      cardIcon: "Palette",
      link: "/ui-guide",
      buttonName: "View Demo",
      updatedAt: "Sept 31, 2025",
      features: [
        "Noto Sans font family",
        "14px base size system",
        "Semantic HTML styling",
        "CSS variables",
      ],
    },
    {
      title: "Icons",
      description: "Lucide React icon library with search and usage examples",
      badge: "Complete",
      cardIcon: "Sparkle",
      link: "/ui-guide",
      buttonName: "View Demo",
      updatedAt: "Sept 31, 2025",
      features: [
        "Icon library",
        "Search functionality",
        "Usage examples",
        "Best practices",
      ],
    },
    {
      title: "Buttons",
      description: "Button variants, states, and usage examples",
      badge: "Complete",
      cardIcon: "Mouse",
      link: "/ui-guide",
      buttonName: "View Demo",
      updatedAt: "Sept 31, 2025",
      features: [
        "Primary, Secondary & Destructive variants",
        "All size options",
        "Loading states",
        "Icon combinations",
      ],
    },
    {
      title: "Buttons",
      description: "Button variants, states, and usage examples",
      badge: "Complete",
      cardIcon: "Mouse",
      link: "/ui-guide",
      buttonName: "View Demo",
      updatedAt: "Sept 31, 2025",
      features: [
        "Primary, Secondary & Destructive variants",
        "All size options",
        "Loading states",
        "Icon combinations",
      ],
    },
    {
      title: "Dropdowns",
      description: "Navbar dropdown components with consistent styling",
      badge: "Complete",
      cardIcon: "Calender",
      link: "/ui-guide",
      buttonName: "View Demo",
      updatedAt: "Sept 31, 2025",
      features: [
        "Unified NavbarDropdown",
        "Dynamic menu content",
        "Consistent hover states",
        "Grid layouts",
      ],
    },
    {
      title: "Dropdowns",
      description: "Navbar dropdown components with consistent styling",
      badge: "Complete",
      cardIcon: "ChevronDown",
      link: "/ui-guide",
      buttonName: "View Demo",
      updatedAt: "Sept 31, 2025",
      features: [
        "Unified NavbarDropdown",
        "Dynamic menu content",
        "Consistent hover states",
        "Grid layouts",
      ],
    },
    {
      title: "Date Filters",
      description:
        "Classic vs Modern date range interfaces with slider controls",
      badge: "Complete",
      cardIcon: "Calender",
      link: "/ui-guide",
      buttonName: "View Demo",
      updatedAt: "Sept 31, 2025",
      features: [
        "Classic & Modern styles",
        "Interactive slider",
        "Relative time selection",
        "Editable date inputs",
      ],
    },
    {
      title: "Time Range Selector",
      description: "Quick time range buttons for analytics (1M, 3M, 6M, 1Y)",
      badge: "Complete",
      cardIcon: "Clock",
      link: "/ui-guide",
      buttonName: "View Demo",
      updatedAt: "Sept 31, 2025",
      features: [
        "Quick time ranges",
        "Analytics integration",
        "Chart filtering",
        "Dashboard controls",
      ],
    },
    {
      title: "Tabs",
      description: "Clean, simple tabs component examples and usage",
      badge: "Complete",
      cardIcon: "Clock",
      link: "/ui-guide",
      buttonName: "View Demo",
      updatedAt: "Sept 31, 2025",
      features: [
        "Basic tabs",
        "Icon integration",
        "Form sections",
        "Content organization",
      ],
    },
    {
      title: "Error Pages",
      description: "View and test error page variants and states",
      badge: "Complete",
      cardIcon: "TriangleAlert",
      link: "/ui-guide",
      buttonName: "View Demo",
      updatedAt: "Sept 31, 2025",

      features: [
        "404, 403, 500 pages",
        "Network errors",
        "Maintenance mode",
        "User-friendly messaging",
      ],
    },
  ];

  return (
    <div>
      <PageTitleDescription
        title={pageTitle}
        description={PageDescription}
      ></PageTitleDescription>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl  lg:col-span-2">
          <BasicCard
            description="Indian Admin App follows a systematic approach to UI design with consistent patterns, standardized components, and comprehensive documentation."
            title="Design System Overview"
            titleIcon="Eye"
            subText="Our design system is built on ShadCN/UI components with custom
            extensions, ensuring consistency across the entire application while
            maintaining flexibility for specific use cases."
          >
            <div className="mt-3 flex gap-2 ">
              <div className="badge badge-outline out text-xs  ">
                React + TypeScript{" "}
              </div>
              <div className="badge badge-outline outline-gray-200 text-xs  ">
                Tailwind CSS
              </div>
              <div className="badge badge-outline outline-gray-200 text-xs  ">
                ShadCN/UI
              </div>
              <div className="badge badge-outline outline-gray-200 text-xs  ">
                Lucide Icons
              </div>
              <div className="badge badge-outline outline-gray-200 text-xs  ">
                Responsive Design
              </div>
            </div>
          </BasicCard>
        </div>

        <div className="">
          <BasicCard
            description=""
            title="Quick Stats"
            titleIcon="Circle"
            subText=""
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600">13</div>
              <div className="text-sm text-[12px] text-gray-400 mb-2">
                Demo Pages
              </div>
              <div className="text-3xl font-bold text-cyan-600">40+</div>
              <div className="text-sm text-[12px] text-gray-400 mb-2 ">
                UI Components
              </div>
              <div className="text-3xl font-bold text-cyan-600">100%</div>
              <div className="text-sm text-[12px] text-gray-400">Coverage</div>
            </div>
          </BasicCard>
        </div>

        <div className="col-span-3">
          <BasicCard
            title="Design System Highlights"
            description="Key principles and patterns that make our UI consistent and maintainable"
            titleIcon="Circle"
            subText=""
          >
            <div className="mt-4">
              <div className="grid grid-cols-1  xl:grid-cols-4 ld:grid-cols-4 gap-3 ">
                {designSystemHighlights.map((cardItem, index) => (
                  <BasicCard
                    key={index}
                    title={cardItem.title}
                    description={cardItem.description}
                    titleIcon={cardItem.cardIcon}
                    subText={cardItem.subDesc}
                  />
                ))}
              </div>
            </div>
          </BasicCard>
        </div>
        <div className="col-span-3">
          <BasicCard
            title="Component Demonstrations"
            description="Interactive examples and documentation for all major UI components"
            titleIcon="Component"
            subText=""
          >
            <div className="mt-4 grid lg:grid-cols-2 grid-cols-1 gap-3">
              {components.map((cardItem, index) => (
                <ComponentCard
                  badge={cardItem.badge}
                  description={cardItem.description}
                  title={cardItem.title}
                  titleIcon={cardItem.cardIcon}
                  key={index}
                  updatedAt={cardItem.updatedAt}
                  features={cardItem.features}
                  link={cardItem.link}
                />
              ))}
            </div>
          </BasicCard>
        </div>
      </div>
    </div>
  );
};

export default UiGuide;
