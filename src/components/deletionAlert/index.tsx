import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useToast,
} from "@chakra-ui/react";
import seedDown from "../../utilities/seedDown";

export default function DeletionAlert({ isOpen, onClose, cancelRef }) {
  const toast = useToast();
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete all topics and posts
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  seedDown();
                  onClose();
                  toast({
                    title: "Shelves Cleaned",
                    description: "All topics and posts successfully removed",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                }}
                ml={3}
              >
                Delete All
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
