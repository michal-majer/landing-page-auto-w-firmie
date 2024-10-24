import Image from 'next/image'
import Post01 from '../data/posts/post_01.jpg'

export function Blog() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <p className="mx-auto mt-4 mb-4 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-white-950 sm:text-5xl">
                Blog 📓
            </p>
            <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3">
                <a href="https://poradnikb2b.substack.com/p/wakacje-od-zus-nowa-ulga-dla-przedsiebiorcow" target='_blank' >
                    <Image
                        src={Post01}
                        alt="Poradnik B2B Logo"
                        className=' w-80 h-80 h-auto max-w-full rounded-lg object-scale-down object-center'
                    />
                </a>
            </div>
        </div>
    )
}