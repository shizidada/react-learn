import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Table, Divider, Tag } from 'antd';

import { ConnectState } from '../../../typings';
import { NAMESPACE } from '../../../models/file';

interface FileTableProps {
  recordList: [];
  isLoading: boolean;
  getExcelInfo: (record: object) => void;
}

interface FileTableRecord {
  iccid: string;
  operators: string;
  receiver: string;
  phone: string;
  address: string;
}

class FileTable extends Component<FileTableProps, {}> {
  public componentDidMount() {
    this.props.getExcelInfo({ pageSize: 10, pageNum: 10 });
  }

  public render() {
    const columns = [
      {
        title: 'SIM卡卡号',
        dataIndex: 'iccid',
        key: 'iccid',
        render: (text: string) => <a>{text}</a>,
      },
      {
        title: '运营商',
        dataIndex: 'operators',
        key: 'operators',
      },
      {
        title: '收货人',
        dataIndex: 'receiver',
        key: 'receiver',
      },
      {
        title: '收货地址',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '标签',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: string[] = ['xiha']) => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: '操作',
        key: 'action',
        render: (text: string, record: FileTableRecord) => (
          <span>
            <a>Invite</a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        ),
      },
    ];

    console.log('this.props ', this.props);
    const { recordList = [], isLoading } = this.props;
    return (
      <div>
        <Table
          // pagination={false}
          loading={isLoading}
          rowKey={(record: FileTableRecord) => record.iccid}
          columns={columns}
          dataSource={recordList}
        />
      </div>
    );
  }
}

export default connect(
  (state: ConnectState) => state,
  (dispatch: Dispatch) => ({
    getExcelInfo(record: object) {
      dispatch({ type: `${NAMESPACE}/getExcelInfo`, payload: record });
    },
  }),
)(FileTable);
