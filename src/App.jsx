import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import IntakeChecklistTable from "./pages/Students"
import Layout from "./pages/Layout";

import PlaningForm from "./pages/PlaningForm";
import InterviewScreen from "./pages/InterviewScreen";
import RoundForm from "./pages/RoundForm";
import Hiring from "./pages/Hiring";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="form" element={<PlaningForm />} />
          <Route path="students" element={<IntakeChecklistTable />} />
          <Route path="interview-form" element={<InterviewScreen />} />
          <Route path="round-form" element={<RoundForm />} />
          <Route path="hiring" element={<Hiring />} />

        </Route>


      </Routes>
    </main>
  );
}

export default App;
