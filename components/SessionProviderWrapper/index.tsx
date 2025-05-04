"use client";
import { SessionProvider } from "next-auth/react";

function SessionProviderWrapper({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}
export default SessionProviderWrapper;