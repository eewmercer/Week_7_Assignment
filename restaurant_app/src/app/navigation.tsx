import React from 'react'
import Link from 'next/link'

export default function menu() {
  return (
    <div>
      <section>    
        <div>
          <Link href={'/'}>Menu Page</Link>
          <Link href={'/entrees/appetizers'}>Appetizers</Link>
          <Link href={'/entrees'}>Entrees</Link>
        </div>
      </section>
    </div>
  )
}
