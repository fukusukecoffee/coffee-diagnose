/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function CheerfulButton(props) {
  const { answer, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "Give it a try": {}, Button: {}, CheerfulButton: {} },
      variantValues: { hover: "false" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="136px"
      height="84px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="4px 4px 4px 4px"
      display="flex"
      {...getOverrideProps(overrides, "CheerfulButton")}
      {...rest}
    >
      <Flex
        gap="5px"
        direction="column"
        width="134px"
        height="90px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        boxShadow="0px 0px 0px rgba(0, 0, 0, 1)"
        borderRadius="4px"
        padding="13px 39px 13px 39px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Button")}
      >
        <Text
          fontFamily="Noto Sans JP"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="14px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="138px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={answer?.answer}
          {...getOverrideProps(overrides, "Give it a try")}
        ></Text>
      </Flex>
    </Flex>
  );
}
