/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CheerfulButtonProps } from "./CheerfulButton";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AnswerButtonCollectionOverridesProps = {
    AnswerButtonCollection?: PrimitiveOverrideProps<CollectionProps>;
    CheerfulButton?: CheerfulButtonProps;
} & EscapeHatchProps;
export declare type AnswerButtonCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CheerfulButtonProps;
} & {
    overrides?: AnswerButtonCollectionOverridesProps | undefined | null;
}>;
export default function AnswerButtonCollection(props: AnswerButtonCollectionProps): React.ReactElement;
