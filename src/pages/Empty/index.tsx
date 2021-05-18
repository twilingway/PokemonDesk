import React from 'react';
import Header from '../../components/Header';

interface IEmptyPageProps {
  title?: string;
}

function EmptyPage({ title = '' }: IEmptyPageProps) {
  return (
    <>
      <Header />
      <div>This is Empty Page! {title}</div>
    </>
  );
}

export default EmptyPage;
