import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "src/components/Landing";
import Login from "src/components/Authentication/Login";
import Overview from "src/components/Dashboard/Overview";
import Auth from "src/components/Authentication/Auth";
import { AuthGuard } from "src/components/Authentication/AuthGuard";
import DashboardLayout from "src/layouts/DashboardLayout";
import Balance from "./components/Dashboard/Balance";

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
          </Routes>
        </div>
      </Auth>
    </Router>
  );
}

export default App;
