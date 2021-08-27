import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
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
  const handleCloseModal = (): void => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent
        bgColor="pGray.900"
        mx="auto"
        w="auto"
        h="auto"
        maxW={['300px', '600px', '800px']}
        maxH={['350px', '450px', '600px']}
      >
        <ModalCloseButton />

        <ModalBody p="0">
          <Image src={imgUrl} w="100%" h="100%" />
        </ModalBody>
        <ModalFooter
          bgColor="pgray.800"
          h="2rem"
          py="20px"
          borderBottomRadius="5px"
        >
          <Link href={imgUrl} isExternal fontSize="1rem" mr="auto">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
