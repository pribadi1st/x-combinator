"use client"
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function Navbar() {
    const { data: session, status } = useSession()
    const router = useRouter();
    const clickLogo = () => {
        router.push('/');
    }
    const isAuthenticated = status === 'authenticated';
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white cursor-pointer text-lg font-bold flex flex-row items-center" onClick={clickLogo}>
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    <span className="ml-2">X Combinator</span>
                </div>
                <ul className="flex gap-2">
                    <li>
                        <a href="/" className="text-white hover:text-gray-300">Home</a>
                    </li>
                    <li className='flex flex-row items-center gap-2'>
                        {isAuthenticated ? (
                            <>
                                <span className="text-white hover:text-gray-300">{session?.user?.name}</span>
                                <button type='button' onClick={() => signOut()} className="text-white hover:text-gray-300">Logout</button>
                            </>
                        ) : (
                            <button type='button' onClick={() => signIn('github')} className="text-white hover:text-gray-300">Login</button>
                        )}

                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;