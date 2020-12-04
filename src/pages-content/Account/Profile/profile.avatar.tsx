import {
  AvatarContainer,
  AvatarImageBox,
  AvatarDropZone,
  AvatarTips,
  NoAvatar,
} from "./profile.style";
const ProfileAvatarZone = () => {
  return (
    <>
      <AvatarContainer>
        <AvatarImageBox>
          <NoAvatar>
            <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />
          </NoAvatar>
        </AvatarImageBox>
        <AvatarDropZone></AvatarDropZone>
      </AvatarContainer>
      <AvatarTips>
        Some tips: Use a photo or image rather than text and upload an image
        that is 132px square or larger.
      </AvatarTips>
    </>
  );
};
export default ProfileAvatarZone;
