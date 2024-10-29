"use client";
import { useState } from "react";
import Link from "next/link";
import { PHONE_NUMBER } from "../constants/constants";

const ContactUs = () => {

    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '',phone: '', companyName: '', role: '', solutions: '', 
                                                operatingSchedule: '', batStorage: '', existBackup: '', eskomBill: '', message: '' });
    const [selectedSolution, setSelectedSolution] = useState("");

    const handleSolutionChange = (e) => {
        setSelectedSolution(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Replace with API call
    };

    return (
        <div className="bg-antiflashWhite">

        
        <section className="max-w-[1400px] mx-auto px-4 pt-28 flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col gap-8 w-2/3 mx-auto">
                <div className="flex flex-col justify-center items-center w-full gap-6">
                    <h1 className="text-charcoal">Partner with us for Sustainable Growth</h1>
                    <p className="text-paynesGray">Reach out to learn how our tailored renewable energy solutions can help your business save money and generate new revenue through green technology.</p>
                </div>

                <form className="flex flex-col space-y-4 w-full">
                    <div className="flex flex-col md:flex-row w-full gap-4">
                        <div className="flex flex-col w-full">
                            <label className="font-inter text-paynesGray">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                placeholder=""
                                value={formData.firstName}
                                onChange={handleChange}
                                className="py-2 px-4 border rounded-lg w-full focus:ring-1 focus:ring-paynesGray focus:outline-none"
                                required
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="font-inter text-paynesGray">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder=""
                                value={formData.lastName}
                                onChange={handleChange}
                                className="py-2 px-4 border rounded-lg w-full focus:ring-1 focus:ring-paynesGray focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full gap-4">
                        <div className="flex flex-col w-full">
                            <label className="font-inter text-paynesGray">Work Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder=""
                                value={formData.email}
                                onChange={handleChange}
                                className="py-2 px-4 border rounded-lg w-full focus:ring-1 focus:ring-paynesGray focus:outline-none"
                                required
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="font-inter text-paynesGray">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+27-XXX-XXX-XXX"
                                value={formData.phone}
                                onChange={handleChange}
                                className="py-2 px-4 border rounded-lg w-full focus:ring-1 focus:ring-paynesGray focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row w-full gap-4">
                        <div className="flex flex-col w-full">
                            <label className="font-inter text-paynesGray">Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                placeholder=""
                                value={formData.companyName}
                                onChange={handleChange}
                                className="py-2 px-4 border rounded-lg w-full focus:ring-1 focus:ring-paynesGray focus:outline-none"
                                required
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="font-inter text-paynesGray">Your Role</label>
                            <input
                                type="text"
                                name="role"
                                placeholder="e.g. Chief Executive Officer"
                                value={formData.role}
                                onChange={handleChange}
                                className="py-2 px-4 border rounded-lg w-full focus:ring-1 focus:ring-paynesGray focus:outline-none"
                                required
                            />
                        </div>
                    </div>
                    

                    <div className="flex flex-col md:flex-row w-full gap-4">
                        <div className="flex flex-col w-full">
                            <label className="font-inter text-paynesGray">What solutions are your interested in?</label>
                            <select
                                name="solutions"
                                value={formData.solutions}
                                onChange={handleSolutionChange}
                                className="py-2 px-4 border rounded-lg custom-select focus:ring-1 focus:ring-paynesGray focus:outline-none"
                                required
                            >
                                <option value="" disabled>Select option...</option>
                                <option value="solar">Embedded Solar</option>
                                <option value="wheeling">Wheeling</option>
                                <option value="hydrogen">Hydrogen Technologies</option>
                                <option value="waste-valorization">Waste Valorization</option>
                                <option value="carbon-credits">Carbon Credits</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                    </div>

                    {/* Dropdown-like Transition */}
                    <div
                        key={selectedSolution} // Changing key forces re-render
                        className={`overflow-hidden transition-[max-height] duration-500 ease-out ${
                        selectedSolution ? "max-h-96" : "max-h-0"
                        } transform origin-top`}
                    >
                        {/* Solar-specific Questions */}
                        {selectedSolution === "solar" && (
                            <section className="flex flex-col w-full gap-3">
                                <div className="flex flex-col m-0.5">
                                    <label className="font-inter text-paynesGray">What is your business operating schedule?</label>
                                    <select
                                        name="operatingSchedule"
                                        value={formData.operatingSchedule}
                                        onChange={handleChange}
                                        className="py-2 px-4 border rounded-lg custom-select focus:ring-1 focus:ring-paynesGray focus:outline-none"
                                        required
                                    >
                                        <option value="" disabled>Select an option...</option>
                                        <option value="opsSchedule5">Normal working hours - 5 days a week</option>
                                        <option value="opsSchedule7">Normal working hours - 7 days a week</option>
                                        <option value="opsSchedule247">24/7 Continuous</option>
                                        <option value="opsScheduleOther">Other</option>
                                    </select>
                                </div>

                                <div className="flex flex-col m-0.5">
                                    <label className="font-inter text-paynesGray">Are you interested in integrating battery storage with your solar solution?</label>
                                    <select
                                        name="batStorage"
                                        value={formData.batStorage}
                                        onChange={handleChange}
                                        className="py-2 px-4 border rounded-lg custom-select focus:ring-1 focus:ring-paynesGray focus:outline-none"
                                        required
                                    >
                                        <option value="" disabled>Select an option...</option>
                                        <option value="batStorageYes">Yes</option>
                                        <option value="batStorageNo">No</option>
                                        <option value="batStorageNotSure">Not Sure</option>
                                    </select>
                                </div>

                                <div className="flex flex-col m-0.5">
                                    <label className="font-inter text-paynesGray">Do you have existing backup power sources, such as generators, you’d like to integrate?</label>
                                    <select
                                        name="existBackup"
                                        value={formData.existBackup}
                                        onChange={handleChange}
                                        className="py-2 px-4 border rounded-lg custom-select focus:ring-1 focus:ring-paynesGray focus:outline-none"
                                        required
                                    >
                                        <option value="" disabled>Select an option...</option>
                                        <option value="existBackupYes">Yes</option>
                                        <option value="existBackupNo">No</option>
                                        <option value="existBackupNotSure">Not Sure</option>
                                    </select>
                                </div>

                            </section>
                            
                        )}

                        {/* Wheeling-specific Questions */}
                        {selectedSolution === "wheeling" && (
                            <div className="flex flex-col m-0.5">
                                <label className="font-inter text-paynesGray">Do you receive your electricity bill directly from Eskom?</label>
                                <select
                                    name="eskomBill"
                                    value={formData.eskomBill}
                                    onChange={handleChange}
                                    className="py-2 px-4 border rounded-lg custom-select focus:ring-1 focus:ring-paynesGray focus:outline-none"
                                    required
                                >
                                    <option value="" disabled>Select option...</option>
                                    <option value="eskomBillYes">Yes</option>
                                    <option value="eskomBillNo">No</option>
                                    <option value="eskomBillNotSure">Not Sure</option>
                                </select>
                            </div>
                        )}

                    </div>

                    <textarea
                        name="message"
                        placeholder="(Optional) Describe any specific requirements, or additional info we should know about..."
                        value={formData.message}
                        onChange={handleChange}
                        className="p-2 border rounded focus:ring-1 focus:ring-paynesGray focus:outline-none"
                    />
                    <p className="text-paynesGray text-sm">
                    Phoenix Energy needs the contact information you provide to us to contact you about our products and services. By completing this form, you consent to receiving communications from us. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our <Link className="font-semibold hover:text-atomicTangerine" href="/privacy-policy">Privacy Policy</Link>.
                    </p>
                    <button type="submit" className="p-2 bg-paynesGray text-antiflashWhite rounded-3xl ">
                        Submit
                    </button>
                </form>
            </div>
            <div className="flex flex-col gap-8 w-1/3 mx-auto">
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
