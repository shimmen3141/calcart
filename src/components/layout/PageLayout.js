import AppHeader from "./AppHeader/AppHeader";
import AppFooter from "./AppFooter/AppFooter";
import "./PageLayout.scss";

const PageLayout = ({ children }) => {
  return (
    <div className="pageLayout">
      <AppHeader />
      <div className="pageContent">{children}</div>
      <AppFooter />
    </div>
  );
};

export default PageLayout;
