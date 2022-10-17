import { useNavigate, useSearchParams } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const mode = searchParams.get('mode');
  const who = searchParams.get('who');

  console.log('id', id, 'mode', mode, 'who', who);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 Edit 입니다.</p>
      <button
        onClick={() =>
          setSearchParams({
            who: 'glory',
          })
        }
      >
        Change Query String
      </button>
      <button onClick={() => navigate('/home')}>Go Home</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Edit;
