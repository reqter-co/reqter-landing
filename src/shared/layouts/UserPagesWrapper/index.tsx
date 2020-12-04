import { getLayout as getMainLayout } from "@Shared/layouts/MainLayout";
import Wrapper from "./user-pages-wrapper.component";

const getLayout = (
  page: React.FunctionComponent,
  title: string,
  description: string
) =>
  getMainLayout(
    <Wrapper title={title} description={description}>
      {page}
    </Wrapper>
  );
export { getLayout };
