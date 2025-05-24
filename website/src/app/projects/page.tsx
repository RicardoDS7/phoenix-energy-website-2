'use client';
import CallToAction from "../components/CallToAction";
import { projectDetails } from "./projectConstants";
import ProjectCard from "../components/ProjectCard";
import Meta from "../components/Meta";

const Projects = () => {

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    return (

    <>
      <Meta
      title="Our Projects - See how we've helped businesses grow, sustainably"
      description="From embedded solar and battery storage to wheeled power, waste valorisation, hydrogen injection, and carbon credits, we empower businesses across all industries to earn, save, and thrive."
      />

      <div className='bg-antiflashWhite w-full'>

        {/* Hero Section */} 
        <section className='flex max-w-[1400px] pb-14 mx-auto px-4 pt-28 justify-center items-center'>
          <div className="flex flex-col text-center  items-center justify-center space-y-6">
            <h1 className="text-charcoal uppercase font-extrabold">Our <span className="text-paynesGray">Projects</span></h1>
            <p className="mt-4 text-paynesGray max-w-[1000px]">From embedded solar and battery storage to wheeled power, waste valorisation, hydrogen injection, and carbon credits, we empower businesses across all industries to earn, save, and thrive. Our tailored renewable energy projects drive real growth and lasting impact, transforming energy into a strategic advantage.</p>
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
      </>
    );
  };
  
  export default Projects;