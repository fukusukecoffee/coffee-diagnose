/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Qdata(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Qdata")}
      {...rest}
    >
      <Text
        fontFamily="Noto Sans JP"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="32px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="353px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="質問：スペシャルティコーヒーを知っていますか？"
        {...getOverrideProps(
          overrides,
          "\u8CEA\u554F\uFF1A\u30B9\u30DA\u30B7\u30E3\u30EB\u30C6\u30A3\u30B3\u30FC\u30D2\u30FC\u3092\u77E5\u3063\u3066\u3044\u307E\u3059\u304B\uFF1F"
        )}
      ></Text>
    </Flex>
  );
}
