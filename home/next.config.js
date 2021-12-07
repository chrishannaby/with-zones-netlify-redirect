module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://with-zones-blog.netlify.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://with-zones-blog.netlify.app/blog/:path*",
      },
    ];
  },
};
