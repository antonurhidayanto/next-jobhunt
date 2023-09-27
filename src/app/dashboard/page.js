import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div>
        <h3>Dashboard</h3>
        <Link href="/blog">Blog</Link>
    </div>
  )
}
