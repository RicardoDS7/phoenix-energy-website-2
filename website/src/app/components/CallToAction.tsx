import AltGetInTouchButton from "./AltGetInTouchButton"

interface CTAProps {
    headline: string;
    subtitle: string;
  }

const CallToAction: React.FC<CTAProps> = ({ headline, subtitle }) => {

    return (
        <section className="">
            <div className="flex flex-col rounded-3xl w-full items-center justify-center gap-4 text-antiflashWhite">
                <h2 className="font-black">{headline}</h2>
                <h2 className="font-black">{subtitle}</h2>
                <AltGetInTouchButton />
            </div>
        </section>
    )
}

export default CallToAction