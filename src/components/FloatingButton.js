const FloatingButton = ({ icon, onClick }) => {
  return (
    <div
      style={{
        position: 'fixed',
        lineHeight: '63px',
        bottom: '40px',
        right: '40px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#ececec',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

export default FloatingButton;
