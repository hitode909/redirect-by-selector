const request = require('request-promise');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

exports.redirectBySelector = async (req, res) => {
  const uri = req.query.uri;
  if (!uri) {
    res.status(401).send('uri required');
  }
  const selector = req.query.selector;
  if (!uri) {
    res.status(401).send('selector required');
  }

  const text = await request(uri);
  const dom = new JSDOM(text);
  const links = dom.window.document.querySelectorAll(selector);
  const link = pick(links);
  if (link) {
    res.writeHead(302, {
      'Location': link.href,
    });
    res.end();
  } else {
    res.send('not found');
  }

};