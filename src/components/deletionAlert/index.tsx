import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Link,
  useToast,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MutableRefObject } from "react";
import { seedDown } from "../../utilities";

export default function DeletionAlert({
  isOpen,
  onClose,
  cancelRef,
}: {
  isOpen: boolean;
  onClose: () => void;
  cancelRef: MutableRefObject<undefined>;
}) {
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
              Are you sure? You cannot undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>

              <NextLink href="/home" passHref>
                <Link
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  <Button
                    colorScheme="red"
                    onClick={() => {
                      seedDown();
                      onClose();
                      toast({
                        title: "Shelves Cleaned",
                        description:
                          "All topics and posts successfully removed",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                      });
                    }}
                    ml={3}
                  >
                    Delete All
                  </Button>
                </Link>
              </NextLink>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
