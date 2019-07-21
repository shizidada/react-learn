import React, { Component } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Layout, Icon, Row, Col } from "antd";

import { SystemAction } from "../../store/system/types";
import { toggleSliderMenu } from "../../store/system/actions";
import { AppState } from "../../store";

import ColorPicker from "../../components/ColorPicker";

import "./index.less";

const { Header } = Layout;

interface HeaderProps {
  isOpenSlider: boolean;
  onToggleSliderMenu: () => void;
}
interface HeaderState {}

class CustomHeader extends Component<HeaderProps, HeaderState> {
  render() {
    const { isOpenSlider, onToggleSliderMenu } = this.props;
    return (
      <Header className="custom-header-container" style={{ background: "#fff", padding: 0 }}>
        <Row>
          <Col span={4} order={1}>
            <Icon
              className="trigger"
              type={isOpenSlider ? "menu-unfold" : "menu-fold"}
              onClick={onToggleSliderMenu}
            />
          </Col>
          <Col span={16} order={2}></Col>
          <Col span={2} order={3}>
            <ColorPicker />
          </Col>
          <Col span={2} order={3}>
            admin
          </Col>
        </Row>
      </Header>
    );
  }
}

function mapStateToProps({ system }: AppState) {
  return { ...system };
}
function mapDispatchToProps(dispatch: Dispatch<SystemAction>) {
  return {
    onToggleSliderMenu: () => dispatch(toggleSliderMenu()),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomHeader);
