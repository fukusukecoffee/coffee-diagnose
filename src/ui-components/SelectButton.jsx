/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function SelectButton(props) {
  const { user, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="71px"
      height="36px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SelectButton")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="2px SOLID rgba(43,46,74,1)"
        borderRadius="999px"
        padding="9px 16px 9px 16px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Button")}
      >
        <Text
          fontFamily="Lato"
          fontSize="14px"
          fontWeight="700"
          color="rgba(43,46,74,1)"
          lineHeight="14px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={user?.gender}
          {...getOverrideProps(overrides, "Get it")}
        ></Text>
      </Flex>
    </Flex>
  );
}
