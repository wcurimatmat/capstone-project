import {
    SquaresFourIcon,
    CubeIcon,
    TruckIcon,
    UsersIcon,
    GearIcon,
    InfoIcon
} from "@phosphor-icons/react";

export const navigationLinkPrimary = [
    {
        name: "Dashboard",
        url: route("dashboard.index"),
        icon: <SquaresFourIcon size={24} />,
    },
    {
        name: "Products",
        url: route("product.index"),
        icon: <CubeIcon size={24} />,
    },
    {
        name: "Orders",
        url: route("order.index"),
        icon: <TruckIcon size={24} />,
    },
    {
        name: "Customers",
        url: route("customer.index"),
        icon: <UsersIcon size={24} />,
    },
];

export const navigationLinkSecondary = [
    {
        name: "Settings",
        url: "#",
        icon: <GearIcon size={24} />,
    },
    {
        name: "Help",
        url: "#",
        icon: <InfoIcon size={24} />,
    },
];
