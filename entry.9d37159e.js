import{r as x}from"./chunks/chunk.e0eca4bf.js";/* empty css                     */var e={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=x.exports,m=Symbol.for("react.element"),d=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,f=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(s,o,r){var t,a={},i=null,l=null;r!==void 0&&(i=""+r),o.key!==void 0&&(i=""+o.key),o.ref!==void 0&&(l=o.ref);for(t in o)h.call(o,t)&&!u.hasOwnProperty(t)&&(a[t]=o[t]);if(s&&s.defaultProps)for(t in o=s.defaultProps,o)a[t]===void 0&&(a[t]=o[t]);return{$$typeof:m,type:s,key:i,ref:l,props:a,_owner:f.current}}n.Fragment=d;n.jsx=c;n.jsxs=c;e.exports=n;const j=x.exports.createContext(void 0),g={setTheme:s=>{},themes:[]},N=()=>{var s;return(s=x.exports.useContext(j))!==null&&s!==void 0?s:g};function w(){const{theme:s,setTheme:o}=N(),r=[{href:"#Projects",text:"Projects"},{href:"#Resume",text:"Resume"},{href:"/blog",text:"Blog"},{href:"#Contact",text:"Contact"}];return e.exports.jsx("header",{className:"  h-[123px] mt-4  flex items-center justify-center mb-[50px] sm:mb-[133px] ",children:e.exports.jsxs("div",{className:"w-full  ",children:[e.exports.jsxs("div",{className:" flex h-[29px] justify-between  ",children:[e.exports.jsx("div",{className:"text-[18px] font-[Inter] ",children:e.exports.jsx("a",{className:"",href:"/",children:"BSCE Student at Lund university"})}),e.exports.jsxs("nav",{className:" flex Nav gap-7 items-center justify-center ",children:[e.exports.jsx("ul",{className:"text-[18px] hidden sm:flex gap-7 group-hover:cursor-pointer align-middle gap",children:e.exports.jsx("ul",{className:"text-[18px] hidden sm:flex gap-7 group-hover:cursor-pointer align-middle gap",children:r.map((t,a)=>e.exports.jsx("li",{children:e.exports.jsx("a",{href:t.href,children:t.text})},a))})}),e.exports.jsx("button",{onClick:()=>o(s==="dark"?"light":"dark"),className:" "})]})]}),e.exports.jsx("nav",{className:" flex Nav gap-7 items-center justify-center ",children:e.exports.jsx("ul",{className:"text-[18px] mt-10 justify-evenly w-full sm:hidden flex  group-hover:cursor-pointer align-middle gap",children:r.map((t,a)=>e.exports.jsx("li",{children:e.exports.jsx("a",{href:t.href,children:t.text})},a))})})]})})}function b(){return e.exports.jsxs("footer",{id:"Contact",className:" w-full  sm:gap-[100px]  mt-[111px] flex  justify-between mb-[60px] ",children:[e.exports.jsx("header",{className:" text-[20px]",children:"CONTACT "}),e.exports.jsxs("div",{className:"flex  justify-end  w-auto  flex-wrap  text-[Inter] text-[18px] gap-[12px]",children:[e.exports.jsx("a",{href:"mailto:fahad.alhatshami@hotmail.com",children:e.exports.jsx("a",{className:"SocialBtn"})}),e.exports.jsx("a",{href:"https://www.aedin.com/in/fahadalhatshami/",children:e.exports.jsx("a",{className:"SocialBtn"})}),e.exports.jsx("a",{href:"https://github.com/Panthyy",children:e.exports.jsx("a",{className:"SocialBtn"})})]})]})}function C({children:s}){return e.exports.jsx("div",{id:"Base",className:"dark:text-[#FFFFFF] dark:bg-[#111111] text-[#1A1A1A] flex px-8 sm:px-20  justify-center w-full min-h-full ",children:e.exports.jsx("div",{className:"Background  w-full sm:max-w-[1100px] ",children:s})})}function E(){return e.exports.jsxs("section",{className:"flex flex-col ",children:[e.exports.jsx("span",{className:" font-[Inter] mb-[16px]",children:"Heey \u{1F44B}, I\u2019m"}),e.exports.jsx("h1",{className:"w-min sm:text-6xl mb-[24px]  whitespace-nowrap lg:text-[86px] bg-gradient-to-r text-transparent  bg-clip-text from-[#9845E8] via-[#33D2FF]  to-[#DD5789]",children:"Fahad Alhatshami"}),e.exports.jsx("p",{className:"dark:text-[#F0F0F0] ",children:"Lets dive into my childhood, I've broken more things as a child than I can count. from game-boy's to my mother's computer. My curiosity drove me to discover and learn how things work. from all my small mistakes I've learned one thing. that the most important thing in life is curiosity and its ability to massively improve results. being able to pick up technology or a tool and swiftly grasp its in and outs to be able to materialize my idea into a functional product is what I'm mostly fond of."}),e.exports.jsxs("div",{className:" mt-[60px] flex items-center gap-3",children:[e.exports.jsx("p",{className:" text-[24px]",children:"Say hi"}),e.exports.jsx("a",{href:"https://www.linkedin.com/in/fahadalhatshami/",children:"--->"})]})]})}function P(){const[s,o]=x.exports.useState(0),r=[{Company:"MicroAA Labs",Position:"Full Stack Developer",Points:[]},{Company:"Lunds University",Position:"Teaching Assistant (Part time)",Points:["Teaching assistant at LTH in programming (EDAA10)","Grading and helping students with their assignments."]}];return e.exports.jsxs("section",{id:"Resume",className:" mt-[120px]   index == ExperienceTabSelected",children:[e.exports.jsx("header",{className:"  text-[18px]   index == ExperienceTabSelected font-[Inter]",children:e.exports.jsx("a",{children:"EXPERIENCE"})}),e.exports.jsx("div",{className:"mt-[20px] gap-12 font-[Inter] w-full flex text-lg 1A1A1A",children:r.map((t,a)=>{let i=a==s?" bg-[#1F1E1E] text-[#F0F0F0]":"text-[#1A1A1A] dark:text-[#F0F0F0]";return e.exports.jsx("div",{onClick:()=>o(a),className:" hover:cursor-pointer   hover:underline h-11 flex items-center justify-center rounded-md ExperienceBtn w-40 "+i,children:t.Company},a)})}),e.exports.jsxs("div",{className:" mt-16 flex h-48 flex-col gap-[12px]",children:[e.exports.jsx("h3",{className:" text-[24px]  font-[Inter] ",children:r[s].Position}),e.exports.jsx("span",{className:"text-[#004E93] leading-6 font-[Inter] text-[16px]",children:r[s].Company}),e.exports.jsx("ul",{className:" flex flex-col dark:text-[#C4C4C4]  gap-[12px] font-[Inter] mt-2",children:r[s].Points.map((t,a)=>e.exports.jsxs("li",{className:"flex gap-3  items-center",children:["- ",t]},a))})]})]})}function k(){const[s,o]=x.exports.useState([{id:1,title:"Project 1",description:"This is a project",image:"https://source.unsplash.com/random/800x600",link:"https://www.google.com",github:"https://github.com",topics:["React","Node","Express","MongoDB"]},{id:2,title:"Project 2",description:"This is a project",image:"https://source.unsplash.com/random/800x600",link:"https://www.google.com",github:"https://github.com",topics:["React","Node","Express","MongoDB"]}]);return e.exports.jsx("section",{id:"Projects",className:"flex justify-center mt-[100px]",children:e.exports.jsxs("div",{className:" w-[1057px]",children:[e.exports.jsx("header",{className:" font-[Inter] text-[18px]",children:"FEATURED PROJECTS"}),e.exports.jsx("div",{className:"mt-[52px] font-[Inter] sm:gap-[57px] flex-col xl:flex-row flex flex-wrap",children:s.map((r,t)=>e.exports.jsxs("div",{className:"Project   mb-[57px]  w-full pt-full relative xl:h-[500px] xl:w-[500px] flex flex-col  ",children:[e.exports.jsx("div",{className:"ProjectImagecontainer sm:w-[500px]  h-[340px] relative",children:e.exports.jsx("img",{layout:"fill",className:" object-cover rounded-[6px]",src:r.description?.split("|")[1]||"/ProjectImage1.jpg"})}),e.exports.jsxs("div",{className:"ProjectDescriptions  flex flex-col mt-[20px] ",children:[e.exports.jsxs("div",{className:"flex items-center justify-between  flex-wrap mb-[12px]",children:[e.exports.jsx("h3",{className:" text-[24px]",children:r.title}),e.exports.jsxs("div",{className:"Projectas h-full  my-4 mt-2 text-[24px] flex ml-2 ",children:[e.exports.jsx("div",{className:"",children:e.exports.jsx("a",{href:r?.link||"/"})}),e.exports.jsx("div",{className:"ml-3",children:e.exports.jsx("a",{className:"",href:r.description||"/"})})]})]}),e.exports.jsx("p",{className:"dark:text-[#C4C4C4] text-[#1A1A1A]",children:r.description}),e.exports.jsx("div",{className:"TechnologyUsed mt-[12px]",children:e.exports.jsx("span",{className:"text-[#6CACE4]  text-[16px] text-",children:r.topics.map(a=>a[0].toUpperCase()+a.slice(1)).join(" - ")})})]})]},t))})]})})}const F=()=>e.exports.jsx("div",{className:"mt-[100px] dark:border-[#C6C6C6] light:border-[#1A1A1A] Divider border-t-[4px]"});export{C as Base,F as Divider,P as Experience,k as FeaturedProjects,b as Footer,w as Header,E as Hero};