import PageLayout from "components/layout/PageLayout";
import { Carts, ShoppingListContainer } from "features";

const MainPage = () => {
  return (
    <PageLayout>
      <Carts />
      <ShoppingListContainer />
    </PageLayout>
  );
};

export default MainPage;
