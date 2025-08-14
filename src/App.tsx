import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Approach from "./components/Approach";
import ConsultationForm from "./components/ConsultationForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import DiabetesManagementPage from "./components/DiabetesManagementPage";
import PodiatryPage from "./components/PodiatryPage";
import SkinCarePage from "./components/SkinCarePage";
import GeneralHealthcarePage from "./components/GeneralHealthcarePage";
import HomeVisitCarePage from "./components/HomeVisitCarePage";
import PatientResourcesPage from "./components/PatientResourcesPage";
import ContactUsPage from "./components/ContactUsPage";
import AppointmentBookingPage from "./components/AppointmentBookingPage";
import SymptomsSection from "./components/SymptomsSection";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "about-page":
        return <AboutPage />;
      case "diabetes-management":
        return <DiabetesManagementPage />;
      case "podiatry":
        return <PodiatryPage />;
      case "skin-care":
        return <SkinCarePage />;
      case "general-healthcare":
        return <GeneralHealthcarePage />;
      case "home-visit-care":
        return <HomeVisitCarePage />;
      case "patient-resources":
        return <PatientResourcesPage />;
      case "contact-us":
        return <ContactUsPage />;
      case "book-appointment":
        return <AppointmentBookingPage />;
      case "home":
      default:
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <About />
            <Services setCurrentPage={setCurrentPage} />
            <SymptomsSection />
            <Approach />
            <ConsultationForm />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
