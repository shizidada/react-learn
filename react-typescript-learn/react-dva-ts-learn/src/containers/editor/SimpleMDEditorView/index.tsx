import React, { useState, useEffect, FunctionComponent } from 'react';
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
  const [markedownText, markedownOnChange] = useState<string>('');

  useEffect(() => {
    onSimpleMDEditorViewInputChange && onSimpleMDEditorViewInputChange(markedownText);
  }, [markedownText]);

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
        onChange={markedownOnChange}
      />
    </div>
  );
};

export default SimpleMDEditorView;
