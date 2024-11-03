'use client';
import CallToAction from "../components/CallToAction";
import { projectDetails } from "./projectConstants";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    return (
      <div className='bg-antiflashWhite w-full'>

        {/* Hero Section */} 
        <section className='flex max-w-[1400px] pb-14 mx-auto px-4 pt-28 justify-center items-center'>
          <div className="flex flex-col text-center  items-center justify-center space-y-6">
            <h1 className="text-charcoal uppercase font-extrabold">Our <span className="text-paynesGray">Projects</span></h1>
            <p className="mt-4 text-paynesGray max-w-[1000px]">Founded in 2024, Phoenix Energy was created to make renewable energy both accessible and transformative across Africa. We set ourselves apart by providing bespoke, turnkey solutions that go beyond conventional energy savings. Our approach gives businesses a comprehensive roadmap and an array of renewable energy solutions designed not only to drive them toward Net Zero Carbon Emissions but also to enhance efficiency and unlock new revenue streams. For us, it&apos;s not just about saving—it&apos;s about empowering businesses to earn, grow, and thrive sustainably. </p>
          </div>
        </section>

        
        {/* Our Team */}
        <div className="bg-antiflashWhite pb-14">
          <section className="max-w-[1400px] mx-auto px-4">
            <div className="text-center justify-center space-y-6">
              <div className="flex flex-wrap justify-center  gap-8">
                {projectDetails.map((project, index) => (
                  <div key={index} className="flex items-stretch justify-center flex-wrap w-[360px]"> {/* Ensures full height and column layout */}
                    <div className="h-full w-full flex flex-col bg-paynesGray text-antiflashWhite rounded-3xl"> {/* Ensures consistent height */}
                      <ProjectCard
                        id={project.id}
                        testimonial={project.testimonial}
                        company={project.company}
                        solutions={project.solutions}
                        production={project.production}
                        location={project.location}
                        featured_image={project.featured_image}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <section id="hydrogen-cta" className="relative w-full flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-paynesGrayOverlay"></div>
                    <div className="flex bg-cover bg-center w-full h-full py-14 items-center justify-center"
                         style={{
                            backgroundImage: `url(${basePath}/images/Wheeling-2-CTA.png)`,
                          }}>
                        <div className="text-xl relative text-center max-w-[1400px] mx-auto">
                        
                            < CallToAction 
                            headline="SAVE, EARN, GROW - SUSTAINABLY."
                            subtitle="GET STARTED TODAY"/>

                        </div>

                    </div>
                </section>
      </div>
    );
  };
  
  export default Projects;