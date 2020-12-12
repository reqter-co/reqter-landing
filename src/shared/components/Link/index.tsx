import { FC } from "react";
import Link from "next/link";
interface IProps {
  href: string;
}
const ExtendedLink: FC<IProps> = ({ href, children, ...rest }) => {
  return (
    <Link href={href} {...rest}>
      <a>{children}</a>
    </Link>
  );
};

export default ExtendedLink;
