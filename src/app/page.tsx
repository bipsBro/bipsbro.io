"use client";
import ScrollSpy from "react-ui-scrollspy";
import { Typewriter } from "react-simple-typewriter";
import { PropsWithChildren } from "react";
import classNames from "classnames";
import Sidebar from "@/components/Sidebar";
import ContactMe from "@/components/ContactMe";
import Image from "next/image";

function App() {
  return (
    <div className="flex">
      <Sidebar className="drop-shadow-2xl" />
      <div className="w-full">
        <ScrollSpy
          offsetBottom={200}
          scrollThrottle={80}
          useBoxMethod
          activeClass="ss-active"
        >
          <div
            id="home"
            className="relative flex flex-col h-screen w-full items-center justify-center bg-fixed bg-[url(/bg-three.jpg)] bg-cover bg-no-repeat bg-center"
          >
            <div className="absolute h-screen w-full top-0 bottom-0 left-0 right-0 z-10"></div>
            <div className="relative z-20 flex flex-col gap-4 items-center justify-between bg-black/40 rounded px-6 py-8 min-w-[500px]">
              <h1 className="text-5xl uppercase font-bold text-white">
                <span className="capitalize">Er.</span> Bipin Pandey
              </h1>
              <p className="text-lg text-gray-200 break-words">
                Software Engineer
                <span className="">
                  <Typewriter
                    words={[", Founder, Mentor"]}
                    loop
                    deleteSpeed={100}
                  />
                </span>
              </p>
              <button className="bg-yellow-400 rounded-sm px-5 py-3 text-base">
                Contact Me
              </button>
            </div>
          </div>
          <Section
            id="about"
            className="flex flex-col justify-center !px-0 !pb-0"
          >
            <div className="md:flex gap-8 py-8 px-4 md:px-8 lg:px-16 my-10">
              <div className="hidden md:flex items-center justify-end">
                <div className="h-96 w-96 rounded overflow-hidden">
                  <Image
                    height={500}
                    width={900}
                    src="/bipin-pandey.jpg"
                    alt="Bipin Pandey"
                  />
                </div>
              </div>
              <div className="gap-3 flex flex-col justify-center">
                <p className="text-blue-500 uppercase">About</p>
                <p className="text-3xl font-sans font-bold">
                  Er. Bipin Pandey is software engineer based on Nepal
                </p>
                <p className="mb-8">
                  I am a Software Engineer, and I'm very passionate and
                  dedicated to my work. With 6+ years experience as a
                  professional Web developer, I have acquired the skills and
                  knowledge necessary to make your project a success.
                </p>
                <a href="" download>
                  <button className="bg-blue-700 rounded-sm text-white px-5 py-3 text-base">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-around w-full bg-blue-700 gap-6 h-56 p-8">
              <div className="text-center space-y-4">
                <p className="text-white text-5xl font-sans font-bold">20+</p>
                <p className="text-gray-300 ">Project Completed</p>
              </div>
              <div className="text-center space-y-4">
                <p className="text-white text-5xl font-sans font-bold">5+</p>
                <p className="text-gray-300 ">Happy Clients</p>
              </div>
              <div className="text-center space-y-4">
                <p className="text-white text-5xl font-sans font-bold">500+</p>
                <p className="text-gray-300 ">Pull Request Merged</p>
              </div>
              <div className="text-center space-y-4">
                <p className="text-white text-5xl font-sans font-bold">6+</p>
                <p className="text-gray-300 ">Years of Experience </p>
              </div>
            </div>
          </Section>

          <Section id="services" className="flex flex-col justify-center">
            <p className="text-blue-500 uppercase">Services</p>
            <p className="text-3xl font-sans font-bold">What I Do</p>
            <div className="grid grid-cols-12 gap-8 mt-20">
              <ServiceCard
                name="Fullstack Product Development"
                description="Design and develop robust, scalable web and mobile applications tailored to client needs."
                icon="/coding.png"
                features={[
                  "End-to-end development of MVPs for startups and businesses.",
                  "Secure and efficient backend architecture using NodeJS, MongoDB, and PostgreSQL.",
                  "Responsive frontend with ReactJS and React Native.",
                ]}
                tools={["ReactJS, React Native, NodeJS, Docker, AWS, GraphQL."]}
                idealFor={["Startups", "tech entrepreneurs", "SaaS businesses"]}
                className="col-span-12 md:col-span-6 2xl:col-span-4"
              />

              <ServiceCard
                name="DevOps and Deployment Solutions"
                description="Optimize your software delivery pipeline and streamline deployments."
                icon="/devops.png"
                features={[
                  "CI/CD setup for automated testing and deployment.",
                  "Server configuration and management with Nginx/Apache.",
                  "Containerization and orchestration using Docker.",
                ]}
                tools={["Docker, AWS, Nginx, Apache, CircleCI."]}
                idealFor={[
                  "Tech teams needing robust infrastructure and streamlined deployments.",
                ]}
                className="col-span-12 md:col-span-6 2xl:col-span-4"
              />
              <ServiceCard
                name="Technical Leadership and Team Mentorship"
                description="Empower teams with technical guidance and hands-on mentorship."
                icon="/leadership.png"
                features={[
                  "Mentoring junior developers and interns to boost productivity.",
                  "Reviewing and improving code quality.",
                  "Conducting one-on-one technical coaching sessions.",
                ]}
                tools={[]}
                idealFor={[
                  "Development teams needing guidance on best practices and productivity.",
                ]}
                className="col-span-12 md:col-span-6 2xl:col-span-4"
              />
              <ServiceCard
                name="B2B SaaS Solutions Consulting"
                description="Expert consultation to build, optimize, and scale SaaS platforms."
                icon="/clarification.png"
                features={[
                  "Analyzing customer pain points to design intuitive solutions.",
                  "Streamlining development timelines and processes.",
                  "Continuous improvement of product offerings and features.",
                ]}
                tools={["ReactJS, React Native, NodeJS, Docker, AWS, GraphQL."]}
                idealFor={["SaaS companies and B2B service providers."]}
                className="col-span-12 md:col-span-6 2xl:col-span-4"
              />
              <ServiceCard
                name="Startup MVP Development"
                description="Turn your ideas into reality with minimum viable products ready for market testing."
                icon="/mvp.png"
                features={[
                  "Ideation, architecture, and design of MVPs.",
                  "Fast prototyping and deployment.",
                  "Scalability-focused architecture to support growth.",
                ]}
                tools={["ReactJS, React Native, NodeJS, Docker, AWS, GraphQL."]}
                idealFor={["Entrepreneurs and early-stage startups."]}
                className="col-span-12 md:col-span-6 2xl:col-span-4"
              />
              <ServiceCard
                name="Project Management and Delivery"
                description="Oversee and ensure seamless delivery of software projects."
                icon="/workflow.png"
                features={[
                  "Defining product specifications and managing timelines.",
                  "Coordinating with cross-functional teams to meet objectives.",
                  "Implementing CI/CD pipelines and deployment strategies.",
                ]}
                tools={["Docker, AWS, Git, Nginx."]}
                idealFor={[
                  "Businesses looking for smooth, well-managed project execution.",
                ]}
                className="col-span-12 md:col-span-6 2xl:col-span-4"
              />
            </div>
          </Section>
          <Section
            id="services"
            className="flex flex-col justify-center bg-gray-100"
          >
            <p className="text-blue-500 uppercase">Skills</p>
            <p className="text-3xl font-sans font-bold">
              Experience and Skills
            </p>
            <div className="flex flex-col lg:flex-row items-baseline justify-between mt-10 gap-5">
              <div className="ml-4 flex-1">
                <p className="text-xl font-bold mb-1 ml-7 relative before:content-['👨🏽‍💻'] before:z-10 before:absolute before:text-3xl before:h-10 before:w-10 before:bg-gray-500 before:rounded-full before:flex before:items-center before:justify-center before:-left-12 before:-top-2">
                  Professional Experience
                </p>
                <div className="ml-5">
                  <Experience
                    title="Crispr Coders Pvt. Ltd"
                    link="https://www.crisprcoders.com/"
                    description="Co-Founder and Product Development Lead"
                    timeLine="Nov 2019 - Now"
                  />
                  <Experience
                    title="Digb"
                    link="https://www.digb.com/"
                    description="Lead Software Engineer"
                    timeLine="Sep 2022 - Jun 2023"
                  />
                  <Experience
                    link="https://gitstart.com/"
                    title="Gitstart | Community (YC s19)"
                    description="Team Lead | Software Engineer"
                    timeLine="Nov 2018 - Oct 2022"
                  />
                  <Experience
                    link="https://gitstart.com/"
                    title="Gitstart | Community (YC s19)"
                    description="Software Developer"
                    timeLine="May 2018 - Nov 2018"
                  />
                  <Experience
                    title="Siems Everest Pvt. Ltd"
                    description="Full Stack Developer"
                    timeLine="Sep 2017 - Oct 2018"
                  />
                  <Experience
                    isLast
                    link="https://aarthiknews.com/"
                    title="Arthik News "
                    description="Wordpress Developer"
                    timeLine="April 2017 - Jun 2016"
                  />
                </div>
              </div>
              <div className="ml-4 flex-1">
                <p className="text-xl font-bold mb-1 ml-7 relative before:content-['🎓'] before:z-10 before:absolute before:text-3xl before:h-10 before:w-10 before:bg-gray-500 before:rounded-full before:flex before:items-center before:justify-center before:-left-12 before:-top-2">
                  Formal Education
                </p>
                <div className="ml-5">
                  <Experience
                    title="Pulchowk Campus"
                    description="Bachelor in Electrical Engineering"
                    timeLine="2012 - 2017"
                  />
                  <Experience
                    title="Rehdon College"
                    description="High School (+2 Science)"
                    timeLine="2010 - 2012"
                  />
                  <Experience
                    isLast
                    title="Shree Bir Bhakti Higher Secondary School"
                    description="Secondary School (8-10)"
                    timeLine="2008 - 2010"
                  />
                  {/* <Experience
                    title="Shree Kalika Higher Secondary School"
                    description="Secondary School (6-7)"
                    timeLine="2006 - 2007"
                  />
                  <Experience
                    title="Shree Milan Primary School"
                    description="Primary School (2-5)"
                    timeLine="2001 - 2005"
                  />
                  <Experience
                    isLast
                    title="Sishu Skikshya Sadan Bording School"
                    description="Pre School (LKG-UKG)"
                    timeLine="1999 - 2000"
                  /> */}
                </div>
              </div>
            </div>
          </Section>

          <Section id="portfolio" className="flex flex-col justify-center">
            <p className="text-blue-500 uppercase">Works</p>
            <p className="text-3xl font-sans font-bold">Creative Portfolio</p>
            <div className="flex flex-col lg:flex-row items-baseline justify-between mt-10 gap-5"></div>
          </Section>

          <Section
            id="blogs"
            className="flex flex-col justify-center bg-gray-100"
          >
            <p className="text-blue-500 uppercase">Blogs</p>
            <p className="text-3xl font-sans font-bold">Latest Posts</p>
            <div className="flex flex-col lg:flex-row items-baseline justify-between mt-10 gap-5"></div>
          </Section>

          <Section id="contact" className="flex flex-col justify-center">
            <p className="text-blue-500 uppercase">Contact</p>
            <p className="text-3xl font-sans font-bold">Get in Touch</p>
            <div className="flex flex-col lg:flex-row items-baseline justify-between mt-10 gap-5">
              <ContactMe />
            </div>
          </Section>
        </ScrollSpy>
      </div>
    </div>
  );
}

