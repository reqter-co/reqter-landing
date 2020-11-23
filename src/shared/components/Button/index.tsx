import tw from "twin.macro";
import Spinner from "../Spinner";
import { Btn } from "./button.style";
import Link from "@Shared/components/Link";
interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  [key: string]: unknown;
}
const Button: React.FC<IButtonProps> = ({
  loading,
  selected,
  primary = true,
  secondary,
  link,
  href,
  size,
  cls = "",
  children,
  ...rest
}) => {
  return (
    <Btn
      css={[
        primary
          ? tw`bg-primary-light-color hover:bg-primary-light-hover-color focus:bg-primary-light-hover-color text-white`
          : "",
        secondary
          ? tw`bg-secondary-light-color hover:bg-secondary-light-hover-color focus:bg-secondary-light-hover-color text-secondary-dark-color hover:text-white`
          : "",
        secondary && selected ? tw`bg-secondary-dark-color text-white` : "",
        size === "lg"
          ? tw`text-lg py-3 px-3`
          : size === "md"
          ? tw`text-lg py-2 px-6`
          : size === "sm"
          ? tw`text-sm py-2 px-5`
          : tw`py-3`,
        cls ? cls : "",
      ]}
      {...rest}
    >
      {loading ? (
        <Spinner />
      ) : link && href ? (
        <Link href={href as string}>{children}</Link>
      ) : (
        children
      )}
    </Btn>
  );
};
export default Button;
