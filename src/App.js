import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "src/components/Landing";
import Login from "src/components/Authentication/Login";
import Overview from "src/components/Dashboard/Overview";
import Auth from "src/components/Authentication/Auth";
import { AuthGuard } from "src/components/Authentication/AuthGuard";
import DashboardLayout from "src/layouts/DashboardLayout";
import Balance from "./components/Dashboard/Balance";
import Utility from "./components/Dashboard/Utility";
import Payment from "./components/Dashboard/Payment";
import Analytics from "./components/Dashboard/Analytics";
import Settings from "./components/Dashboard/Settings";
import Inbox from "./components/Dashboard/Inbox";
import Notifications from "./components/Dashboard/Notifications";

function App() {
  return (
    <Router>
      <div className="font-Poppins">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/dashboard"
            element={
              <DashboardLayout>
                <Overview />
              </DashboardLayout>
            }
          />
          <Route
            exact
            path="/dashboard/balance"
            element={
              <DashboardLayout>
                <Balance />
              </DashboardLayout>
            }
          />
          <Route
            exact
            path="/dashboard/utility"
            element={
              <DashboardLayout>
                <Utility />
              </DashboardLayout>
            }
          />
          <Route
            exact
            path="/dashboard/payment"
            element={
              <DashboardLayout>
                <Payment />
              </DashboardLayout>
            }
          />
          <Route
            exact
            path="/dashboard/analytics"
            element={
              <DashboardLayout>
                <Analytics />
              </DashboardLayout>
            }
          />
          <Route
            exact
            path="/dashboard/settings"
            element={
              <DashboardLayout>
                <Settings />
              </DashboardLayout>
            }
          />
          <Route
            exact
            path="/dashboard/inbox"
            element={
              <DashboardLayout>
                <Inbox />
              </DashboardLayout>
            }
          />
          <Route
            exact
            path="/dashboard/notifications"
            element={
              <DashboardLayout>
                <Notifications />
              </DashboardLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
