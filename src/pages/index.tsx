import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Redirect to="/blog" />
  );
}
