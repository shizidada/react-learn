import React, { Component } from 'react';
import G2 from '@antv/g2';
import { demoData } from './demo';

export default class DemoItem extends Component {
  componentDidMount() {
    const chart: G2.Chart = new G2.Chart({
      container: 'demoItem',
      forceFit: true,
      height: 250,
    });
    chart.source(demoData, {
      percent: {
        formatter: function formatter(val: number) {
          return `${val * 100} %`;
        },
      },
    });
    chart.coord('theta');
    chart.tooltip({
      showTitle: true,
    });
    chart
      .intervalStack()
      .position('percent')
      .color('item')
      .label('percent', {
        // offset: -40,
        autoRotate: false,
        textStyle: {
          textAlign: 'center',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)',
        },
      })
      .tooltip('item*percent', (item: string, percent: number) => {
        return {
          name: item,
          value: `${percent * 100} %`,
        };
      })
      .style({
        lineWidth: 1,
        stroke: '#fff',
      });
    chart.render();
  }

  render() {
    return <div id="demoItem" className="home-page-echart"></div>;
  }
}
