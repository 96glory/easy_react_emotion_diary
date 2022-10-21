import { useState, useContext, useEffect } from 'react';
import { DiaryStateContext } from '../App';
import { BsFillGrid1X2Fill } from 'react-icons/bs';

import DiaryList from '../components/DiaryList';
import MyButton from './../components/MyButton';
import MyHeader from './../components/MyHeader';
import FloatingButton from '../components/FloatingButton';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(curDate.getFullYear(), curDate.getMonth(), 1).getTime();
      const lastDay = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0).getTime();

      setData(diaryList.filter((row) => firstDay <= row.date && row.date <= lastDay));
    }
  }, [diaryList, curDate]);

  const decreaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate()));
  };
  const increaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate()));
  };

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={'<'} onClick={decreaseMonth} />}
        rightChild={<MyButton text={'>'} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
      <FloatingButton
        icon={<BsFillGrid1X2Fill />}
        onClick={() => {
          navigate('/gridTest');
        }}
      />
    </div>
  );
};

export default Home;
