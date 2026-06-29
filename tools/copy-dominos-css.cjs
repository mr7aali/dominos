const fs = require("fs");
const path = require("path");

const root = process.cwd();
const files = [
  ["www.dominos.com/_next/static/css/pages/_app_30f9e76b0d076251.css", "base-app.css"],
  ["www.dominos.com/dpz-ecomm-makeline-ui-mfe/_next/static/css/styles.css", "makeline-ui.css"],
  ["www.dominos.com/dpz-ecomm-auth-mfe/_next/static/css/styles.css", "auth.css"],
  ["www.dominos.com/dpz-ecomm-service-methods-mfe/_next/static/css/styles.css", "service-methods.css"],
  ["www.dominos.com/dpz-ecomm-cart-mfe/_next/static/css/styles.css", "cart.css"],
  ["www.dominos.com/dpz-ecomm-campaign-mfe/_next/static/css/styles.css", "campaign.css"],
  ["www.dominos.com/dpz-ecomm-deals-mfe/_next/static/css/styles.css", "deals.css"],
  ["www.dominos.com/dpz-ecomm-rewards-mfe/_next/static/css/styles.css", "rewards.css"],
  ["www.dominos.com/dpz-ecomm-product-mfe/_next/static/css/styles.css", "product.css"]
];

const outDir = path.join(root, "src/styles/vendor");
fs.mkdirSync(outDir, { recursive: true });

for (const [source, target] of files) {
  const sourcePath = path.join(root, source);
  const sourceDir = path.dirname(source).replace(/\\/g, "/");
  let css = fs.readFileSync(sourcePath, "utf8");
  css = css.replace(/url\((['"]?)(?!data:|https?:|\/)([^)'"]+)\1\)/g, (_match, quote, url) => {
    const cleanUrl = url.split("#")[0].split("?")[0];
    const suffix = url.slice(cleanUrl.length);
    const normalized = path.posix.normalize(`${sourceDir}/${cleanUrl}`);
    return `url("/site-assets/${normalized}${suffix}")`;
  });
  css = `/* Converted from ${source}. Edit this file as project CSS. */\n${css}`;
  fs.writeFileSync(path.join(outDir, target), css, "utf8");
}
