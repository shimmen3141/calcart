import PageLayout from "components/layout/PageLayout";
import { Carts, ShoppingListContainer } from "features";
import { Modal } from "components";

const MainPage = () => {
  return (
    <PageLayout>
      <Carts />
      <ShoppingListContainer />
      <Modal />
    </PageLayout>
  );
};

export default MainPage;
