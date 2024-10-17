'use client'

import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Entrees() {
  const [entreesData, setEntreesData] = useState();

  useEffect(() => {
    const getEntrees = async () => {
      const response = await fetch("entrees.txt");
      const data = await response.json();
      setEntreesData(data);
    }
    getEntrees();
  }, [])

  return (
    <div>
        <h1>Entrees</h1>
        <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
    </div>
  )
}
