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
    // Full viewport height with warm gradient background
    <div className="min-h-screen" style={{background: 'linear-gradient(to bottom right, #faf9f7, #f5f4f1, #f0ede8)'}}>
      {/* Top navigation */}
      <Header />
      
      {/* Dynamic page content (passed as children prop) */}
      {children}
      
      {/* Bottom footer */}
      <Footer />
    </div>
  );
}