SitemapGenerator::Sitemap.default_host = "https://www.boringscraping.com"
# public_path
SitemapGenerator::Sitemap.public_path = "public/sitemap/"

SitemapGenerator::Sitemap.create do
  # Add static pages
  add root_path, changefreq: 'daily', priority: 1.0
end
