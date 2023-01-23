/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function StartButton(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="256px"
      height="61px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="2px SOLID rgba(0,0,0,1)"
      boxShadow="-4px 4px 0px rgba(0, 0, 0, 1)"
      borderRadius="8px"
      padding="14px 30px 14px 30px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "StartButton")}
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
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="32px"
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
          children="コーヒー診断をはじめる"
          {...getOverrideProps(overrides, "BUTTON")}
        ></Text>
      </Flex>
    </Flex>
  );
}
