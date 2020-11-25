import TextTruncate from "react-text-truncate";
import Link from "@Shared/components/Link";
import { CartWrapper, Image } from "./space-cart.style";
import { ISpace } from "@Interfaces/space";

const SpaceCart = ({ data }: { data: ISpace }) => {
  return (
    <Link href="/account">
      <CartWrapper>
        <Image src="https://globalimpactnetwork.org/wp-content/themes/globalimpact/images/no-image-found-360x250.png" />

        <TextTruncate
          line={1}
          element="h2"
          truncateText="…"
          text={data.title}
        />
      </CartWrapper>
    </Link>
  );
};
export default SpaceCart;
