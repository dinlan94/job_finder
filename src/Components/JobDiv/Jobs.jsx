import React from "react";
import { BiTimeFive } from "react-icons/bi";
import logo1 from "../../Assets/logo1.png";
import logo2 from "../../Assets/logo2.png";
import logo3 from "../../Assets/logo3.png";
import logo4 from "../../Assets/logo4.png";
import logo5 from "../../Assets/logo5.png";
import logo6 from "../../Assets/logo6.png";
import logo7 from "../../Assets/logo7.png";
import logo8 from "../../Assets/logo8.png";

const Data = [
  {
    id: 1,
    image: logo1,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem Ipsum dolor si amet consectur adipsing elit, corrupti laborisam",
    company: "Whats App",
  },
  {
    id: 2,
    image: logo2,
    title: "NOC",
    time: "Now",
    location: "USA",
    desc: "Lorem Ipsum dolor si amet consectur adipsing elit, corrupti laborisam",
    company: "Twitter",
  },
  {
    id: 3,
    image: logo3,
    title: "Mobile Dev",
    time: "Now",
    location: "USA",
    desc: "Lorem Ipsum dolor si amet consectur adipsing elit, corrupti laborisam",
    company: "Only Fans",
  },
  {
    id: 4,
    image: logo4,
    title: "Flutter Dev",
    time: "Now",
    location: "England",
    desc: "Lorem Ipsum dolor si amet consectur adipsing elit, corrupti laborisam",
    company: "Line",
  },
  {
    id: 5,
    image: logo5,
    title: "NOC",
    time: "Now",
    location: "Canada",
    desc: "Lorem Ipsum dolor si amet consectur adipsing elit, corrupti laborisam",
    company: "Porn Hub",
  },
  {
    id: 6,
    image: logo6,
    title: "BackEnd Eng",
    time: "Now",
    location: "USA",
    desc: "Lorem Ipsum dolor si amet consectur adipsing elit, corrupti laborisam",
    company: "Facebook",
  },
  {
    id: 7,
    image: logo7,
    title: "IOS dev",
    time: "Now",
    location: "Spain",
    desc: "Lorem Ipsum dolor si amet consectur adipsing elit, corrupti laborisam",
    company: "Instagram",
  },
  {
    id: 8,
    image: logo8,
    title: "Web Developer",
    time: "Now",
    location: "Brazil",
    desc: "Lorem Ipsum dolor si amet consectur adipsing elit, corrupti laborisam",
    company: "Telegram",
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-bluecolor 
              shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {time}
                </span>
              </span>

              <h6 className="text-[#ccc]">{location}</h6>

              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>

              <div className="company flex items-center gap-2">
                <img src={image} alt="Company Logo" className="w-[15%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>

              <button
                className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold
                text-textColor hover:bg-white group-hover/item:text-textColor"
              >
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
