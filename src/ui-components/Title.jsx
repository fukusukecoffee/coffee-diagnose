/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Title(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="17px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Title")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="32px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="250px"
        height="69px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="５つの質問で&#xA;好みのコーヒーを診断"
        {...getOverrideProps(
          overrides,
          "\uFF15\u3064\u306E\u8CEA\u554F\u3067 \u597D\u307F\u306E\u30B3\u30FC\u30D2\u30FC\u3092\u8A3A\u65AD"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="236px"
        height="42px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="簡単な質問に答えるとあなたにぴったりのコーヒー豆をおすすめします。"
        {...getOverrideProps(
          overrides,
          "\u7C21\u5358\u306A\u8CEA\u554F\u306B\u7B54\u3048\u308B\u3068\u3042\u306A\u305F\u306B\u3074\u3063\u305F\u308A\u306E\u30B3\u30FC\u30D2\u30FC\u8C46\u3092\u304A\u3059\u3059\u3081\u3057\u307E\u3059\u3002"
        )}
      ></Text>
    </Flex>
  );
}
