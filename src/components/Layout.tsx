import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(to bottom right, #faf9f7, #f5f4f1, #f0ede8)'}}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}