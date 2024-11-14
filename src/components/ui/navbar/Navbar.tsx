import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from "@nextui-org/react";

export const NavbarComponent = () => {
    return (
        <Navbar className="border-b-2">
            <NavbarContent className="hidden sm:flex gap-4" justify="start">
                <NavbarBrand>
                    <p className="font-bold text-inherit">CAKE</p>
                </NavbarBrand>
                <NavbarItem>
                    Private access
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    Company
                </NavbarItem>
                <NavbarItem>
                    Employee
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}