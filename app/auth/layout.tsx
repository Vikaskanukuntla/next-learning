import { Navbar } from "@/components/navbar";

export default function AuthLayout({children}){
    return <div>
        <Navbar></Navbar>
        {children}

    </div>
}