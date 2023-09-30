import React from 'react';
import { useRouteError } from 'react-router-dom';


type Error = {
    statusText?: string;
    message?: string;
  };


export default function ErrorPage() {
  const error = useRouteError() as Error ;
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Lo sentimos, ha ocurrido un error inesperado.</p>
      <p>
        <i>{error?.statusText  || error?.message}</i>
      </p>
    </div>
  );
}