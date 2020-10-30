let arc = require("@architect/functions")
let discovery = require('arc-macro-site-url/discovery')

async function req (req) {
  let site_url = await discovery()
  return {
    html: `<body><p>Welcome to <a href="${site_url}">${site_url}</a>!</p></body>`
  }
}

exports.handler = arc.http.async(req);
