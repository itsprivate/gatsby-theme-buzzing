/** @jsx jsx */
import { Themed, jsx, Link as LinkUI } from "theme-ui"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { withPrefix } from "gatsby"
import path from "path-browserify"
const Items = props => {
  const { items, basePath } = props
  const itemsByYears = {}
  items.forEach(item => {
    if (!itemsByYears[item.year]) {
      itemsByYears[item.year] = []
    }
    itemsByYears[item.year].push(item)
  })
  const years = Object.keys(itemsByYears).sort((a, b) => {
    return b - a
  })

  return (
    <div>
      {years.map(year => {
        const issueItems = itemsByYears[year]
        return (
          <div sx={{ pb: 3 }} key={year}>
            <Themed.h4>{year}</Themed.h4>
            {issueItems.map((item, issueIndex) => {
              return (
                <Themed.li sx={{ fontSize: 2 }} key={`archive-${issueIndex}`}>
                  <LinkUI
                    as={Link}
                    to={withPrefix(
                      path.join(basePath, `archive/${item.year}/${item.month}`)
                    )}
                  >
                    {item.year}-{item.month}
                  </LinkUI>
                </Themed.li>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Items
