const { BLOG_URL } = process.env;

module.exports = {
  async rewrites() {
    return [
      // {
      //   source: '/:path*',
      //   destination: `/:path*`,
      // },
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
