import React from "react";
import axios from "axios";

class AboutPage extends React.Component {
  static getInitialProps = async props => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    const errorCode = res.status > 200 ? res.status : false;
    const json = await res.data;
    return { errorCode, ...json };
  };
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

export default AboutPage;
