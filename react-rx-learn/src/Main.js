import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchWhiskies, fetchList } from "./actions";

import WhiskyGrid from "./components/WhiskyGrid";

class Main extends Component {
  componentDidMount() {
  }

  render() {
    const { fetchWhiskies, isLoading, error, whiskies } = this.props;

    console.log("this.props ==> ", this.props);

    return (
      <div>
        <button onClick={fetchWhiskies}>Fetch whiskies</button>
        {isLoading && <h1>Fetching data</h1>}
        {!isLoading && !error && <WhiskyGrid whiskies={whiskies} />}
        {error && <h1>{error}</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps ==> ", state);
  return state;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchWhiskies,
      fetchList
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
