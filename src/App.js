import React from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import "./api/axiosDefaults";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route exact path="/open" render={() => <h1>Open</h1>} />
          <Route exact path="/in-progress" render={() => <h1>In Progress</h1>} />
          <Route exact path="/done" render={() =><h1>Done</h1>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
