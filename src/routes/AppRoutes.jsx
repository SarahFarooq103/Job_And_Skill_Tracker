import { BrowserRouter, Routes, Route } from "react-router-dom";

import Skills from "../pages/skills/Skills";
import SkillsGaps from "../pages/skills/SkillsGaps";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import TargetJob from "../pages/jobs/TargetJob";
import JobAnalyzer from "../pages/jobs/JobAnalyzer";
import Roadmap from "../pages/roadmap/Roadmap";
import Projects from "../pages/projects/Projects";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgetPassword from "../pages/auth/ForgetPassword";
import AICoach from "../pages/ai-coach/AICoach";
import InterviewPrep from "../pages/interviewPrep/InterviewPrep";
import Footer from "../layout/Footer"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />

        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/jobs/target" element={<TargetJob />} />
          <Route path="/jobs/analyzer" element={<JobAnalyzer />} />
          <Route path="/jobs/match" element={<JobAnalyzer />} />

          <Route path="/skills" element={<Skills />} />
          <Route path="/skills/gaps" element={<SkillsGaps />} />

          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/ai-coach" element={<AICoach />} />
          <Route path="/interview" element={<InterviewPrep />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;