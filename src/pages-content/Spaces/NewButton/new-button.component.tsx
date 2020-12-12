import { Button } from "./new-button.style";
import Icon from "@Shared/components/Icon";
const NewSpaceButton = () => {
  return (
    <Button>
      <Icon name="plus-folder" />
      <span className="text-lg mt-3  phone:text-xl">New Space</span>
    </Button>
  );
};
export default NewSpaceButton;
