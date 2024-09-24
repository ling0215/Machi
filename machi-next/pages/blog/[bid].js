import Adetail from '@/components/blog/article-detail/article-detail'
import MessageArea from '@/components/blog/article-detail/article-message-area'
import { useRouter } from 'next/router'
export default function ArticleDetail() {
  const router = useRouter()
  const articlId = router.query.bid // 从路由参数中获取文章 ID
  // console.log(articlId);

  return (
    <>
      <Adetail articleId={articlId} />
      <MessageArea articleId={articlId}/>
    </>
  )
}
