/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function NameForm(props) {
  const { user, overrides, ...rest } = props;
  return (
    <View
      width="342px"
      height="58px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NameForm")}
      {...rest}
    >
      <Icon
        width="342px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 342, height: 1 }}
        paths={[
          {
            d: "M0 0L342 0L342 -2L0 -2L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 2,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="100%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
      <Text
        fontFamily="Noto Sans JP"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="32px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="311px"
        height="33px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="43.1%"
        bottom="0%"
        left="0.29%"
        right="8.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={user?.nickname}
        {...getOverrideProps(
          overrides,
          "\u307F\u3046\u3089\u3075\u304F\u3059\u3051"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="11px"
        fontWeight="400"
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
        position="absolute"
        top="0%"
        bottom="44.83%"
        left="0%"
        right="90.35%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="お名前"
        {...getOverrideProps(overrides, "\u304A\u540D\u524D")}
      ></Text>
    </View>
  );
}
