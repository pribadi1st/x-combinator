"use client"
import { XCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
function ResetSearchFormBtn({ refForm }: { refForm: React.RefObject<HTMLFormElement | null> }) {
    const reset = () => {
        const form = refForm.current

        if (form) {
            form.reset()
        }
    }

    return (
        <>
            <Link href={"/"}>
                <XCircleIcon className='text-gray-500 w-[30px] cursor-pointer' onClick={reset} />
            </Link>
        </>
    )
}

export default ResetSearchFormBtn;
