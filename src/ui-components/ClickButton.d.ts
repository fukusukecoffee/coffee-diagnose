/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ComicLightlargeBaseProps } from "./ComicLightlargeBase";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClickButtonOverridesProps = {
    ClickButton?: PrimitiveOverrideProps<FlexProps>;
    Base?: ComicLightlargeBaseProps;
} & EscapeHatchProps;
export declare type ClickButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ClickButtonOverridesProps | undefined | null;
}>;
export default function ClickButton(props: ClickButtonProps): React.ReactElement;
