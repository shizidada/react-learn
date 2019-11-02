
// /Users/taohua/works/Web/react-learn/react-typescript-learn/react-dva-ts-learn

class BackUp {
  private sliderMenuItemClickHanlde = (params: MenuConfig) => {
    console.log('sliderMenuItemClickHanlde :: ', params);
  };

  // https://ant.design/components/menu-cn/
  private sliderMenuOpenChangeHanlde = (openKeys: string[]) => {
    this.props.sliderMenuSelect({ openKeys });
    console.log('sliderMenuOpenChangeHanlde :: ', openKeys);
  };

  private sliderMenuSelectHanlde = (params: SelectParam) => {
    const { key, keyPath, selectedKeys, item, domEvent } = params;
    this.props.sliderMenuSelect({ selectedKeys });
    console.log('sliderMenuSelectHanlde :: ', key, keyPath, selectedKeys, item, domEvent);
  };

  // key: string, domEvent: Event
  private sliderSubMenuTitleClickHanlde = (params: TitleEventEntity) => {
    console.log('sliderSubMenuTitleClickHanlde :: ', params);
  };
}
