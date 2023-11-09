const { useState } = React;
const { render } = ReactDOM;

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Открыть модальное окно</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Содержимое модального окна здесь</p>
          </div>
        </div>
      )}
    </div>
  );
};

render(<ModalComponent />, document.getElementById('root'));