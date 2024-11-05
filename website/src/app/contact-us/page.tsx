"use client";
import ZohoFormEmbed from "../components/ZohoForm";

const ContactUs = () => {

    return (
        <div className="bg-antiflashWhite">

        
        <section className="max-w-[1400px] mx-auto px-4 pt-28 flex flex-col lg:flex-row gap-8 pb-14">
            <div className="flex flex-col gap-8 w-full lg:w-2/3 mx-auto">
                <div className="flex flex-col justify-start items-start w-full gap-6">
                    <h1 className="text-charcoal uppercase font-extrabold">Partner with us</h1>
                    <p className="text-paynesGray">Reach out to learn how our tailored renewable energy solutions can help your business save money and generate new revenue through green technology.</p>
                </div>

                <ZohoFormEmbed />
                
            </div>
            <div className="flex flex-col gap-8 w-full lg:w-1/3 mx-auto">
                <div className="bg-colombiaBlue rounded-3xl p-6 space-y-6">
                    <h4 className="text-charcoal">South Africa</h4>
                    <p>
                        +-123456789
                    </p>

                    <p>
                        +-123456789
                    </p>

                    <p>
                        +-123456789
                    </p>
                    

                </div>

                <div className="bg-colombiaBlue rounded-3xl p-6 space-y-6">
                    <h4 className="text-charcoal">Zambia</h4>
                    <p>
                        +-123456789
                    </p>

                    <p>
                        +-123456789
                    </p>

                    <p>
                        +-123456789
                    </p>
                    

                </div>
            </div>
        </section>

        </div>
    )
}

export default ContactUs;
