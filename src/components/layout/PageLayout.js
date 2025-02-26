import AppHeader from "./AppHeader/AppHeader";
import AppFooter from "./AppFooter/AppFooter";
import "./PageLayout.scss";

const PageLayout = ({ children }) => {
  return (
    <div className="pageLayout">
      <AppHeader />
      <main className="pageContent">{children}</main>
      <AppFooter />
    </div>
  );
};

export default PageLayout;
