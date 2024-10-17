'use client'

import React from 'react'
import { useEffect } from 'react'

export default function Entrees() {
    useEffect(() => {
        async () => {
            const response = await fetch("");
            const data = await response.json();
            // setCardData(data);
          }
    }, [])

  return (
    <div>
        <h1>Entrees</h1>
    </div>
  )
}
