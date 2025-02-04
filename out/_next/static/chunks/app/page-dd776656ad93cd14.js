(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3981:(e,s,t)=>{Promise.resolve().then(t.bind(t,6159))},6159:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>u});var l=t(5155),a=t(7324),n=t(2599),i=t(4617),r=t.n(i),o=t(7360),c=t(5565);let d=[{name:"Home",href:"home"},{name:"About",href:"about"},{name:"Services",href:"services"},{name:"Portfolio",href:"portfolio"},{name:"Blogs",href:"blogs"},{name:"Contact",href:"contact"}];function x(e){let{className:s}=e,t=e=>{e.preventDefault();let s=window.document.getElementById(e.currentTarget.href.split("#")[1]);if(s){let e=s.getBoundingClientRect().top;window.scrollBy({top:e-20,behavior:"smooth"})}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"lg:hidden fixed top-0 left-0 right-0 z-40 shadow",children:(0,l.jsxs)(o.EN,{as:"nav",className:"bg-blue-700",children:[(0,l.jsx)("div",{className:" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:(0,l.jsxs)("div",{className:"flex h-16 items-center justify-between",children:[(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsx)("div",{className:"shrink-0",children:(0,l.jsx)("div",{className:"rounded-lg overflow-hidden h-12 w-12 border-white/20 border-2",children:(0,l.jsx)(c.default,{alt:"Bipin Pandey",src:"bipin-pandey.jpg"})})})}),(0,l.jsx)("div",{className:"-mr-2 flex",children:(0,l.jsxs)(o._q,{className:"group relative inline-flex items-center justify-center rounded-md transition-all ease-in-out bg-gray-300 p-2 text-blue-700 hover:bg-gray-200",children:[(0,l.jsx)("span",{className:"absolute -inset-0.5"}),(0,l.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",className:"block size-6 group-data-[open]:hidden",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})}),(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",className:"hidden size-6 group-data-[open]:block",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})]})})]})}),(0,l.jsx)(o.kS,{className:"",children:(0,l.jsx)("div",{className:"space-y-1 px-2 pb-3 pt-2 sm:px-3",children:d.map((e,s)=>(0,l.jsx)("a",{onClick:t,href:"#".concat(e.href),className:"",children:(0,l.jsx)("div",{className:"px-2 py-1 transition-all text-white hover:font-bold hover:bg-gray-300 hover:text-blue-700 rounded","data-to-scrollspy-id":e.href,children:e.name})},s))})})]})}),(0,l.jsxs)("div",{className:r()("hidden lg:block w-80 bg-blue-700 h-screen text-white text-center sticky top-0",s),children:[(0,l.jsx)("div",{className:"h-32 bg-yellow-400 flex items-center justify-center",children:(0,l.jsx)("div",{className:"rounded-full overflow-hidden h-44 w-44 mt-28 border-white/20 border-8",children:(0,l.jsx)(c.default,{alt:"Bipin Pandey",width:200,height:200,src:"bipin-pandey.jpg"})})}),(0,l.jsx)("div",{className:"pt-32 space-y-3 flex flex-col px-2",children:d.map((e,s)=>(0,l.jsx)("a",{onClick:t,href:"#".concat(e.href),children:(0,l.jsx)("div",{className:"p-2","data-to-scrollspy-id":e.href,children:e.name})},s))})]})]})}var m=t(2115),p=t(6367);function h(){let[e,s]=(0,m.useState)(""),[t,a]=(0,m.useState)(""),[n,i]=(0,m.useState)(""),[r,o]=(0,m.useState)(""),[c,d]=(0,m.useState)(""),x=async l=>{if(l.preventDefault(),!e){d("Name is Required");return}if(!t){d("Email is Required");return}if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(t)){d("Please enter valid Email");return}if(!n){d("Subject is Required");return}if(!r){d("Message is Required");return}let c=await p.Ay.send("service_n7tzj08","template_0hygymr",{from_name:e,message:r,from_subject:n,from_email:t},{publicKey:"12AI3evKPiZ74__uJ"});console.log(c),200==c.status?(s(""),i(""),a(""),o(""),d("Thank you for contacting me! I will contact you regarding your message ASAP")):d("Error while sending email")};return(0,l.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6  md:py-10",children:[(0,l.jsx)("div",{className:"",children:(0,l.jsxs)("div",{className:"space-y-3",children:[(0,l.jsx)("p",{children:"Let's Work Together for your next project or startup."}),(0,l.jsx)("p",{children:"I'd love to meet up with you to discuss your venture, and potential collaborations."}),(0,l.jsxs)("div",{className:"flex items-start gap-6 mb-6",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"h-6 fill-blue-700",children:(0,l.jsx)("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})}),(0,l.jsx)("a",{href:"mailto:contact@crisprcoders.com",children:(0,l.jsx)("p",{children:"admin@bipinpandey.com.np"})})]}),(0,l.jsxs)("div",{className:"flex items-start gap-6 mb-4",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"h-6 fill-blue-700",children:(0,l.jsx)("path",{d:"M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"})}),(0,l.jsxs)("p",{children:["New Bazzar, Baisjangar Thanimai Marg,",(0,l.jsx)("br",{})," Bhanu-9, Tanahun"]})]}),(0,l.jsxs)("div",{className:"flex gap-6",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"h-6 fill-blue-700",children:(0,l.jsx)("path",{d:"M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"})}),(0,l.jsx)("p",{children:"+977-9846090617"})]})]})}),(0,l.jsx)("form",{onSubmit:x,children:(0,l.jsxs)("div",{className:"space-y-4 ",children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("label",{htmlFor:"name",children:(0,l.jsx)("span",{className:"absolute right-3 top-3",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"h-4 fill-blue-700",children:(0,l.jsx)("path",{d:"M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"})})})}),(0,l.jsx)("input",{placeholder:"Name",id:"name",name:"name",value:e,className:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",onChange:e=>{let{target:{value:t}}=e;s(t),d("")}})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("label",{htmlFor:"email",children:(0,l.jsx)("span",{className:"absolute right-3 top-3",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"h-4 fill-blue-700",children:(0,l.jsx)("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})})})}),(0,l.jsx)("input",{id:"email",placeholder:"Email",name:"email",className:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",onChange:e=>{let{target:{value:s}}=e;a(s),d("")},value:t})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("label",{htmlFor:"work",children:(0,l.jsx)("span",{className:"absolute right-3 top-3",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"h-4 fill-blue-700",children:(0,l.jsx)("path",{d:"M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 96-96 0 0-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-32 96 0 0 96-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 0-96 96 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 32-96 0 0-96 32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"})})})}),(0,l.jsxs)("select",{name:"subject",value:n,onChange:e=>{let{target:{value:s}}=e;i(s),d("")},className:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",children:[(0,l.jsx)("option",{value:"",children:"What are you looking for?"}),(0,l.jsx)("option",{value:"Fullstack Product Development",children:"Fullstack Product Development"}),(0,l.jsx)("option",{value:"DevOps and Deployment Solutions",children:"DevOps and Deployment Solutions"}),(0,l.jsx)("option",{value:"Technical Leadership and Team Mentorship",children:"Technical Leadership and Team Mentorship"}),(0,l.jsx)("option",{value:"B2B SaaS Solutions Consulting",children:"B2B SaaS Solutions Consulting"}),(0,l.jsx)("option",{value:"Startup MVP Development",children:"Startup MVP Development"}),(0,l.jsx)("option",{value:"Project Management and Delivery",children:"Project Management and Delivery"})]})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("label",{htmlFor:"message",children:(0,l.jsx)("span",{className:"absolute top-3 right-3",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"h-4 fill-blue-700",children:(0,l.jsx)("path",{d:"M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z"})})})}),(0,l.jsx)("textarea",{placeholder:"Write some message",cols:23,rows:4,style:{resize:"none"},name:"message",className:"block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6",onChange:e=>{let{target:{value:s}}=e;o(s),d("")},value:r})]}),(0,l.jsx)("p",{className:"text-sm text-red-500",children:c}),(0,l.jsxs)("button",{className:"group cursor-pointer block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",type:"submit",children:["Let's Talk"," ",(0,l.jsx)("span",{"aria-hidden":"true",className:"inline-flex transition-all duration-200 ease-in-out w-0 overflow-hidden group-hover:w-4",children:"→"})]})]})})]})}let u=function(){return(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)(x,{className:"drop-shadow-2xl"}),(0,l.jsx)("div",{className:"w-full",children:(0,l.jsxs)(a.A,{offsetBottom:200,scrollThrottle:80,useBoxMethod:!0,activeClass:"ss-active",children:[(0,l.jsxs)("div",{id:"home",className:"relative flex flex-col h-screen w-full items-center justify-center bg-fixed bg-[url(/bg-three.jpg)] bg-cover bg-no-repeat bg-center",children:[(0,l.jsx)("div",{className:"absolute h-screen w-full top-0 bottom-0 left-0 right-0 z-10"}),(0,l.jsxs)("div",{className:"relative z-20 flex flex-col gap-4 items-center justify-between bg-black/70 rounded px-6 py-8 min-w-[500px]",children:[(0,l.jsxs)("h1",{className:"text-5xl uppercase font-bold text-white",children:[(0,l.jsx)("span",{className:"capitalize",children:"Er."})," Bipin Pandey"]}),(0,l.jsxs)("p",{className:"text-lg text-gray-400 break-words font-bold",children:["Software Engineer",(0,l.jsx)("span",{className:"",children:(0,l.jsx)(n.cU,{words:[", Co-Founder, Mentor"],loop:!0,deleteSpeed:100})})]}),(0,l.jsx)("button",{className:"bg-yellow-400 rounded-sm px-5 py-3 text-base",children:"Contact Me"})]})]}),(0,l.jsxs)(g,{id:"about",className:"flex flex-col justify-center !px-0 !pb-0",children:[(0,l.jsxs)("div",{className:"md:flex gap-8 py-8 px-4 md:px-8 lg:px-16 my-10",children:[(0,l.jsx)("div",{className:"hidden md:flex items-center justify-end",children:(0,l.jsx)("div",{className:"h-96 w-96 rounded overflow-hidden",children:(0,l.jsx)(c.default,{height:500,width:900,src:"/bipin-pandey.jpg",alt:"Bipin Pandey"})})}),(0,l.jsxs)("div",{className:"gap-3 flex flex-col justify-center",children:[(0,l.jsx)("p",{className:"text-blue-500 uppercase",children:"About"}),(0,l.jsx)("p",{className:"text-3xl font-sans font-bold",children:"Er. Bipin Pandey is software engineer based on Nepal"}),(0,l.jsx)("p",{className:"mb-8",children:"Highly skilled and adaptable software engineer with extensive experience in software development, robotics, and automation. Adept at designing innovative solutions, developing working prototypes, and optimizing code for efficiency and maintainability. Passionate about leveraging technology to solve complex problems and enhance user experiences."}),(0,l.jsx)("a",{href:"/CV_Er._Bipin_Pandey.pdf",download:!0,children:(0,l.jsx)("button",{className:"bg-blue-700 rounded-sm text-white px-5 py-3 text-base",children:"Download CV"})})]})]}),(0,l.jsxs)("div",{className:"flex items-center justify-around w-full bg-blue-700 gap-6 h-56 p-8",children:[(0,l.jsxs)("div",{className:"text-center space-y-4",children:[(0,l.jsx)("p",{className:"text-white text-5xl font-sans font-bold",children:"20+"}),(0,l.jsx)("p",{className:"text-gray-300 ",children:"Project Completed"})]}),(0,l.jsxs)("div",{className:"text-center space-y-4",children:[(0,l.jsx)("p",{className:"text-white text-5xl font-sans font-bold",children:"5+"}),(0,l.jsx)("p",{className:"text-gray-300 ",children:"Happy Clients"})]}),(0,l.jsxs)("div",{className:"text-center space-y-4",children:[(0,l.jsx)("p",{className:"text-white text-5xl font-sans font-bold",children:"500+"}),(0,l.jsx)("p",{className:"text-gray-300 ",children:"Pull Request Merged"})]}),(0,l.jsxs)("div",{className:"text-center space-y-4",children:[(0,l.jsx)("p",{className:"text-white text-5xl font-sans font-bold",children:"6+"}),(0,l.jsx)("p",{className:"text-gray-300 ",children:"Years of Experience "})]})]})]}),(0,l.jsxs)(g,{id:"services",className:"flex flex-col justify-center",children:[(0,l.jsx)("p",{className:"text-blue-500 uppercase",children:"Services"}),(0,l.jsx)("p",{className:"text-3xl font-sans font-bold",children:"What I Do"}),(0,l.jsxs)("div",{className:"grid grid-cols-12 gap-8 mt-20",children:[(0,l.jsx)(j,{name:"Fullstack Product Development",description:"Design and develop robust, scalable web and mobile applications tailored to client needs.",icon:"/coding.png",features:["End-to-end development of MVPs for startups and businesses.","Secure and efficient backend architecture using NodeJS, MongoDB, and PostgreSQL.","Responsive frontend with ReactJS and React Native."],tools:["ReactJS, React Native, NodeJS, Docker, AWS, GraphQL."],idealFor:["Startups","tech entrepreneurs","SaaS businesses"],className:"col-span-12 md:col-span-6 2xl:col-span-4"}),(0,l.jsx)(j,{name:"DevOps and Deployment Solutions",description:"Optimize your software delivery pipeline and streamline deployments.",icon:"/devops.png",features:["CI/CD setup for automated testing and deployment.","Server configuration and management with Nginx/Apache.","Containerization and orchestration using Docker."],tools:["Docker, AWS, Nginx, Apache, CircleCI."],idealFor:["Tech teams needing robust infrastructure and streamlined deployments."],className:"col-span-12 md:col-span-6 2xl:col-span-4"}),(0,l.jsx)(j,{name:"Technical Leadership and Team Mentorship",description:"Empower teams with technical guidance and hands-on mentorship.",icon:"/leadership.png",features:["Mentoring junior developers and interns to boost productivity.","Reviewing and improving code quality.","Conducting one-on-one technical coaching sessions."],tools:[],idealFor:["Development teams needing guidance on best practices and productivity."],className:"col-span-12 md:col-span-6 2xl:col-span-4"}),(0,l.jsx)(j,{name:"B2B SaaS Solutions Consulting",description:"Expert consultation to build, optimize, and scale SaaS platforms.",icon:"/clarification.png",features:["Analyzing customer pain points to design intuitive solutions.","Streamlining development timelines and processes.","Continuous improvement of product offerings and features."],tools:["ReactJS, React Native, NodeJS, Docker, AWS, GraphQL."],idealFor:["SaaS companies and B2B service providers."],className:"col-span-12 md:col-span-6 2xl:col-span-4"}),(0,l.jsx)(j,{name:"Startup MVP Development",description:"Turn your ideas into reality with minimum viable products ready for market testing.",icon:"/mvp.png",features:["Ideation, architecture, and design of MVPs.","Fast prototyping and deployment.","Scalability-focused architecture to support growth."],tools:["ReactJS, React Native, NodeJS, Docker, AWS, GraphQL."],idealFor:["Entrepreneurs and early-stage startups."],className:"col-span-12 md:col-span-6 2xl:col-span-4"}),(0,l.jsx)(j,{name:"Project Management and Delivery",description:"Oversee and ensure seamless delivery of software projects.",icon:"/workflow.png",features:["Defining product specifications and managing timelines.","Coordinating with cross-functional teams to meet objectives.","Implementing CI/CD pipelines and deployment strategies."],tools:["Docker, AWS, Git, Nginx."],idealFor:["Businesses looking for smooth, well-managed project execution."],className:"col-span-12 md:col-span-6 2xl:col-span-4"})]})]}),(0,l.jsxs)(g,{id:"services",className:"flex flex-col justify-center bg-gray-100",children:[(0,l.jsx)("p",{className:"text-blue-500 uppercase",children:"Skills"}),(0,l.jsx)("p",{className:"text-3xl font-sans font-bold",children:"Experience and Skills"}),(0,l.jsxs)("div",{className:"flex flex-col lg:flex-row items-baseline justify-between mt-10 gap-5",children:[(0,l.jsxs)("div",{className:"ml-4 flex-1",children:[(0,l.jsx)("p",{className:"text-xl font-bold mb-1 ml-7 relative before:content-['\uD83D\uDC68\uD83C\uDFFD‍\uD83D\uDCBB'] before:z-10 before:absolute before:text-3xl before:h-10 before:w-10 before:bg-gray-500 before:rounded-full before:flex before:items-center before:justify-center before:-left-12 before:-top-2",children:"Professional Experience"}),(0,l.jsxs)("div",{className:"ml-5",children:[(0,l.jsx)(f,{title:"Crispr Coders Pvt. Ltd",link:"https://www.crisprcoders.com/",description:"Co-Founder and Product Development Lead",timeLine:"Nov 2019 - Now"}),(0,l.jsx)(f,{title:"Digb",link:"https://www.digb.com/",description:"Lead Software Engineer",timeLine:"Sep 2022 - Jun 2023"}),(0,l.jsx)(f,{link:"https://gitstart.com/",title:"Gitstart | Community (YC s19)",description:"Team Lead | Software Engineer",timeLine:"Nov 2018 - Oct 2022"}),(0,l.jsx)(f,{link:"https://gitstart.com/",title:"Gitstart | Community (YC s19)",description:"Software Developer",timeLine:"May 2018 - Nov 2018"}),(0,l.jsx)(f,{title:"Siems Everest Pvt. Ltd",description:"Full Stack Developer",timeLine:"Sep 2017 - Oct 2018"}),(0,l.jsx)(f,{isLast:!0,link:"https://aarthiknews.com/",title:"Arthik News ",description:"Wordpress Developer",timeLine:"April 2017 - Jun 2016"})]})]}),(0,l.jsxs)("div",{className:"ml-4 flex-1",children:[(0,l.jsx)("p",{className:"text-xl font-bold mb-1 ml-7 relative before:content-['\uD83C\uDF93'] before:z-10 before:absolute before:text-3xl before:h-10 before:w-10 before:bg-gray-500 before:rounded-full before:flex before:items-center before:justify-center before:-left-12 before:-top-2",children:"Formal Education"}),(0,l.jsxs)("div",{className:"ml-5",children:[(0,l.jsx)(f,{title:"Pulchowk Campus",description:"Bachelor in Electrical Engineering",timeLine:"2012 - 2017"}),(0,l.jsx)(f,{title:"Rehdon College",description:"High School (+2 Science)",timeLine:"2010 - 2012"}),(0,l.jsx)(f,{isLast:!0,title:"Shree Bir Bhakti Higher Secondary School",description:"Secondary School (8-10)",timeLine:"2008 - 2010"})]})]})]})]}),(0,l.jsxs)(g,{id:"portfolio",className:"flex flex-col justify-center",children:[(0,l.jsx)("p",{className:"text-blue-500 uppercase",children:"Works"}),(0,l.jsx)("p",{className:"text-3xl font-sans font-bold",children:"Creative Portfolio"}),(0,l.jsx)("div",{className:"flex flex-col lg:flex-row items-baseline justify-between mt-10 gap-5"})]}),(0,l.jsxs)(g,{id:"blogs",className:"flex flex-col justify-center bg-gray-100",children:[(0,l.jsx)("p",{className:"text-blue-500 uppercase",children:"Blogs"}),(0,l.jsx)("p",{className:"text-3xl font-sans font-bold",children:"Latest Posts"}),(0,l.jsx)("div",{className:"flex flex-col lg:flex-row items-baseline justify-between mt-10 gap-5"})]}),(0,l.jsxs)(g,{id:"contact",className:"flex flex-col justify-center",children:[(0,l.jsx)("p",{className:"text-blue-500 uppercase",children:"Contact"}),(0,l.jsx)("p",{className:"text-3xl font-sans font-bold",children:"Get in Touch"}),(0,l.jsx)("div",{className:"flex flex-col lg:flex-row items-baseline justify-between mt-10 gap-5",children:(0,l.jsx)(h,{})})]})]})})]})},f=e=>{let{description:s,title:t,link:a,timeLine:n,isLast:i}=e;return(0,l.jsxs)("div",{className:r()("flex-1 flex py-5 items-center justify-between gap-2 relative before:content-[' '] before:z-10 before:absolute before:-left-6 before:h-2.5 before:w-2.5 before:bg-white before:border-blue-700 before:border-2 before:rounded-full after:content-[' '] after:absolute after:top-0 after:-left-5 after:w-0.5 after:bg-blue-700 after:h-full",{doted:i}),children:[(0,l.jsx)("div",{className:" text-gray-800 text-xs min-w-32",children:n}),a?(0,l.jsxs)("div",{className:"flex-1 group",children:[(0,l.jsx)("a",{href:a,target:"_blank",referrerPolicy:"no-referrer",className:"font-bold text-lg text-slate-900 relative group-hover:text-blue-700 after:contain-[' '] after:absolute after:-bottom-1 after:left-0 after:w-0 after:transition-all after:bg-current after:h-0.5 group-hover:after:w-full",children:t}),(0,l.jsx)("p",{className:"text-gray-500 text-sm",children:s})]}):(0,l.jsxs)("div",{className:"flex-1 ",children:[(0,l.jsx)("p",{className:"font-bold text-lg text-gray-700",children:t}),(0,l.jsx)("p",{className:"text-gray-500 text-sm",children:s})]})]})},g=e=>{let{id:s,className:t,children:a}=e;return(0,l.jsx)("div",{id:s,className:r()("min-h-screen py-16 px-4 sm:px-4 md:px-6 lg:px-10 2xl:px-16",t),children:a})},j=e=>{let{className:s,icon:t,name:a,description:n,features:i=[],tools:o=[],idealFor:d=[]}=e;return(0,l.jsx)("div",{className:r()("relative px-8 py-10 group cursor-pointer rounded shadow-service transition-all delay-75 ease-in-out after:content-[' '] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-blue-700 after:transition-all after:delay-75 after:ease-in-out after:-translate-x-full after:-translate-y-full overflow-hidden hover:after:translate-x-0 hover:after:translate-y-0 after:z-0",s),children:(0,l.jsxs)("div",{className:"relative z-10  group-hover:text-white",children:[(0,l.jsx)("div",{className:"h-20 w-20 mb-5 rounded-full bg-blue-700 border-4 border-gray-300 p-4",children:(0,l.jsx)(c.default,{width:50,height:50,alt:"Icon",className:"h-full w-full filter",src:t})}),(0,l.jsx)("p",{className:"text-xl font-sans font-bold mb-1",children:a}),(0,l.jsx)("p",{className:"mb-1 text-gray-700 group-hover:text-gray-300",children:n}),(0,l.jsx)("ul",{className:"text-sm list-disc ml-3 text-gray-500 group-hover:text-gray-300",children:i.map((e,s)=>(0,l.jsx)("li",{children:e},s))}),o.length>0&&(0,l.jsxs)("p",{className:"text-sm mt-1 text-gray-500 group-hover:text-gray-300",children:[(0,l.jsx)("strong",{children:"Tools: "}),o.toString()]}),d.length>0&&(0,l.jsxs)("p",{className:"text-sm mt-1 text-gray-500 group-hover:text-gray-300",children:[(0,l.jsx)("strong",{children:"Ideal For: "}),d.toString()]})]})})}}},e=>{var s=s=>e(e.s=s);e.O(0,[231,441,517,358],()=>s(3981)),_N_E=e.O()}]);