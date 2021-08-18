import React from 'react'
import { UseFormReturn, useWatch } from 'react-hook-form'
import { unemploymentCalculator } from 'lib/unemploymentBenefits'
import { format, getYear } from 'date-fns'
import { is } from 'date-fns/locale'
import {
  Table as T,
} from '@island.is/island-ui/core'

export interface EstimatedIncomeTableProps {
  form: UseFormReturn
}
const numba = (number: number) =>
  number.toLocaleString('De-de', {
    maximumFractionDigits: 0,
  })

export const EstimatedIncomeTable = ({ form }: EstimatedIncomeTableProps) => {
  const startDate = useWatch({
    name: 'upphafsdagsetning_botagreidslna',
    defaultValue: form.getValues().upphafsdagsetning_botagreidslna,
    control: form.control,
  })

  const { getTable } = unemploymentCalculator({
    hlutfallPersAfsl: 1,
    tekjurAManudi: 589459,
    starfshlutfall: 1,
  })

  if (!startDate) {
    return null
  }

  return (
    <>
      <T.Table>
        <T.Row>
          <T.HeadData>Ár/mánuður</T.HeadData>
          <T.HeadData>Bóttarréttur</T.HeadData>
          <T.HeadData>Heildarlaun</T.HeadData>
          <T.HeadData>Lífeyrisgreiðsla</T.HeadData>
          <T.HeadData>Staðgreiðsla</T.HeadData>
          <T.HeadData>Útborguð laun</T.HeadData>
        </T.Row>
        <T.Body>
          {getTable(new Date(startDate)).map((row, i) => {
            return (
              <T.Row key={i}>
                <T.Data>
                  {getYear(row.monthStart)}/
                  {format(row.monthStart, 'MMMM', { locale: is })}
                </T.Data>
                <T.Data>{`${row.botarettur * 100}%`}</T.Data>
                <T.Data>{numba(row.heildarlaun)}</T.Data>
                <T.Data>{numba(row.lifeyrisgreidsla)}</T.Data>
                <T.Data>{numba(row.stadgreidsla)}</T.Data>
                <T.Data>{numba(row.utborgudLaun)}</T.Data>
              </T.Row>
            )
          })}
        </T.Body>
        <T.Foot></T.Foot>
      </T.Table>
    </>
  )
}
