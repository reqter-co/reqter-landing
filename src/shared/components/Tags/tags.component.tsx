import tw from "twin.macro";
import { TagsContainer, TagItem } from "./tags.style";
interface IProps {
  data: any[];
  size?: "lg" | "md" | "sm";
  center?: boolean;
}
const Tags = ({ data, size = "md", center = false }: IProps) => {
  return (
    <TagsContainer css={[center && tw`justify-center`]}>
      {data?.map((tag) => (
        <TagItem
          css={[
            size === "sm"
              ? tw`text-xs`
              : size === "md"
              ? tw`text-sm`
              : tw`text-base`,
          ]}
        >
          {tag.text}
        </TagItem>
      ))}
    </TagsContainer>
  );
};
export default Tags;
