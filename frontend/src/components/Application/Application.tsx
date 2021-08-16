import React from 'react'

type ApplicationProps = {
  title?: string
}

export const Application: React.FC<ApplicationProps> = ({ title }: ApplicationProps) => (
  <div>{title}</div>
)
