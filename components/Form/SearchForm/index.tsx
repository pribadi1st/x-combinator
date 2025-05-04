"use client"
import Form from 'next/form'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import ResetSearchFormBtn from '@/components/Form/SearchForm/ResetSearchFormBtn'
import { useRef } from 'react'
function SearchFrom({ query }: { query?: string }) {
    const formRef = useRef<HTMLFormElement>(null)

    return (
        <Form ref={formRef} action="/" className='search-form' scroll={false}>
            <input name="query" defaultValue={query} className='search-input' placeholder='Search ideas' type='text' />
            <div className='flex gap-1'>
                {query && <ResetSearchFormBtn refForm={formRef} />}
                <button type="submit" aria-label='Search'>
                    <MagnifyingGlassCircleIcon className='text-gray-500 w-[30px] cursor-pointer' />
                </button>
            </div>
        </Form >
    )
}

export default SearchFrom;