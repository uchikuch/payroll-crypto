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
      <Auth>
        <div className="font-Poppins">
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/dashboard"
              element={
                <AuthGuard>
                  <DashboardLayout>
                    <Overview />
                  </DashboardLayout>
                </AuthGuard>
              }
            />
            <Route
              exact
              path="/dashboard/balance"
              element={
                <AuthGuard>
                  <DashboardLayout>
                    <Balance />
                  </DashboardLayout>
                </AuthGuard>
              }
            />
            <Route
              exact
              path="/dashboard/utility"
              element={
                <AuthGuard>
                  <DashboardLayout>
                    <Utility />
                  </DashboardLayout>
                </AuthGuard>
              }
            />
            <Route
              exact
              path="/dashboard/payment"
              element={
                <AuthGuard>
                  <DashboardLayout>
                    <Payment />
                  </DashboardLayout>
                </AuthGuard>
              }
            />
            <Route
              exact
              path="/dashboard/analytics"
              element={
                <AuthGuard>
                  <DashboardLayout>
                    <Analytics />
                  </DashboardLayout>
                </AuthGuard>
              }
            />
            <Route
              exact
              path="/dashboard/settings"
              element={
                <AuthGuard>
                  <DashboardLayout>
                    <Settings />
                  </DashboardLayout>
                </AuthGuard>
              }
            />
            <Route
              exact
              path="/dashboard/inbox"
              element={
                <AuthGuard>
                  <DashboardLayout>
                    <Inbox />
                  </DashboardLayout>
                </AuthGuard>
              }
            />
            <Route
              exact
              path="/dashboard/notifications"
              element={
                <AuthGuard>
                  <DashboardLayout>
                    <Notifications />
                  </DashboardLayout>
                </AuthGuard>
              }
            />
          </Routes>
        </div>
      </Auth>
    </Router>
  );
}

export default App;
