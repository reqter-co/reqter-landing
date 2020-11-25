import React from "react";
export interface IServiceItemProp {
  logoBgColor: string;
  title: string;
  description: string;
  isReverse: boolean;
  number: any;
}
const ServicesItem = ({
  title,
  description,
  isReverse,
  number,
}: IServiceItemProp): JSX.Element => {
  return (
    <div
      className={
        "mt-5 mb-10 flex tab-port:flex-col tab-port:mb-0 tab-land:px-5 " +
        (isReverse ? "flex-row-reverse" : "flex-row")
      }
    >
      <div className="flex flex-row pt-10">
        <div
          className={
            "flex items-center text-white font-bold text-2xl justify-center flex-shrink-0 w-12 h-12 rounded-full xs:self-center sm:ml-3 sm:h-16 sm:w-16 sm:mb-3 " +
            "bg-gray-600"
          }
        >
          {number}
        </div>
        <div className="flex flex-col pl-5">
          <h2 className="max-w-md text-3xl font-semibold tab-port:max-w-none phone:text-2xl">
            {title}
          </h2>
          <span className="my-3">{description}</span>
          <div className="flex mt-4 text-indigo-500 cursor-pointer">
            <span className="font-semibold" style={{ color: "#367BF5" }}>
              Learn More
            </span>
            <div className="flex items-center justify-center px-3 py-2 ml-2 bg-indigo-100 rounded">
              <svg
                width="12"
                height="12"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 3.46V4.46H6L3.25 7.21L3.96 7.92L7.92 3.96L3.96 -3.8147e-08L3.25 0.71L6 3.46H0Z"
                  fill="#367BF5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "flex-shrink-0 rounded-lg tab-port:mt-10 " +
          (isReverse ? "mr-32 tab-port:m-0" : "ml-32 tab-port:m-0")
        }
        style={{ maxWidth: 400, height: 250 }}
      >
        <img
          className="w-full h-full sm:mt-5"
          src="https://images.ctfassets.net/fo9twyrwpveg/4i6E7T8sdOMWuS8EAGgogK/d782cd32c2ac0efed769031fbe1f4b78/image_website.svg"
        />
      </div>
    </div>
  );
};
export default ServicesItem;
