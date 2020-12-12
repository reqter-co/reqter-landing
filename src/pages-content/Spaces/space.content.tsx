import NewButton from "./NewButton";
import { SpacesContainer } from "./spaces.style";
import { useSpaces } from "@Hooks/useSpace";
import Cart from "./Space-Cart";

const SpacesContent = () => {
  const { data } = useSpaces();
  return (
    <SpacesContainer>
      <NewButton />
      {data?.slice(0, 7).map((item) => (
        <Cart key={item.id} data={item} />
      ))}
    </SpacesContainer>
  );
};
export default SpacesContent;
