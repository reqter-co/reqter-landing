import { fetchInterceptor } from "@Utils/http";
import { spaces_urls } from "@Core/constants";
import { ISpace } from "@Interfaces/space";

// =====================================================
const getAllSpaces = async () => {
  const data = await fetchInterceptor().get<ISpace[]>(spaces_urls.list);
  return data;
};

export { getAllSpaces };
