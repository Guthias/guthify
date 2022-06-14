import React from 'react';

export default function Loading() {
  return (
    <div className="loading">
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <span className="loading-text">Carregando...</span>
    </div>
  );
}
