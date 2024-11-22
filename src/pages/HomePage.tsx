import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { CategorySection } from '../components/CategorySection';
import { TrendingSection } from '../components/TrendingSection';
import { NewsletterSection } from '../components/NewsletterSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <TrendingSection />
      <NewsletterSection />
    </>
  );
}