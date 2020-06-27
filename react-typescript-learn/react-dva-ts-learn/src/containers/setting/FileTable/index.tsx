import { Divider, Table, Tag } from 'antd';
import { connect } from 'dva';
import React, { FunctionComponent, useEffect } from 'react';
import { Dispatch } from 'redux';
import { AppState } from '../../../typings';


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

const FileTable: FunctionComponent<FileTableProps> = ({ recordList = [], isLoading, getExcelInfo }) => {
  useEffect(() => {
    getExcelInfo({ pageSize: 10, pageNum: 10 });
    return () => {};
  }, [getExcelInfo]);

  const columns = [
    {
      title: 'SIM卡卡号',
      dataIndex: 'iccid',
      key: 'iccid',
      render: (text: string) => <a>{text}</a>
    },
    {
      title: '运营商',
      dataIndex: 'operators',
      key: 'operators'
    },
    {
      title: '收货人',
      dataIndex: 'receiver',
      key: 'receiver'
    },
    {
      title: '收货地址',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: string[] = ['xiha']) => (
        <span>
          {tags.map((tag) => {
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
      )
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
      )
    }
  ];

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
};

export default connect(
  (state: AppState) => {
    return {
      ...state.file
    };
  },
  (dispatch: Dispatch) => ({
    getExcelInfo(record: object) {
      dispatch({ type: 'file/getExcelInfo', payload: record });
    }
  })
)(FileTable);
