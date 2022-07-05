import { useState } from "react";

function Experience() {
  const [ExperienceTabSelected, setExperienceTabSelected] = useState(0);
  const Experiences = [
    {
      Company: "MicroAA Labs",
      Position: "Full Stack Developer",
      Points: [],
    },
    {
      Company: "Lunds University",
      Position: "Teaching Assistant (Part time)",
      Points: [
        "Teaching assistant at LTH in programming (EDAA10)",
        "Grading and helping students with their assignments."
      ],
    },
  ];
  return (
    <section
      id="Resume"
      className=" mt-[120px]   index == ExperienceTabSelected"
    >
      <header className="  text-[18px]   index == ExperienceTabSelected font-[Inter]">
        <a>EXPERIENCE</a>
      </header>
      <div className="mt-[20px] gap-12 font-[Inter] w-full flex text-lg 1A1A1A">
        {Experiences.map((experience, index) => {
          let y =
            index == ExperienceTabSelected ? " bg-[#1F1E1E] text-[#F0F0F0]" : "text-[#1A1A1A] dark:text-[#F0F0F0]";
          return (
            <div
            key={index}
              onClick={() => setExperienceTabSelected(index)}
              className={
                " hover:cursor-pointer   hover:underline h-11 flex items-center justify-center rounded-md ExperienceBtn w-40 " +
                y
              }
            >
              {experience.Company}
            </div>
          );
        })}
      </div>
      <div className=" mt-16 flex h-48 flex-col gap-[12px]">
        <h3 className=" text-[24px]  font-[Inter] ">
          {Experiences[ExperienceTabSelected].Position}
        </h3>
        <span className="text-[#004E93] leading-6 font-[Inter] text-[16px]">

          {Experiences[ExperienceTabSelected].Company}
        </span>
        <ul className=" flex flex-col dark:text-[#C4C4C4]  gap-[12px] font-[Inter] mt-2">
          {Experiences[ExperienceTabSelected].Points.map((point, index) => (
            <li key={index} className="flex gap-3  items-center">
              - {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export { Experience };
