import Chartt from "./AssetAllocationChart";
import BarChart from "./BarChart";
import DoubleLineChart from "./DoubleLineChart";
import LineChart from "./LineChart";
import AddfundPage from "./pages/AddfundPage/AddfundPage";
import AddfundPage2 from "./pages/AddfundPage/AddfundPage2";
import AddfundPage3 from "./pages/AddfundPage/AddfundPage3";
import Dashboard from "./pages/Dashboard/Dashboard";
import InvestManagementDetails from "./pages/InvestManagementDetails/InvestManagementDetails";
import InvestedFundsDetails from "./pages/InvestedFundsDetails/InvestedFundsDetails";
import InvestmentFundsPage from "./pages/InvestmentFundsPage/InvestmentFundsPage";
import InvestmentManagePage from "./pages/InvestmentManagePage/InvestmentManagePage";
import InvestmentOpperDetails from "./pages/InvestmentOpperDetails/InvestmentOpperDetails";
import InvestmentOppertunityPage from "./pages/InvestmentOppertunityPage/InvestmentOppertunityPage";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";
import PortfolioDetails from "./pages/PortfolioDetails/PortfolioDetails";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import RegistrationPage2 from "./pages/RegistrationPage2/RegistrationPage2";
import RiskAssessmentPage from "./pages/RiskAssessmentPage/RiskAssessmentPage";
import RiskPage from "./pages/RiskPage/RiskPage";
import RolePage from "./pages/RolePage/RolePage";
import SigninPage from "./pages/SigninPage/SigninPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RolePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/registerpart2" element={<RegistrationPage2 />} />
        <Route path="/onboard" element={<OnboardingPage />} />
        <Route path="/risk" element={<RiskPage />} />
        <Route path="/riskassessment" element={<RiskAssessmentPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/investfund" element={<InvestmentFundsPage />} />
        <Route path="/investfunddetails" element={<InvestedFundsDetails />} />
        <Route path="/addfund" element={<AddfundPage />} />
        <Route path="/addfundpart2" element={<AddfundPage2 />} />
        <Route path="/addfundpart3" element={<AddfundPage3 />} />
        <Route path="/investmanage" element={<InvestmentManagePage />} />
        <Route
          path="/investmanagedetails"
          element={<InvestManagementDetails />}
        />
        <Route
          path="/investoppertunity"
          element={<InvestmentOppertunityPage />}
        />
        <Route
          path="/investoppertunitydetails"
          element={<InvestmentOpperDetails />}
        />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfoliodetails" element={<PortfolioDetails />} />
      </Routes>
    </>
  );
}

export default App;
