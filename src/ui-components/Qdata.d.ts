/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QdataOverridesProps = {
    Qdata?: PrimitiveOverrideProps<FlexProps>;
    "\u8CEA\u554F\uFF1A\u30B9\u30DA\u30B7\u30E3\u30EB\u30C6\u30A3\u30B3\u30FC\u30D2\u30FC\u3092\u77E5\u3063\u3066\u3044\u307E\u3059\u304B\uFF1F"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type QdataProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: QdataOverridesProps | undefined | null;
}>;
export default function Qdata(props: QdataProps): React.ReactElement;
