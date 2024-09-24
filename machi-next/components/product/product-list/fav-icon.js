import { useAuth } from '@/hooks/use-auth'
import { addFav, removeFav } from '@/services/user'
import toast from 'react-hot-toast'
import { IoHeartOutline } from 'react-icons/io5'
import { AiFillHeart } from "react-icons/ai"

export default function Favcon({ id, style}) {
  // 由context取得auth-判斷是否能執行add或remove用，favorites決定愛心圖案用
  const { auth, favorites, setFavorites } = useAuth()

  const handleTriggerFav = (pid) => {
    // 在陣列中->移出
    if (favorites.includes(pid)) {
      setFavorites(favorites.filter((v) => v !== pid))
    } else {
      //不在陣列中加入
      setFavorites([...favorites, pid])
    }
  }

  const handleAddFav = async (pid) => {
    const res = await addFav(pid)

    if (res.data.status === 'success') {
      // 伺服器成功後，更新context中favorites的狀態，頁面上的圖示才會對應更動
      handleTriggerFav(pid)
      toast.success(`商品 id=${pid} 新增成功!`)
    }
  }

  const handleRemoveFav = async (pid) => {
    const res = await removeFav(pid)

    if (res.data.status === 'success') {
      // 伺服器成功後，更新context中favorites的狀態，頁面上的圖示才會對應更動
      handleTriggerFav(pid)
      toast.success(`商品 id=${pid} 刪除成功!`)
    }
  }

  
  return (
    <>
      {favorites.includes(id) ? (
        <AiFillHeart className={style} style={
          {useSelect: "none", cursor: "pointer"}
        } onClick={() => {
              // 沒登入不能用
              if (!auth.isAuth) {
                return toast.error('會員才能使用!')
              }
              handleRemoveFav(id)  
            }
          }
          />
      ) : (
        <IoHeartOutline className={style} style={
          {useSelect: "none", cursor: "pointer"}
        } onClick={() => {
              // 沒登入不能用
              if (!auth.isAuth) {
                return toast.error('會員才能使用!')
              }
              handleAddFav(id)
            }
          }
        />
      )}
    </>
  )
}
