import React from 'react'
import { FlexLayout, FlexLayoutItem } from '../../../style'

export default function ({
    ColumnKeyText,
    ColumnValueText,
    ColumnDesc,
    ColumnSetFlag,
    ColumnSplitLine,
    OptionButton
}) {

    return (
        <FlexLayout>
            <FlexLayoutItem width={"10%"}>{ColumnKeyText}</FlexLayoutItem>
            <FlexLayoutItem width={"10%"}>{ColumnValueText}</FlexLayoutItem>
            <FlexLayoutItem width={"70%"}>{ColumnDesc}</FlexLayoutItem>
            <FlexLayoutItem width={"10%"}>{ColumnSetFlag}{ColumnSplitLine}{OptionButton}</FlexLayoutItem>
        </FlexLayout>
    )
}