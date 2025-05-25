import React from "react";
import Footer from "../DarkMode/Footer";
import MainContent from "./MainContent";
import SideContent from "./SideContent";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const PageLayout = React.memo(({ TopNavComponent, SideNavComponent, MainComponent, SideContentComponent, FooterComponent }) => {
  return (
    <div className="min-h-screen grid grid-rows-[80px_1fr_auto]">

      {/* Top Nav */}
      <div className="z-40">
        {TopNavComponent && <TopNavComponent />}
      </div>

      {/* Main Content Section */}
      <main className="grid grid-cols-[20%_1fr_200px] h-[calc(100vh-80px)]">
        
        {/* Side Nav */}
        <aside className="overflow-auto">
          {SideNavComponent && <SideNavComponent />}
        </aside>

        {/* Main Content */}
        <section className="overflow-auto">
          {MainComponent && <MainComponent />}
        </section>

        {/* Right Side Content */}
        <aside className="overflow-auto">
          {SideContentComponent && <SideContentComponent />}
        </aside>
      </main>

      {/* Footer */}
      <footer>
        {FooterComponent && <FooterComponent />}
      </footer>
    </div>
  );
});


export default PageLayout;