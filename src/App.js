
// import Main from './Service/api';

import Index from "./Components/LabResult";

import  Home from "./Components/Home/home";
import DiagnosticList from "./Components/DiagnosticList/DiagnosticList";
import PersonalDetails from "./Components/PersonalDetails/PersonalDetail";
import Graph from "./Components/DiagnosHistory/Graph";
import DiagnosisHistory from "./Components/DiagnosHistory/DiagnosisHistory";
// import LabResults from "./Components/LabResult";
function App() {
  return (
    <div className="App">
      {/* <Index/> */}
      <Home/>
      {/* <LabResults/> */}
      {/* <PersonalDetails/> */}
      {/* {/* <RespiratoryCards/> */}
      {/* <TemperatureCards/> */}
      {/* <HeartRateCards/> */}
      {/* <DiagnosticList/> */}
      {/* <Graph/> */}
      {/* <DiagnosisHistory/> */}
    </div>
  );
}

export default App;