export default App;

type ExperienceProps = {
  className?: string;
  timeLine?: string;
  title: string;
  link?: string;
  description: string;
  isLast?: boolean;
};

const Experience = ({
  description,
  title,
  link,
  timeLine,
  isLast,
}: ExperienceProps) => {
  return (
    <div
      className={classNames(
        "flex-1 flex py-5 items-center justify-between gap-2 relative before:content-[' '] before:z-10 before:absolute before:-left-6 before:h-2.5 before:w-2.5 before:bg-white before:border-blue-700 before:border-2 before:rounded-full after:content-[' '] after:absolute after:top-0 after:-left-5 after:w-0.5 after:bg-blue-700 after:h-full",
        {
          doted: isLast,
        }
      )}
    >
      <div className=" text-gray-400 text-xs min-w-32">{timeLine}</div>
      {link ? (
        <div className="flex-1 group">
          <a
            href={link}
            target="_blank"
            referrerPolicy="no-referrer"
            className="font-bold text-lg text-gray-700 relative group-hover:text-blue-700 after:contain-[' '] after:absolute after:-bottom-1 after:left-0 after:w-0 after:transition-all after:bg-current after:h-0.5 group-hover:after:w-full"
          >
            {title}
          </a>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      ) : (
        <div className="flex-1 ">
          <p className="font-bold text-lg text-gray-700">{title}</p>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      )}
    </div>
  );
};

