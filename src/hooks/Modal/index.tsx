import React, {useState} from 'react';
import {Alert, Modal as ModalBase} from 'react-native';
import Button from '../../components/Button';
import {ModalVeil, ModalView, Title, Body, Actions} from './styles';

const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return [isModalVisible, toggleModal] as const;
};

type ModalBoxProps = {
  isModalVisible: boolean;
  title: string;
  body?: string;
  cancelBtnText?: string;
  confirmBtnText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const Modal = ({
  isModalVisible,
  title,
  body = '',
  cancelBtnText = 'Cancelar',
  confirmBtnText = 'Confirmar',
  onConfirm,
  onCancel,
}: ModalBoxProps) => {
  const buttonStyles = {
    marginTop: 5,
  };
  return (
    <ModalBase
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <ModalVeil>
        <ModalView>
          <Title>{title}</Title>
          <Body>{body}</Body>
          <Actions>
            <Button
              text={confirmBtnText}
              onPress={onConfirm}
              type="dark"
              buttonStyle={buttonStyles}
              textStyle={{color: 'white'}}
            />
            <Button
              text={cancelBtnText}
              onPress={onCancel}
              type="leanDark"
              buttonStyle={buttonStyles}
            />
          </Actions>
        </ModalView>
      </ModalVeil>
    </ModalBase>
  );
};

export {useModal, Modal};
