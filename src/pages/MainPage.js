import PageLayout from "components/layout/PageLayout";
import { CartsContainer, ShoppingListContainer } from "features";
import { Modal } from "modules/Modal";

const MainPage = () => {
  return (
    <PageLayout>
      <CartsContainer />
      <ShoppingListContainer />
      <Modal />
    </PageLayout>
  );
};

export default MainPage;
