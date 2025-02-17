"use client"
import Link from "next/link"
import { ReactNode, useState } from "react"
import { useRouter } from "next/navigation"
import { removeCookie } from "@/helper/client-cookie"

type props = {
    children: ReactNode
}
const EmployeeTemplate = (myProp: props) => {
    const [show, setShow] = useState<boolean>(false)
    const router = useRouter()

    const handleLogout = () => {
        removeCookie(`token`)
        router.replace(`/`)
    }

    return (
        <div className="w-full h-screen bg-gray-100">
            {/* Header */}
            <header className="w-full p-4 bg-gradient-to-l from-blue-400 to-indigo-600 flex items-center gap-4 shadow-md text-white">
                <button type="button"
                    onClick={() => setShow(true)}
                    className="size-10 rounded-lg flex justify-center items-center bg-white/20 hover:bg-white/30 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <h1 className="text-2xl font-bold">KAI ACCESS</h1>
            </header>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-r from-blue-400 to-indigo-600 text-white shadow-lg transform transition-transform duration-300 ${show ? "translate-x-0" : "-translate-x-full"}`}>
                {/* brand section */}
                <div className="w-full text-white font-bold my-5 flex justify-center">
                    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                    </svg>
                    </div>

                    <div className="absolute right-3 top-2 cursor-pointer text-2xl font-bold text-white"
                        onClick={() => setShow(false)}>
                        &times;
                    </div>
                </div>
                {/* menu section */}
                <div className="flex flex-col gap-2 p-5">
                    <Link href="/karyawan/kereta" className="block px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition">Data Kereta</Link>
                    <Link href="/karyawan/admin" className="block px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition">Data Admin</Link>
                    <Link href="/karyawan/pelanggan" className="block px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition">Data Pelanggan</Link>
                    <Link href="/karyawan/jadwal" className="block px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition">Data Jadwal</Link>

                    <div>
                        <button onClick={handleLogout} className="w-full px-4 py-3 flex justify-center rounded-lg bg-red-600 hover:bg-red-400 transition text-center mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>

            {myProp.children}
        </div>
    )
}
export default EmployeeTemplate
