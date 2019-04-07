import React, { Component } from "react";
import { connect } from 'react-redux'

import style from "./index.less";

class Index extends Component {

    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    //     console.log(this.props);
    // }

    increase = () =>{
        this.props.increase();
    }

    render() {
        return (
            <div className={style.app}>
                <span>React Demo New~</span>
                <h2>React Learn</h2>
                <h3>Learn</h3>
                <h4>Learn BBQ</h4>
                <h5>{this.props.count}</h5>

                <button onClick={this.increase}>increase</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    // console.log("mapStateToProps ===> ",state, ownProps);
    
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increase: ()=> {
            dispatch({
                type: "increase",
                payload: "加"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

