// asset
import {
    navigationLinkPrimary,
    navigationLinkSecondary,
} from "./NavigationLinks";

// components
import NavigationList from "./NavigationList/NavigationList";
import NavigationItem from "./NavigationItem/NavigationItem";

function NavigationPrimaryLinks() {
    return navigationLinkPrimary.map((item) => (
        <NavigationItem name={item.name} url={item.url} icon={item.icon} />
    ));
}

function NavigationSecondaryLinks() {
    return navigationLinkSecondary.map((item) => (
        <NavigationItem name={item.name} url={item.url} icon={item.icon} />
    ));
}

function Navigation() {
    return (
        <nav className="Navigation">
            <div
                className="Navigation__wrapper"
                style={{
                    display: "grid",
                    gap: "48px",
                }}
            >
                <NavigationList>
                    <NavigationPrimaryLinks />
                </NavigationList>

                <NavigationList>
                    <NavigationSecondaryLinks />
                </NavigationList>
            </div>
        </nav>
    );
}

export default Navigation;
