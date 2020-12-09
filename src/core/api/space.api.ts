import { connectApi } from "@Utils/http";
import { spaces_urls } from "@Core/constants";
import { ISpace } from "@Interfaces/space";
const api = connectApi("");
// =====================================================
const getAllSpaces = async () => {
  const data = await api.get<ISpace[]>(spaces_urls.list);
  return data;
};

export { getAllSpaces };
