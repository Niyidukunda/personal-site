/**
 * LAYOUT COMPONENT
 * 
 * Purpose: Wrapper component that provides consistent page structure across all pages
 * 
 * Structure:
 * - Header (top navigation)
 * - Page Content (children prop - dynamically passed)
 * - Footer (bottom section)
 * 
 * Background: Warm gradient applied to entire viewport
 * 
 * Usage: Wrap every page component with <Layout>...</Layout>
 * Example: 
 *   <Layout>
 *     <main>Your page content here</main>
 *   </Layout>
 */

import Header from "./Header"; // Top navigation bar
import Footer from "./Footer"; // Bottom footer section

// TypeScript interface: Define component props
interface LayoutProps {
  children: React.ReactNode; // Page content to wrap (can be any valid React element)
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}