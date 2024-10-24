export function LoveWall() {
    return (
        <div>
            <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-white-950 sm:text-5xl">
                Opinie o produkcie 💬
            </p>
            <iframe
                id="auto-w-firmie"
                className='w-full h-[525px]'
                width="100%"
                src="https://app.easy.tools/walls/auto-w-firmie"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                // frameborder="0"
                scrolling="no"
            ></iframe>
        </div>
    )
}