import Modal from 'react-modal';
import { useState } from 'react';
import './Style.css'
Modal.setAppElement('#root');

const AddMovie = ({ addNewMovie }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setName] = useState('');
  const [rating, setRating] = useState('');
  const [posterURL, setImage] = useState('');
  const [description, setDescription] = useState('');

  const openModal = () => setModalIsOpen(true);

  const closeModal = () => setModalIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newMovie = {
      id: Math.random(),
      title,
      rating: +rating,
      posterURL,
      description,
    };
    addNewMovie(newMovie);
    setModalIsOpen(false);
    setName('');
    setRating('');
    setImage('');
    setDescription('');
  };

  return (
    <div>
      <div className="Add-btn-container">
        <button className="Add-btn btn btn-secondary" onClick={openModal}>
          +
        </button>
        <Modal
          className="add-modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >

          <h1 className="addMovie-h1">Add A Movie</h1>
          <form onSubmit={handleSubmit}>
            <label>Movie Name</label>
            <input
            className="form-control"
              type="text"
              name="name"
              value={title}
              required
              onChange={(event) => setName(event.target.value)
             
              }
            />
            <label>Movie Rate</label>
            <div className="rating-search"></div>
            <input
             className="form-control"
              type="number"
              name="rating"
              value={rating}
              required
              onChange={(event) => setRating(event.target.value)}
            />
         
            <label>Movie Image</label>
            <input
             className="form-control"
              type="url"
              name="image"
              required
              value={posterURL}
              onChange={(event) => setImage(event.target.value)}
            />
            <label>Movie Summary</label>
            <textarea
             className="form-control"
              type="text"
              name="description"
              value={description}
              required
              onChange={(event) => setDescription(event.target.value)}
            />
       
          <button className="Modal-btn btn btn-success" type="submit">
            Submit
          </button>
          <button className="Modal-btn btn btn-danger" onClick={closeModal}>
            close
          </button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default AddMovie;
