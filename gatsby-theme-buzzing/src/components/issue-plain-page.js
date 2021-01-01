/** @jsx jsx */
import ItemBox from "./issue-plain-item"
import { jsx } from "theme-ui"
import i18next from "i18next"
const Items = ({ data, pageContext }) => {
  const { basePath, currentPage: issueNumber, date } = pageContext
  const items = data.allBlogPost.nodes

  const dateTitle = ` · ${date}`
  const pageTitle =
    i18next.t(`Weekly Selection`) +
    "-" +
    i18next.t("Issue {{issueNumber}}", `Issue ${issueNumber}`, {
      issueNumber,
    }) +
    dateTitle
  return (
    <div
      sx={{
        maxWidth: [`full`, `3xl`, `3xl`, `3xl`],
        mx: `auto`,
        px: [3, 4],
        pb: 4,
      }}
      itemscope
      itemType="https://schema.org/ItemList"
    >
      <h2 itemprop="name">{pageTitle}</h2>
      <div>
        {items.map((item, index) => {
          return (
            <ItemBox
              key={`item-box-${index}`}
              index={index}
              basePath={basePath}
              item={item}
              pageContext={pageContext}
            ></ItemBox>
          )
        })}
      </div>
    </div>
  )
}
export default Items
