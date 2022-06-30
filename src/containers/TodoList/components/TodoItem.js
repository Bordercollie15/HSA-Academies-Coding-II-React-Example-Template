import React from 'react'

export const TodoItem = ({ idx, item }) => (
  <li key={idx}>{item}</li>
)