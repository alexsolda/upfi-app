import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg="pGray.800">
        <ModalBody>
          <Image src={imgUrl} alt="Imagem" />
        </ModalBody>
        <ModalFooter>
          <Link href={imgUrl} textAlign="left">
            Imagem original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
