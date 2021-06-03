import React, { Component } from "react";
import { GridView, LocalDataProvider } from "realgrid";
import { columns, fields, rows } from "./realgrid-data";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.dataProvider = new LocalDataProvider(false);
    this.gridView = new GridView("realgrid");
    this.gridView.setDataSource(this.dataProvider);

    this.dataProvider.setFields(fields);
    this.gridView.setColumns(columns);

    this.dataProvider.setRows(rows);
  }

  render() {
    return (
      <div className="App">
        <h2>RealGrid2 React Sample</h2>
        <div id="realgrid" style={{ height: "500px" }}></div>
      </div>
    );
  }
}

export default App;
