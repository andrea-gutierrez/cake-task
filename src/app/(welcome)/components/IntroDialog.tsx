"use client";

import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/modal";
import {Button} from "@nextui-org/react";
import {ToggleThemeDialog} from "@/app/(welcome)/components/ToggleThemeDialog";

export function IntroDialog() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return <>
        <Button onPress={onOpen}>Choose Your Style</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton={true}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Personalize your mood</ModalHeader>
                        <ModalBody>
                            <p>
                                Welcome! We’re all about giving you control over your experience. You can customize the
                                color theme to match your preference. Ready to set the mood?
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <ToggleThemeDialog onCloseDialogs={onClose}/>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>

    </>;
}