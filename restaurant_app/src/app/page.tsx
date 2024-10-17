import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <h1>Dashboard</h1>
      </section>
      <section>    
        <div>
          <h1>Menu</h1>
          <Link href={'/entrees/appetizers'}>Appetizers</Link>
          <Link href={'/entrees'}>Entrees</Link>
        </div>
    </section>
    </main>
  );
}
