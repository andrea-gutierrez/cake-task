import {ReactNode} from "react";

export default function DashboardLayout({children}: { children: ReactNode }) {
    return <>
        <h1 className="text-2xl mb-2">Dashboard overview</h1>
        {children}
    </>
}