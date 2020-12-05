import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Home() {
  const data = useStaticQuery(graphql`
    query BrokenImageQuery {
      allFile(filter: { name: { regex: "/broken/" } }) {
        nodes {
          absolutePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
            }
          }
        }
      }
    }
  `)
  return <div>Hello world!</div>
}
