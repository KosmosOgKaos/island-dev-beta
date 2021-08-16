---
to: src/components/<%=name%>/<%=name%>.tsx
---
import React from 'react'

export interface <%=name%>Props {
  title?: string
}

export const <%=name%> = ({ title }: <%=name%>Props) => (
  <div>{title}</div>
)
