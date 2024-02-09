import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h2>Not Found</h2>
        <p>Sorry! We couldn't find the page you're looking for.</p>
        <Link href="/">Return to Home</Link>
    </div>
  )
}

export default NotFound