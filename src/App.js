import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "src/components/Landing";
import Login from "src/components/Authentication/Login";
import Overview from "src/components/Dashboard/Overview";
import Auth from "src/components/Authentication/Auth";
import { AuthGuard } from "src/components/Authentication/AuthGuard";

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
                  <Overview />
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
