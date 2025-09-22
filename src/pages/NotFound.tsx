import Link from "next/link";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
    <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
    <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
    <Link href="/" className="btn-hero">Go Home</Link>
  </div>
);

export default NotFound;
