import React from "react";
export interface ISkillItem {
  icon: JSX.Element;
  title: string;
  description: string;
}
const Item = ({ icon, title, description }: ISkillItem): JSX.Element => {
  return (
    <div className="flex w-1/3 pr-3 my-10 ">
      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-3 bg-indigo-100 rounded-full">
        {icon}
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="pr-4 text-sm">{description}</span>
      </div>
    </div>
  );
};
export default Item;
