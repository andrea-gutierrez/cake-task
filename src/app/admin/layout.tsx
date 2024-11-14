import {ReactNode} from "react";
import {NavbarComponent} from "@/components/ui/navbar/Navbar";

export default function AdminLayout({children}: { children: ReactNode }) {
    return <>
        <NavbarComponent/>
        <main className="m-4">
            {children}
        </main>
    </>
}