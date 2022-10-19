import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Edit from './pages/Edit';
import New from './pages/New';
import Diary from './pages/Diary';

// COMPONENTS
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headerText={'APPPP'}
          leftChild={
            <MyButton
              text={'왼쪽 버튼'}
              onClick={() => {
                alert('왼쪽 버튼 클릭');
              }}
            />
          }
          rightChild={
            <MyButton
              text={'오른쪽 버튼'}
              onClick={() => {
                alert('오른쪽 버튼 클릭');
              }}
            />
          }
        />
        <h2>App.js</h2>
        <MyButton
          text={'positive'}
          type={'positive'}
          onClick={() => {
            alert('im clicked positive');
          }}
        />
        <MyButton
          text={'negative'}
          type={'negative'}
          onClick={() => {
            alert('im clicked negative');
          }}
        />
        <MyButton
          text={'default'}
          onClick={() => {
            alert('im clicked default');
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
