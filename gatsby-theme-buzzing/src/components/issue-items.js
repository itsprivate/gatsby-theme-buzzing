/** @jsx jsx */
import { Themed, jsx } from "theme-ui"
import ItemBox from "./issue-item-box"

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
                <ItemBox
                  key={`item-box-${issueIndex}`}
                  basePath={basePath}
                  item={item}
                ></ItemBox>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Items
