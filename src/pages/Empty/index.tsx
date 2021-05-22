import React from 'react';

interface IEmptyPageProps {
  title?: string;
}

function EmptyPage({ title = '' }: IEmptyPageProps) {
  return (
    <>
      <div>This is Empty Page! {title}</div>
    </>
  );
}

export default EmptyPage;
