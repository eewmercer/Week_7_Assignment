import React from 'react'
import Link from "next/link";

export default function navigation() {
  return (
    <div>
        <h1>Menu</h1>
        <Link href={'/'}>Dashboard</Link>
        <Link href={'/appetizers'}>Appetizers</Link>
        <Link href={'/entrees'}>Entrees</Link>
    </div>
  )
}
