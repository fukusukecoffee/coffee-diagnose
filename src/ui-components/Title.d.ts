/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TitleOverridesProps = {
    Title?: PrimitiveOverrideProps<FlexProps>;
    "\uFF15\u3064\u306E\u8CEA\u554F\u3067 \u597D\u307F\u306E\u30B3\u30FC\u30D2\u30FC\u3092\u8A3A\u65AD"?: PrimitiveOverrideProps<TextProps>;
    "\u7C21\u5358\u306A\u8CEA\u554F\u306B\u7B54\u3048\u308B\u3068\u3042\u306A\u305F\u306B\u3074\u3063\u305F\u308A\u306E\u30B3\u30FC\u30D2\u30FC\u8C46\u3092\u304A\u3059\u3059\u3081\u3057\u307E\u3059\u3002"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TitleProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TitleOverridesProps | undefined | null;
}>;
export default function Title(props: TitleProps): React.ReactElement;
