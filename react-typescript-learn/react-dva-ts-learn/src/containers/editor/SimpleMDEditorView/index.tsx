import React, { useState, useEffect, FunctionComponent } from 'react';

import ReactMarkdown from 'react-markdown';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

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
  }, [markdownText]);

  useEffect(() => {
    onToggleFullScreenChange && onToggleFullScreenChange(isFullScreen);
  }, [isFullScreen]);

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
