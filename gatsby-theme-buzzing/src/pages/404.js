import { Link } from "gatsby"
import React from "react"
const NotFoundPage = () => (
  <>
    <div
      style={{
        width: `100vw`,
        height: `100vh`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <div>
        <h1>NOT FOUND</h1>
        <p>
          {`You just hit a route that doesn't exist... Please visit `}{" "}
          <Link to="/" className="link-style">
            Homepage
          </Link>
        </p>
      </div>
    </div>
  </>
)
export default NotFoundPage
