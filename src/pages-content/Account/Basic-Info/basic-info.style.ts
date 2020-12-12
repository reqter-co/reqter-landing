import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`flex flex-col py-4 bg-white flex-1 shadow rounded p-6`};
`;
export const Title = styled.h1`
  ${tw`font-semibold text-2xl border-b border-gray-300 pb-3 mb-5`};
`;

export const AvatarContainer = styled.div`
  ${tw`flex`};
  height: 130px;
`;

export const AvatarImageBox = styled.div`
  ${tw`bg-gray-100 flex justify-center items-center phone:w-full`};
  width: 150px;
  margin-inline-end: 15px;
`;

export const DropZoneContainer = styled.div`
  ${tw`flex-1 phone:hidden`};
`;
export const Avatar = styled.div`
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
