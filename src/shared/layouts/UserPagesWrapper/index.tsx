import { getLayout as getMainLayout } from "@Shared/layouts/MainLayout";
import Wrapper from "./user-pages-wrapper.component";

const getLayout = (
  page: React.FunctionComponent,
  title: string,
  description: string,
  actions?: () => JSX.Element
) =>
  getMainLayout(
    <Wrapper title={title} description={description} actions={actions}>
      {page}
    </Wrapper>
  );
export { getLayout };
