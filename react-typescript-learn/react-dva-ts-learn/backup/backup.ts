
// /Users/taohua/works/Web/react-learn/react-typescript-learn/react-dva-ts-learn

class BackUp {
  private sliderMenuItemClickHandle = (params: MenuConfig) => {
    console.log('sliderMenuItemClickHandle :: ', params);
  };

  // https://ant.design/components/menu-cn/
  private sliderMenuOpenChangeHandle = (openKeys: string[]) => {
    this.props.sliderMenuSelect({ openKeys });
    console.log('sliderMenuOpenChangeHandle :: ', openKeys);
  };

  private sliderMenuSelectHandle = (params: SelectParam) => {
    const { key, keyPath, selectedKeys, item, domEvent } = params;
    this.props.sliderMenuSelect({ selectedKeys });
    console.log('sliderMenuSelectHandle :: ', key, keyPath, selectedKeys, item, domEvent);
  };

  // key: string, domEvent: Event
  private sliderSubMenuTitleClickHandle = (params: TitleEventEntity) => {
    console.log('sliderSubMenuTitleClickHandle :: ', params);
  };
}
