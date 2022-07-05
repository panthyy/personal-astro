import { useEffect, useState } from "react";


function FeaturedProjects() {

  const [Projects, setProjects] = useState([]);
  
    useEffect(async () => {
      let ProjectsFetched = await fetch("https://api.github.com/users/panthyy/repos");
     
      if(ProjectsFetched.status == 200){
        ProjectsFetched = await ProjectsFetched.json()
        setProjects(ProjectsFetched?.filter(x => x.name[0] == "-").reverse())
      console.log(ProjectsFetched[0]);
      }
    }, []);
  return (
    <section id="Projects" className="flex justify-center mt-[100px]">
      <div className=" w-[1057px]">
        <header className=" font-[Inter] text-[18px]">FEATURED PROJECTS</header>
        <div className="mt-[52px] font-[Inter] sm:gap-[57px]  flex flex-wrap">
          {Projects.map((project, index) => {
            return (
              <div key={index} className="Project  mb-[57px]  w-full pt-full relative sm:h-[500px] sm:w-[500px] flex flex-col  ">
                <div className="ProjectImagecontainer sm:w-[500px]  h-[340px] relative">
                  <img
                    layout="fill"
                    className=" object-cover rounded-[6px]"
                    src={project.description?.split("|")[1] || "/ProjectImage1.jpg"}
                  ></img>
                </div>
                <div className="ProjectDescriptions  flex flex-col mt-[20px] ">
                  <div className="flex items-center justify-between  flex-wrap mb-[12px]">
                    <h3 className=" text-[24px]">{project?.name.substring(1)}</h3>
                    <div className="Projectas h-full  my-4 mt-2 text-[24px] flex ml-2 ">
                      <div className="">
                      <a href={project?.html_url || "/"}>
                        <a>
                          
                        </a>
                      </a>
                      </div>
                      <div className="ml-3" >
                      <a className="" href={project.description?.split("|")[2] || "/"}>
                        <a>
            
                        </a>
                      </a>
                      </div>
                    </div>
                  </div>
                  <p className="dark:text-[#C4C4C4] text-[#1A1A1A]">{project.description?.split("|")[0]}</p>
                  <div className="TechnologyUsed mt-[12px]">
                    <span className="text-[#6CACE4]  text-[16px] text-">
                      {project.topics.map(x => {return  x[0].toUpperCase() + x.slice(1)}).join(" - ")}
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
