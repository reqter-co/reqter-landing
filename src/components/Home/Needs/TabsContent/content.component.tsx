import {
  ContentWrapper,
  Left,
  Title,
  Info,
  Right,
  Image,
} from "./content.styles";
const TabsContent = () => {
  return (
    <ContentWrapper>
      <Left>
        <Title>Model your content to get it reusable</Title>
        <Info>
          Envision, test and validate your ideas with quick wireframes and
          detailed mockups.
          <br /> Explore and iterate as your team builds momentum - moving
          seamlessly from lo-fi to hi-fi as your project evolves.
        </Info>
      </Left>
      <Right>
        <Image src="https://www.protranslate.net/blog/wp-content/uploads/2017/02/ecommerce.png" />
      </Right>
    </ContentWrapper>
  );
};
export default TabsContent;
