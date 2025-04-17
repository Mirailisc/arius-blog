import { useState } from 'react'

interface Post {
  id: string
  data: {
    title: string
    pubDate: Date
    category: string
  }
}

interface Props {
  posts: Post[]
  categories: string[]
}

function formatDate(date: Date) {
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPostList({ posts, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = selectedCategory ? posts.filter((post) => post.data.category === selectedCategory) : posts

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2 flex-wrap">
        <button
          className={`px-3 py-1 rounded border ${!selectedCategory ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white text-black dark:bg-black dark:text-white'}`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-1 rounded border ${selectedCategory === category ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white text-black dark:bg-black dark:text-white'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {filteredPosts.map((post) => (
          <a key={post.id} href={`/blog/${post.id}/`}>
            <div className="p-4 border rounded-md border-black/20 dark:border-white/20">
              <h4 className="text-xl font-bold">{post.data.title}</h4>
              <p className="text-zinc-600 dark:text-zinc-300 text-xs">{formatDate(post.data.pubDate)}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
