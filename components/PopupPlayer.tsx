import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";

import { useMusicStore } from "../store/musicStore";

import MusicPlayer from "./MusicPlayer";

export const PopupPlayer: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const currentTrack = useMusicStore((state) => state.currentTrack);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Button className="" onPress={openModal}>
        Open Player
      </Button>
      <Modal className="modal" isOpen={modalIsOpen} onClose={closeModal}>
        <ModalContent>
          <ModalHeader>
            <div className="flex justify-between items-center">
              <h2>Music Player</h2>
              <Button className="close-button" onPress={closeModal}>
                Close
              </Button>
            </div>
          </ModalHeader>
          <ModalBody>
            <MusicPlayer track={currentTrack} />{" "}
            {/* 현재 재생 중인 트랙 전달 */}
          </ModalBody>
          <ModalFooter>
            {/* 필요한 경우 추가 제어 버튼이나 정보를 여기에 배치할 수 있습니다 */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
