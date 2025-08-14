import { ReactNode } from "react";

export default async function StudentLayout({ children }: { children: ReactNode }) {

    return (
        <>
            <aside className="bg-gray-300 w-30 flex items-center justify-center"></aside>
            <main>
                {children}
            </main>
        </>
    )
}