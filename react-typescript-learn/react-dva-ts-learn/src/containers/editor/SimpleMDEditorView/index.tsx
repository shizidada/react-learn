import 'easymde/dist/easymde.min.css';
import React, { FunctionComponent, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import SimpleMDE from 'react-simplemde-editor';
import './index.less';



interface SimpleMDEditorViewProps {
  onSimpleMDEditorViewInputChange?(value: string): void;
  onToggleFullScreenChange?(value: boolean): void;
}

const SimpleMDEditorView: FunctionComponent<SimpleMDEditorViewProps> = ({
  onSimpleMDEditorViewInputChange,
  onToggleFullScreenChange
}) => {
  const [isFullScreen, onToggleFullScreen] = useState<boolean>(false);
  const [markdownText, markdownChange] = useState<string>('');

  useEffect(() => {
    onSimpleMDEditorViewInputChange && onSimpleMDEditorViewInputChange(markdownText);
  }, [markdownText, onSimpleMDEditorViewInputChange]);

  useEffect(() => {
    onToggleFullScreenChange && onToggleFullScreenChange(isFullScreen);
  }, [isFullScreen, onToggleFullScreenChange]);

  return (
    <div className="SimpleMDEditor-container">
      <SimpleMDE
        options={{
          placeholder: 'please input content ...',
          onToggleFullScreen
        }}
        onChange={markdownChange}
      />
      <ReactMarkdown source={markdownText} />
    </div>
  );
};

export default SimpleMDEditorView;
