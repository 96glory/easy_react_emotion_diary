import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DiaryEditor from '../components/DiaryEditor';

import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `감정 일기장 - 새 일기`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
