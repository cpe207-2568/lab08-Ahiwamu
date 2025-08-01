import {Header} from "./components/header"
import {Footer} from "./components/Footer"
import {Sidebar} from "./components/Sidebar"
import {Task} from "./components/Task"

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header></Header>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="Weeraphat" type="student"></Sidebar>

        {/* Main content */}
        <Task ></Task>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year="2025" fullName = "Weeraphat Boonju" studentId = "670610734"></Footer>
    </div>
  );
}

export default App;
