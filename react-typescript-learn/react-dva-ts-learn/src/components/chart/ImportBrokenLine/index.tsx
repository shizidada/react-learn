import React, { Component } from 'react';
import G2, { TooltipItem } from '@antv/g2';
import { importData } from './data/ImportItem';

import './index.css'

export default class ImportBrokenLine extends Component {
  public componentDidMount() {
    const chart: G2.Chart = new G2.Chart({
      container: 'importBrokenLine',
      forceFit: true,
      height: 380,
      padding: [100, 30, 30, 60], // 上右下左
    });
    chart.source(importData);
    chart.tooltip({
      follow: false,
      crosshairs: {
        type: 'y',
      },
      htmlContent: function htmlContent(title: string, items: TooltipItem[]) {
        const alias: any = {
          download: '当日累计下载量',
          register: '当日累计注册量',
          bill: '当日累计成交量',
        };
        let html = '<div class="custom-tooltip">';
        for (let i = 0; i < items.length; i += 1) {
          const item = items[i];
          const { color, value } = item;
          const name = alias[item.name];
          /* eslint-disable prefer-template */
          const domHead =
            '<div class="custom-tooltip-item" style="border-left-color:' + color + '">';
          const domName = '<div class="custom-tooltip-item-name">' + name + '</div>';
          const domValue = '<div class="custom-tooltip-item-value">' + value + '</div>';
          const domTail = '</div>';
          html += domHead + domName + domValue + domTail;
        }
        return html + '</div>';
        /* eslint-enable prefer-template */
      },
    });
    chart.axis('date', {
      label: {
        textStyle: {
          fill: '#aaaaaa',
        },
      },
    });
    chart.axis('value', {
      label: {
        textStyle: {
          fill: '#aaaaaa',
        },
        formatter: function formatter(text) {
          return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
        },
      },
    });
    chart.legend(false);
    chart
      .line()
      .position('date*value')
      .color('type');
    chart.render();
    chart.showTooltip({
      x: 80,
      y: 100,
    });
  }

  public render() {
    return <div id="importBrokenLine"></div>;
  }
}
