import React from 'react'

export interface StepOverviewProps {
  title?: string
}

export const StepOverview = ({ title }: StepOverviewProps) => (
  <div>{title}</div>
)
