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

interface CustomHeaderProps {
  isCloseSlide: boolean;
  onToggleSliderMenu: () => void;
}

interface CustomHeaderState {}

class CustomHeader extends Component<CustomHeaderProps, CustomHeaderState> {
  render() {
    const { isCloseSlide, onToggleSliderMenu } = this.props;
    return (
      <Header className="custom-header-container" style={{ background: "#fff", padding: 0 }}>
        <Row>
          <Col span={4} order={1}>
            <Icon
              className="trigger"
              type={isCloseSlide ? "menu-unfold" : "menu-fold"}
              onClick={onToggleSliderMenu}
            />
          </Col>
          <Col span={16} order={2}></Col>
          <Col span={2} order={3}>
            <ColorPicker type="chrome" />
          </Col>
          <Col span={2} order={3}>
            admin
          </Col>
        </Row>
      </Header>
    );
  }
}

const mapStateToProps = ({ system }: AppState) => {
  return { ...system };
};

const mapDispatchToProps = (dispatch: Dispatch<SystemAction>) => {
  return {
    onToggleSliderMenu: () => dispatch(toggleSliderMenu()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);
