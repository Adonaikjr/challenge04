import { Routes, Route } from "react-router-dom";
import App from "../screens/App";
import { LayoutDefault } from "../components/layout/layoutDefault";
import SelectPlan from "../screens/SelectPlan";
import AddOns from "../screens/AddOns";
import Summary from "../screens/Summary";
import AddOnsYearly from "../screens/AddOns/addOnsYearly";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<App />} />
        <Route path="/select-plan" element={<SelectPlan />} />

        <Route path="/addons" element={<AddOns />} />
        <Route path='/AddOnsYearly' element={ <AddOnsYearly /> } />

        <Route path="/summary" element={<Summary />} />
      </Route>
    </Routes>
  );
}
