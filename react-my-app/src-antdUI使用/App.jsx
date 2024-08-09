import React, { Component } from 'react';
import { Button, Modal, ConfigProvider } from 'antd';

export default class App extends Component {

  state = {
    open: false,
  }

  showModal = () => {
    this.setState({ open: true })
  };

  handleOk = () => {
    this.setState({ open: false })
  };

  handleCancel = () => {
    this.setState({ open: false })
  };

  render() {

    const { open } = this.state

    return (
      <>
        {/* 使用 ConfigProvider 组件标签包裹其他的 ant-design UI组件，并且设置这些组件的样式 */}
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: 'red', // 主题颜色
            }
          }}>
          <Button className='custom-button' type="primary" onClick={this.showModal}>
            添加记录
          </Button>
          <Modal title="记录弹窗标题" open={open} onOk={this.handleOk} onCancel={this.handleCancel}>
            <p>你确认是否添加记录？</p>
          </Modal>
        </ConfigProvider >
      </>
    );
  }
}