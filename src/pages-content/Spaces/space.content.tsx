import NewButton from "./NewButton";
import { Wrapper, Title, Description, SpacesContainer } from "./spaces.style";
import { useSpaces } from "@Hooks/useSpace";
import Cart from "./Space-Cart";

const SpacesContent = () => {
  const { data } = useSpaces();
  return (
    <Wrapper>
      <Title>Space List</Title>
      <Description>Make a new one or edit your spaces</Description>
      <SpacesContainer>
        <NewButton />
        {data?.slice(0, 7).map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </SpacesContainer>
    </Wrapper>
  );
};
export default SpacesContent;
