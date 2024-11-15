import AltGetInTouchButton from "./AltGetInTouchButton"

interface CTAProps {
    headline: string;
    subtitle: string;
  }

const CallToAction: React.FC<CTAProps> = ({ headline, subtitle }) => {

    return (
        <section className="">
            <div className="flex flex-col rounded-3xl w-full px-4 items-center justify-center gap-4 text-antiflashWhite">
                <h2 className="font-extrabold">{headline}</h2>
                <h2 className="font-extrabold">{subtitle}</h2>
                <AltGetInTouchButton />
            </div>
        </section>
    )
}

export default CallToAction