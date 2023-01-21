/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComicLightlargeBaseOverridesProps = {
    ComicLightlargeBase?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    BUTTON?: PrimitiveOverrideProps<TextProps>;
    "Icon / large"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type ComicLightlargeBaseProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ComicLightlargeBaseOverridesProps | undefined | null;
}>;
export default function ComicLightlargeBase(props: ComicLightlargeBaseProps): React.ReactElement;
