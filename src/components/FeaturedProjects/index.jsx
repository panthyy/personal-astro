import { useEffect, useState } from "react";

function FeaturedProjects() {
  const [Projects, setProjects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "This is a project",
      image: "https://source.unsplash.com/random/800x600",
      link: "https://www.google.com",
      github: "https://github.com",
      topics: ["React", "Node", "Express", "MongoDB"],
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is a project",
      image: "https://source.unsplash.com/random/800x600",
      link: "https://www.google.com",
      github: "https://github.com",
      topics: ["React", "Node", "Express", "MongoDB"],
    },
  ]);

  return (
    <section id="Projects" className="flex justify-center mt-[100px]">
      <div className=" w-[1057px]">
        <header className=" font-[Inter] text-[18px]">FEATURED PROJECTS</header>
        <div className="mt-[52px] font-[Inter] sm:gap-[57px] flex-col xl:flex-row flex flex-wrap">
          {Projects.map((project, index) => {
            return (
              <div
                key={index}
                className="Project   mb-[57px]  w-full pt-full relative xl:h-[500px] xl:w-[500px] flex flex-col  "
              >
                <div className="ProjectImagecontainer sm:w-[500px]  h-[340px] relative">
                  <img
                    layout="fill"
                    className=" object-cover rounded-[6px]"
                    src={
                      project.description?.split("|")[1] || "/ProjectImage1.jpg"
                    }
                  ></img>
                </div>
                <div className="ProjectDescriptions  flex flex-col mt-[20px] ">
                  <div className="flex items-center justify-between  flex-wrap mb-[12px]">
                    <h3 className=" text-[24px]">{project.title}</h3>
                    <div className="Projectas h-full  my-4 mt-2 text-[24px] flex ml-2 ">
                      <div className="">
                        <a href={project?.link || "/"}></a>
                      </div>
                      <div className="ml-3">
                        <a className="" href={project.description || "/"}></a>
                      </div>
                    </div>
                  </div>
                  <p className="dark:text-[#C4C4C4] text-[#1A1A1A]">
                    {project.description}
                  </p>
                  <div className="TechnologyUsed mt-[12px]">
                    <span className="text-[#6CACE4]  text-[16px] text-">
                      {project.topics
                        .map((x) => {
                          return x[0].toUpperCase() + x.slice(1);
                        })
                        .join(" - ")}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export { FeaturedProjects };
