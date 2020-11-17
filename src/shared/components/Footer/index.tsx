import useDataPath from "@Hooks/useDataPath";
import {
  Wrapper,
  Container,
  Left,
  SocialIcon,
  Right,
  Column,
  Link,
  CompanyName,
  Logo,
} from "./footer.style";
import Icon from "@Shared/components/Icon";
import AppLogo from "@Shared/components/AppLogo/logo.component";
import { IFooter } from "@Interfaces/footer";
type Props = {
  data: IFooter;
};

const Footer = ({ data }: Props) => {
  const { getKeyValue } = useDataPath();
  return (
    <Wrapper>
      <Container>
        <Left>
          <div>
            Massive amounts of content scattered across multiple CMSes, to a
            single source of truth. Unified content anywhere
          </div>
          <div className="flex">
            <SocialIcon
              href={getKeyValue(data, "linkedinlink")}
              target="_blank"
            >
              <Icon name="linkedin" />
            </SocialIcon>
            <SocialIcon href={getKeyValue(data, "fblink")} target="_blank">
              <Icon name="facebook" />
            </SocialIcon>
            <SocialIcon
              href={getKeyValue(data, "instagramlink")}
              target="_blank"
            >
              <Icon name="instagram" />
            </SocialIcon>
          </div>
        </Left>
        <Right>
          <Column>
            <Link href={getKeyValue(data, "footerlink1url")} target="_blank">
              {getKeyValue(data, "footerlink1title")}
            </Link>
            <Link href={getKeyValue(data, "footerlink2url")} target="_blank">
              {getKeyValue(data, "footerlink2title")}
            </Link>
            <Link href={getKeyValue(data, "footerlink3url")} target="_blank">
              {getKeyValue(data, "footerlink3title")}
            </Link>
            <Link href={getKeyValue(data, "footerlink1url")} target="_blank">
              {getKeyValue(data, "footerlink1title")}
            </Link>
            <Link href={getKeyValue(data, "footerlink2url")} target="_blank">
              {getKeyValue(data, "footerlink2title")}
            </Link>
            <Link href={getKeyValue(data, "footerlink3url")} target="_blank">
              {getKeyValue(data, "footerlink3title")}
            </Link>
          </Column>
          <Column>
            <Link href={getKeyValue(data, "footerlink4url")}>
              {getKeyValue(data, "footerlink4title")}
            </Link>
            <Link href={getKeyValue(data, "link5url")}>
              {getKeyValue(data, "link5title")}
            </Link>
            <Link href={getKeyValue(data, "link6url")}>
              {getKeyValue(data, "link6title")}
            </Link>
          </Column>
          <Column>
            <CompanyName>
              {getKeyValue(data, "companyname1", "Reqter CMS")}
            </CompanyName>
            <Link href={`mailto:${getKeyValue(data, "companyemail")}`}>
              <Icon name="email" />
              <span className="mx-2">
                {getKeyValue(data, "companyemail1", "info@reqter.com")}
              </span>
            </Link>
            <Link href={`tel:${getKeyValue(data, "copmanyphone")}`}>
              <Icon name="phone" />
              <span className="mx-2">{getKeyValue(data, "copmanyphone")}</span>
            </Link>
          </Column>
          <Column>
            <Logo>
              <AppLogo />
            </Logo>
          </Column>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Footer;
