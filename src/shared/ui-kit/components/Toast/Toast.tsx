import { IconButton, Flex, Link } from "@chakra-ui/react";
import { Text } from "../Text";
import { XIcon } from "../Icons";
import { Color } from "../../themes";
import { ToastContentProps as ToastifyProps } from "react-toastify";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { createHashScanTransactionLink } from "@dex/utils";
import { ToastIcon, ToastType } from "./types";

interface ToastProps extends Omit<ToastifyProps, "toastProps"> {
  message: string;
  transactionId: string;
  toastProps?: ToastifyProps["toastProps"];
}

export function Toast(props: ToastProps) {
  const { closeToast, transactionId, message, toastProps } = props;
  const hashscanTransactionLink = createHashScanTransactionLink(transactionId);

  return (
    <Flex layerStyle="toast__body">
      {ToastIcon[toastProps?.type as ToastType]}
      <Flex flex="1" direction="column" justifyContent="center">
        <Text.P_XSmall_Regular>{message}</Text.P_XSmall_Regular>
        <Link variant="toast__link" href={hashscanTransactionLink} isExternal={true}>
          <Text.P_XSmall_Regular_Link>{"View in HashScan"}</Text.P_XSmall_Regular_Link>
          <ExternalLinkIcon margin="0rem 0.125rem" color={Color.Primary._500} />
        </Link>
      </Flex>
      <IconButton
        bg="none"
        isRound={true}
        icon={<XIcon color={Color.Neutral._400} />}
        onClick={closeToast}
        aria-label="Close toast"
        _hover={{ bg: "none" }}
        _focus={{ bg: "none" }}
      />
    </Flex>
  );
}