type SectionProps = { id: string; className?: string };

const Section = ({
  id,
  className,
  children,
}: PropsWithChildren<SectionProps>) => {
  return (
    <div
      id={id}
      className={classNames(
        "min-h-screen py-16 px-4 sm:px-4 md:px-6 lg:px-10 2xl:px-16",
        className
      )}
    >
      {children}
    </div>
  );
};

type ServiceCardProps = {
  icon: string;
  className?: string;
  name: string;
  description: string;
  features: Array<string>;
  tools: Array<string>;
  idealFor: Array<string>;
};

const ServiceCard = ({
  className,
  icon,
  name,
  description,
  features = [],
  tools = [],
  idealFor = [],
}: ServiceCardProps) => {
  return (
    <div
      className={classNames(
        "relative px-8 py-10 group cursor-pointer rounded shadow-service transition-all delay-75 ease-in-out after:content-[' '] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-blue-700 after:transition-all after:delay-75 after:ease-in-out after:-translate-x-full after:-translate-y-full overflow-hidden hover:after:translate-x-0 hover:after:translate-y-0 after:z-0",
        className
      )}
    >
      <div className="relative z-10  group-hover:text-white">
        <div className="h-20 w-20 mb-5 rounded-full bg-blue-700 border-4 border-gray-300 p-4">
          <img className="h-full w-full filter" src={icon} />
        </div>
        <p className="text-xl font-sans font-bold mb-1">{name}</p>
        <p className="mb-1 text-gray-700 group-hover:text-gray-300">
          {description}
        </p>
        <ul className="text-sm list-disc ml-3 text-gray-500 group-hover:text-gray-300">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        {tools.length > 0 && (
          <p className="text-sm mt-1 text-gray-500 group-hover:text-gray-300">
            <strong>Tools: </strong>
            {tools.toString()}
          </p>
        )}
        {idealFor.length > 0 && (
          <p className="text-sm mt-1 text-gray-500 group-hover:text-gray-300">
            <strong>Ideal For: </strong>
            {idealFor.toString()}
          </p>
        )}
      </div>
    </div>
  );
};
