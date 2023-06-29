import React from "react";

function Leaders({ res, index }) {
  const { rank, name, points, age } = res;
  return (
    <tbody data-testid="app-tbody">
      <tr key={rank}>
        <td data-testid={`rank-${index}`}>{rank}</td>
        <td data-testid={`name-${index}`}>{name}</td>
        <td data-testid={`points-${index}`} className="numeric">{points}</td>
        <td data-testid={`age-${index}`} className="numeric">{age}</td>
      </tr>
    </tbody>
  )
}

export default Leaders;