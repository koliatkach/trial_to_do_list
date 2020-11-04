import React, {Component} from 'react'
import Layout from "./hoc/Layout/Layout";
import SimpleToDoList from "./componentns/SimpleToDoList/SimpleToDoList";

class App extends Component {
  render() {
    return (
        <Layout>
          <SimpleToDoList/>
        </Layout>
    )
  }
}

export default App;
