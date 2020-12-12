import {
  AvatarContainer,
  AvatarImageBox,
  DropZoneContainer,
  AvatarTips,
  Avatar,
} from "./basic-info.style";
import DropZone from "@Shared/components/DropZone";
import useDataPath from "@Hooks/useDataPath";
import useUser from "@Hooks/useUser";

const AvatarZone = () => {
  const { user } = useUser({});
  const { getKeyValue } = useDataPath();
  function handleDroppedImage() {
    
  }
  const avatar = getKeyValue(user, "profile.avatar");
  return (
    <>
      <AvatarContainer>
        <AvatarImageBox>
          {avatar ? (
            <Avatar>
              <img
                src={avatar
                  .toString()
                  .replace(
                    "https://app-spanel.herokuapp.com",
                    "https://assets.reqter.com"
                  )}
              />
            </Avatar>
          ) : (
            <Avatar>
              <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />
            </Avatar>
          )}
        </AvatarImageBox>
        <DropZoneContainer>
          <DropZone onDropped={handleDroppedImage} />
        </DropZoneContainer>
      </AvatarContainer>
      <AvatarTips>
        Some tips: Use a photo or image rather than text and upload an image
        that is 132px square or larger.
      </AvatarTips>
    </>
  );
};
export default AvatarZone;
