import React, { useState, useEffect, FunctionComponent } from 'react';
import SimpleMDE from 'react-simplemde-editor';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'easymde/dist/easymde.min.css';
import './index.less';

interface MarkedownProps {
  onMarkedownInputChange(value: string): void;
  onToggleFullScreenChange(value: boolean): void;
}

const Markedown: FunctionComponent<MarkedownProps> = ({ onMarkedownInputChange, onToggleFullScreenChange }) => {
  const [isFullScreen, onToggleFullScreen] = useState<boolean>(false);
  const [markedownText, markedownOnChange] = useState<string>('');

  useEffect(() => {
    onMarkedownInputChange(markedownText);
  }, [markedownText]);

  useEffect(() => {
    onToggleFullScreenChange(isFullScreen);
  }, [isFullScreen]);

  return (
    <div className="markedown-container">
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

export default Markedown;
