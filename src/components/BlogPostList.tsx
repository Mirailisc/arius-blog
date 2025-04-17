import { useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

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
          className={`px-3 py-1 rounded-md cursor-pointer border ${!selectedCategory ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white text-black dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white'}`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categories.map((category) => (
          <Button
            variant="default"
            key={category}
            className={`px-3 py-1 rounded-md cursor-pointer border ${selectedCategory === category ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white text-black dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {filteredPosts.map((post) => (
          <a key={post.id} href={`/blog/${post.id}/`}>
            <div className="p-4 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-colors">
              <h4 className="text-xl mt-2 font-bold">{post.data.title}</h4>
              <div className="text-sm mt-2 text-zinc-600 dark:text-zinc-400">By Phubordin Poolnai - {formatDate(post.data.pubDate)}</div>
              <Badge className="mt-4" variant="default">
                {post.data.category}
              </Badge>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
