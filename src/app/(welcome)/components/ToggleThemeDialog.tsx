import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/modal";
import {Button} from "@nextui-org/react";
import ThemeSwitch from "@/components/ThemeSwitch";

export function ToggleThemeDialog({onCloseDialogs}: {onCloseDialogs: () => void}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const onCloseDialog = (onClose: () => void) => {
        onClose();
        onCloseDialogs();
    }

    return <>
        <Button color="primary" onPress={onOpen}>Choose Your Style</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton={true}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Choose your vibe!!</ModalHeader>
                        <ModalBody>
                            <p>
                                Dark mode or light mode? Select the style that best suits your mood, enhances your
                                focus, or simply looks the way you like. Whether you’re here to immerse yourself in a
                                crisp, light interface or dive into the sleek, low-light feel of dark mode, it’s all
                                about creating your perfect experience.
                            </p>
                            <ThemeSwitch/>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={() => onCloseDialog(onClose)}>Close</Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    </>;
}