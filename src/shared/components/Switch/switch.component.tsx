import { Wrapper } from "./switch.style";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Switch = (props: IProps) => {
  return (
    <Wrapper>
      <label className="switch">
        <input type="checkbox" className="primary" {...props} />
        <span className="slider" />
      </label>
    </Wrapper>
  );
};
export default Switch;
