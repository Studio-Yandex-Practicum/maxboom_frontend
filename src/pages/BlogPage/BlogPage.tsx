import BlogMain from '@/components/BlogMain/BlogMain'
import { blogPageData } from '@/mockData/blogPageData'
import { TEXT_BLOG, LINK_SHOW_ALL } from '@/shared/constants/constants'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'

const BlogPage = () => {
  return (
    <WrapperForMainContent>
      <BlogMain title={TEXT_BLOG} linkText={LINK_SHOW_ALL} cards={blogPageData} />
    </WrapperForMainContent>
  )
}

export default BlogPage
