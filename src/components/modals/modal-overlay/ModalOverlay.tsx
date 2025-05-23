import styles from './modal-overlay.module.css';
import {ReactNode} from 'react';

interface ComponentProps {
  onMouseDown: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseUp: (e: React.MouseEvent<HTMLElement>) => void;
  children: ReactNode;
}

const ModalOverlay = ({ onMouseDown, onMouseUp, children }: ComponentProps) => {
  return (
      <div
          className={styles.container}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          id='modal-overlay'
      >
        {children}
      </div>
  );
};

export default ModalOverlay;