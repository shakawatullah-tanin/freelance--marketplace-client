import React from "react";

const Banner = () => {
  const tech = ["Designer", "Developer", "Web", "IOS", "PHP", "Senior"];
  return (
    <div className="md:flex mx-4 items-center my-4 justify-between">
      <div>
        <h1 className="text-xl md:text-5xl font-bold">
          Freelance Services For Your Business
        </h1>
        <p className="my-4">
          Work with talented people at the most affordable price to get the most
          out of your time and cost
        </p>
        <div>
          <button className="px-4 py-2 btn">Get Start</button>
        </div>
        <div className="my-4 ">
          <h3 className="my-3">Populer Searches</h3>
          <div className="grid grid-cols-4  gap-2">
            {tech.map((item) => (
              <p className="btn px-3 py-3">{item}</p>
            ))}
          </div>
        </div>
      </div>

      <div>
        <img src="banner.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
