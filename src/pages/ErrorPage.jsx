import React from 'react';
import MainNavigation from '../layout/MainNavigation';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

  // loader가 throw한 에러정보를 받아서 사용하기
  const error = useRouteError();
  console.log(error);

  let errorText =`페이지를 찾을 수 없습니다. URL을 확인하세요`;

  if(error.status != 404){
    errorText = JSON.parse(error.data).message;
  }
  

  return (
    <>
      <MainNavigation />
      <main>
        <h1>페이지를 찾을 수 없습니다!</h1>
        <p>{errorText}</p>
      </main>
    </>
  );
};

export default ErrorPage;