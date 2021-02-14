import Link from 'next/link';

const Navigation = () => (
  <nav>
    <Link href="/products">Products</Link>
    <Link href="/sell">Sell</Link>
    <Link href="/orders">Orders</Link>
    <Link href="/accounts">Account</Link>
  </nav>
);

export default Navigation;
