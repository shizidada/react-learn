import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import style from "./index.less";

class Index extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    increase = () => {
        this.props.increase();
    }

    render() {
        return (
            <div className={style.index}>
                <p className={style.title}>React Demo New~</p>
                <Link to="/">Index</Link>
                <span> </span>
                <Link to="/detail">Detail</Link>
                <hr/>
                <button onClick={this.increase}>{this.props.count} increase</button>

                {this.props.children}
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
        increase: () => {
            dispatch({
                type: "increase",
                payload: "加"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

