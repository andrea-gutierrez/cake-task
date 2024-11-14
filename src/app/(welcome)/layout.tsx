import {ReactNode} from "react";

export default function WelcomeLayout({children}: { children: ReactNode }) {
    return (
        <main className="m-3">
            <h1 className="font-extrabold text-4xl text-center">Cake</h1>
            {children}
        </main>
    )
}