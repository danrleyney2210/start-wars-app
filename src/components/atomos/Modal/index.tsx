import { IoCloseOutline } from "react-icons/io5";

import * as S from "./styles";

interface IModalProps {
  onClose: () => void;
  isOpen: boolean;
  children?: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: IModalProps) => {
  return (
    <S.Wrapper>
      {isOpen && (
        <S.WrapperModal>
          <S.ModalContent>
            <S.ContentClose onClick={() => onClose()}>
              <IoCloseOutline />
            </S.ContentClose>
            {children}
          </S.ModalContent>
          <S.Overlay onClick={() => onClose()} />
        </S.WrapperModal>
      )}
    </S.Wrapper>
  );
};
