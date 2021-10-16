import React from 'react';
import Head from 'next/head';

interface HeaderTabProps {
  title: string;
}

export const HeaderTab = ({ title }: HeaderTabProps) => (
  <Head>
    <title>
      {title}
    </title>
  </Head>
)
