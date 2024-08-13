import React from 'react'
import "./TitleSection.css"

export default function TitleSection({ title }) {
  return (
    <section className="m-2">
    <div className="container">
      <div className="separator mb-4 mx-4"><span>{title}</span></div>
    </div>
  </section>
  )
}
