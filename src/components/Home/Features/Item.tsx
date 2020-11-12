import React from "react";
import { ItemWrapper } from "./features.style";
export interface ISkillItem {
  icon: JSX.Element;
  title: string;
  description: string;
}
const Item = ({ icon, title, description }: ISkillItem): JSX.Element => {
  return (
    <ItemWrapper>
      <div className="flex items-center justify-center mb-5 flex-shrink-0 w-16 h-16 mr-3 bg-indigo-100 rounded-full self-center">
        {icon}
      </div>
      <div className="flex flex-col text-center">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <span className=" text-sm">{description}</span>
      </div>
    </ItemWrapper>
  );
};
export default Item;
