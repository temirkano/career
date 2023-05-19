import React from "react";
import Main from "../components/Main/Main";
import Clients from "../components/OurClients/Clients";
import DownloadApp from "../components/DownloadApp/DownloadApp";
import Footer from "../components/Footer/Footer";
import MainCareer from "../components/MainCareer/MainCareer";
import Jobs from "../components/ExploreJobs/Jobs";
import GlobalConnections from "../components/GlobalConnections/GlobalConnections";
import CustomerFeedback from "../components/CustomerFeedback/CustomerFeedback";
import LatestNewsList from "../components/LatestNewsList/LatestNewsList";
import HotCategories from "../components/HotCategories/HotCategories";

function AboutPage() {
  return (
    <>
      <MainCareer />
      <Jobs />
      <HotCategories/>
      <GlobalConnections />
      <Main />
      <CustomerFeedback />
      <Clients />
      <LatestNewsList />
      <DownloadApp />
      <Footer />
    </>
  );
}
export default AboutPage;
