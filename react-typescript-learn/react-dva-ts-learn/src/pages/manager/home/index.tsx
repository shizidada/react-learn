import * as React from 'react';

import MDEditor, { commands } from '@uiw/react-md-editor';

import './index.less';

export default class HomePage extends React.Component<any, any> {
  private mdEditor?: MDEditor | undefined | null;

  constructor(props: any) {
    super(props);
    this.state = {
      markedText: '**Hello world!!!**',
      isFullScreen: false,
    };
  }

  componentDidMount() {
    if (this.mdEditor) {
      this.mdEditor.handleCommand = this.handleExecuteCommand;
    }
  }

  handleChange = (value?: string) => {
    console.log(value)
    this.setState({ markedText: value as string })
  };

  handleExecuteCommand = (command: commands.ICommand) => {
    if (command.name === 'fullscreen') {
      const { isFullScreen } = this.state;
      this.setState({
        isFullScreen: !isFullScreen,
      })
    }
  }

  public render() {
    console.log('HomePage :: ', this.props);
    const { markedText, isFullScreen } = this.state;
    return (
      <div className="home-page-container">
        <MDEditor
          ref={mdEditor => { this.mdEditor = mdEditor }}
          value={markedText}
          fullscreen={isFullScreen}
          onChange={this.handleChange}
        />
        <MDEditor.Markdown source={markedText} />
      </div>
    );
  }
}
