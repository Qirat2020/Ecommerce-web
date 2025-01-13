import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    date: "Sep 27, 2023",
    comments: 8,
    image: "/post__1.jpg", // Replace with actual image paths
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    date: "Sep 25, 2023",
    comments: 1,
    image: "/post__2.jpg",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    date: "Sep 30, 2023",
    comments: 6,
    image: "/post__3.jpg",
  },
];

export default function LatestNews() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          Latest News
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Present posts in a best way to highlight interesting moments of your blog.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <p className="text-pink-500 text-sm mb-2">
                  {post.date} / {post.comments} Comments
                </p>
                <h3 className="text-lg font-semibold text-gray-800">
                  
                    <a>{post.title}</a>
                  
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

