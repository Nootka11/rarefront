import { useNavigate } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
    //   style={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     gap: '0.5rem',
    //     background: 'none',
    //     border: 'none',
    //     cursor: 'pointer',
    //     fontSize: '1rem',
    //   }}
    className='flex justify-center items-center gap-1.5 cursor-pointer text-lg hover:text-verde-noche'
    >
      <FaArrowLeft />
      Retour
    </button>
  );
}

export default BackButton;
