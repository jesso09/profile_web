type Response = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  category: string;
};

export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return (
    <div className="container mx-auto px-4 py-16">
      <h3 className="text-2xl font-bold text-center mb-8">Featured Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {posts.map((post: Response) => (
          <div
            key={post.id}
            className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors"
          >
            <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
            <p className="text-gray-300 mb-4">{post.category}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}
