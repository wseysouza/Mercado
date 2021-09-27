import React from 'react';
import Head from 'next/head';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => (
  <Head>
    <title>
      {title}
    </title>
  </Head>
)
