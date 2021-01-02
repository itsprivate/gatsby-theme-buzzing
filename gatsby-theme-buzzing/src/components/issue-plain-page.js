/** @jsx jsx */
import ItemBox from "./issue-plain-item"
import { jsx, Styled } from "theme-ui"
import i18next from "i18next"
const Items = ({ data, pageContext }) => {
  const { basePath, currentPage: issueNumber, date, dateISO } = pageContext
  const items = data.allBlogPost.nodes
  const pageTitle =
    i18next.t(`Weekly Selection`) +
    "-" +
    i18next.t("Issue {{issueNumber}}", `Issue ${issueNumber}`, {
      issueNumber,
    })

  return (
    <div
      sx={{
        maxWidth: [`full`, `3xl`, `3xl`, `3xl`],
        mx: `auto`,
        px: [3, 4],
        pt: 4,
      }}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <Styled.h2 sx={{ mb: 3 }} itemProp="name">
        {pageTitle}
      </Styled.h2>
      <time sx={{ color: "textMuted" }} dateTime={dateISO}>
        {date}
      </time>
      <ul>
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
      </ul>
    </div>
  )
}
export default Items
