import { Container } from "./switch.style";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Switch = (props: IProps) => {
  return (
    <Container>
      <label className="switch">
        <input type="checkbox" className="primary" {...props} />
        <span className="slider" />
      </label>
    </Container>
  );
};
export default Switch;
