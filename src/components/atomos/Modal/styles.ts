import styled from "styled-components"

export const Wrapper = styled.div``

export const WrapperModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  max-width: 530px;
  width: 100%;
  background-color: #fff;
  padding: 56px;
  border-top: 2px solid #161f28;
  position: absolute;
  border-radius: 4px;
  z-index: 2;
`

export const ContentClose = styled.div`
  position: absolute;
  top: 28px;
  right: 28px;
  cursor: pointer;
`

export const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
`