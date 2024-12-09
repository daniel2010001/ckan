import { Link } from "react-router-dom";

import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { BaseRoutes } from "@/models";

import logo from "@/assets/images/logo.png";

const components: { title: string; to: string }[] = [
  { title: "DATOS", to: BaseRoutes.DATASET },
  { title: "ORGANIZACIONES", to: BaseRoutes.ORGANIZATIONS },
  { title: "GRUPOS", to: BaseRoutes.GROUPS },
  { title: "NOSOTROS", to: BaseRoutes.ABOUT },
];

export function Navbar() {
  return (
    <div className="flex h-16 w-full px-4 justify-between">
      <Link to={BaseRoutes.HOME}>
        <img src={logo} alt="logo" className="h-14 w-auto" />
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-1 items-center justify-between">
          {components.map((option) => (
            <NavigationMenuItem key={option.title} className="font-poppins font-semibold">
              <Link
                to={option.to}
                className={cn(navigationMenuTriggerStyle(), "bg-transparent text-base")}
              >
                {option.title}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
