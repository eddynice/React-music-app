import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => (
  <section>
    <h1>reformated Dashboard</h1>
    <p>made my osaze</p>
    <Link to="/posts" className="button">
      View Posts
    </Link>
  </section>
)

export default DashboardPage
