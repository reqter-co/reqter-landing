import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`flex flex-col py-4`};
`;

export const AvatarContainer = styled.div`
  ${tw`flex`};
  height: 130px;
`;

export const AvatarImageBox = styled.div`
  ${tw`bg-gray-100 flex justify-center items-center`};
  width: 150px;
  margin-inline-end: 15px;
`;

export const AvatarDropZone = styled.div`
  ${tw`flex flex-1 justify-center items-center border border-gray-200`};
`;
export const NoAvatar = styled.div`
  ${tw`rounded-3xl overflow-hidden`};
  width: 95px;
  height: 95px;
  border-radius: 100%;
  img {
    height: 100%;
  }
`;

export const AvatarTips = styled.div`
  ${tw`py-3 text-xs text-gray-700`};
`;

export const FormContainer = styled.form`
  ${tw`mt-8 flex flex-col`};
`;
