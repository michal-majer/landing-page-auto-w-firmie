import BlurFade from "./magicui/BlurFade";
import { HeroVideoDialog } from "./magicui/HeroVideoDialog";
import Cover from '../data/cover4.png'

export function HeroVideo() {
    return (
        <BlurFade delay={0.25 * 4} inView>
            <div className="flex flex-row justify-center items-center" >
                <HeroVideoDialog
                    className="dark:hidden "
                    animationStyle="from-center"
                    videoSrc="https://player.vimeo.com/video/1021512782?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    thumbnailSrc={Cover.src}
                    thumbnailAlt="Hero Video"
                />
            </div>
        </BlurFade>
    )
}