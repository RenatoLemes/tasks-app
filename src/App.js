import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Router, Routes } from "react-router-dom";
import "./api/axiosDefaults";
import { TasksList } from "./components/TasksList";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <TasksList state="Open" />
        <TasksList state="InPogress" />
        <TasksList state="Done" />
        {/* <Routes>
          <Route path="/open" element={<h1>Open</h1>} />
          <Route path="/in-progress" element={<h1>In Progress</h1>} />
          <Route path="/done" element={<h1>Done</h1>} />
        </Routes> */}
      </Container>
    </div>
  );
}

export default App;
