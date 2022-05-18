import React from 'react';
import { useDispatch } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md';
import toast from 'react-hot-toast';
import { deleteTodo } from '../slices/todoSlice';
import styles from '../styles/modules/modal.module.scss';
import Buttons from './Buttons';

function DeleteModal({ modalOpen, setModalOpen, todo }) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteTodo(todo.id));
    toast.success('TODO Deleted Successfully');
  };

  return (
    modalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            className={styles.closeButton}
            onClick={() => setModalOpen(false)}
            onKeyDown={() => setModalOpen(false)}
            tabIndex={0}
            role="button"
          >
            <MdOutlineClose />
          </div>
          <div className="todoText">
            <h1 className={styles.formTitle}>Delete Task</h1>

            <p className={styles.delete}>
              Are You Sure You Want To Delete This Task ?
            </p>

            <div className={styles.buttonContainer}>
              <Buttons
                type="submit"
                variant="Primary"
                onClick={(e) => handleSubmit(e)}
              >
                Delete Task
              </Buttons>
              <Buttons
                type="button"
                variant="secondary"
                onClick={() => setModalOpen(false)}
                onKeyDown={() => setModalOpen(false)}
              >
                Cancel
              </Buttons>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default DeleteModal;
