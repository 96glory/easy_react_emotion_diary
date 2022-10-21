import { AiOutlineHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import FloatingButton from '../components/FloatingButton';

/**
 * @reference https://studiomeal.com/archives/533
 * @returns GridTest Page
 */
const GridTest = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="GridTest">
        <div className="container">
          <div className="item">A</div>
          <div className="item">B</div>
          <div className="item">C</div>
          <div className="item">D</div>
          <div className="item">E</div>
          <div className="item">F</div>
          <div className="item">G</div>
          <div className="item">H</div>
          <div className="item">I</div>
        </div>
      </div>
      <FloatingButton icon={<AiOutlineHome />} onClick={() => navigate('/')} />
    </>
  );
};

export default GridTest;
