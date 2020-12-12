import { Wrapper, TextsBox, Description, Title, Actions } from "./row.style";
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  isXsFullWidth?: boolean;
  renderActions?: () => JSX.Element;
}
const SettingsRow = ({
  renderActions,
  title,
  description,
  isXsFullWidth,
  className,
}: IProps) => {
  return (
    <Wrapper className={className}>
      <TextsBox>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextsBox>
      {renderActions ? (
        <Actions isXsFullWidth={isXsFullWidth}>{renderActions()}</Actions>
      ) : null}
    </Wrapper>
  );
};
export default SettingsRow;
