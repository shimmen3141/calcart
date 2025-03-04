import { AppHeader, AppFooter } from "components";
import "./PageLayout.scss";

const PageLayout = ({ children }) => {
  return (
    <div className="pageLayout">
      <AppHeader />
      <div className="pageContainer">
        <div className="pageContent">{children}</div>
      </div>
      <AppFooter />
    </div>
  );
};

export default PageLayout;
