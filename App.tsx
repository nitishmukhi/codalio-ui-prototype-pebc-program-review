import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CaseIntake from "./pages/CaseIntake";
import KnowledgeConflicts from "./pages/KnowledgeConflicts";
import Operator from "./pages/Operator";
import Dashboard from "./pages/Dashboard";
import Cases from "./pages/Cases";
import AuditLogs from "./pages/AuditLogs";
import AssessorReview from "./pages/AssessorReview";
import OperatorOversight from "./pages/OperatorOversight";
import TenantAdmin from "./pages/TenantAdmin";
import DecisionConfirmation from "./pages/DecisionConfirmation";
import KnowledgeBase from "./pages/KnowledgeBase";
import OperatorReports from "./pages/OperatorReports";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>

      <Routes>
        <Route element={<Layout />}>
                <Route path="/cases/new" element={<CaseIntake />} />
      <Route path="/knowledge-base/conflicts" element={<KnowledgeConflicts />} />
      <Route path="/operator" element={<Operator />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/admin/audit-logs" element={<AuditLogs />} />
      <Route path="/cases/:id/review" element={<AssessorReview />} />
      <Route path="/operator/oversight" element={<OperatorOversight />} />
      <Route path="/admin/tenant" element={<TenantAdmin />} />
      <Route path="/cases/:id/confirmation" element={<DecisionConfirmation />} />
      <Route path="/knowledge-base" element={<KnowledgeBase />} />
      <Route path="/operator/reports" element={<OperatorReports />} />
      <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;