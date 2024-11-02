import {NavigationMenu, navigationMenuTriggerStyle} from "@/components/ui/navigation-menu";
import {NavigationMenuItem, NavigationMenuLink} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import React from "react";

export const Sidebar = () => {
    return (
        <div className="w-1/4 pt-6 pl-2 border-r border-gray-300">
            <NavigationMenu>
                <NavigationMenuItem className='flex flex-col'>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Products
                        </NavigationMenuLink>
                    </Link>
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenu>
        </div>
    )
}
