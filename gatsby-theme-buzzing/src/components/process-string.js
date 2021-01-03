/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import processString from "react-process-string"
import Twemoji from "react-twemoji"
//
export default function processReactString(type, body) {
  let arr = [
    {
      regex: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
      fn: (key, result) => {
        return (
          <Link key={key} href={`${result[0]}`}>
            <span> {result[0]}</span>
          </Link>
        )
      },
    },
  ]
  if (type === "Twitter") {
    arr = arr.concat([
      {
        regex: /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:(?:@|＠)(?!\/))([a-zA-Z0-9/_]{1,15})(?:\b(?!@|＠)|$)/,
        fn: (key, result) => {
          return (
            <Link href={`https://twitter.com/${result[1]}`} key={key}>
              <span> @{result[1]}</span>
            </Link>
          )
        },
      },
      {
        regex: /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:#(?!\/))([a-zA-Z0-9/_]{1,280})(?:\b(?!#)|$)/,
        fn: (key, result) => {
          return (
            <Link key={key} href={`https://twitter.com/hashtag/${result[1]}`}>
              <span> #{result[1]}</span>
            </Link>
          )
        },
      },
      {
        regex: /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/,
        fn: (key, result) => {
          console.log("result[1]", result[1])

          const emoji = (
            <Twemoji
              tag="span"
              sx={{
                "> img": {
                  width: `1.2rem`,
                  ml: `0.2rem`,
                  mr: `0.075rem`,
                  mb: `-0.2rem`,
                },
              }}
              key={key}
            >
              {result[1]}
            </Twemoji>
          )
          console.log("emoji", emoji)
          return emoji
        },
      },
    ])
  } else if (type === "Youtube") {
    arr.push({
      regex: /(?:^|[^a-zA-Z0-9_＠!@#$%&*])(?:#(?!\/))([a-zA-Z0-9/_]{1,280})(?:\b(?!#)|$)/,
      fn: (key, result) => {
        return (
          <Link key={key} href={`https://www.youtube.com/hashtag/${result[1]}`}>
            <span> #{result[1]}</span>
          </Link>
        )
      },
    })
  }
  const finalBody = processString(arr)(body)
  return finalBody
}
