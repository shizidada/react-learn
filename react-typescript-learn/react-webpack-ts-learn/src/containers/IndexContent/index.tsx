import React, { FunctionComponent, useState } from 'react';
import { NoticeBar, NavBar, Icon, Carousel, Grid, Card } from 'antd-mobile';

const data = Array.from(new Array(6)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `测试-${i}`
}));

const IndexContent: FunctionComponent = () => {
  const [carouselImageHeight, setCarouselImageHeight] = useState<
    number | string
  >(176);

  return (
    <div>
      <NoticeBar
        mode="closable"
        marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}
      >
        Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will
        be delayed during National Day.
      </NoticeBar>
      <NavBar
        mode="light"
        // icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />
        ]}
      >
        测试标题
      </NavBar>
      <Carousel
        autoplay={false}
        infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={index => console.log('slide to', index)}
      >
        {[
          'AiyWuByWklrrUDlFignR',
          'TekJlZRVCjLFexlOCuWn',
          'IJOtIlfsYdTyaDTRVrLI'
        ].map(val => (
          <a
            key={val}
            href="http://www.alipay.com"
            style={{
              display: 'inline-block',
              width: '100%',
              height: carouselImageHeight
            }}
          >
            <img
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                window.dispatchEvent(new Event('resize'));
                setCarouselImageHeight('auto');
              }}
            />
          </a>
        ))}
      </Carousel>

      <Grid data={data} columnNum={3} />

      <Card>
        <Card.Header
          title="This is title"
          thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          extra={<span>this is extra</span>}
        />
        <Card.Body>
          <div>This is content of `Card`</div>
        </Card.Body>
        <Card.Footer
          content="footer content"
          extra={<div>extra footer content</div>}
        />
      </Card>

      <Card>
        <Card.Header
          title="This is title"
          thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          extra={<span>this is extra</span>}
        />
        <Card.Body>
          <div>This is content of `Card`</div>
        </Card.Body>
        <Card.Footer
          content="footer content"
          extra={<div>extra footer content</div>}
        />
      </Card>
    </div>
  );
};

export default IndexContent;
