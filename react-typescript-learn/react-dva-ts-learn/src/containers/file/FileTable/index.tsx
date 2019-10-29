import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Table, Divider, Tag } from 'antd';

import { GlobalState } from '../../../typings';
import { NAMESPACE } from '../../../models/file/constants';
import { getFileState } from '../../../models/file';

const mapStateToProps = (state: GlobalState) => getFileState(state);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getExcelInfo() {
    dispatch({ type: `${NAMESPACE}/getExcelInfo` });
  },
});

interface FileTableProps {
  getExcelInfo: () => void;
}

interface FileTableRecord {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

class FileTable extends Component<FileTableProps, {}> {
  public componentDidMount() {
    this.props.getExcelInfo();
  }

  public render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: string[]) => (
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
        title: 'Action',
        key: 'action',
        render: (text: string, record: FileTableRecord) => (
          <span>
            <a>Invite {record.name}</a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        ),
      },
    ];

    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];

    console.log('this.props ', this.props);
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileTable);
