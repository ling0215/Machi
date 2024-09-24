-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2024-09-24 02:47:45
-- 伺服器版本： 10.4.32-MariaDB
-- PHP 版本： 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `machi_big_db`
--

-- --------------------------------------------------------

--
-- 資料表結構 `article`
--

CREATE TABLE `article` (
  `article_id` int(6) NOT NULL,
  `user_id_fk` int(6) NOT NULL,
  `article_title` varchar(50) NOT NULL,
  `article_content` varchar(6000) NOT NULL,
  `article_createtime` datetime NOT NULL DEFAULT current_timestamp(),
  `article_edittime` datetime NOT NULL DEFAULT current_timestamp(),
  `article_status` tinyint(1) NOT NULL DEFAULT 1,
  `article_category` varchar(50) NOT NULL,
  `category_id_fk` int(11) NOT NULL,
  `subcategory_id_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `article`
--

INSERT INTO `article` (`article_id`, `user_id_fk`, `article_title`, `article_content`, `article_createtime`, `article_edittime`, `article_status`, `article_category`, `category_id_fk`, `subcategory_id_fk`) VALUES
(13, 2, '吃不胖的甜點！巴斯克乳酪蛋糕、巧克力豆軟餅乾、鬆餅，通通0砂糖、0麵粉', '<figure class=\"image\"><img style=\"aspect-ratio:1080/1350;\" src=\"/images/blog/article/2f027ad0-7d09-43ea-9aa3-833ee530a5dd.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>生酮、戒糖、低碳水飲食風靡全球…這幾年對砂糖的攝取越來越小心，<br>可是少了糖，還算什麼甜點？<br>沒有甜點的人生，算什麼人生？（霸氣上身）<br><br>可是一談到低醣(low sugar)甜點，光看到照片我常忍不住感嘆，這跟真正的品項差太多了吧…視覺上已經不是很吸引人，味道常常更令人失望。嘗到味道普通的低醣甜點時，我反而會比正常甜點吃更多，因為不像好吃的甜點吃一口心滿意足，不好吃的甜點給我一種少了什麼的不滿足。<br><br>一直想好好研究低醣甜點，也累積了好多巧手長年的許願，這次把握機會、緊湊測試食譜一次推出從鬆餅、餅乾到蛋糕四款吃不胖的低醣甜點！</p><p>&nbsp;</p><figure class=\"image\"><img style=\"aspect-ratio:1080/1350;\" src=\"/images/blog/article/018410ee-7cad-490d-ae60-18b0bb8a9976.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>美式巧克力豆軟餅乾</p><p>&nbsp;</p><h2><strong>巴斯克乳酪蛋糕、巧克力豆軟餅乾、鬆餅、佛羅倫丁餅乾&nbsp;</strong></h2><p>通通零砂糖、零麵粉唷！！</p><p>我對低醣甜點維持一定的標準，可以說因為得避開砂糖，要求變得更高：</p><li>首先，視覺上要“看不出來”是低糖作法，一樣得讓人覺得由衷的發出「哇～看起來好好吃」的感覺</li><li>味道上不妥協，可以微甜但不能沒味道，而且不能有代糖特有涼感</li><li>口感不犧牲，該脆的甜點得脆、該軟的甜點得柔順絲滑</li><li>簡單來說，就是低醣歸低醣，不論是外觀、味道、質地還是要得跟正常甜點看齊啦！</li></ul><p>&nbsp;</p><figure class=\"image\"><img style=\"aspect-ratio:1080/1350;\" src=\"/images/blog/article/608569b4-35c9-4e7b-8260-b3489835740c.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>佛羅倫汀杏仁脆餅</p><p>&nbsp;</p><p>&nbsp;</p>', '2024-05-18 16:26:18', '2024-05-18 16:26:18', 1, '蛋糕,餅乾,教學,點心', 0, 0),
(14, 2, '最好吃的英式司康＆自製凝脂奶油(Scone & Clotted Cream)', '<figure class=\"image\"><img style=\"aspect-ratio:1080/1350;\" src=\"/images/blog/article/30851da6-9db0-4702-8df8-1921906f7339.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>我很愛其中一幕伊莉莎白女王吃下午茶的經典畫面：美美的骨瓷餐盤上擺著一顆金黃色的司康，她優雅地抹上凝脂奶油和果醬後邊吃邊討論國政。甚至後來還有晚年的女王很掙扎要不要戒司康的對話，完全是國際司康最強代言人無誤！我在試做女王御用司康食譜時心情莫名激動，很有身置白金漢宮的臨場感～</p><p>小當家：「做給我吃也算是圓夢喔～ 因為我生日和女王同一天。」（還真的是同一天… 但你頂多能演一下旁邊的柯基犬吧）</p><p>除了探究哪一種的司康最好吃，這次也一起做了司康的靈魂伴侶「凝脂奶油」!</p><p>最後集大成完成的這款司康外殼酥酥的、內部很鬆軟甚至有點像蛋糕，甜中帶酸的自製覆盆子果醬，介於中間的凝脂奶油帶有清爽卻濃郁的奶香，簡單來說是像是鮮奶油的抹醬版，相互輝映組成完美trio，第一次吃到這麼完整的組合，小小一口但美味大爆炸啊啊！</p><p>最後是英國人吵了半世紀都沒解的爭議題，司康上到底要先抹奶油，還是先抹果醬呢？</p><p>坦白說，我對司康帶點複雜的情緒。司康可能因為材料單純或是不是我們熟悉的烘焙品項，滿容易踩雷的。曾經吃過乾乾巴巴的司康，簡直在吃一團麵粉塊印象很差…之後對它就有點抗拒…<br>後來再度吃到表皮鬆脆、內部鬆軟的司康，搭配鮮奶油跟果醬，那一瞬間才懂，阿～原來司康要這樣吃。</p><p>開始研究司康食譜後，發現司康版本真的超～多，而且從外觀上看不太出來味道如何，到底哪一款才好吃呢？<br>這次找了四款來自不同國家、不同作法的司康食譜做代表，不如直接來測測看吧！</p>', '2024-05-18 16:31:13', '2024-05-18 16:31:13', 1, '點心,教學', 0, 0),
(15, 3, '復刻好市多神級甜點「焦糖乳酪餅乾蛋糕」鹹奶油焦糖香、滑順又脆脆的上癮味道', '<figure class=\"image\"><img style=\"aspect-ratio:1080/1350;\" src=\"/images/blog/article/4395a6d3-25af-4e2f-99ab-76467307e917.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>Costco的蛋糕新口味你吃過了嗎？<br>台灣跟加拿大的好市多Costco今年推出新蛋糕口味「<strong>焦糖乳酪餅乾蛋糕 / Biscoff Cookie Cake</strong>」被譽為神級甜點，成為好市多熱賣蛋糕，這次來完整復刻它！</p><p>加拿大賣$26一顆，沒想到成本只要$6元（台幣150元）！！</p><p>&nbsp;</p><h3>焦糖乳酪餅乾蛋糕推薦原因</h3><p>這款蛋糕使用三層鬆軟濕潤的戚風蛋糕切片、夾著厚厚一層<strong>焦糖乳酪鮮奶油餡</strong><br>外殼沾滿充滿奶油焦糖香，帶點肉桂味的 <strong>Lotus Biscoff蓮花脆餅</strong>，有點甜甜鹹鹹的<br>跟空氣一般蓬鬆柔軟的戚風蛋糕體跟脆脆的餅乾、融化在口中的鮮奶油餡搭配的很好<br>鮮奶油蛋糕常常跟水果搭配，很少吃到焦糖、餅乾、乳酪的組合風味，口感超豐富<br>會一口接著一口吃完它～完全可以成為<strong>生日蛋糕</strong>的熱門選項唷。<br><br>至於製作難度呢，餡料部分因為有包含製作焦糖，還有參入奶油乳酪增加一些變數，屬於<strong>中等難度</strong>。<br><br>好處是當蛋糕完成後，內餡是一鍋到底，一下子打發完成。另外<strong>抹面完全不用講究</strong>，反正會被餅乾碎蓋滿滿，隨便抹抹最後都會很美，對鮮奶油抹面有障礙的巧手可以放心 🙂&nbsp;</p><p>&nbsp;</p><figure class=\"image\"><img style=\"aspect-ratio:1080/1398;\" src=\"/images/blog/article/84c029e4-55f3-4026-8635-c12f59ba9f78.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><h3>焦糖乳酪餅乾蛋糕注意事項</h3><p>&nbsp;</p><p>需要6吋蛋糕一顆<br>可以選擇<a href=\"http://xn--5-wg8a3xp08ceqapc046cf6l/\">戚風蛋糕(Chiffon Cake) </a>或是 <a href=\"https://ciao.kitchen/fruit-spongecake/\">海綿蛋糕(Sponge Cake)</a>，戚風蛋糕使用分蛋法口感鬆軟; 海綿蛋糕使用全蛋法，口感綿密。 切成三片，切片後最好蓋著布或是保鮮膜避免蛋糕風乾。<br>&nbsp;</p><p>事先製作焦糖，這款蛋糕特別的地方就是鮮奶油內餡使用焦糖而不是一般砂糖<br>砂糖經過中小火慢慢加熱產生焦糖化反應後，甜度降低同時有堅果香氣，<strong>溫度越高焦糖風味越重，甚至會帶點苦味</strong>。<br>&nbsp;</p><p>乾式焦糖法：Wet (濕式) vs. Dry (乾式) Method. 今天使用的乾式，不加水，只有砂糖本身，分次加入，過程時不時需要攪拌幫助焦糖上色均勻，並且事先準備好耐熱矽膠墊（我推薦<a href=\"https://amzn.to/3IAsH26\">法國品牌Silpat</a>，品質很好非常耐用）。焦糖一煮到琥珀色（amber）後須立刻離火，倒在矽膠墊上避免繼續升溫，過焦產生苦味。<br>喜歡焦糖風味的話，推薦一款萬用<a href=\"https://ciao.kitchen/salted-caramel/\">焦糖海鹽醬</a>，淋在什麼東西上都大大加分！<br>&nbsp;</p><p>冷卻後的焦糖非常硬，先大致打碎後再放入食物處理機或果汁機內打成焦糖粒，運轉的時間稍微久一點，看機器的運轉速度跟刀片鋒利程度調整，我的經驗是至少打2~3分鐘才能把焦糖的顆粒打的夠細，目標是跟一般砂糖的顆粒差不多，太大顆的焦糖粒會需要更長的時間溶解。<br>&nbsp;</p><p>焦糖乳酪鮮奶油餡：內餡中的奶油乳酪不需退冰，反而維持低溫才不會融化。<br>打發時不需要打太久只要跟焦糖大致混合就好，控制在1分鐘內，否則部分奶油乳酪融化跟糖結合後會變得水水的，讓鮮奶油餡無法成型。如果真的發生餡料太水的狀況，請馬上停機把餡料放進冰箱冷藏15分鐘後再試試看是否能改善，情況太嚴重的話只能重來…</p>', '2024-05-18 16:35:26', '2024-05-18 16:35:26', 1, '蛋糕,餅乾,教學', 0, 0),
(16, 3, '咖啡控的最愛！義式咖啡磅蛋糕＆咖啡巧克力淋面', '<figure class=\"image\"><img style=\"aspect-ratio:1080/1350;\" src=\"/images/blog/article/aed7fa03-43c0-4b7b-92b0-ca46935a8329.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>呼叫所有的咖啡控！每次吃咖啡口味的甜點只聞咖啡香，吃不到「咖啡味」嗎？<br>我完全懂～～～所以很開心介紹給你這個帶著咖啡迷人的香醇苦韻、極鬆軟濕潤的「<strong>義式咖啡磅蛋糕 / Espresso Coffee Cake</strong>」</p><p>沒有特別需要準備的食材、蛋糕簡單好操作，這款蛋糕做起來如一陣微風，美味程度卻令人印象深刻，用到一大杯的義式咖啡跟即溶咖啡粉，咖啡複雜的香氣、苦味、酸味跟甜度達到完美的平衡，頂部還淋滿、入口即化的巧克力咖啡淋面，簡直太讚了。這款蛋糕是下午茶的絕佳咖啡蛋糕，同時也非常適合在節日大餐後作為甜點享用。</p><p>磅蛋糕通常給人一種樸實的感覺，想要提升蛋糕的華麗感，淋面是你最好的選擇。這次設計兩種裝飾方式，正面淋面你只要一支湯匙做出drip效果。<br>反面的話，淋面整個覆蓋蛋糕，看起來更高級，為這款蛋糕特別設計的 <strong>咖啡巧克力甘納許(ganache)</strong>，只需3分鐘製作，除了充滿光澤、奢華外觀，更可以有保濕效果，讓蛋糕不容易乾掉。</p><p>&nbsp;</p><figure class=\"image\"><img style=\"aspect-ratio:1080/1350;\" src=\"/images/blog/article/7543cecf-76b6-459c-9cc4-083dbd2dac58.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>&nbsp;</p><h3>追求更濕潤磅蛋糕？試試新技巧：蛋白霜磅蛋糕</h3><p>傳統的磅蛋糕（Pound Cake）通常使用等量的黃油、糖、蛋和麵粉來製作，先把奶油跟砂糖打發後，再慢慢加入雞蛋、麵粉跟液體，例如之前發佈過「<a href=\"https://ciao.kitchen/mont-blanc-pound-cake/\">蒙布朗栗子磅蛋糕</a>」就是按照經典的磅蛋糕手法，做出來蛋糕充滿奶油香。</p><p>今天這款介紹另一種作法：蛋白霜磅蛋糕，糖油打發後先加入蛋黃，蛋白分離出來打發成蛋白霜再加入麵糊，蛋糕的體積會更大，吃起來會更輕盈、鬆軟，我第一次吃到超驚艷的，顛覆我對磅蛋糕既定印象。</p>', '2024-05-18 16:37:32', '2024-05-18 16:37:32', 1, '蛋糕', 0, 0),
(17, 4, '皇冠戚風蛋糕（含6吋&8吋、不同烤箱實測烤溫）', '<figure class=\"image\"><img style=\"aspect-ratio:1080/1350;\" src=\"/images/blog/article/d5fc29df-bf0d-40be-8771-9c977a716450.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>今天回到烘焙基本功：分享很實用、材料單純的「<a href=\"https://ciao.kitchen/biscoff-cake/\"><strong>皇冠戚風蛋糕</strong></a><strong> / Chiffon Cake</strong>」，不用戚風專用的中空模，而是用一般圓形的蛋糕模具、搭配割線，烤出表面炸裂像是一頂皇冠的“萬用戚風蛋糕”。<br><br>之前寫過一篇很詳細的「<a href=\"https://ciao.kitchen/chiffon-cake/\">原味戚風＆冰心內餡 </a>」使用的是經典中空戚風模，因為模具中空的關係受熱均勻，可以縮短烘烤時間。缺點是如果想要切片做蛋糕夾層，或是喜歡一整顆圓形的蛋糕的話，那這個造型就不太適合。沒關係，歡迎使用本篇配方！<br><br>有人說戚風是烘焙者的惡夢，凹底、縮腰、倒扣直接掉落、組織奇怪、氣孔粗糙…等等各式各</p><p>樣失敗狀況，很容易讓人望之卻步。我完全懂，有時候還會明明已經克服過了，怎麼過一陣子再來烤，食譜都一樣卻又卡關了？（是不是!! 只能看看是不是水星逆行惹..）</p><p>&nbsp;</p><p>戚風蛋糕對溫度比較敏感，網路上會看到各種複雜的烤溫分享，有些會走階段式烤溫，ex.&nbsp; 180度先xx 分鐘 → 160度 xx 分鐘 → 140度 xx 分鐘。這是每個人實驗多次後找到最佳的烤溫，我個人覺得有點難記而且增加食譜的複雜，因此今天的配方我盡量都是同一個溫度設定一路到底，對新手友善、顧爐方便。</p><p>這次實驗了「<strong>單一烤溫的美式烤箱</strong>」（伊萊克斯UltimateTaste 嵌入式烤箱）＆「<strong>上下火分開控溫的獨立式烤箱</strong>」（山崎42L電子式控溫烤箱）兩種烤法，考量大家對尺寸的需求不一樣，乾脆6吋、8吋一起測試了。最後還有這兩種烤法對蛋糕成品的比較唷。</p><p>這款戚風蛋糕配方是我烤過很多次，覺得最安全保險、成功率很高的做法，除了有發生過烤不夠熟倒扣掉落的意外之外，其他奇奇怪怪的戚風症頭沒有發生過。希望大家看完影片跟文字食譜後，可以更有信心、不要害怕它，勇敢的正面對決，然後成功出爐！！享受戚風蛋糕超鬆軟、水潤的口感。</p><p>有些配方水份很多，要烤特別久，有些不夠有支撐力，只適合單吃不適合拿來做蛋糕夾層，這個配方做出來兼顧美味、簡單以及多用途，單吃非常濕潤鬆軟，或著切片變化成各種口味的蛋糕夾層，下週就會用它來做一整顆的鮮奶油蛋糕～</p>', '2024-05-18 16:40:52', '2024-05-18 16:40:52', 1, '蛋糕,教學', 0, 0),
(18, 4, '爆炸奶油香！厚燒奶油酥餅 (Galette au beurre) 原味&紅茶', '<figure class=\"image\"><img style=\"aspect-ratio:1080/1350;\" src=\"/images/blog/article/18c61f5b-fef4-430d-9d1a-adeb55637cae.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>我原本想叫它「奶油奧本海默餅乾」，不要看它外表很樸實，一入口就會解壓縮出爆炸性的奶油香氣，配上口感卡滋卡滋的粗糖粒，這種腦中會自己上演多巴胺交響樂的等級，和一般的鑽石餅乾完全不同！特別加厚，拉長烤培的時間，追求咬下去外酥卻不乾的終極酥餅口感，請容我為你介紹這款好吃的餅乾<strong>「厚燒奶油酥餅」(Galette au beurre)。</strong><br><br>靈感來自日本朋友寄來的一盒鐵盒餅乾，它的奶油香超足超到位，原來法式奶油酥餅可以突破到這種境界，吞下肚後香氣還餘韻繚繞、久久不散…只是比較可惜的就是這種超大量生產的歐咪壓給餅乾口感都會很乾。<br>鎖定目標之後，實驗了一陣子終於做出理想中的味道了！最後成品放回鐵盒裡看起來好有氣勢啊。</p><figure class=\"image\"><img style=\"aspect-ratio:1080/1350;\" src=\"/images/blog/article/25df97cf-3ae4-406f-a587-9d945acdff24.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>深色這款不是巧克力，是紅玉紅茶口味喔<img src=\"https://lh5.googleusercontent.com/i8fH2XNjn0hzr9XOeoklF-rfKJms7a-u-lBOoFsLshth7Anyk1BtsU-dzb-Yyu377DRAsIfDDN0vNkqAXGP2wJrAt9U28yBbmTT6x1VG8KfgRCkhxZLO3MgNWTJGt0fJZlCmQI83pUy4lCqCtgJisSg\" alt=\"☕\" width=\"16\" height=\"16\"> （<a href=\"https://www.unclebenslife.com/events/dancingtea?rcode=CIAO-KITCHEN\">紅玉紅茶粉＆台灣20幾種精品茶粉開團連結</a>）<br>完全沒有澀味之外，有一股蜂蜜香的尾韻，我分送給新認識的法國朋友吃，居然收到“這是我人生吃過最好吃的餅乾”的浮誇簡訊…果然台灣的紅茶是最強的外交禮品！</p><p>&nbsp;</p><h2>厚燒奶油酥餅 (Galette au beurre) 特色</h2><p><strong>使用手邊可取得的優質奶油</strong><br>這款餅乾的靈魂無疑是奶油，奶油的品質、乳脂含量、香氣、是不是發酵奶油…等等跟餅乾最後的好吃程度息息相關。<br>&nbsp;</p><p><strong>厚度比一般餅乾厚，餅乾外酥內潤</strong><br>太薄的酥餅很容易烤熟後變得太乾，增加厚度烤完外表酥、中心仍有水分，吃起來潤潤的不會卡喉嚨。但是烘烤的溫度必須降低、拉長拷焙時間才能將餅乾徹底烤熟，烤出奶油的香氣。<br>&nbsp;</p><p><strong>邊緣沾滿粗砂糖，閃亮亮又卡滋卡滋的</strong><br>這次實驗了好多種糖，一般砂糖、二號砂糖(黃糖)、細冰糖都實際烤過，才找到最適合的種類：粗砂糖 (coarse white sugar) 。烤完有 bling bling 的光澤，有點粗有不會太粗（？）的顆粒感，帶給餅乾喀滋喀滋的甜蜜蜜口感，兼顧外觀跟美味的裝飾方式。<br>&nbsp;</p><p><strong>原味的加點鹽提味、紅茶口味清香又解膩</strong><br>原味的奶油要加點鹽，吃起來才有層次、平衡甜度，茶類的選用台灣的紅玉紅茶粉，可以吃出紅茶本身的特殊果香味，我自己很愛茶餅乾，可用不同的茶粉變化口味～</p>', '2024-05-18 16:43:18', '2024-05-18 16:43:18', 1, '餅乾', 0, 0),
(19, 4, '經典巴黎布雷斯特泡芙：含菠蘿泡芙、榛果帕林內、慕斯林醬作法', '<figure class=\"image\"><img style=\"aspect-ratio:864/1080;\" src=\"/images/blog/article/30643ee4-6639-41d4-89f1-0411954fddd6.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>巧兒灶咖第一次接外燴訂單！訂單總共是<strong>36顆巴黎布雷斯特泡芙 (Paris-Brest)&nbsp;＋50片法國覆盆子果醬餅</strong>～～<br>幾年前搬進這個家後，我們一直跟前屋主Lisa保持聯繫，Lisa是我遇過對房子最了解也最熱情的人了，每次遇到房子的大小事漏水啊、冷暖氣怎麼維護、露台維修…萬事都問她，問到變朋友（笑），所以今年當她私下透露她計畫在6月初為老婆Stephanie的隆重的50歲生日籌備驚喜派對，問我是否可以當甜點擔當時，我秒回：當然沒問題！<br><br>這次的party以雞尾酒形式舉辦，邀請親朋好友35位，而且整件事都必須秘密進行，理想的安排是：壽星“被安排”白天去沙龍剪髮，晚上一進家門整個家佈置成派對的設置，親朋好友齊聲大喊Happy Birthday!</p><p>問題是她們倆恩愛100分整天形影不離，要秘密進行聯繫外燴公司、怎麼佈置、邀請35位朋友還有各種派對安排的零碎雜事，要瞞著這麼多好幾個月不被發現真的很難……Lisa「指定」我們不能用電話、簡訊聯繫，只能用秘密的email進行討論，一開始覺得是她開玩笑，進行後發現她非常認真（緊張）<br><br>她連老婆最愛吃的甜點的品項都知道喔：巴黎布雷斯特泡芙跟法國眼鏡餅（覆盆子果醬餅乾），凹～～太貼心，滿滿的愛啊….<br><br>驚喜派對以雞尾酒形式呈現，請專業的外燴公司catering，想像優雅的小口吃東西搭配香檳、紅酒電影畫面，因此甜點要也符合適合一手拿、小口小口吃完才行，不能很狼狽咬一口餡料擠得滿手….這個可不行。<br><br>壽星最愛的「<strong>巴黎布雷斯特泡芙</strong>」是以巴黎 (Paris) 到布雷斯特 (Brest) -巴黎自行車賽命名，獨特圓形形狀代表著自行車的車輪，傳統的尺寸滿大的，通常是4-6人份一起分享。因次這次有雙重挑戰是<strong>『做出經典榛果巴黎布雷斯特泡芙』＆「縮小做成一人份版本』</strong>，然後完美的重複36次，而且泡芙不太能放，最好是現做現吃，所以還有時間限制…OMG!<br>別擔心我沒忘記法式覆盆子果醬餅乾，礙於篇幅有限就留給下一篇囉。</p>', '2024-05-18 16:45:15', '2024-05-18 16:45:15', 1, '泡芙,點心,教學', 0, 0),
(20, 5, '水晶芋泥布丁蛋糕 (Taro Pudding Cake)，媽媽的最愛！', '<figure class=\"image\"><img style=\"aspect-ratio:864/1080;\" src=\"/images/blog/article/28281eeb-17a1-46da-bb48-4d5836bfbe5d.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>Happy Mother’s Day! 特別為母親節設計的芋頭口味蛋糕，芋頭搭布丁是台灣人都熟悉的天作之合，這款人氣蛋糕『<strong>水晶芋泥布丁蛋糕』(Taro Pudding Cake)</strong>，外觀靈感來自花蓮一家烘焙店，實驗了超過50顆雞蛋的食譜超級好吃，絕對可以滿足芋頭控～～</p><p>蛋糕體是輕柔鬆軟的戚風蛋糕，夾入厚厚一層、超滑順的牛奶芋泥，<br>還有Q彈入口即化的香草布丁，亮到可以讓你補妝的水晶咖啡凍….<br>一口吃下去，有蛋糕、芋泥、布丁、咖啡凍，四重口感、彼此互補加分，怎麼吃都吃不膩的美味combo啊<br><br>連平常怕芋頭怕得要死的小當家，居然默默地吃完芋泥一口都沒剩，<br>還跟我說這是他吃過最好吃的芋頭蛋糕，伸手請我再切一片<br>我以為他頭腦燒壞了，不敢置信他可以接受芋頭!!!<br>原本我們家愛芋頭 vs. 恨芋頭的兩邊陣營勢力相當，看來有一邊已經倒戈了，哇哈哈哈 &nbsp;<br><br>不論是我媽媽還是啟蒙我走上烘焙之路的婆婆珍妮佛，<br>她們最愛的蛋糕口味剛好都是芋頭，做這款蛋糕時會一邊做一邊想念她們 🙂&nbsp;<br><br><strong>蛋糕困難程度&nbsp; – 中等</strong><br>這款蛋糕雖然元素比較多但是每一層困難度不高，遇到有吉利丁甜點呢有點在加熱 – 冷卻 – 加熱之間循環，一下加熱一下要等降溫，是技術含量不高，需要多一點耐心的甜點。<br>新手別擔心，影片跟文章內有很多細節的提醒，照著做就會成功的！<br><br>不一定要等母親節才能做啦，任何時候想吃芋頭蛋糕的話都可以想到它，蛋糕自帶美肌模式，什麼都不用裝飾已經夠美了，很適合當生日蛋糕或是其他慶祝場合，驚豔親朋好友 ✨</p><p>&nbsp;</p><h2>水晶芋泥布丁蛋糕特色</h2><p>只需要一個慕斯圈，不用其他額外模具</p><p>15分鐘出爐戚風蛋糕，組織細緻、濕潤、非常柔軟</p><p>減糖、食材單純、沒有鮮奶油抹面，是一款熱量相對較低、很適合送媽媽的蛋糕</p><p>免烤布丁層的配方超好吃！完全沒有蛋腥味，一點都不輸水浴法布丁（例如：<a href=\"https://ciao.kitchen/creme-caramel-cake/\">焦糖布丁蛋糕</a>）～可以用在其他蛋糕上當夾層喔。</p><p>不需要額外裝飾，水晶咖啡凍亮到可以照鏡子</p><p>經過多次測試的吉利丁用量，不多不少讓整體口感非常水嫩Q彈</p>', '2024-05-18 16:47:28', '2024-05-18 16:47:28', 1, '蛋糕,教學', 0, 0),
(21, 5, '10分鐘內完成最讚的巧克力軟餅乾 (海鹽巧克力、覆盆子、棉花糖S’more)', '<figure class=\"image\"><img style=\"aspect-ratio:1080/607;\" src=\"/images/blog/article/0d3e9b4f-90fd-4421-9c62-cee0a3f97e90.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>你是軟餅乾 (soft, chewy cookies) 的愛好者嗎？這篇<strong>3種巧克力軟餅乾集合（Chocolate Chip Cookies, 3 Ways)</strong> 食譜一定要收藏！！</p><p>自從吃過 <a href=\"https://ciao.kitchen/brownie-cookies/\">完美裂紋布朗尼軟餅乾</a> 後，我對軟餅乾外脆內部軟的口感念念不忘。分享我覺得簡單卻超級、超級、好吃的巧克力軟餅乾，最適合沾著牛奶一起吃🥛，吃一吃牛奶還會變甜唷。<br><br>萬用的榛果奶油麵團，從頭到尾10分鐘內完成卻味道深厚，如果你跟我一樣每次去Subway都忍不住帶一塊軟餅乾的話，那這款餅乾是它的turbo版，好吃太多倍了！<br>不想一次吃完的話，影片最後有如何冷凍保存餅乾生麵團方式，讓你放心大量製作，不用一次烤一盤整盤，想吃幾顆就烤幾顆，享受餅乾最新鮮、最讚的口感。</p><figure class=\"image\"><img style=\"aspect-ratio:864/1080;\" src=\"/images/blog/article/da84fcca-9293-4fd0-a9fc-d79108a1265f.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>', '2024-05-18 16:49:06', '2024-05-18 16:49:06', 1, '餅乾,教學', 0, 0),
(22, 5, '美式檸檬派(Key Lime Pie)，只要會攪拌就會成功！', '<figure class=\"image\"><img style=\"aspect-ratio:864/1080;\" src=\"/images/blog/article/eb36a7a7-a6cc-459b-aafb-184153dc0282.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>做過好幾種法式檸檬塔之後（<a href=\"https://ciao.kitchen/lemon-rose-tart/\">酸酸甜甜玫瑰檸檬塔 </a>/ <a href=\"https://ciao.kitchen/meringue-lemon-tart/\">五星級蛋白霜檸檬塔</a> / <a href=\"https://ciao.kitchen/breton-lemon-tart/\">布列塔尼酥餅檸檬塔</a> ) ，這次來做他們的美國表弟— <strong>美式檸檬派 (Key Lime Pie)</strong>！</p><p>使用都是柑橘類家族 (citrus family) 的萊姆，這款美式檸檬派酸酸甜甜、吃起來跟空氣一般輕盈爽口！<br>脆脆的餅乾當基底，配上絲滑、空氣感一吃會快速融化在口中的萊姆餡，還有冰過就像冰淇淋的打發鮮奶油，三種層次融合得好好，會一款很消暑、刺激唾液分泌的萊姆甜點～</p><p>好吃是基本的，都還沒說到美式檸檬派最吸引人的地方呢…<br>那就是它超簡單！<br>製作快速，實際操作時間不到20分鐘，食材也很少。</p><p>不需要有甜點基礎但有想要做個很厲害、有水準的檸檬系甜點嗎？<br>很怕檸檬餡結粒、煮失敗嗎？<br>想要短時間、不流汗做個檸檬派嗎？<br>二話不說，推薦美式檸檬派！一點都不輸法式版本唷！</p>', '2024-05-18 16:50:16', '2024-05-18 16:50:16', 1, '塔派,教學', 0, 0),
(23, 6, '布列塔尼酥餅：原味/巧克力/伯爵茶/抹茶(SABLÉ BRETON)，只要會攪拌就會成功！', '<figure class=\"image\"><img style=\"aspect-ratio:864/1080;\" src=\"/images/blog/article/b49431d2-8092-46d6-b9f4-49d744590b01.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>來自法國的布列塔尼酥餅(Sablés Breton)，或是法式奶油酥餅是一款會吃上癮的餅乾….充滿濃郁焦糖奶油香氣、融化在你口中，外脆內酥的口感，穿插偶爾迸出的鹹味，一兩口就吃完的大小，會吮指回味的美味!!<br>這麼美味的餅乾只需要少少幾種食材，製作簡單快速！</p><p>布列塔尼酥餅隨著奶油特性餅乾的風味也會跟著略有變化，剛烤完外酥內軟，放置一夜回潮後會更濕潤，只有自己做才吃得到每個階段的變化。</p><p>除了「<strong>原味</strong>」，一次做了「<strong>巧克力、伯爵茶、抹茶紅豆</strong>」，共四種口味，每一款都好好吃！<br>為了讓操作更簡單方便，這次的做法經過設計，備好一種麵糊基底後，接下來做口味變化，<br>先從顏色最淺的原味開始，一路做到最深的可可口味，這樣可以少洗很多容器、工具、一支刮刀用到底。</p><p>一盤出爐四種口味，裝盒後就像高級餅乾禮盒，嗯～拿來中秋送禮也不錯吼？</p><p>&nbsp;</p><h2>什麼是布列塔尼酥餅 (Sablés Breton)？</h2><p>布列塔尼餅乾源自於法國西北部布列塔尼地區(Brittany)，以盛產高品質的<strong>鹹味奶油</strong>著名。跟其他地區的奶油的差異是布列塔尼的奶油加入頂級的海鹽：葛宏德（Guérande）鹽之花，延長奶油的保鮮期限。<br>Sablé在法文的意思是沙礫狀，Breton指的是布列塔尼地區，所以直翻是沙子餅乾😅，不是很有食慾的翻譯，卻很精確傳神地形容餅乾的吃起來的感覺。<br>布列塔尼餅乾跟一般奶油餅乾類似，但是配方使用新鮮的蛋黃，不是全蛋，讓餅乾味道更濃郁。<br>因為食材少，作法直接，所以材料的風味對餅乾最後的風味有關鍵的影響，如果可以的話，盡量使用品質好的發酵奶油，絕對值得！</p><p>布列塔尼酥餅變化非常多，除了可以做出不同口味的餅乾外，也可以跟餡料搭配成為蛋糕或是塔的基底，像是這款“<a href=\"https://ciao.kitchen/breton-lemon-tart/\">布列塔尼檸檬塔</a>”作法。</p><p>&nbsp;</p><figure class=\"image\"><img style=\"aspect-ratio:864/1080;\" src=\"/images/blog/article/8e60c02d-67b4-4f9f-9f81-4cb8d2b36ac2.jpg\" width=\"100%\" height=\"100%\"></figure><h2><strong>Ciao! Tips 布列塔尼酥餅製作技巧</strong></h2><p>為了找出最好吃的配方我實驗了很多、很多顆的餅乾，不管是配方、烤法、裝飾上，每一環節都有需要注意的小細節，這邊跟你分享我的體會，記得也要看影片內最後有“翻車事故現場”有對照組。</p><ol><li><strong>所有材料回溫：</strong><br><a href=\"https://ciao.kitchen/brown-butter/\">奶油</a>、蛋黃回溫後可以輕鬆乳化（融合），餅乾麵糊不需要過度攪拌，打入過多空氣反而會讓餅乾過度膨脹。</li><li><strong>乾性材料要混合均勻、過篩：</strong><br>這個食譜有使用到少許泡打粉，要跟麵粉先混合均勻，像是茶類口味（抹茶粉、伯爵茶粉）都需要過篩。</li><li><strong>最好選擇鹽之花或是粗鹽：</strong><br>濃郁系餅乾最需要一點鹹味平衡！這款餅乾的其中亮點就是偶爾吃到鹽粒，鹽之花是片狀的質地、鹹味清淡特別適合，甜甜鹹鹹的風味交替。</li><li><strong>餅乾厚度約 1cm：</strong><br>跟一般餅乾厚度約0.2~0.3cm 不太一樣，這款餅乾的特色是”厚度要夠“，拉長時間烤焙下奶油會有烤出一種焦糖香氣，並且凸顯酥酥脆脆的口感。<br>但也不能太過分厚啦，1cm的麵團厚度前提下已需要烘烤25分鐘，如果超過一公分厚度的話會需要烤更久，不然會出現中心不熟、烤出來不夠酥、香氣不夠。</li><li><strong>擦蛋黃、用叉子劃上十字做出經典造型：</strong><br>傳統的裝飾是在餅乾入爐前，表面擦蛋黃再用叉子畫十字，是它的招牌造型。我的版本是蛋黃中加入一點蜂蜜，提升焦糖化反應跟香氣。<br>還有一個心機小技巧，不只刷一次蛋黃液，是刷兩次～～～這樣烤完光澤更亮、更好吃。影片的“翻車事故現場”有比較刷一次跟刷兩次的成品，可以看到明顯差異。</li><li><strong>等餅乾放涼後再脫模​​：</strong><br>餅乾剛烤完非常脆弱，如果移動的話很容易崩角。等至少10分鐘，沒有溫度之後再脫模。有卡在塔圈上的話，用小刀轉一圈即可順利脫模。</li></ol><p>&nbsp;</p>', '2024-05-18 16:54:30', '2024-05-18 16:54:30', 1, '餅乾,教學,馬卡龍', 0, 0),
(24, 7, '吃過最好吃的經典美式蘋果派', '<figure class=\"image\"><img style=\"aspect-ratio:1620/1080;\" src=\"/images/blog/article/0bd242a8-3b08-4360-8c4f-7ff28810588e.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>這幾個月都在忙工作室裝潢的關係，今年的秋天感覺來得特別快～～<br>完全沒時間賞楓，楓葉就已經下雨下得很兇掉光光了，哀哀。<br>好險兩週前有跟朋友去摘蘋果，算是有做一件很應景活動😚&nbsp;</p><p>秋天對四季分明的魁北克來說好寶貴，這段時間每個家庭會拼命往外跑，一個週末都不放過，因為大家都知道接下來得忍耐半年零下２０度的黑暗冬季，溫暖的陽光日很短暫要好好把握啊（握拳）</p><p>&nbsp;</p><p>今天分享的<strong>經典美式蘋果派（Apple Pie) </strong>，剛好是用我去蘋果園摘蘋果做的！隨意選了混合品種的蘋果 ex. McIntosh, Spartan, Gold Delicious…，有些偏酸、有些偏甜、有些偏脆，一起做成蘋果派內餡，創造豐富的蘋果風味。</p><p>搭配非常酥脆、很有層次、灑糖的派皮，圍著一圈秋葉造型裝飾，內餡加入肉桂、肉荳蔻、黑糖跟蘋果片混合，長時間烘烤慢慢將蘋果烤透、烤出充滿秋天香氣的多汁焦糖肉桂蘋果餡，烤完圓圓澎澎的派皮造型、亮晶晶的表皮、秋天裝飾圍邊，美到會省不得切…&nbsp;</p><p>酥酥的派皮、濕潤的蘋果內餡，整體搭配起來太好吃了！！是我吃過最好吃的蘋果派。</p>', '2024-05-18 16:56:46', '2024-05-18 16:56:46', 1, '塔派', 0, 0),
(25, 8, '原味戚風＆冰心內餡 【超詳細教學】', '<figure class=\"image\"><img style=\"aspect-ratio:864/1080;\" src=\"/images/blog/article/3bd77fc1-2e80-4aa3-9bd6-d8bca6a966b4.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>突然想吃戚風蛋糕，查了自己的網站，才發現還沒寫過原味戚風的食譜呢～<br>做過抹茶、巧克力、柚子甚至是雙色戚風，戚風蛋糕口味也嘗試了不少，食譜的收藏內卻獨缺最基礎實用的<strong>“原味戚風 (Original </strong><a href=\"https://ciao.kitchen/chiffon-cake-round/\"><strong>Chiffon Cake</strong></a><strong>)“</strong>。</p><p>想說現在因為疫情不方便常出門，不過像是麵粉、雞蛋、牛奶這些常備食材應該還有，那就用這些最常見的材料來做一顆濕潤、細緻、Q彈的原味戚風蛋糕吧。</p><p>&nbsp;</p><h4><strong>原味戚風變化版＋冰心優格鮮奶油內餡</strong></h4><p>這次本舖開的這帖炎夏消暑藥方：冰心優格鮮奶油餡戚風蛋糕，簡單的餡料注入蛋糕裡就升級成了”自帶餡料“的冰心戚風囉~很適合夏天飯後享用！</p><p>清爽的優格鮮奶油餡灌在蛋糕裡面，一方面維持蛋糕的完整，比較容易運送、冷藏。如果不加頂部裝飾，一整顆蛋糕可以包起來放冰箱，連盒子都不用，也不怕在冰箱一不小心會砍到鮮奶油裝飾（誒，大家都發生過吧）</p><p>另一方面這也是一個幫戚風養顏美容的保濕方法，如果不小心把戚風烤過頭了太乾、或是冷藏太久慢慢變乾，注入優格餡的蛋糕體還是可以回春的喔，多了一道保險，冰心戚風每一口都是一半蛋糕、一半是鮮奶油餡，永保濕潤、超級作弊好吃!!</p>', '2024-05-18 16:58:20', '2024-05-18 16:58:20', 1, '蛋糕,餅乾,點心,教學', 0, 0),
(26, 1, '金莎榛果巧克力蛋糕 (Ferrero Rocher Cake)', '<figure class=\"image\"><img style=\"aspect-ratio:864/1080;\" src=\"/images/blog/article/84a3c81c-7525-406f-8667-8f55864e1af9.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>以經典金莎巧克力（Ferrero Rocher) 為靈感的蛋糕<br>濕潤綿密的巧克力蛋糕，夾入微甜黑糖鮮奶油餡，外層是脆脆的榛果巧克力淋面，<br>完全像在吃金莎巧克力，但口感更豐富，好吃極了！</p><p>金莎巧克力是我初戀的味道（羞)&nbsp; 😚<br>偷偷透露一下小學時期我暗戀同班的男同學，<br>西洋情人節前一天我用努力存了一週的零用錢到超商買了一盒金莎巧克力，<br>隔天趁下課偷塞在他抽屜內（還得顧前顧後確保沒人看到，明明就是給東西但超～～緊張，怕別人會誤會我在偷東西….XDD）&nbsp;<br>小時候我實在是太害羞了，不敢讓他知道，只敢默默在遠處看他收到金莎巧克力滿臉困惑的樣子<br>所以之後每次經過超市看到在展示架的金莎巧克力，這段回憶都讓我想到這段純純的回憶，哈哈哈</p><p>咳咳，回歸正題這款我想做很久的「金莎榛果巧克力蛋糕」 (Ferrero Rocher Cake/ Chocolate Hazelnut Cake)，<br>雖然說很應景即將到來的情人節，不過老實說巧克力＋榛果的口感組合，<br>感覺一年四季、生日送禮都滿適用的！<br><br>遇到鮮奶油夾層蛋糕難免會讓烘焙新手卻步，以難度來說這款蛋糕我覺得它落在「中等」，因為大家最害怕的地方“鮮奶油抹面”可以隨便抹抹（哈），反正最後都會被淋面給蓋過去。</p><p>&nbsp;</p><figure class=\"image\"><img style=\"aspect-ratio:864/1080;\" src=\"/images/blog/article/d2aeecb5-1dad-4584-844d-146222b437c6.jpg\" width=\"100%\" height=\"100%\"></figure><p>&nbsp;</p><p>金莎榛果巧克力蛋糕切面圖</p>', '2024-05-18 17:00:17', '2024-05-18 17:00:17', 1, '蛋糕', 0, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `article_comment`
--

CREATE TABLE `article_comment` (
  `article_comment_id` int(6) NOT NULL,
  `article_id_fk` int(6) NOT NULL,
  `user_id_fk` int(6) NOT NULL,
  `article_comment_content` varchar(600) NOT NULL,
  `article_comment_createtime` datetime NOT NULL DEFAULT current_timestamp(),
  `article_comment_status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `article_comment`
--

INSERT INTO `article_comment` (`article_comment_id`, `article_id_fk`, `user_id_fk`, `article_comment_content`, `article_comment_createtime`, `article_comment_status`) VALUES
(1, 4, 7, 'ㄐㄐ', '2024-05-18 12:11:22', 1),
(2, 4, 7, 'ㄐㄐ', '2024-05-18 12:14:01', 1),
(3, 4, 7, 'ㄐㄐ', '2024-05-18 12:16:31', 1),
(4, 4, 4, 'r r ', '2024-05-18 12:23:52', 1),
(5, 13, 1, '這麼簡單 我也會', '2024-05-18 17:08:36', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `article_favorite`
--

CREATE TABLE `article_favorite` (
  `article_favorite_id` int(6) NOT NULL,
  `user_id_fk` int(6) NOT NULL,
  `article_id_fk` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `article_image`
--

CREATE TABLE `article_image` (
  `article_image_id` int(6) NOT NULL,
  `article_id_fk` int(6) NOT NULL,
  `article_image_filename` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `cart_item`
--

CREATE TABLE `cart_item` (
  `cart_item_id` int(6) NOT NULL,
  `user_id_fk` int(6) NOT NULL,
  `product_id_fk` int(6) DEFAULT NULL,
  `product_name` varchar(50) DEFAULT NULL,
  `product_subtitle` varchar(50) DEFAULT NULL,
  `product_price` int(6) DEFAULT NULL,
  `product_count` int(6) DEFAULT NULL,
  `course_address` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `course_id_fk` int(6) DEFAULT NULL,
  `course_name` varchar(50) DEFAULT NULL,
  `course_price` int(6) DEFAULT NULL,
  `course_count` int(6) DEFAULT NULL,
  `course_date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `custom_size` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `custom_layer` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `custom_flavor` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `custom_decor` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `custom_price` int(6) DEFAULT NULL,
  `custom_count` int(6) DEFAULT NULL,
  `custom_img` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `cart_item`
--

INSERT INTO `cart_item` (`cart_item_id`, `user_id_fk`, `product_id_fk`, `product_name`, `product_subtitle`, `product_price`, `product_count`, `course_address`, `course_id_fk`, `course_name`, `course_price`, `course_count`, `course_date`, `custom_size`, `custom_layer`, `custom_flavor`, `custom_decor`, `custom_price`, `custom_count`, `custom_img`) VALUES
(114, 4, 10824, '春綠 ‧ 輕抹慕斯蛋糕', '6吋', 1080, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(115, 4, 10825, '達克瓦茲好茶禮盒', '', 620, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(116, 4, 10831, '伯爵茶磅蛋糕(1入)', '', 450, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(117, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '9吋', '4層', '抹茶', '橙片咖啡', 1080, 1, NULL),
(118, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '9吋', '4層', '巧克力', '橙片咖啡', 1150, 1, 'http://localhost:3005/customize/4_2024-05-18.jpg'),
(119, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '3層', '抹茶', '橙片咖啡', 20, 1, 'http://localhost:3005/customize/4_2024-05-18.jpg'),
(120, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '9吋', '3層', '巧克力', '綜合莓果', 1100, 1, 'http://localhost:3005/customize/05192024135635.jpg'),
(121, 10, 10834, '黃澄澄檸檬派', '6吋', 620, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(126, 10, 10839, '純粹玫莓 優格乳酪蛋糕', '6吋', 659, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(127, 10, 10839, '純粹玫莓 優格乳酪蛋糕', '9吋', 1040, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(128, 11, 10825, '達克瓦茲好茶禮盒', '', 620, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `category`
--

CREATE TABLE `category` (
  `category_id` int(6) UNSIGNED NOT NULL,
  `category_name` varchar(30) NOT NULL,
  `category_status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_status`) VALUES
(1, '課程', 1),
(2, '塔派甜點', 1),
(3, '蛋糕', 1),
(4, '餅乾', 1),
(5, '精緻點心', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `category_sub`
--

CREATE TABLE `category_sub` (
  `subcategory_id` int(6) UNSIGNED NOT NULL,
  `category_id_fk` int(6) NOT NULL,
  `subcategory_name` varchar(30) NOT NULL,
  `subcategory_status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `category_sub`
--

INSERT INTO `category_sub` (`subcategory_id`, `category_id_fk`, `subcategory_name`, `subcategory_status`) VALUES
(1, 1, '塔派甜點', 1),
(2, 1, '蛋糕', 1),
(3, 1, '餅乾', 1),
(4, 1, '精緻甜點', 1),
(5, 2, '塔', 1),
(6, 2, '派', 1),
(7, 3, '戚風蛋糕', 1),
(8, 3, '千層蛋糕', 1),
(9, 3, '乳酪蛋糕', 1),
(10, 3, '提拉米蘇', 1),
(11, 3, '幕斯蛋糕', 1),
(12, 3, '磅蛋糕', 1),
(13, 4, '達克瓦茲', 1),
(14, 4, '曲奇餅乾', 1),
(15, 4, '馬卡龍', 1),
(16, 5, '巧克力', 1),
(17, 5, '泡芙', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `class`
--

CREATE TABLE `class` (
  `class_id` int(11) NOT NULL,
  `class_name` varchar(50) NOT NULL,
  `class_description` varchar(600) NOT NULL,
  `class_description_full` varchar(600) DEFAULT NULL,
  `class_category` varchar(50) DEFAULT NULL,
  `teacher_id_fk` int(11) NOT NULL,
  `class_location` varchar(50) NOT NULL,
  `class_price` int(11) NOT NULL,
  `class_enroll_start` datetime NOT NULL,
  `class_enroll_end` datetime NOT NULL,
  `class_start_time` datetime NOT NULL,
  `class_end_time` datetime NOT NULL,
  `class_status` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `class_commet`
--

CREATE TABLE `class_commet` (
  `class_commet_id` int(11) NOT NULL,
  `class_id_fk` int(11) NOT NULL,
  `user_id_fk` int(11) NOT NULL,
  `class_commet_content` varchar(300) NOT NULL,
  `class_commet_status` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `class_favorite`
--

CREATE TABLE `class_favorite` (
  `class_favorite_id` int(11) NOT NULL,
  `user_id_fk` int(11) NOT NULL,
  `class_id_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `class_image`
--

CREATE TABLE `class_image` (
  `class_image_id` int(11) NOT NULL,
  `class_id_fk` int(11) NOT NULL,
  `product_image_filename` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `class_reply`
--

CREATE TABLE `class_reply` (
  `class_reply_id` int(11) NOT NULL,
  `class_comment_id_fk` int(11) NOT NULL,
  `class_reply_text` varchar(300) NOT NULL,
  `class_reply_createtime` datetime NOT NULL,
  `class_reply_status` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `class_teacher`
--

CREATE TABLE `class_teacher` (
  `teacher_id` int(10) UNSIGNED NOT NULL,
  `teacher_img` varchar(50) DEFAULT NULL,
  `teacher_name` varchar(50) NOT NULL,
  `teacher_phone` char(50) NOT NULL,
  `teacher_email` varchar(200) NOT NULL,
  `teacher_expertise` mediumtext NOT NULL,
  `teacher_intro` mediumtext NOT NULL,
  `teacher_status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `coupon`
--

CREATE TABLE `coupon` (
  `coupon_id` int(6) NOT NULL,
  `coupon_name` varchar(50) NOT NULL,
  `coupon_discount_amount` int(6) NOT NULL,
  `coupon_discount_percentage` decimal(6,0) NOT NULL,
  `coupon_start_date` datetime NOT NULL DEFAULT current_timestamp(),
  `coupon_end_date` datetime NOT NULL DEFAULT '2030-12-31 00:00:00',
  `coupon_min_price` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `course`
--

CREATE TABLE `course` (
  `course_id` int(6) NOT NULL,
  `course_name` varchar(50) NOT NULL,
  `course_description` varchar(600) NOT NULL,
  `course_description_full` mediumtext DEFAULT NULL,
  `course_category` varchar(50) DEFAULT NULL,
  `teacher_id_fk` int(6) NOT NULL,
  `course_location` varchar(50) NOT NULL,
  `course_price` int(6) NOT NULL,
  `course_amount` int(11) NOT NULL,
  `course_enroll_start` datetime NOT NULL DEFAULT current_timestamp(),
  `course_enroll_end` datetime NOT NULL DEFAULT current_timestamp(),
  `course_start_time` datetime NOT NULL DEFAULT current_timestamp(),
  `course_end_time` datetime NOT NULL DEFAULT current_timestamp(),
  `course_status` tinyint(1) NOT NULL DEFAULT 1,
  `course_teacher` varchar(4000) NOT NULL,
  `course_teacher_description` varchar(4000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `course`
--

INSERT INTO `course` (`course_id`, `course_name`, `course_description`, `course_description_full`, `course_category`, `teacher_id_fk`, `course_location`, `course_price`, `course_amount`, `course_enroll_start`, `course_enroll_end`, `course_start_time`, `course_end_time`, `course_status`, `course_teacher`, `course_teacher_description`) VALUES
(1, '春蒔蛋糕', '✨被稱為全台10間高人氣蛋糕店！夢幻甜點店！</br>\n✨基礎蛋糕裝飾、擠花課程</br>\n✨也適合想進修抹面蛋糕的朋友哦', '被稱為全台10間高人氣蛋糕店！夢幻甜點店！</br>\n隱身北車老宅的甜點工作室-PETIT CHOU PÂTISSERIE 小隻甜點室，是由Wendy老師 和小馬老師共同主理，兩人豐富的甜點經歷，讓隱身老宅的工作室，有著紮實的甜點功力！</br>\n</br>\n每次開團總是爆單！每次開課總是滿班！</br>\n就可以知道小隻老師們的手藝與驚人魅力啊！</br>\n此次5月課程推出全新「春蒔蛋糕」，豐富層次有桃子香緹、綜合莓果香緹、法國布里起司乳酪餡還有小米酒漬煮甜桃，每一個層次都是如此迷人，當然，外表更是吸睛啊～</br>\n想要學基礎抹面的朋友人，千萬別錯過這次課程', '蛋糕', 8, '桃園市中壢區新生路421號', 4200, 30, '2024-06-01 10:53:36', '2024-06-08 10:53:36', '2024-06-24 12:30:00', '2024-06-24 17:30:00', 1, 'Wendy', '甜點製作超過7年資歷，</br>\n\n曾任職於各家知名法式甜點廚房、點心房、西點央廚，具備完整甜點製作經驗</br>\n\n現為PETIT CHOU 小隻甜點室主理人'),
(2, '母親節愛心蛋糕', '✨低糖奶油霜蛋糕<br>\r\n✨動手製作屬於自己的專屬蛋糕<br>\r\n✨儀式感滿滿', 'Anna將帶來母親節愛心蛋糕</br>\n#顏值與風味擔當！ #蛋糕不僅美更有愛</br>\n#表達滿滿心意的祝福</br>\n</br>\n不同以往造型蛋糕使用的美式蛋糕，</br>\nAnna老師使用獨特的棉花蛋糕清爽柔軟綿密 ，</br>\n擁有像雲朵一樣的口感☁️</br>\n加上法國發酵奶油自製的低糖奶油霜🌹</br>\n裝飾上秘密花園般的奶油擠花</br>\n可自選想要的顏色與花樣</br>\n大家一起來玩出專屬自己的蛋糕吧！', '蛋糕', 8, '桃園市中壢區新生路421號', 3000, 30, '2024-06-01 10:53:36', '2024-06-08 10:53:36', '2024-06-23 12:30:00', '2024-06-23 17:30:00', 1, 'Anna', '錵筠烘焙工作坊 主理人'),
(3, '茉莉花芒果夏洛特&琉璃羅勒青蘋果', '✨不想抹蛋糕的課</br>\n✨高顏值與口感兼具</br>\n✨不使用任何花嘴也能擠出水水的照型</br>\n', '蛋糕真的是一種神奇的食物，在心情不好的時候，看到好吃的蛋糕，瞬間心情就會好起來！</br>\n特別是對於忙碌的上班族來說，夏洛特蛋糕簡直就是治癒系甜品~</br>\n以台灣愛文芒果搭配柔滑酸甜的百香果奶油，柔軟細膩的和三盆戚風蛋糕以及茉莉花鮮奶油的搭配。</br>\n芒果酸酸甜甜的味道，混合著清爽濃郁的日本生乳。</br>\n吃再多也不會被膩到，每一口都是甜蜜、美好的味道。小資族們在午休或下午倦怠時來一點，又能滿血復活繼續戰鬥！', '蛋糕', 8, '桃園市中壢區新生路421號', 3600, 30, '2024-06-01 11:00:16', '2024-06-08 11:00:16', '2024-06-08 11:00:16', '2024-06-08 17:00:16', 1, 'Jeffrey 王家承', '🔸2022世界甜點藝術大賽 最佳團隊＆世界第四 （Mondial des Arts Sucrés）</br>  🔸2020法國萊思克盃國王派比賽 總冠軍 （Lescure Galette de Rois Competition）</br>  🔸法國 Candia Professional 品牌大使</br>  🔸feeling 18度c巧克力工房 巧克力西點 研發主廚</br>  🔸volute croissant 品牌創辦人</br>  🔸flafla tutu 法圖甜點空間 品牌共同創辦人</br>  🔸馬來西亞 Royal Baking Academy  巧克力西點 專任講師'),
(4, '夏日芒果夏洛特&芒果奶酪', '✨大家要的慕斯甜點的基礎課</br>\r\n✨新課程報到！</br>\r\n✨芒果季甜點來襲', '腸師有求必應（神燈啊～神燈～🧞）</br>\n\n大家要的慕斯甜點的基礎課</br>\n\n來了！！！！</br></br>\n\n\n\n新手，讓你一次上手！</br>\n\n但是，一樣會讓你雙手、跟腦一起很忙</br>\n\n因為，腸師一樣會掏心掏肺的講很多、寫很多！</br>\n\n\n\n來吧！看到就先搶報名，不然，又要滿了！</br>\n\n教室很美！空間位置很大很舒適！</br>\n\n來看腸師會很舒服！～💕', '蛋糕', 8, '桃園市中壢區新生路421號', 3500, 30, '2024-06-01 11:08:26', '2024-06-08 11:08:26', '2024-06-15 09:00:00', '2024-06-15 13:00:00', 1, '林庚辰', '為甜點而生的男人</br> 一次出走，東京九百個日子的練功，他學品味、玩刀法、練偏執，從日本品川站的飯店廚房出發，</br> 林庚辰捧著青木定治的食譜一道一道、一克一克的試，</br> 回到台灣之後，把每一分學習都用來討你嘴巴的歡心。</br> 日本風格的講究、巴黎甜點店的夢，林庚辰每天早上一步一步的在臺北的菜市場裡實現，</br> 吃他的甜點，你會被台灣的新鮮味道喚醒，馬卡龍裡藏著台灣人對甜點口味的依賴跟固執，</br> 一間為台灣人打造的西方甜點店，他的成品值得你一次又一次的品味。'),
(5, '阿薩姆紅茶蘋果千層', '✨全新課程</br>\r\n✨阿薩姆紅茶蘋果千層</br>\r\n✨掌握千層蛋糕的技巧</br>', '這個月LUNA老師將帶來清爽迷人的「蕾檬露娜柚子千層」～</br>\n從選材到製作，每一步驟都是專業的展現，千層餅皮薄如蝶翼，卡士達餡滑順濃郁，相間交錯在雙手間搖曳生姿，勾勒著舌尖味蕾的激盪碰撞，看似一塊簡單的蛋糕，都堆疊著層層的偏執</br>\n</br>\n—您將會學到—</br>\n✅掌握製作千層蛋糕餅皮要點</br>\n✅內餡製作打發技巧、打發程度</br>\n✅夾層內餡塗抹技巧的掌握</br>\n✅餅皮煎法</br>\n✅千層組裝技巧</br>\n✅千層的保存與食用方式分享</br>\n</br>\n老師手把手掌握要訣，讓每一張餅皮在平底鍋上恣意的滑動延展，煎製出薄而透光又帶有 Q 度的餅皮</br>\n名額有限，千萬不能錯過～', '蛋糕', 8, '桃園市中壢區新生路421號', 3800, 30, '2024-06-01 11:14:10', '2024-06-08 11:14:10', '2024-07-09 12:00:00', '2024-07-09 17:00:00', 1, 'LUNA', 'LUNA HANDMADE DESSERT 的主理人 LUNA，</br>  「甜點」不僅是我的工作，更是讓我親近陌生人的媒介，透過赤裸的表達來傳</br>  遞食材的原貌，將食物完整的呈現是每一位創作者所必備的專業。</br>  相同的配方食譜也會因由操作手法而造成不同的結果，那些看似無害的小細節</br>  都有可能造成極大的差異。課程系統化的學習脈絡讓大家在操作時能夠更加</br>  流暢，減少錯誤率的發生，從「學習專業技法」到「做出完美千層」。'),
(6, '旭夆： 蛋黃酥', '⭐許願課程</br>\r\n⭐蛋黃酥進修</br>\r\n⭐創業、接單必修', '1.月亮。蛋黃酥</br>\n酥口的多層次外皮，散發著濃濃的奶香，呈現出絕無僅有的口感。</br>\n嚴選醃製熟成的鹹蛋黃，搭配慢火熬煮的綿蜜紅豆;先品嚐到蛋黃特有的鹹香風味，</br>\n再感受到甜而不膩的紅豆內饀，一口咬下後，豐富的口感與奶香併發於口中，</br>\n此歀減糖蛋黃酥絕對是中式甜品中，最佳首選。</br></br>\n\n\n2.芝麻。蛋黃酥</br>\n日本進口麵粉烤焙而成的酥鬆餅皮，包裹著香醇的黑芝麻饀，搭配精選整顆飽滿鹹香蛋黃、</br>\n以及小農契作栽培的紅豆，使用歐洲天然無水奶油，一口咬下滿滿濃郁芝麻香氣撲鼻，</br>\n口感多元有層次，不論單吃亦或搭配茶飲，都是最完美的錦上添花。', '精緻點心', 2, '桃園市中壢區新生路421號', 3100, 30, '2024-06-01 14:04:34', '2024-06-09 14:04:34', '2024-06-15 09:30:00', '2024-05-15 15:30:00', 1, '旭夆', '經歷：</br>  高雄餐旅科技大學　講師</br>  台南遠東科技大學　講師</br>  高雄樹德家商　講師</br>  台南市觀光協會　講師</br>  高雄莎士比亞烘焙坊　主廚</br>  台中Latelier du Bon Pain麵包店　副廚</br>  多貝麗國際公司　技術顧問</br>  常春藤烘焙坊　技術顧問</br> </br>   獎項：</br>  2015 世界麵包大賽台灣區代表選拔　優選</br>  2012 達人盃全國競能競賽　銅牌</br>  2011 弘光德麥盃　優勝'),
(7, '法式 紐加糖', '✨免烤箱法式甜點</br>\r\n✨輕·手作法式經典糖果</br>\r\n✨很甜蜜。也可以很美麗動人🥰', '法式 紐加糖 #French nougat 這是一堂免烤箱的#鍊金甜點課😆</br>\n紐加糖是以蛋白、麥牙糖組成，再融入大量的佐料，軟而不甜的糖果令人留下深刻印象 ！製作重點則是溫度的掌握🤫，上</br>\n瑞老師將 #使用新鮮蛋白製作，延伸四款不同基底變化，讓紐加糖有更多不同樣貌的呈現 #彷彿岩壁裡鑲滿著寶石💎</br>\n</br>\n#課程重點</br>\n-獨家軟中帶嚼勁口感掌握</br>\n-低甜度配方大公開</br>\n-不變形、不攤開紐加糖基底</br>\n-精準的溫度掌控</br>\n-獨家堅果料理方式</br>\n-成品可常溫保存4週\n', '精緻點心', 3, '桃園市中壢區新生路421號', 3600, 30, '2024-06-03 14:04:34', '2024-06-13 14:04:34', '2024-06-28 13:30:00', '2024-06-28 17:30:00', 1, '陳上瑞', '經歷：</br>  🇫🇷2018法國雷諾特廚藝學院</br>  🇯🇵2016法國藍帶廚藝學院日本分校</br>  🇹🇼 烘焙食品乙級技術士-蛋糕麵包項</br>  擁有多項證書與證照 品質可靠👍🏻👍🏻👍🏻'),
(8, '義式冰淇淋', '✨全手作義式冰淇淋</br>\r\n✨適合店家、小資本創業</br>\r\n✨掌握冰淇淋綿密滑順的技巧', '⁉️自己做的冰淇淋總是沙沙的、不滑順？</br>\n💯十萬個為什麼將在課堂裡為大家解惑</br>\n⭐️ 不用機器儘靠著雙手與簡單的器具即能完成</br>\n⭐️ 課堂中會講解理論與分組實做多種不同的冰淇淋</br></br>\n\n這堂課你將會學到——</br>\n-冰淇淋的基礎理論介紹</br>\n-手工冰淇淋製作的完整流程</br>\n-天然食材選用與延伸運用</br>\n-掌握冰淇淋綿密滑順的技巧</br>\n-冰淇淋保存注意事項', '精緻點心', 9, '桃園市中壢區新生路421號', 3800, 30, '2024-06-25 14:12:43', '2024-06-30 14:12:43', '2024-06-08 09:00:00', '2024-06-08 13:00:00', 1, '陳上瑞', '經歷：</br>  🇫🇷2018法國雷諾特廚藝學院</br>  🇯🇵2016法國藍帶廚藝學院日本分校</br>  🇹🇼 烘焙食品乙級技術士-蛋糕麵包項</br>  擁有多項證書與證照 品質可靠👍🏻👍🏻👍🏻'),
(9, '手桿可頌 、焦糖杏仁可頌、丹麥機可頌 、心型蝴蝶酥', '🌟想做好可頌要先學會折棉被</br>\r\n🌟方方正正整整齊齊是成功的第一步！</br>\r\n🌟究極手桿可頌</br>', '你在家製作可頌是不是總做不好？</br>\n\n常常因開酥失敗的困擾💔</br></br>\n\n\n\n其實，學任何東西時，</br>\n\n只要想#回到最初的起點，</br>\n\n基礎功一定要打的紮紮實實，就離成功更近一些💯</br>\n\n#烘焙也是</br></br>\n\n\n\n可頌最迷人的地方就是</br>\n\n它的外型體積大，層次極致分明</br>\n\n蓬鬆酥脆帶點彈Q口感，十足的奶油香氣！</br>\n\n#好美好香好想吃😋</br></br>\n\n\n\n在製程中，從食材的選擇開始，麵糰攪打技巧、片油與麵糰溫度與狀態掌握、整形技巧、發酵狀況、烤焙時間溫度的掌握等等，</br>\n都會影響成品膨脹的狀況、油圈的蓬鬆感、可頌輕盈的表現，所有手桿可頌的秘訣，侑璁師傅都將為你一一解鎖🔓，讓你從頭開始學習，絕對精彩絕倫！', '餅乾', 13, '桃園市中壢區新生路421號', 4500, 30, '2024-06-17 14:17:44', '2024-06-24 14:29:59', '2024-06-07 09:30:00', '2024-06-07 16:00:00', 1, '呂侑璁', '經歷：</br>  高雄餐旅科技大學　講師</br>  台南遠東科技大學　講師</br>  高雄樹德家商　講師</br>  台南市觀光協會　講師</br>  高雄莎士比亞烘焙坊　主廚</br>  台中Latelier du Bon Pain麵包店　副廚</br>  多貝麗國際公司　技術顧問</br>  常春藤烘焙坊　技術顧問</br> </br>   獎項：</br>  2015 世界麵包大賽台灣區代表選拔　優選</br>  2012 達人盃全國競能競賽　銅牌</br>  2011 弘光德麥盃　優勝'),
(10, '長崎蛋糕', '✨沒先預訂買不到的長崎蛋糕</br>\r\n✨海內外已開班近200堂</br>\r\n✨真正學習最完美正宗的長崎蛋糕！', '#敲碗許願課程</br>\n#全蛋作法、分蛋做法一次通通都教你！</br>\n#歡迎想進修長崎蛋糕的你👊</br>\n#烘焙新手也沒問題💖</br></br>\n\n吃過阿華師傅做的長崎蛋糕就知道，這蛋糕真的不一樣！</br>\n\n蛋糕體濕潤有彈性，淡淡甜甜的味韻很迷人，散落在底部的耀眼糖晶，脆口香甜相當有層次感，可說是不同於市面上常見的長崎蛋糕！</br>\n\n課程中師傅由兩種製作方法分別切入，從食材的運用、雞蛋的挑選方法、全蛋法&分蛋法的差異、到完整麵糊的攪打工序、比重、烤溫烤時的掌握等所有問題，阿華師傅都會實際製作告訴你該如何解決💪\n', '蛋糕', 19, '桃園市中壢區新生路421號', 6600, 30, '2024-06-18 14:17:44', '2024-06-25 14:17:44', '2024-07-03 09:00:00', '0000-00-00 00:00:00', 1, '龔冠華', '經 歷：台南知名「安堤生烘焙」主廚</br>             東客麵包，大億麗緻點心房，日本鳥越學院研習'),
(11, '聖托佩波士頓派、楊枝甘露、萊姆葡萄達克瓦茲、游牧蜂蜜費南雪', '✨一次學到四款經典法式甜點</br>\r\n✨超精美甜點絕對不能錯過', 'WUnique Pâtisserie 法式甜點</br>\n這次，無二 Tim主廚，精選四款超明星店等級級法式甜點，從最近火紅的限定版聖托佩波士頓派！（第一次公開教授！），</br>\n到盛夏店裡最被瘋狂訂購熱銷的「楊枝甘露」，搭配上二款口味迷人的法式常溫甜點「萊姆葡萄達克瓦茲」、「游牧蜂蜜費南雪」！</br></br>\n\n每一款的食譜、製作方式、重點、訣竅，Tim主廚將不藏私大方分享，透過主廚對食材的深入瞭解，透過法式手法的演繹，讓人驚喜連連，</br>\n不僅是視覺上的美，加上味覺上的享受，是不是很想體驗一下屬於無二的魅力呢?</br>\n這場夏季首場的WUnique Pâtisserie 吳一無二法式甜點，精彩萬分！</br>\n歡迎個人工作室、或是在家diy的每一個想做出獨一無二甜點的你，來上這堂課，現場實作、主廚現場回饋你所有問題！', '蛋糕', 8, '桃園市中壢區新生路421號', 4500, 30, '2024-06-09 14:54:44', '2024-06-14 14:54:44', '2024-06-24 09:30:00', '2024-06-24 16:00:00', 1, 'Tim', '經歷:</br>  法國巴黎Ferrandi廚藝學校國際班第一名畢業</br>  巴黎米其林三星餐廳Ledoyen 實習生</br>  巴黎甜點店Le petite rose 實習生'),
(12, '常溫餅乾2.0 酥 鬆 脆 鹹甜餅乾教科書', '✨腦師全新課程來囉~</br>\r\n✨超強甜點課程</br>\r\n✨一次學12款餅乾</br>\r\n✨餅乾知識大全！', '御菓子花雨。okashi Kau 林庚辰  腦師的#全新課程── 《常溫餅乾2.0 酥鬆脆鹹甜餅乾教科書》強勢登場！🎉🎉</br>\n有上過腦師餅乾+常溫蛋糕課程的同學們，想必有深刻瞭解到，課程中有滿滿的烘焙知識與理論🈵，在教室更是連開近30班的熱門課程！</br></br>\n\n在新課程 《常溫餅乾2.0 酥鬆脆鹹甜餅乾教科書》中，這堂課腦師會教你──</br>\n✔️  餅乾的製作理論</br>\n✔️  餅乾食材組成及特性</br>\n✔️  餅乾的做法變化</br>\n✔️  掌握餅乾脆硬酥鬆完美配方比</br>\n✔️  餅乾成品失敗原因及調整</br>\n✔️  餅乾口感及風味調整', '餅乾', 1, '桃園市中壢區新生路421號', 3500, 30, '2024-06-10 14:54:44', '2024-06-17 14:54:44', '2024-07-23 09:30:00', '2024-07-23 15:30:00', 1, '林庚辰', '為甜點而生的男人</br> 一次出走，東京九百個日子的練功，他學品味、玩刀法、練偏執，從日本品川站的飯店廚房出發，</br> 林庚辰捧著青木定治的食譜一道一道、一克一克的試，</br> 回到台灣之後，把每一分學習都用來討你嘴巴的歡心。</br> 日本風格的講究、巴黎甜點店的夢，林庚辰每天早上一步一步的在臺北的菜市場裡實現，</br> 吃他的甜點，你會被台灣的新鮮味道喚醒，馬卡龍裡藏著台灣人對甜點口味的依賴跟固執，</br> 一間為台灣人打造的西方甜點店，他的成品值得你一次又一次的品味。'),
(13, '網紅義式甜甜圈', '✨INS風</br>\r\n✨義式甜甜圈</br>\r\n✨一次學會五款內餡', '柔軟香甜的灌餡甜甜圈</br>\n國內外流行的新組合，五種經典創意。</br></br>\n\n優格種基底麵團，讓麵包柔軟帶淡淡香氣</br>\n法式榛果帕林內巧克力、焦糖卡士達、</br>\n鹹蛋黃卡士達、抹茶與紅豆、</br>\n奶油霜夾心水果甜甜圈</br></br>\n\n#這堂課將學會</br>\n-優格種甜甜圈麵團（共同實作）</br>\n-主廚香草卡士達醬（示範）</br>\n-鹹蛋黃卡士達醬（示範）</br>\n-法式榛果帕林內（示範）</br>\n-法式苦甜巧克力醬（示範）</br>\n-抹茶卡士達（實作）</br>\n-優格香草乳霜（示範）', '麵包', 18, '桃園市中壢區新生路421號', 3000, 30, '2024-05-23 15:05:28', '2024-06-01 15:05:28', '2024-06-20 09:30:00', '2024-06-20 13:30:00', 1, '王俊之', '小餐桌·私廚-創辦人與主廚</br></br>    BarHome-行政主廚</br>  台南市中西區中山路23巷1號</br></br>    專長：歐陸料理、法式甜品、台灣料理</br>  結合在地食材與文化融合的新飲食。</br></br>    曾任：</br>  那個時代法式餐廳-甜點主廚</br>  台南女中-家政課配合講師</br>  斗六Chico餐廚-餐飲顧問</br>  食上煮義-甜品顧問</br></br>    現任:</br>  小餐桌私廚-創辦人與主廚</br>  職訓中心-專任講師</br>  Bar Home-行政主廚</br>  可可聯盟-巧克力烘焙講師</br>  卡提諾廚房-頻道主廚</br>  萬記白美娜-研發老師</br>'),
(14, '貴婦的夢幻小塔專修', '✨零失敗塔皮製作技巧與實作</br>\r\n✨一次滿足您對塔類的各種想像</br>', '#來份貴婦下午茶吧</br>\n#零失敗塔皮製作技巧與實作</br>\n#一次滿足您對塔類的各種想像</br></br>\n\n垂涎欲滴，色彩繽紛的夢幻法式甜塔</br>\n清爽的檸檬餡、酸甜的當季水果或是屬於大人的濃情巧克力</br>\n綴在酥香、杏仁味濃厚的塔皮上，入口的幸福滋味，絕對是貴婦下午茶最佳首選！</br></br>\n\n從過去法國藍帶學校進修、到現在開店實際販售經驗</br>\n本次Eva主廚首次公開4款店內最受歡迎的甜塔品項</br>\n🍋經典檸檬塔</br>\n🌼心花朵朵開輕檸檬塔</br>\n🍫濃情巧克力塔</br>\n🍊法式水果塔</br>', '精緻點心', 14, '桃園市中壢區新生路421號', 3900, 30, '2024-05-22 15:05:28', '2024-05-29 15:05:28', '2024-06-20 09:30:00', '2024-06-20 17:00:00', 1, 'Eva YU', '● Paris Le Cordon bleu 藍帶巴黎學院甜點證書</br>   ● Pierre Herme Dec. 2014- Feb. 2015 Stagier 實習</br>  ● all YU can bake 有村法式甜點坊 負責人 2014 - Present</br>  ● ELLE Taiwan 甜點專欄作家 2018</br>  ● 橙品手作烘焙 講師 2018 - Present</br>  ● 馬來西亞 Royal Baking Academy 專任講師</br>  ● 億茲國際OERO甜點研發技師'),
(15, 'Ins風漸層暈染藝術蛋糕', '✨Up to you 由你決定</br>\r\n✨低糖奶油霜蛋糕</br>\r\n✨新手小白也能一次成功的暈染抹面</br>\r\n✨簡約大方連昆凌都喜歡</br>', '漸層暈染抹面蛋糕每每出現，總是能立馬吸引所有人的眼球！</br></br>\n\n奶油霜就像藝術家手中的多彩顏料，隨意地調出幾種相近顏色、一把抹刀，加上隨心所欲的心情，#Up to you</br>\n讓每個漸層暈染的作品都是獨一無二的‼️ </br>\n\n蛋糕不僅是味覺嗅覺上的體驗，也能在視覺上得到展現與治癒心靈，在製作每一顆精心製作的蛋糕後，得到滿滿幸福感</br>\n而收到蛋糕的摯親好友們也都擁有美好的回憶💖</br></br>\n\n課程中Anna老師從器具介紹、食材的運用、蛋糕體製作、奶油霜打發重點、基礎抹面技巧、漸層暈染技巧掌握、成品裝飾組裝、所有有關製作漸層蛋糕的盲點、容易失敗的地方，都能在這堂課一次學會！', '蛋糕', 24, '桃園市中壢區新生路421號', 3000, 30, '2024-05-15 15:22:26', '2024-05-22 15:22:26', '2024-06-16 09:00:00', '2024-06-16 13:00:00', 1, 'Anna', '錵筠烘焙工作坊 主理人'),
(16, '法式手工甜點｜小山園雙茶鐵盒餅乾', '✨小山園抹茶使用</br>\r\n✨抹茶界的究極老舖</br>\r\n✨款款經典絕對美味</br>\r\n✨限額假日班', '這次，在天氣漸熱的盛夏季節來臨前，33老師特別規劃⎯⎯⎯「焙茶/抹茶雙茶鐵盒餅乾」系列～🍂🍃</br></br>\n\n大家都知道，茶系列甜點絕對是暖暖的強項！👍</br>\n33老師將抹茶、焙茶巧妙搭配各種食材，恰到好處的平衡每一個食材的特性！</br>\n七種完全不同的配方搭配不同手法，針對製程關鍵雨需注意細節完全剖析，所有有關製作餅乾的盲點、容易失敗的地方，都能在這堂課一次學會，超精彩講堂，千萬不能錯過</br>', '餅乾', 22, '桃園市中壢區新生路421號', 4000, 30, '2024-06-01 15:22:26', '2024-06-07 15:22:26', '2024-06-15 10:00:00', '2024-06-15 15:00:00', 1, '暖暖', '從最初的興趣手作，到進入甜點工作室擔任助手，</br></br>  從此迷戀這份純粹簡單的香甜生活，</br></br>  房地產科系畢業後毅然決定走上毫無背景的甜點之路，</br></br>  從樸實的法式常溫點心開始，持續抱著感謝的心情、緩緩走到現在。</br></br>  Life is sweet：）'),
(17, '經典日式水蜜桃塔＆日月潭紅玉紅茶生乳布丁', '✨滿班再加開</br>\r\n✨季節限定日式水蜜桃塔</br>\r\n✨腦師全新課程來囉！</br>\r\n✨這次把店裡明星品都搬出來了！', '這次把店裡明星品都搬出來了！</br>\n（話說，腸師早就毫無保留的全部都你了～）💕</br></br>\n\n最奢華的日式水蜜桃塔來了！</br>\n用最嘻花的日本空運水蜜桃</br>\n教你做多層次的啾西多汁的粉嫩水蜜桃塔～</br>\n大大療癒人心的季節限定款！</br></br>\n\n《經典日式水蜜桃塔》#季節限定</br>\n🔸日本水蜜桃</br>\n🔸紅玉紅茶外交官奶餡（實作）</br>\n🔸日式海綿蛋糕（示範）</br>\n🔸油酥塔皮（派皮示範，實作入模）</br></br>\n\n#你說你想要桃🍑</br>\n#偏偏注定要落腳\n', '精緻點心', 2, '桃園市中壢區新生路421號', 4000, 30, '2024-05-20 09:21:48', '2024-05-27 09:21:48', '2024-05-22 09:30:00', '2024-05-22 13:30:00', 1, '林庚辰', '為甜點而生的男人</br> 一次出走，東京九百個日子的練功，他學品味、玩刀法、練偏執，從日本品川站的飯店廚房出發，</br> 林庚辰捧著青木定治的食譜一道一道、一克一克的試，</br> 回到台灣之後，把每一分學習都用來討你嘴巴的歡心。</br> 日本風格的講究、巴黎甜點店的夢，林庚辰每天早上一步一步的在臺北的菜市場裡實現，</br> 吃他的甜點，你會被台灣的新鮮味道喚醒，馬卡龍裡藏著台灣人對甜點口味的依賴跟固執，</br> 一間為台灣人打造的西方甜點店，他的成品值得你一次又一次的品味。'),
(18, '經典台灣麵包&依思尼皇冠奶油吐司', '⭐全新課程</br>\r\n⭐台式麵包大特輯</br>\r\n⭐一次學會六款麵包+一款吐司', '同學們久等了~</br></br>\n\n2024年全新麵包課程來囉!!!</br>\n\n呂昇達老師會示範各類台灣麵包的攪拌整型方式，再交由參與的學員共同完成🙌</br>\n\n跟著老師一起來應用依思尼奶油學習台灣麵包及奢華皇冠奶油吐司吧～</br></br></br>\n\n\n\n課程將帶給大家全新的美食麵包體驗🥰</br>\n\n輕鬆學會基礎台灣麵包</br></br></br>\n\n\n\n-這堂課重點-</br>\n\n㊙麵包製作基本概念、製程理論的講解</br>\n\n㊙瞭解食材特色與運用搭配</br>\n\n㊙掌握麵團攪拌、發酵溫度、烤焙注意事項</br>\n\n㊙掌握麵團的整形手法</br>\n\n㊙成品保存方式與注意事項', '麵包', 2, '桃園市中壢區新生路421號', 3100, 30, '2024-05-18 09:26:41', '2024-05-25 09:26:41', '2024-05-26 09:00:00', '2024-05-26 15:00:00', 1, '呂昇達', '統一麵粉烘焙技術顧問</br></br>  統一麥典實作工坊烘焙講師</br></br>  統一麵粉越南烘焙講師</br></br>  法國藍絲可產品技術顧問</br></br>  台灣原貿市場開發行銷顧問</br></br>  德國白美娜商品開發顧問</br></br>  可可聯盟巧克力烘焙技術顧問</br></br>  開元食品商品部顧問'),
(19, '探索法式糕點藝術：法式泡芙專修班', '⭐全新課程</br>\r\n⭐超強泡芙專修</br>\r\n⭐一次學會四款法式泡芙', '法式泡芙專修班是絕對是一堂讓你可以深入瞭解法式糕點藝術的課程！</br></br></br>\n\n\n\n這堂課，將老師將透過製作多種精緻泡芙的技巧和技術，從傳統的依思尼奶油經典泡芙到巴黎布列斯特泡芙，再到聖多諾黑、榛果焦糖冰淇泡芙等，#泡芙大集合🤣 </br>\n\n讓你從基礎開始，學習製作泡芙的麵糊，以及烘焙技巧和準備內餡的方法，一步一步進階到裝飾和修飾泡芙，學習如何利用巧克力、焦糖、奶油等材料為泡芙增添美感和口感。</br>\n\n同時，課程中老師也會介紹法式糕點的傳統和歷史背景，讓學員更加深入地理解法式糕點藝術的精髓！</br></br>\n\n\n\n-這堂課重點-</br>\n\n㊙️學習製作泡芙的麵糊</br>\n\n㊙️烘焙技巧與時間掌握</br>\n\n㊙️多款內餡製作</br>\n\n㊙️成品裝飾與修飾技巧', '精緻點心', 2, '桃園市中壢區新生路421號', 3000, 30, '2024-05-10 09:31:05', '2024-05-17 09:31:05', '2024-05-28 09:00:00', '2024-05-28 14:00:00', 1, '呂昇達', '統一麵粉烘焙技術顧問</br></br>  統一麥典實作工坊烘焙講師</br></br>  統一麵粉越南烘焙講師</br></br>  法國藍絲可產品技術顧問</br></br>  台灣原貿市場開發行銷顧問</br></br>  德國白美娜商品開發顧問</br></br>  可可聯盟巧克力烘焙技術顧問</br></br>  開元食品商品部顧問'),
(20, '柳川や 伴手禮商品 國王蛋撻 專修班', '🔥免前一天鬆弛麵糰！</br> 🔥千層反折法製作</br> 🔥加碼示範「花型蛋撻」', '🔥真的太搶手 ！ 緊急加開第8班</br>\n</br></br>\n\n\n#全實作講堂</br>\n\n#免前置作業！</br>\n\n#免前一天鬆弛麵糰！</br>\n\n#千層反折法製作</br>\n\n#隨時想吃都能做</br>\n\n #完整SOP好量產</br></br>\n\n\n\n艾力克師傅帶來柳川や全新伴手禮商品「國王蛋撻」，</br>\n\n是柳川や2023年最新力作，師傅為了營造更酥脆的口感，</br>\n\n特別使用國王派的反折奶油法，由奶油包裹麵團的方式所製作，</br>\n\n一口咬下千層外皮的酥脆口感，搭配上香滑柔嫩的蛋塔內餡，讓人深深著迷愛不釋口😋', '精緻點心', 14, '桃園市中壢區新生路421號', 3000, 30, '2024-05-14 09:37:25', '2024-05-21 09:37:25', '2024-05-29 09:30:00', '2024-05-29 14:30:00', 1, 'Eric 林建民', '柳川 や 主廚(網路IG打卡名店)</br>   台北 Bonjour烘培坊</br>   山琳有限公司-技術服務部講師'),
(21, '北海道煉乳生吐司、莊園巧克力生吐司、蜂蜜依思尼奶油生吐司烘焙實作班', '⭐生吐司控集合啦！</br>\r\n⭐一次學會三種發酵種法</br>\r\n⭐濕潤、入口即化的口感！', '#烘焙新手也OK唷</br>\n\n昇達老師將分別以三種不同發酵種法</br>\n\n✔️湯種</br></br>\n\n✔️波蘭種</br></br>\n\n✔️中種</br></br>\n\n將生吐司的輕柔、保濕、綿密，完美展現！</br>\n\n製作過程中卻藏了超許多魔鬼般的細節，老師在材料與製作過程上也必須更講究，</br>\n所有在製作時會遇到的問題——麵粉食材的選擇、酵母用量、麵團攪打與發酵、烤溫時間、水份控制⋯都讓一次完整學到位！🤘 </br></br>\n\n\n\n若您也是生吐司控，強烈推薦一定要來上這堂課！', '麵包', 2, '桃園市中壢區新生路421號', 3100, 30, '2024-05-14 09:45:27', '2024-05-21 09:45:27', '2024-05-27 09:00:00', '2024-05-27 15:00:00', 1, '呂昇達', '統一麵粉烘焙技術顧問</br></br>  統一麥典實作工坊烘焙講師</br></br>  統一麵粉越南烘焙講師</br></br>  法國藍絲可產品技術顧問</br></br>  台灣原貿市場開發行銷顧問</br></br>  德國白美娜商品開發顧問</br></br>  可可聯盟巧克力烘焙技術顧問</br></br>  開元食品商品部顧問'),
(22, '旭夆：德國鹼水麵包', '⭐全新課程</br>\r\n⭐鹼水麵包系列</br>\r\n⭐創業、接單必修', '鹼水麵包起源於德國巴伐利亞地區，據說有宗教起源之義，因為外型交叉扭結的形狀，</br>\n就如同兩支手臂交叉於胸前做禱告的模樣，在德國只有這個形狀的鹼水麵包才可以稱：Pretzel(布雷結)。</br>\n其它形狀的鹼水麵包則有一個統稱：Laugen Roll (婁根小麵包)。</br></br>\n\n課程重點</br>\n㊙️如何製作 發酵種（中種）及控管、攪拌最佳時機點。</br>\n㊙️攪拌麵筋程度的判斷。</br>\n㊙️鹼水的應用及浸泡時間和掌握。</br>\n㊙️其麵糰運用冷凍的穩定。</br>\n㊙️自製餡料(芝麻醬、抹茶乳酪餡)。</br>\n㊙️加碼 示範 …神㊙️（鹼水芝士。小圓球）。</br>\n㊙️烤溫及時間的掌握。', '麵包', 2, '桃園市中壢區新生路421號', 4000, 30, '2024-05-01 09:54:02', '2024-05-08 09:54:02', '2024-05-30 09:30:00', '2024-05-30 16:30:00', 1, '旭夆', '經歷：</br>  高雄餐旅科技大學　講師</br>  台南遠東科技大學　講師</br>  高雄樹德家商　講師</br>  台南市觀光協會　講師</br>  高雄莎士比亞烘焙坊　主廚</br>  台中Latelier du Bon Pain麵包店　副廚</br>  多貝麗國際公司　技術顧問</br>  常春藤烘焙坊　技術顧問</br> </br>   獎項：</br>  2015 世界麵包大賽台灣區代表選拔　優選</br>  2012 達人盃全國競能競賽　銅牌</br>  2011 弘光德麥盃　優勝'),
(23, '人氣冠軍蛋黃酥與經典綠豆椪烘焙實作班', '⭐2024年最新月餅實作課</br>\r\n⭐真心提醒絕對秒殺</br>\r\n⭐看到就要馬上報名', '#烘焙新手也OK唷</br></br></br>\n\n\n\n呂昇達老師2024年中秋人氣冠軍蛋黃酥與經典綠豆椪實作課程登場</br>\n\n一口氣就可以學會兩款經典月餅和美味</br></br>\n\n\n\n☝️老師專屬研發設計的【人氣冠軍蛋黃酥】</br>\n\n製作傳統的蛋黃酥皮，學習酥皮的技巧和配方。</br>\n\n製作豐滿的蛋黃酥餡料，掌握製作完美餡料的訣竅。</br>\n\n組合與包裝，展現蛋黃酥的美味和精緻外觀。</br></br>\n\n\n\n☝️經典台式美味【經典綠豆椪】</br>\n\n製作綠豆椪的外皮，學習如何製作綠豆椪皮的酥脆口感。</br>\n\n分別製作原味以及台灣傳統肉燥兩款經典綠豆椪</br>\n\n組合與包裝，呈現經典的台灣風味。</br>\n\n</br>\n\n🉐課後可帶回成品數量🉐</br>\n\n人氣冠軍蛋黃酥6個、台式經典綠豆椪6個【葷素各半】</br>', '精緻點心', 2, '桃園市中壢區新生路421號', 3500, 30, '2024-05-16 10:08:27', '2024-05-23 10:08:27', '2024-06-05 09:30:00', '2024-06-05 13:30:00', 1, '呂昇達', '統一麵粉烘焙技術顧問</br></br>  統一麥典實作工坊烘焙講師</br></br>  統一麵粉越南烘焙講師</br></br>  法國藍絲可產品技術顧問</br></br>  台灣原貿市場開發行銷顧問</br></br>  德國白美娜商品開發顧問</br></br>  可可聯盟巧克力烘焙技術顧問</br></br>  開元食品商品部顧問'),
(24, '常溫餅乾2.0 酥 鬆 脆 鹹甜餅乾教科書', '✨腦師全新課程來囉~</br>\r\n✨超強甜點課程</br>\r\n✨一次學12款餅乾</br>', '御菓子花雨。okashi Kau 林庚辰  腦師的#全新課程── 《常溫餅乾2.0 酥鬆脆鹹甜餅乾教科書》強勢登場！🎉🎉</br>\n有上過腦師餅乾+常溫蛋糕課程的同學們，想必有深刻瞭解到，課程中有滿滿的烘焙知識與理論🈵，在教室更是連開近30班的熱門課程！</br></br>\n\n在新課程 《常溫餅乾2.0 酥鬆脆鹹甜餅乾教科書》中，這堂課腦師會教你──</br>\n✔️  餅乾的製作理論</br>\n✔️  餅乾食材組成及特性</br>\n✔️  餅乾的做法變化</br>\n✔️  掌握餅乾脆硬酥鬆完美配方比</br>\n✔️  餅乾成品失敗原因及調整</br>\n✔️  餅乾口感及風味調整', '餅乾', 21, '桃園市中壢區新生路421號', 3900, 30, '2024-05-08 11:31:57', '2024-05-15 11:31:57', '2024-05-13 09:30:00', '2024-05-13 13:30:00', 1, '林庚辰', '為甜點而生的男人</br> 一次出走，東京九百個日子的練功，他學品味、玩刀法、練偏執，從日本品川站的飯店廚房出發，</br> 林庚辰捧著青木定治的食譜一道一道、一克一克的試，</br> 回到台灣之後，把每一分學習都用來討你嘴巴的歡心。</br> 日本風格的講究、巴黎甜點店的夢，林庚辰每天早上一步一步的在臺北的菜市場裡實現，</br> 吃他的甜點，你會被台灣的新鮮味道喚醒，馬卡龍裡藏著台灣人對甜點口味的依賴跟固執，</br> 一間為台灣人打造的西方甜點店，他的成品值得你一次又一次的品味。'),
(25, '蜜桃莓果晶凍達克瓦茲蛋糕', '✨台中必吃甜點</br>\r\n✨首創將達克瓦茲做成客製蛋糕的形式</br>\r\n✨外觀簡易奶油霜寫字教學', '達克瓦茲（Dacquoise）是經典的法式點心，</br>\n食材用料簡單，僅使用蛋白、杏仁粉、糖粉，</br>\n打造出外脆內軟的蛋糕體，搭配上柔滑細膩的奶油餡，</br>\n讓人一口咬下就愛上的迷人滋味！</br></br>\n\n幸子老師首創將達克瓦茲做成客製蛋糕的形式，</br>\n傳授學員用不同的內餡層次製造豐富味蕾，</br>\n不僅教大家達克蛋糕的做法，</br>\n更加碼示範利用簡易奶油霜幫自己的蛋糕寫上祝福語，</br>\n課程重點超多快來細細學習🤩✨✨</br></br>\n\n📌課程重點📌</br>\n⭐️達克瓦茲蛋糕製作及入模</br>\n(實作6吋達克蛋糕)</br>\n⭐️蛋白打發技巧與判斷</br>\n⭐️每一種材料對成品影響（原理）</br>\n⭐️烤溫掌握（熱風爐、層爐、家用烤箱三種烤法）</br>\n⭐️ 餅殼及內餡配方變化(變出更多新口味）</br>\n⭐️豐富層次包含：覆盆子優格乳酪霜、覆盆子酒晶凍、覆盆子醬、新鮮水蜜桃、藍莓</br>\n⭐️外觀簡易奶油霜寫字教學（記得事先想好寫什麼字唷！）</br>', '精緻點心', 5, '桃園市中壢區新生路421號', 4000, 30, '2024-04-17 13:00:00', '2024-04-24 12:00:00', '2024-05-17 09:00:00', '2024-05-17 13:30:00', 1, '幸子', '幸子手作甜點主理人'),
(26, '蓬鬆野酵麵包', '⭐適合初階練習</br>\r\n⭐也適合進階複習</br>\r\n⭐不要擔心失敗', '老師堅持課程中</br>\n✔️從頭開始認識野酵麵包的特性</br>\n✔️100%野生酵母</br>\n✔️100%無添加商業酵母</br>\n✔️利用低溫長時間發酵方式</br>\n✔️延伸運用高水量、高筋度麵糰製作</br>\n✔️整形步驟會逐一叮囑教學</br>\n✔️研發歸納出專屬台灣（高溫氣候）的獨特製作模式</br></br>\n\n這次，新野酵麵包課程阿貝老師想教大家如何在家做出「蓬鬆野酵麵包 #大氣孔麵包」課程，</br>\n無論你是零基礎的 #烘焙新手，或是想進修的同學，只要有做過麵包的朋友，</br>\n只要想學習野酵麵包的蓬鬆口感與美味所在，這堂課千萬不能錯過！', '麵包', 9, '桃園市中壢區新生路421號', 3500, 30, '2024-05-09 14:07:06', '2024-05-16 14:07:06', '2024-05-22 09:30:00', '2024-05-22 17:00:00', 1, '黃國琳', '台南遠東科技大學　講師</br>  高雄樹德家商　講師</br>  台南市觀光協會　講師</br>  高雄莎士比亞烘焙坊　主廚</br>  台中Latelier du Bon Pain麵包店　副廚</br>  多貝麗國際公司　技術顧問</br>  常春藤烘焙坊　技術顧問</br> </br>   獎項：</br>  2015 世界麵包大賽台灣區代表選拔　優選</br>  2012 達人盃全國競能競賽　銅牌</br>  2011 弘光德麥盃　優勝'),
(27, '茶之菓鐵盒餅乾', '🔥款款特色鮮明</br>\r\n🔥九款餅乾一次學到</br>\r\n🔥喜愛茶香的你絕不能錯過</br>', '『飲茶文化，就像刻印在每個台灣人靈魂中的印記』</br></br>\r\n\r\n傳承數百年的飲茶文化</br>\r\n時至今日</br>\r\n台灣茶成為了甜點中的主角</br>\r\n替烘焙增添許多樂趣</br></br>\r\n\r\n這堂以茶為名的日系餅乾課</br>\r\n威力老師將帶你製作九款『濃茶系餅乾』</br></br>\r\n\r\n課後除了讓你收穫完整的餅乾知識</br>\r\n你也會更深入了解</br>\r\n茶粉在甜點中如何完美運用</br></br>\r\n\r\n除了茶餅乾的學習</br>\r\n課程中也會搭配台灣茶的品飲</br></br>\r\n\r\n先說好！這是一堂嗜茶如命的課程</br>\r\n如果你不夠愛茶～千萬不要貿然報名哦！', '餅乾', 2, '桃園市中壢區新生路421號', 4000, 30, '2024-05-14 06:51:19', '2024-05-21 06:51:19', '2024-06-01 10:00:00', '2024-06-01 16:00:00', 1, '威力', '以常溫甜點起家，著迷那種溫潤濃郁的重奶油蛋糕香氣；</br>\r\n\r\n因千層讓更多人認識我，喜歡緩緩地層層堆起每片千層，備感療癒。</br>\r\n\r\n眼下只想盡力做好每個點心，讓好的原料盡情揮灑表現。</br>\r\n\r\n喜歡自然樸實、不太會玩色素、一點也不敢吃添加物。</br>\r\n\r\n希望每個嚐過我甜點的人，都能願意在心中替這份簡單的雋永，留下小小一個位子。');

-- --------------------------------------------------------

--
-- 資料表結構 `course_commet`
--

CREATE TABLE `course_commet` (
  `class_commet_id` int(6) NOT NULL,
  `class_id_fk` int(6) NOT NULL,
  `user_id_fk` int(6) NOT NULL,
  `class_commet_content` varchar(300) NOT NULL,
  `class_commet_status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `course_favorite`
--

CREATE TABLE `course_favorite` (
  `class_favorite_id` int(6) NOT NULL,
  `user_id_fk` int(6) NOT NULL,
  `class_id_fk` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `course_image`
--

CREATE TABLE `course_image` (
  `class_image_id` int(6) NOT NULL,
  `class_id_fk` int(6) NOT NULL,
  `product_image_filename` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `course_reply`
--

CREATE TABLE `course_reply` (
  `class_reply_id` int(6) DEFAULT NULL,
  `class_comment_id_fk` int(11) NOT NULL,
  `class_reply_content` varchar(300) NOT NULL,
  `class_reply_createtime` datetime NOT NULL DEFAULT current_timestamp(),
  `class_reply_status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `course_teacher`
--

CREATE TABLE `course_teacher` (
  `teacher_id` int(6) UNSIGNED NOT NULL,
  `teacher_img` varchar(50) DEFAULT NULL,
  `teacher_name` varchar(50) NOT NULL,
  `teacher_phone` char(50) NOT NULL,
  `teacher_email` varchar(200) NOT NULL,
  `teacher_expertise` mediumtext NOT NULL,
  `teacher_intro` mediumtext NOT NULL,
  `teacher_status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `course_teacher`
--

INSERT INTO `course_teacher` (`teacher_id`, `teacher_img`, `teacher_name`, `teacher_phone`, `teacher_email`, `teacher_expertise`, `teacher_intro`, `teacher_status`) VALUES
(1, '1-1.webp', '呂昇達', '0910-111222', 'luda@test.com', '洋菓子', '擅長化繁為簡的烘焙技巧 回歸食材最原始美味的配方\r\n\r\n\r\n• 統一麵粉烘焙技術顧問 \r\n• 法國藍絲可產品技術顧問 \r\n• 台灣原貿市場開發行銷顧問 \r\n• 德國白美娜商品開發顧問 \r\n• 可可聯盟巧克力烘焙技術顧問 \r\n• 開元食品商品部顧問 \r\n• 晶華酒店服務經理 \r\n• 口福堂總店長 \r\n• 高雄餐旅大學推廣教育烘焙講師 \r\n• 士邦Spar 攪拌器烘焙商品技術顧問\r\n\r\n我做烘焙已經超過二十年了，待過這麼多間飯店、食品行的中央工廠，製作上萬顆蛋糕。我知道大家最常遇到的烘焙問題、最常失敗的原因。看到配方時，不能只用過往的觀念去思考，懂得將烘焙理論融會貫通，才能用最輕鬆的方式呈現甜點最忠實的樣貌。追求好吃的極致，是我在甜點路上唯一並永恆追尋的目標。', 1),
(2, '2-1.webp', '呂昇達', '0910-111223', 'luda@test.com', '內餡製作', '擅長化繁為簡的烘焙技巧 回歸食材最原始美味的配方\n\n\n• 統一麵粉烘焙技術顧問 \n• 法國藍絲可產品技術顧問 \n• 台灣原貿市場開發行銷顧問 \n• 德國白美娜商品開發顧問 \n• 可可聯盟巧克力烘焙技術顧問 \n• 開元食品商品部顧問 \n• 晶華酒店服務經理 \n• 口福堂總店長 \n• 高雄餐旅大學推廣教育烘焙講師 \n• 士邦Spar 攪拌器烘焙商品技術顧問\n\n我做烘焙已經超過二十年了，待過這麼多間飯店、食品行的中央工廠，製作上萬顆蛋糕。我知道大家最常遇到的烘焙問題、最常失敗的原因。看到配方時，不能只用過往的觀念去思考，懂得將烘焙理論融會貫通，才能用最輕鬆的方式呈現甜點最忠實的樣貌。追求好吃的極致，是我在甜點路上唯一並永恆追尋的目標。', 1),
(3, '3-1.jpg', '威力', '0930-148224', 'willy@test.com', '法式常溫甜點', '自學甜點5年時間。\n著迷在自學過程中每個珍貴的失敗過程。\n\n多次甜點講師的教學經歷\n不定時快閃開課教學，期許自己傳遞更多關於「自學甜點」的美好！', 1),
(4, '4-1.jpeg', '韓國人金老師', '0923-109225', 'korkim@test.com', '馬卡龍', '我是韓國人金老師，我中文很厲害喔!!\r\n\r\n從事烘培工作超過10年，在台灣的學生已經超過2000人了，專攻韓式擠花、馬卡龍保證班、達克瓦茲、鏡面蛋糕、花花果凍、以及和菓子，教學經驗超豐富，商品在新光三越A4快閃熱賣。\r\n\r\n課程邀請：零經驗藝人網紅大來賓一起上課，不再只是老師專業的完美完成作品，而是經由與學生學習中的互動，了解課程的細節與魔鬼。\r\n\r\n想要來跟我上課的朋友，可以先報名線上課程，如果還是希望跟我實作，可以全額抵扣線上課程的方式來報名，完全不會浪費錢。', 1),
(5, '5-1.png', '幸子', '0972-197226', 'hsingtzu@test.com', '達克瓦茲', '一位太喜歡達克瓦茲的自學甜點師。\n\n因為熱愛甜點，逐漸從業餘邁向全職甜點師。目前有一間台中甜點工作室，不定期快閃開單。\n\n• 自學甜點並經營網路宅配甜點工作室至今已五年時間 \n• 社群媒體破３萬粉絲追蹤 \n• 新北自由式手作甜點烘焙教師（2020至2022） \n• 台北Miss J Baking Studio烘焙教師（2021至今） \n• 台北橙品手作·烘焙廚藝烘焙教師 （2022至今） \n• 台中Her x Her Studio烘焙教師（2022至今） \n• 高雄拜樹頭烘焙商店烘焙教師（2020至今）', 1),
(6, '6-1.jpg', '柯令達', '0937-146227', 'linda@test.com', '糖花技術蛋糕', '走跳過日本、巴黎的甜點冒險，如今回到台灣繼續甜點夢。我只想分享美好的事物，分享甜點分享歡樂\r\n\r\n• 台灣 GATEAUX 蛋糕技藝競賽 糖花藝術蛋糕 職業組冠軍 \r\n• 東京蛋糕展杏仁膏組技術獎\r\n\r\n日本東京製菓專門學校洋菓子系、法國藍帶畢業。 後於法國雷諾特學校學習，以第一名的身分畢業。', 1),
(7, '7-1.png', 'Alexis Bouillet', '0988-175228', 'alexis@test.com', '法式千層', 'Hello, I\'m Alexis Bouillet，我是Alexis 曾獲得2011年世界技能大賽甜點冠軍 我的第一堂線上課程，讓你在家就可以跟著我學習，烤出口感香氣十足的經典可頌、維也納甜酥麵包、橙香咕咕洛伕...等7款經典丹麥麵包，迷人的滋味絕對讓大人小孩都愛不釋手！\n\n第二堂 Bouillet兄弟 精心設計的線上課程，每個品項都是經典法式甜點，富含「創意」、「獨家配方」與我們多年的經驗與心血，集合多項烘焙技術的扎實知識，你絕對不能錯過！', 1),
(8, '8-1.png', '黃偈', '0997-136229', 'jie@test.com', '慕斯蛋糕', '喜歡分享做甜點的快樂，希望利用課程帶領大家認識臺灣、分享製作甜點的知識與經驗。\n\n• 旅法進修法式甜點一年 \n•  約十年甜點製作經驗 \n•  2015~2019 河床法式甜點主廚 \n•  出版書籍【黃偈的甜點日記：32道法式甜點與追夢隨筆】', 1),
(9, '9-1.jpg', '黃威達', '0989-118230', 'wayda@test.com', '乳酪甜點', '•  現任久久津乳酪菓子手造所營運執行長\n•  為北海道LUXE乳酪在台技術顧問、講師\n•  曾赴日本北海道學習乳酪甜點製作\n\n因為麵粉過敏關了麵包的門，卻因為乳酪開啟了另一扇窗\n邀請你加入這堂課程，和我一起探索乳酪的各種風貌', 1),
(10, '10-1.png', '黃偈', '0997-136229', 'jie@test.com', '慕斯蛋糕', '喜歡分享做甜點的快樂，希望利用課程帶領大家認識臺灣、分享製作甜點的知識與經驗。\n\n• 旅法進修法式甜點一年 \n•  約十年甜點製作經驗 \n•  2015~2019 河床法式甜點主廚 \n•  出版書籍【黃偈的甜點日記：32道法式甜點與追夢隨筆】', 1),
(11, '11-1.jpg', '陳小胖', '0923-389232', 'fwife@test.com', '肉桂捲', '「胖死我太太」的新手先生。 用IG紀錄透過美食寵愛（胖死）太太的愛情故事，\n 而太太是因為肉桂捲嫁給他，成為了他們愛情故事中的起源。', 1),
(12, '12-1.png', '王家承', '0952-256233', 'chia@test.com', '巧克力調溫', '新生代最具代表性職人 15年以上深耕巧克力領域達人\n\n他，全能派！精通巧克力、法式西點、丹麥麵包..... 他，理論教學派！ 多年主廚工作及教學經驗，在不斷積累中，形成了強大的理論教學體系，無所不能的技術解決之道。\n\n• Volute Croissant 品牌創辦人 \n• 18度C巧克力工房 巧克力甜點研發主廚 \n• 法國 MDAS 世界西點大賽 台灣國家代表隊 \n• 法國 Candia Professional 亞洲區品牌大使 \n• 2020法國萊思克盃 國王派冠軍 \n• Mano Mano patisserie 研發主廚 \n• fla fla tu tu 法圖甜點空間 品牌共同創辦人 \n• 香港、中國、澳門、新加坡等烘焙教室 甜點專任講師', 1),
(13, '13-1.webp', '武子靖', '0974-567234', 'chin@test.com', '歐式麵包', '大家好，我是武子靖，曾代表台灣參加多項世界級競賽 2022年在路易樂斯福世界盃麵包大賽奪得冠軍\n\n贏得世界盃冠軍後，我的腳步並沒有停下 而是開始思考該如何傳遞我在國外的所見所聞，分享對歐式麵包更多的想像\n\n我的麵包獲得了全世界厲害麵包師傅的認可。這股美味，希望能讓各位在家中就能品嚐，歡迎你們加入我的線上課程！', 1),
(14, '14-1.jpg', '游舒涵', '0925-983235', 'evayu@test.com', '法式塔派', 'all Yu can bake 主理人\n一位不務正業半路出家到法國藍帶學藝的甜點師！\n嗜吃如命，熱愛旅遊，生活點滴皆是創作靈感來源。\n\n• 30 歲辭職，勇敢前往法國取得巴黎藍帶甜點證書\n• Le Cordon Bleu Paris巴黎藍帶甜點證書\n• Pierre Hermé stagiaire 甜點實習\n• all YU can bake 甜點創辦\n• ELLE Taiwan 甜點專欄作家\n• 馬來西亞 Royal Baking Academy 專任講師\n• 2011 世界技能大賽甜點冠軍 Alexis Bouillet — MasterClass 系列專業 助手與翻譯\n• 億滋國際甜點研發技師\n• 橙品手作。烘焙廚藝烘焙教師', 1),
(15, '15-1.jpg', '游舒涵', '0925-983235', 'evayu@test.com', '法式塔派', 'all Yu can bake 主理人\n一位不務正業半路出家到法國藍帶學藝的甜點師！\n嗜吃如命，熱愛旅遊，生活點滴皆是創作靈感來源。\n\n• 30 歲辭職，勇敢前往法國取得巴黎藍帶甜點證書\n• Le Cordon Bleu Paris巴黎藍帶甜點證書\n• Pierre Hermé stagiaire 甜點實習\n• all YU can bake 甜點創辦\n• ELLE Taiwan 甜點專欄作家\n• 馬來西亞 Royal Baking Academy 專任講師\n• 2011 世界技能大賽甜點冠軍 Alexis Bouillet — MasterClass 系列專業 助手與翻譯\n• 億滋國際甜點研發技師\n• 橙品手作。烘焙廚藝烘焙教師', 1),
(16, '16-1.jpg', '張錫源', '0958-572237', 'aaron@test.com', '歐式麵包', '提倡「烘焙新食」文化\n實驗改良麵包的製作處理方式、結合豐富多元的食材選擇，充分發揮食材特性，融合出美味誘人的創新口味，將烘焙擴展到無侷限、無框架，是我畢生努力的方向。\n\n現任：芳璽烘焙藝廊烘焙總監\n經歷：\n• Croupe 手作 技術開發\n• 台灣國際兒童村 烘焙志工\n• Bonjour 品質管理經理\n• A Plus 烘焙主廚\n• 香港 Pots & Pans Cooking Studio 烘焙講師\n• 麥之田 烘焙講師\n• 原料商 烘焙技師\n\n獲獎紀錄\n• 2011美國乳酪麵包大賽 優勝\n• 2012加州葡萄乳酪烘焙大賽 優勝', 1),
(17, '17-1.webp', '黃威達', '0989-118230', 'wayda@test.com', '乳酪甜點', '•  現任久久津乳酪菓子手造所營運執行長\n•  為北海道LUXE乳酪在台技術顧問、講師\n•  曾赴日本北海道學習乳酪甜點製作\n\n因為麵粉過敏關了麵包的門，卻因為乳酪開啟了另一扇窗\n邀請你加入這堂課程，和我一起探索乳酪的各種風貌', 1),
(18, '18-1.jpg', '楊世均', '0988-509239', 'shihjun@test.com', '歐式麵包', '•  第38屆全國技能競賽冠軍\n•  第40屆國際技能競賽國手金牌\n•  美國小麥協會技術講師\n•  德麥技術簽約講師\n•  布雷夫烘焙負責人\n\n我將公開店內麵包的商業機密，歡迎加入我的課程，學習麵包好吃的秘密撇步！', 1),
(19, '19-1.jpg', '王詩成', '0988-509240', 'leo@test.com', '戚風蛋糕', '大家好，我是烘焙工程獅～\n我是一名擁有甜點魂的工程師，我喜歡化繁為簡，用工程師的本能去簡化烘焙的製程，讓大家在家就能輕鬆做出好吃的甜點給家人、朋友分享！', 1),
(20, '20-1.jpg', '任樂軒', '0988-509241', 'hin@test.com', '巧克力調溫', 'Chef Hin是國際知名甜點設計師，曾受邀擔任世界各國西點、酒店的西點行政總廚。\n不僅如此，更在台灣大專院校擔任客座講師，讓法式甜點製作更為親民，持續創作屬於在地的創意甜點。\n曾任職香港米其林三星侯布雄、美國舊金山米其林一星餐廳 Madera、北京及舊金山瑰麗酒店、台北文華東方西點行政總廚、上海半島酒店西點副主廚、榮獲北美 Valrhona C3 巧克力比賽銀獎。', 1),
(21, '21-1.jpg', '曹思蓓', '0988-509242', 'isabella@test.com', '純素甜點', '成為甜點主廚前，Isabella是一位視覺設計師，於2014年成立【GREEN BAKERY綠帶純植物烘焙】。\n希望藉由自創的純植物甜點，傳達符合環境永續、有益健康、友善動物的全新飲食概念。Isabella用\n她擅長的設計手法，從「心」歸零、重新組合並勇於跳脫傳統框架。 創作的甜點除了以美味為前提，更示範出如何從大自然的植物中取材，創造甜點中的色、香、味，希望引領更多人開始用幸福的食材做出幸福的甜點。', 1),
(22, '22-1.jpg', '威力', '0930-148224', 'willy@test.com', '法式常溫甜點', '自學甜點5年時間。\n著迷在自學過程中每個珍貴的失敗過程。\n\n多次甜點講師的教學經歷\n不定時快閃開課教學，期許自己傳遞更多關於「自學甜點」的美好！', 1),
(23, '23-1.jpg', '張家翰', '0988-509244', 'hank@test.com', '創意法式甜點', '教你用在地食材變出創意法式甜點！\n出生在風光明媚的新竹鄉間，Hank常笑稱自己是「泥巴中滾大的孩子」，不只熱愛土地，對在地食材更是情有獨鍾。走上烘焙之路後，他將這份對土地的感情轉而融入甜點創作之中，讓做出來的成品不僅精緻可口，更充滿濃濃的台灣人情味。', 1),
(24, '24-1.jpg', '拿拿摳', '0988-509245', 'nanaco@test.com', '鮮奶油蛋糕', '曾是個厭世上班族，偶然接觸到甜點工作，開啟了白天上班、晚上學甜點的兩頭燒生活。雖然辛苦，\r\n卻也發現對於甜點的熱愛，而走向全職甜點師之路。\r\n\r\n6年甜點店開業經驗，幽默風趣的教學風格，保證讓你上課不無聊。', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `order`
--

CREATE TABLE `order` (
  `order_id` int(6) NOT NULL,
  `user_id_fk` int(6) NOT NULL,
  `order_payment` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `order_username` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `order_address` varchar(600) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `order_phone` varchar(50) NOT NULL,
  `order_amount` int(6) NOT NULL,
  `order_total` int(10) NOT NULL,
  `order_status` varchar(50) NOT NULL,
  `order_createtime` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `order_item`
--

CREATE TABLE `order_item` (
  `order_item_id` int(10) NOT NULL,
  `order_id_fk` int(10) NOT NULL,
  `order_product_type` varchar(50) NOT NULL,
  `order_product_id` int(10) NOT NULL,
  `order_product_name` varchar(50) NOT NULL,
  `order_product_detail` varchar(50) NOT NULL,
  `order_product_count` int(10) NOT NULL,
  `order_product_price` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `otp`
--

CREATE TABLE `otp` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `exp_timestamp` bigint(20) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `product_id` int(6) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_description` varchar(3000) DEFAULT NULL,
  `product_description_full` varchar(3000) DEFAULT NULL,
  `product_category` varchar(50) DEFAULT NULL,
  `category_id_fk` int(6) NOT NULL,
  `category_sub_id_fk` int(6) NOT NULL,
  `product_subtitle_small` varchar(50) NOT NULL,
  `product_subtitle_middle` varchar(50) DEFAULT NULL,
  `product_subtitle_large` varchar(50) DEFAULT NULL,
  `product_price_small` int(6) NOT NULL,
  `product_price_middle` int(6) DEFAULT NULL,
  `product_price_large` int(6) DEFAULT NULL,
  `product_count` int(6) NOT NULL DEFAULT 300,
  `product_createtime` datetime NOT NULL DEFAULT current_timestamp(),
  `product_status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_description`, `product_description_full`, `product_category`, `category_id_fk`, `category_sub_id_fk`, `product_subtitle_small`, `product_subtitle_middle`, `product_subtitle_large`, `product_price_small`, `product_price_middle`, `product_price_large`, `product_count`, `product_createtime`, `product_status`) VALUES
(10823, '鳳梨芒果起司塔', '酥脆的甜塔皮與濃郁的巴斯克蛋糕\r\n酸奶起司優格增添酸味\r\n與屏東枋山愛文芒果與酸甜鳳梨是絕妙組合', ':: 濃郁起司塔 :: \n\n酥脆的甜塔皮與濃郁的巴斯克蛋糕\n酸奶起司優格增添酸味\n與屏東枋山愛文芒果與酸甜鳳梨是絕妙組合\n\n:: 食材嚴選 :: \n南投放山雞土雞蛋\n香山牧場鮮乳\n大溪地香草莢\n日本上白糖\n法國伊斯尼奶油', '塔', 2, 5, '6吋', '9吋', NULL, 620, 1750, NULL, 300, '2024-05-01 04:24:54', 1),
(10824, '春綠 ‧ 輕抹慕斯蛋糕', '來自苔蘚的顏色\r\n一種帶有沉靜的深綠色\r\n\r\n春綠 ‧ 抹茶慕斯\r\n\r\n表面有一層\r\n苔蘚般的療癒毛絨\r\n春色無限 可可愛愛\r\n\r\n輕輕一抿\r\n春天的可愛美好就這麼被吃下肚腹', '來自苔蘚的顏色\r\n一種帶有沉靜的深綠色\r\n\r\n春綠 ‧ 抹茶慕斯\r\n\r\n表面有一層\r\n苔蘚般的療癒毛絨\r\n春色無限 可可愛愛\r\n\r\n輕輕一抿\r\n春天的可愛美好就這麼被吃下肚腹\r\n \r\n\r\n \r\n\r\n抹茶戚風蛋糕體/抹茶幕斯/柑橘果醬/可可脂噴面\r\n\r\n抽出Pantone色票0343，用可可脂與巧克力調出與春天最契合的抹茶綠，薄薄的噴灑在蛋糕上形成有趣的毛絨，像是滿載春天的草木綠，那是枝頭萌出的新芽、是地底鑽出的嫩草。選用小山園抹茶粉為材料製作，層層堆疊製成的抹茶慕斯蛋糕，抹茶風味輕盈，口感如絲滑順，舌尖上顎輕輕一抿，慕斯就轉瞬化口，手工柑橘醬在尾韻輕輕出現，盡是春天的輕盈滋味。\r\n\r\n夏天來臨', '幕斯蛋糕', 3, 11, '6吋', '9吋', NULL, 1080, 1800, NULL, 300, '2024-05-21 11:50:27', 1),
(10825, '達克瓦茲好茶禮盒', '好茶1號 ｜ 石門鐵觀音茶達克瓦茲\r\n\r\n青梅奶油霜 X 搭配烏梅蜜 X 鐵觀音茶粉\r\n\r\n【茶湯金黃 茶香沉穩濃郁 遠近馳名】', '好茶1號 ｜ 石門鐵觀音茶達克瓦茲\r\n\r\n青梅奶油霜 X 搭配烏梅蜜 X 鐵觀音茶粉\r\n\r\n【茶湯金黃 茶香沉穩濃郁 遠近馳名】\r\n \r\n好茶2號 ｜ 文山包種茶達克瓦茲\r\n\r\n洛神花奶油霜 X 搭配紫蘇青梅凍 X 包種茶粉\r\n\r\n【台灣最具代表性的茗茶 滋味清香優雅 自帶甘醇花香】', '達克瓦茲', 4, 13, '', '', NULL, 500, 0, NULL, 300, '2024-05-01 08:20:28', 1),
(10826, '鹿野紅烏龍戚風蛋糕', '林叔叔在台東鹿野的冠軍茶廠出產的紅烏龍茶葉，好多年都得了金賞，重發酵的紅烏龍，茶味鮮明溫潤帶有一縷天然果香~', '林叔叔在台東鹿野的冠軍茶廠出產的紅烏龍茶葉，好多年都得了金賞，重發酵的紅烏龍，茶味鮮明溫潤帶有一縷天然果香，是我們私下很愛喝的台灣茶之一，所以決定用這個我們都好喜歡的紅烏龍，做成淡雅內斂的戚風蛋糕；若賦予她生命，她絕對是位氣質出眾的女孩。\r\n\r\n裝飾意象為台灣茶花，吃蛋糕的同時別忘了台灣有世界頂級的好茶！（目前已改版為紅烏龍茶香緹內餡，已不再附上鮮奶油與紅烏龍茶淋醬喔）', '戚風蛋糕', 3, 7, '6吋', '9吋', NULL, 820, 1050, NULL, 300, '2024-05-01 08:22:51', 1),
(10827, '布丁泡芙', '將國民甜點統一布丁拌合beard papa’s經典卡士達內餡，完整呈現從小到大最熟悉的味道💞\r\n\r\n當外酥內軟的泡芙外皮遇到咕溜滑嫩的布丁內餡，一口咬下品嘗雙重口感。', '一吃再吃，停「布」下來的熟悉滋味！\r\n\r\n同樣是傳承多年美味的兩大品牌beard papa’s與統一布丁再度聯名啦！\r\n\r\n將國民甜點統一布丁拌合beard papa’s經典卡士達內餡，完整呈現從小到大最熟悉的味道💞\r\n\r\n當外酥內軟的泡芙外皮遇到咕溜滑嫩的布丁內餡，一口咬下品嘗雙重口感。\r\n\r\n緊接而來布丁與焦糖的甜香交錯撲鼻~就是這股經典又熟悉的滋味！\r\n\r\n兼具口感、味覺、嗅覺的多重感官享受，讓人一吃再吃停不下來😋', '泡芙', 5, 17, '', '', NULL, 450, 0, NULL, 300, '2024-05-01 08:25:21', 1),
(10828, '小山園抹茶 生巧克力 (140g/盒)', '添加日本頂級小山園抹茶粉，\r\n\r\n顏色翠綠，濃郁茶味清香不苦澀，\r\n\r\n是抹茶控絕對不能錯過的味道。', '什麼是生巧克力？\r\n\r\n生巧克力的「生」字源自日文「生チョコレート」，是新鮮的意思,\r\n\r\n加入鮮奶油混合，口感滑順並帶有添加日本頂級小山園抹茶粉，\r\n\r\n顏色翠綠，濃郁茶味清香不苦澀，\r\n\r\n是抹茶控絕對不能錯過的味道。', '巧克力', 5, 16, '', '', NULL, 520, 0, NULL, 300, '2024-05-01 08:54:52', 1),
(10829, '巴斯克乳酪蛋糕', '嚴選日本京都丸久小山園焙茶，重烘焙的茶香和本來就帶有煙燻感的焦黑外皮十分契合\r\n\r\n充滿底蘊卻內斂，滋味不似看上去那般厚重，\r\n直到尾韻才漸漸帶出豐沛的茶感。', '嚴選日本京都丸久小山園焙茶，重烘焙的茶香和本來就帶有煙燻感的焦黑外皮十分契合\r\n\r\n充滿底蘊卻內斂，滋味不似看上去那般厚重，\r\n直到尾韻才漸漸帶出豐沛的茶感。\r\n \r\n保存方式：\r\n全程冷藏，可保存7天 (最佳賞味3天內)，\r\n如果需要長期保存，冷凍的話可以保存一個月，\r\n食用前需要放置冷藏12小時以上的時間來解凍！\r\n \r\n最佳賞味方式：\r\n食用前可從冷藏移往冷凍放置40分鐘，再拿出來馬上吃，口感最佳。', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 450, 590, NULL, 300, '2024-05-01 08:58:22', 1),
(10830, '極濃小山園抹茶', '嚴選日本京都丸久小山園抹茶粉，翠綠半熟的內裏彷若走入了蔥鬱森林\r\n尾韻些許的海苔風味和回甘，正是品質優良的最佳證明\r\n搭配濃郁的奶油乳酪，不一昧追求抹茶的濃厚，而是在兩者間取得良好的平衡\r\n感受交織茶香與奶香所帶來的美妙風味吧。', '商品資訊\r\n請在購買完成後，加入杳杳官方LINE，我們將會傳送物流宅配資訊給您，方便追蹤確認寄送進度。\r\n \r\n嚴選日本京都丸久小山園抹茶粉，翠綠半熟的內裏彷若走入了蔥鬱森林\r\n尾韻些許的海苔風味和回甘，正是品質優良的最佳證明\r\n搭配濃郁的奶油乳酪，不一昧追求抹茶的濃厚，而是在兩者間取得良好的平衡\r\n感受交織茶香與奶香所帶來的美妙風味吧。\r\n \r\n保存方式：\r\n全程冷藏，可保存7天 (最佳賞味3天內)，\r\n如果需要長期保存，冷凍的話可以保存一個月，\r\n食用前需要放置冷藏12小時以上的時間來解凍！\r\n \r\n最佳賞味方式：\r\n食用前可從冷藏移往冷凍放置40分鐘，再拿出來馬上吃，口感最佳。', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 450, 590, NULL, 300, '2024-05-01 09:00:20', 1),
(10831, '伯爵茶磅蛋糕(1入)', '伯爵茶蛋糕濃郁的伯爵茶香氣是必須的，佛手柑與錫蘭紅茶，加上糖煮杏桃帶來甜蜜的口感，蛋糕體內加入了堅果香氣的杏仁粉以及呼應糖煮杏桃的蘭姆酒，這是完美的伯爵茶蛋糕。', '「我最愛的茶就是伯爵茶！」其實這個配方已經構思很久，也做過了5個版本一直調整，雖然伯爵的茶香很美好，但單純的伯爵茶卻略為單調，由不同的食材，比例與組合嘗試後，終於做出了這個伯爵茶蛋糕；這個蛋糕濃郁的伯爵茶香氣是必須的，佛手柑與錫蘭紅茶，加上糖煮杏桃帶來甜蜜的口感，蛋糕體內加入了堅果香氣的杏仁粉以及呼應糖煮杏桃的蘭姆酒，這是完美的伯爵茶蛋糕。', '磅蛋糕', 3, 12, '', '', NULL, 450, 0, NULL, 300, '2024-05-01 09:02:36', 1),
(10832, '柚子檸檬磅蛋糕(1入)', '柚子檸檬口味須先閱讀注意事項再訂購，同意在購買，謝謝。\r\n「檸檬磅蛋糕是我們配方的原點！」常常有人說，要知道一家店的甜點如何，就試他們的檸檬蛋糕或是檸檬塔吧，原本的檸檬蛋糕1歲的時候，我們在構思如何把檸檬蛋糕再升級，原本的檸檬蛋糕我一直覺得少了一點「溫暖」的味道，很清新、深刻，但少了份溫度，我們使用了「日本高知縣產的柚子」，加入到蛋糕當中，讓原本的檸檬蛋糕帶來更有深度也更完整的味道！到了檸檬蛋糕2歲時，我希望蛋糕呈現的味道可以更柔和，所以以法國黃檸檬取代了原本的綠檸檬，用來做成焦糖色的檸檬糖霜，帶來糖果香氣跟更濃郁深刻的檸檬香味。', '#關於柚子檸檬磅蛋糕說明\r\n柚子檸檬蛋糕的結構因為加入了奶油起司，所以會像磅蛋糕跟起司蛋糕混合的結構，氣孔會比其他口味的磅蛋糕更少，這是我們配方的正常狀況，也是一直以來柚子檸檬磅蛋糕的樣子，從開賣以來銷量最好的就是檸檬蛋糕，配方的結構從來沒有改過，也是客人最喜歡的口味之一，所以也不會去改動，如果有疑慮請不要訂購柚子檸檬蛋糕。\r\n\r\n這是我們這個口味配方的特色，從過去到現在都長這樣，而這個結構不會在其他口味出現，也是因為這個，同重量下的檸檬蛋糕會比其他口味小上許多。', '磅蛋糕', 3, 12, '', '', NULL, 450, 0, NULL, 300, '2024-05-01 09:05:07', 1),
(10833, '泰奶泡芙(6入)', '選用經典泰式茶粉，拌合獨家卡士達內餡，完整呈現泰奶的招牌橘紅色調❗\r\n\r\n一口咬下，獨特的濃郁茶香撲鼻而來，滑順的卡士達內餡緊接著在舌尖上化開~\r\n\r\n視覺、嗅覺與味覺的三重享受，讓人彷彿置身泰國，真的是”泰”好吃啦😋', '🛫不用飛出國也能感受泰式熱帶風情！\r\n\r\n🧡選用經典泰式茶粉，拌合獨家卡士達內餡，完整呈現泰奶的招牌橘紅色調❗\r\n\r\n一口咬下，獨特的濃郁茶香撲鼻而來，滑順的卡士達內餡緊接著在舌尖上化開~\r\n\r\n視覺、嗅覺與味覺的三重享受，讓人彷彿置身泰國，真的是”泰”好吃啦😋\r\n\r\n🧡4月份還推出「法式甜圈」 (限定門市販售)\r\n\r\n起源於環法單車比賽的甜甜圈造型泡芙，經過精心烘焙，吃起來帶有鬆餅微酥鬆軟的口感。\r\n\r\n搭配4月限定泰奶卡士達內餡，兩種異國風味碰撞出令人讚不絕口的美味。', '泡芙', 5, 17, '', '', NULL, 450, 0, NULL, 300, '2024-05-01 09:09:40', 1),
(10834, '黃澄澄檸檬派', '招牌甜點\r\n\r\n酥脆的手工塔皮搭配多種檸檬調配的內餡,\r\n\r\n酸溜溜的口感令人意猶未盡, 回味無窮~', '招牌甜點\r\n\r\n酥脆的手工塔皮搭配多種檸檬調配的內餡,\r\n\r\n酸溜溜的口感令人意猶未盡, 回味無窮\r\n\r\n▹  食材 : 九如檸檬奶油餡、開心果碎、原味塔皮\r\n\r\n▹  保存方式 : 冷藏3天，冷凍7天\r\n\r\n✦  過敏源資訊：本產品線含有堅果、穀物及蛋奶類，不建議過敏體質者食用。', '派', 2, 6, '6吋', '9吋', NULL, 620, 850, NULL, 300, '2024-05-01 09:13:18', 1),
(10835, '梔子百香烏龍茶塔', '以明亮的酸甜滋味開頭，香緹、奶凍、奶餡創造多層次\r\n\r\n口感將百香果與烏龍茶獨特的香氣完美揉合，槴子花香驚喜點綴\r\n\r\n最後以淡淡茶味收斂整趟味蕾之旅，清新充滿活力的滋味，很適合夏天搭配冷泡茶享用。', '以明亮的酸甜滋味開頭，香緹、奶凍、奶餡創造多層次\r\n\r\n口感將百香果與烏龍茶獨特的香氣完美揉合，槴子花香驚喜點綴\r\n\r\n最後以淡淡茶味收斂整趟味蕾之旅，清新充滿活力的滋味，很適合夏天搭配冷泡茶享用。\r\n\r\n\r\n▹  食材 :  百香果香緹、槴子花烏龍茶奶凍、百香果奶餡、原味塔皮\r\n\r\n▹  保存方式 : 冷藏3天，冷凍7天\r\n\r\n✦  過敏源資訊：本產品線含有堅果、穀物及蛋奶類，不建議過敏體質者食用。', '塔', 2, 5, '6吋', '9吋', NULL, 700, 950, NULL, 300, '2024-05-21 12:14:48', 1),
(10836, '香頌貝禮詩生巧', '咖啡塔皮飄散出濃濃的成熟香味，\r\n\r\n貝禮詩奶酒則是無法抗拒的魅力，\r\n\r\n香醇滑順的口感，無法忘懷的滋味，\r\n\r\n正如戀愛中的你/妳一般;\r\n\r\n58％生巧克力與牛奶巧克力調和加上甜甜的奶酒香氣，\r\n\r\n搭配咖啡或茶飲，一起分享的這陶醉的時刻！', '咖啡塔皮飄散出濃濃的成熟香味，\r\n\r\n貝禮詩奶酒則是無法抗拒的魅力，\r\n\r\n香醇滑順的口感，無法忘懷的滋味，\r\n\r\n正如戀愛中的你/妳一般;\r\n\r\n58％生巧克力與牛奶巧克力調和加上甜甜的奶酒香氣，\r\n\r\n搭配咖啡或茶飲，一起分享的這陶醉的時刻！\r\n\r\n▹ 食材 : 巧克力碎片、牛奶巧克力香緹、58%貝禮詩奶酒生巧克力、咖啡塔皮\r\n\r\n▹ 保存方式 : 冷藏3天，冷凍7天\r\n\r\n✦  過敏源資訊：本產品線含有堅果、穀物及蛋奶類，不建議過敏體質者食用。', '塔', 2, 5, '6吋', '9吋', NULL, 850, 1150, NULL, 300, '2024-05-01 09:17:50', 1),
(10837, '檸檬塔', '使用大量蛋黃、北海道中沢鮮奶油、與綠檸檬汁慢火製成，過程嚴守每一步驟的熬煮溫度，口感細緻、入口即化！比起溫順的黃檸檬，明亮的酸度是台灣在地綠檸檬的最大特色！排排站的史萊姆們，是帶著閃亮光澤的瑞士蛋白霜，還有天然梔子花色素調色的蛋白餅，軟綿與酥脆口感一次擁有！', '為避免塔皮浸濕，檸檬塔建議當天享用完畢，才會是最佳體驗喔。\r\n\r\n使用大量蛋黃、北海道中沢鮮奶油、與綠檸檬汁慢火製成，過程嚴守每一步驟的熬煮溫度，口感細緻、入口即化！比起溫順的黃檸檬，明亮的酸度是台灣在地綠檸檬的最大特色！排排站的史萊姆們，是帶著閃亮光澤的瑞士蛋白霜，還有天然梔子花色素調色的蛋白餅，軟綿與酥脆口感一次擁有！\r\n\r\n另外我們偷偷用了一個材料來帶出清香，你猜猜看吧～\r\n\r\n真的真的很喜歡我們的檸檬塔呢…', '塔', 2, 5, '6吋', '9吋', NULL, 750, 1280, NULL, 300, '2024-05-01 09:20:50', 1),
(10838, '檸檬優格乳酪蛋糕', '新鮮檸檬的酸，一定要用甜來襯托，達到平衡的酸甜口感刺激著味蕾，忍不住一口接一口。', '新鮮檸檬的酸，一定要用甜來襯托，達到平衡的酸甜口感刺激著味蕾，忍不住一口接一口。\r\n\r\n※和重乳酪蛋糕不同，獨特研發的優格乳酪蛋糕吃起來清爽不膩口，手做核桃餅乾底散發獨特蜂蜜堅果香，頂部水果凍層料好味濃。\r\n\r\n每一步都是細心手做，將我們想讓大家吃到好吃蛋糕的心意包裝進去，讓你驚嘆原來乳酪蛋糕可以這麼豐富。 ', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 520, 950, NULL, 300, '2024-05-21 09:23:47', 1),
(10839, '純粹玫莓 優格乳酪蛋糕', '滿滿五種綜合莓果，配上來自屏東大花農場的有機玫瑰醬，香氣濃厚。\r\n\r\n外表已經很美，一刀下去內層更美（吃之前必須先拍10張照炫耀）同時滿足味覺和視覺的少女殺手。', '▎滿滿五種綜合莓果，配上來自屏東大花農場的有機玫瑰醬，香氣濃厚。\r\n\r\n▎外表已經很美，一刀下去內層更美（吃之前必須先拍10張照炫耀）同時滿足味覺和視覺的少女殺手。\r\n\r\n※和重乳酪蛋糕不同，獨特研發的優格乳酪蛋糕吃起來清爽不膩口，手做核桃餅乾底散發獨特蜂蜜堅果香，頂部水果凍層料好味濃。每一步都是細心手做，將我們想讓大家吃到好吃蛋糕的心意包裝進去，讓你驚嘆原來乳酪蛋糕可以這麼豐富。', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 659, 1040, NULL, 300, '2024-05-01 09:25:23', 1),
(10840, '法式檸香 重乳酪蛋糕', '細緻的黃檸檬香氣，把握火候熬煮成柔順香濃的法式檸香醬，大手筆的鋪上厚厚滿滿的一層。\r\n黃檸檬的味道溫厚，如果綠檸檬熱\r\n\r\n一入口會先品嚐到檸檬香氣，接下來法國愛樂薇奶油乳酪(Elle&Vire)的成熟奶香接續而上，最後由獨家蜂蜜核桃餅乾底綜合口感和尾韻，喜歡濃郁奶味的你一定會喜歡她！', '細緻的黃檸檬香氣，把握火候熬煮成柔順香濃的法式檸香醬，大手筆的鋪上厚厚滿滿的一層。\r\n黃檸檬的味道溫厚，如果綠檸檬熱\r\n\r\n一入口會先品嚐到檸檬香氣，接下來法國愛樂薇奶油乳酪(Elle&Vire)的成熟奶香接續而上，最後由獨家蜂蜜核桃餅乾底綜合口感和尾韻，喜歡濃郁奶味的你一定會喜歡她！\r\n\r\n▎成份(蛋奶素)\r\n\r\n進口黃檸檬、法國愛樂薇奶油乳酪(Elle&Vire)、法國愛樂薇動物性鮮奶油、南投新畜走地放養雞蛋、糖、玉米粉、特製餅乾底 (法國Fléchard無水奶油、日本NIPPN麵粉、日本NIPPN全麥麵粉、加州核桃、小農蜂蜜) \r\n*本產品含有乳製品、堅果、麩質穀類製品可能導致過敏原', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 670, 950, NULL, 300, '2024-05-21 10:46:26', 1),
(10841, '小山園抹茶磅蛋糕', '使用京都宇治名門「丸久小山園抹茶粉」、日本昭和製菓粉、北海道中澤鮮奶油製成的磅蛋糕，質地細膩、口感濕潤、帶有濃郁抹茶香，搭配Callebaut白巧克力、中澤鮮奶油、與鮮乳坊單一牧場鮮奶製成的杏仁抹茶淋面。\r\n\r\n要吃的時候，烤一下，包你馬上進入抹茶小宇宙！', '使用京都宇治名門「丸久小山園抹茶粉」、日本昭和製菓粉、北海道中澤鮮奶油製成的磅蛋糕，質地細膩、口感濕潤、帶有濃郁抹茶香，搭配Callebaut白巧克力、中澤鮮奶油、與鮮乳坊單一牧場鮮奶製成的杏仁抹茶淋面。\r\n\r\n要吃的時候，烤一下，包你馬上進入抹茶小宇宙！', '磅蛋糕', 3, 12, '', '', NULL, 480, 0, NULL, 300, '2024-05-01 09:29:52', 1),
(10842, '炭焙烏龍 生巧克力 (140g/盒)', '使用台灣有機認證茶葉，\r\n\r\n經歷龍眼木炭焙口口甘醇，\r\n\r\n茶香味濃尾韻回甘持久。', '什麼是生巧克力？\r\n\r\n生巧克力的「生」字源自日文「生チョコレート」，是新鮮的意思,\r\n\r\n加入鮮奶油混合，口感滑順並帶有Ｑ感\r\n\r\n視覺、味覺上 絕對讓您驚艷\r\n\r\n使用台灣有機認證茶葉，添加L-阿拉伯糖\r\n\r\n經歷龍眼木炭焙口口甘醇，\r\n\r\n茶香味濃尾韻回甘持久。', '巧克力', 5, 16, '', '', NULL, 520, 0, NULL, 300, '2024-05-01 09:33:33', 1),
(10843, '藍莓夜澎派', '歐洲野生莓果果泥，調製而成的藍莓風味乳酪\r\n\r\n新鮮藍莓滿滿覆蓋，薰衣草酥脆派皮\r\n\r\n淡紫色暈染了整個美夢，浪漫的等候只為品嘗到你', '歐洲野生莓果果泥，調製而成的藍莓風味乳酪\r\n\r\n新鮮藍莓滿滿覆蓋，薰衣草酥脆派皮\r\n\r\n淡紫色暈染了整個美夢，浪漫的等候只為品嘗到你\r\n\r\n▹  食材 : 新鮮藍莓、莓果生乳酪、藍莓杏奶餡、薰衣草塔皮\r\n\r\n▹  保存方式 : 冷藏3天\r\n\r\n✦  過敏源資訊：本產品線含有堅果、穀物及蛋奶類，不建議過敏體質者食用。', '派', 2, 6, '6吋', '9吋', NULL, 900, 1200, NULL, 300, '2024-05-20 19:28:26', 1),
(10844, '鄉村蘋果派', '青蘋果微酸香味，單純美味的低糖杏仁內餡\r\n\r\n飄散滿滿香草味的焦糖蘋果醬', '青蘋果微酸香味，單純美味的低糖杏仁內餡\r\n\r\n飄散滿滿香草味的焦糖蘋果醬\r\n\r\n多道手工只為呈現初衷\r\n\r\n大人小孩都愛的滋味\r\n\r\n▹  食材 : 開心果碎、 肉桂Sable、香草焦糖蘋果片、原味杏奶油餡、原味塔皮\r\n\r\n▹  保存方式 : 冷藏3天，冷凍7天\r\n\r\n✦  過敏源資訊：本產品線含有堅果、穀物及蛋奶類，不建議過敏體質者食用。', '派', 2, 6, '6吋', '9吋', NULL, 750, 1050, NULL, 300, '2024-05-20 19:58:08', 1),
(10845, '草莓蕾蒂派', '平凡卻不平凡的甜點\r\n\r\n原味沙布列帶出第一層風味\r\n\r\n中間夾層是手工草莓果醬與酸甜覆盆子\r\n\r\n很簡單卻讓人很喜歡', '平凡卻不平凡的甜點\r\n\r\n原味沙布列帶出第一層風味\r\n\r\n中間夾層是手工草莓果醬與酸甜覆盆子\r\n\r\n很簡單卻讓人很喜歡\r\n\r\n\r\n▹ 食材 : 覆盆子開心果碎、原味Sable、草莓覆盆子果醬、原味杏奶油餡、原味塔皮\r\n\r\n▹ 保存方式 : 冷藏3天，冷凍7天\r\n\r\n✦  過敏源資訊：本產品線含有堅果、穀物及蛋奶類，不建議過敏體質者食用。', '派', 2, 6, '6吋', '9吋', NULL, 750, 1050, NULL, 300, '2024-05-20 20:05:22', 1),
(10846, '巧克力磅蛋糕', '油封橘子的香氣與巧克力真的是天衣無縫的組合，兩者的香氣帶來豐富又厚實的味道，再加上柚子讓味道更加活潑；濕潤的蛋糕體再加上橙酒做成的糖漿進行漬封，把蛋糕內的水份牢牢的鎖著，是世界上最美味的磅蛋糕！', '「這是最高級的巧克力磅蛋糕！」我個人其實很討厭橘子味的甜點，但油封橘子的香氣與巧克力真的是天衣無縫的組合，兩者的香氣帶來豐富又厚實的味道，再加上柚子讓味道更加活潑；濕潤的蛋糕體再加上橙酒做成的糖漿進行漬封，把蛋糕內的水份牢牢的鎖著，是世界上最美味的磅蛋糕！', '磅蛋糕', 3, 12, '', '', NULL, 450, 0, NULL, 300, '2024-05-20 20:30:50', 1),
(10847, '茶理紅蘋｜日月潭紅玉紅茶', '溫和的日月潭紅玉紅茶香內餡，與大湖新鮮草莓，一口清爽可口的蘋果丁及新鮮草莓，迎接草莓季的來臨!', '茶理紅蘋｜紅玉紅茶\r\n\r\n溫和的日月潭紅玉紅茶香內餡，與大湖新鮮草莓，一口清爽可口的蘋果丁及新鮮草莓，迎接草莓季的來臨!\r\n\r\n商品尺寸：\r\n6吋約4~6人份\r\n8吋約4~6人份\r\n\r\n賞味期限：\r\n冷藏2日。常溫下勿超過二小時，收到本商品後請盡速冷藏保存。\r\n\r\n注意事項：\r\n本商品不含防腐劑，請當天盡早食用完畢。', '戚風蛋糕', 3, 7, '6吋', '9吋', NULL, 820, 1050, NULL, 300, '2024-05-20 20:38:10', 1),
(10848, '法式巧克力戚風蛋糕', '法式巧克力鮮奶油搭配新鮮草莓、比利時53%苦甜巧克力，與戚風高體相輔相成更加美味~', '法式巧克力鮮奶油搭配新鮮草莓、比利時53%苦甜巧克力，與戚風高體相輔相成更加美味~', '戚風蛋糕', 3, 7, '6吋', '9吋', NULL, 820, 1050, NULL, 300, '2024-05-20 20:45:31', 1),
(10849, '雪藏草莓戚風蛋糕', '大湖新鮮草莓，粒粒籽兒，耐人尋味的驚喜，\r\n烘熱的蛋香，透著奶甜又軟嫩的香味\r\n以整條香草豆莢入餡，\r\n每一口皆嚐到有如在舌尖含上一封跳跳糖的刺激，迸散著歡愉的樂趣。', '大湖新鮮草莓，粒粒籽兒，耐人尋味的驚喜，\r\n烘熱的蛋香，透著奶甜又軟嫩的香味\r\n以整條香草豆莢入餡，\r\n每一口皆嚐到有如在舌尖含上一封跳跳糖的刺激，迸散著歡愉的樂趣。', '戚風蛋糕', 3, 7, '6吋', '9吋', NULL, 820, 1050, NULL, 300, '2024-05-20 20:48:49', 1),
(10850, '芝麻榛果戚風蛋糕', '溫和卻濃郁的芝麻鮮奶油，撒上口感顆粒分明的焦糖榛果脆粒，入口時濕潤軟嫩的招牌戚風蛋糕體在味蕾上交織綻放。', '小雀斑斑｜芝麻榛果戚風蛋糕\r\n\r\n溫和卻濃郁的芝麻鮮奶油，撒上口感顆粒分明的焦糖榛果脆粒，入口時濕潤軟嫩的招牌戚風蛋糕體在味蕾上交織綻放。\r\n\r\n商品尺寸：\r\n6吋約4~6人份\r\n8吋約4~6人份\r\n\r\n賞味期限：\r\n冷藏2日。常溫下勿超過二小時，收到本商品後請盡速冷藏保存。\r\n\r\n注意事項：\r\n本商品不含防腐劑，請當天盡早食用完畢。', '戚風蛋糕', 3, 7, '6吋', '9吋', NULL, 820, 1050, NULL, 300, '2024-05-20 20:51:08', 1),
(10852, '經典原味千層蛋糕', '經典原味千層蛋糕以多層薄如紙的可麗餅與香草奶油餡精心製作，口感柔滑細膩，香甜可口。是聚會、節慶及日常享用的理想甜點，為您帶來絕佳的味蕾享受。', '經典原味千層蛋糕是一款精緻且層次豐富的甜點，堪稱蛋糕中的藝術品。每一層薄如紙的可麗餅都由頂級食材精心製作，層層堆疊而成，搭配絲滑細膩的香草奶油餡，帶來入口即化的絕佳口感。蛋糕外層均勻撒上細緻的糖粉，使其呈現出完美的外觀與香甜的味道。\r\n\r\n每一口都能品味到濃郁的奶香和自然的香草香氣。這款蛋糕不僅適合作為聚會、生日派對或節慶的甜點選擇，還是日常享受的理想點心。無論是搭配咖啡、茶還是獨自品嚐，都能帶來無與倫比的美味享受。', '千層蛋糕', 3, 8, '6吋', '9吋', NULL, 1800, 2700, NULL, 300, '2024-05-20 20:58:13', 1),
(10853, '抹茶千層蛋糕', '抹茶千層蛋糕以多層薄如紙的可麗餅與香草奶油餡精心製作，口感柔滑細膩，香甜可口。是聚會、節慶及日常享用的理想甜點，為您帶來絕佳的味蕾享受。', '抹茶千層蛋糕以多層薄如紙的可麗餅與香草奶油餡精心製作，口感柔滑細膩，香甜可口。是聚會、節慶及日常享用的理想甜點，為您帶來絕佳的味蕾享受。', '千層蛋糕', 3, 8, '6吋', '9吋', NULL, 1800, 2700, NULL, 300, '2024-05-20 21:02:02', 1),
(10854, '伯爵茶千層蛋糕', '伯爵茶千層蛋糕是一款精緻且層次豐富的甜點，堪稱蛋糕中的藝術品。每一層薄如紙的可麗餅都由頂級食材精心製作，層層堆疊而成，搭配絲滑細膩的香草奶油餡，帶來入口即化的絕佳口感。蛋糕外層均勻撒上細緻的糖粉，使其呈現出完美的外觀與香甜的味道。', '伯爵茶千層蛋糕是一款精緻且層次豐富的甜點，堪稱蛋糕中的藝術品。每一層薄如紙的可麗餅都由頂級食材精心製作，層層堆疊而成，搭配絲滑細膩的香草奶油餡，帶來入口即化的絕佳口感。蛋糕外層均勻撒上細緻的糖粉，使其呈現出完美的外觀與香甜的味道。', '千層蛋糕', 3, 8, '6吋', '9吋', NULL, 1800, 2700, NULL, 300, '2024-05-20 21:04:45', 1),
(10855, '玫瑰千層蛋糕', '玫瑰千層蛋糕以多層薄如紙的可麗餅與香草奶油餡精心製作，口感柔滑細膩，香甜可口。是聚會、節慶及日常享用的理想甜點，為您帶來絕佳的味蕾享受。', '玫瑰千層蛋糕以多層薄如紙的可麗餅與香草奶油餡精心製作，口感柔滑細膩，香甜可口。是聚會、節慶及日常享用的理想甜點，為您帶來絕佳的味蕾享受。', '千層蛋糕', 3, 8, '6吋', '9吋', NULL, 1800, 2700, NULL, 300, '2024-05-20 21:06:45', 1),
(10856, '提拉米蘇', '提拉米蘇 國外進口新鮮乳酪製成慕斯，風味可口清爽，底層採用歐洲進口小麥胚芽餅製作，香味誘人，並以進口Barry Callebaut高脂可可粉鋪灑而成，若酌以一杯濃郁咖啡，閒散於午后將是絕配。(內含微量咖啡酒)(葷食)', '提拉米蘇 國外進口新鮮乳酪製成慕斯，風味可口清爽，底層採用歐洲進口小麥胚芽餅製作，香味誘人，並以進口Barry Callebaut高脂可可粉鋪灑而成，若酌以一杯濃郁咖啡，閒散於午后將是絕配。(內含微量咖啡酒)(葷食)', '提拉米蘇', 3, 10, '6吋', '9吋', NULL, 350, 500, NULL, 300, '2024-05-20 21:09:39', 1),
(10857, '芒果提拉米蘇', '芒果提拉米蘇 使用臺灣愛文芒果果丁，與國外進口的新鮮乳酪建構出芒果提拉米蘇的特殊底韻，並搭配來自歐洲的消化餅乾製作出酥脆的口感與完美的味蕾享受 (葷食)', '芒果提拉米蘇 使用臺灣愛文芒果果丁，與國外進口的新鮮乳酪建構出芒果提拉米蘇的特殊底韻，並搭配來自歐洲的消化餅乾製作出酥脆的口感與完美的味蕾享受 (葷食)', '提拉米蘇', 3, 10, '6吋', '9吋', NULL, 350, 500, NULL, 300, '2024-05-20 21:10:34', 1),
(10858, '杏仁可可提拉米蘇', '濕潤的杏仁蛋糕與香醇咖啡完美融合，漸層中的蛋糕體入口咖啡味十足。橙酒的淡雅輕輕點綴，讓慕斯內餡清爽滑順，回甘的可可粉讓你品嚐層次如交響樂般，奢華極致的美味。', '濕潤的杏仁蛋糕與香醇咖啡完美融合，漸層中的蛋糕體入口咖啡味十足。橙酒的淡雅輕輕點綴，讓慕斯內餡清爽滑順，回甘的可可粉讓你品嚐層次如交響樂般，奢華極致的美味。', '提拉米蘇', 3, 10, '', '', NULL, 350, 500, NULL, 300, '2024-05-20 21:12:48', 1),
(10859, '雲朵義式提拉米蘇', '使用減糖蛋糕體取代甜膩的手指餅乾，再沾上香醇濃郁的咖啡。橙酒提味更烘托出經典提拉乳酪餡，大人味的香濃經典 選購兩顆六吋蛋糕者，請使用宅配服務勿選超商。', '使用減糖蛋糕體取代甜膩的手指餅乾，再沾上香醇濃郁的咖啡。橙酒提味更烘托出經典提拉乳酪餡，大人味的香濃經典 選購兩顆六吋蛋糕者，請使用宅配服務勿選超商。', '提拉米蘇', 3, 10, '6吋', '9吋', NULL, 350, 500, NULL, 300, '2024-05-20 21:14:09', 1),
(10860, '玫瑰葡萄柚慕斯蛋糕', '慕斯蛋糕以輕盈柔滑的慕斯層搭配海綿蛋糕或餅乾底製成，口感豐富，入口即化。精美的外觀和多變的風味使其成為各種場合的理想甜點選擇，為您的味蕾帶來無與倫比的享受。', '慕斯蛋糕是一款以輕盈、滑順為特點的甜點，其口感如雲朵般柔軟。慕斯蛋糕的核心是由鮮奶油、巧克力、果泥等材料混合打發而成，帶有豐富且多變的風味。蛋糕的底層通常是由海綿蛋糕或餅乾碎組成，增添了整體的口感層次。精心調配的慕斯蛋糕，每一口都能感受到濃郁的風味和入口即化的質地。\r\n\r\n慕斯蛋糕的外觀同樣令人驚艷，常常會以巧克力屑、新鮮水果或糖霜裝飾，使其更加精緻迷人。這款蛋糕非常適合作為生日、紀念日等特殊場合的甜點選擇，並且能夠滿足任何一位甜點愛好者的味蕾需求。無論是搭配咖啡還是茶，慕斯蛋糕都能完美呈現其獨特魅力。', '幕斯蛋糕', 3, 11, '6吋', '9吋', NULL, 950, 1500, NULL, 300, '2024-05-20 21:20:57', 1),
(10861, '蘭姆酒慕斯蛋糕', '柔以微苦甜而風味濃厚、入口即化生巧克力甘那許夾餡，\r\n甜度較低而風味清爽的甘那許抹面，搭配軟綿濕潤巧克力海綿蛋糕，\r\n每一次入口，同時品嚐巧克力濃醇風味，與經典蘭姆酒香的豪邁與奔放 。', '柔以微苦甜而風味濃厚、入口即化生巧克力甘那許夾餡，\r\n甜度較低而風味清爽的甘那許抹面，搭配軟綿濕潤巧克力海綿蛋糕，\r\n每一次入口，同時品嚐巧克力濃醇風味，與經典蘭姆酒香的豪邁與奔放 。', '幕斯蛋糕', 3, 11, '6吋', '9吋', NULL, 950, 1500, NULL, 300, '2024-05-20 21:26:25', 1),
(10862, '檸檬慕斯蛋糕', '慕斯蛋糕以輕盈柔滑的慕斯層搭配海綿蛋糕或餅乾底製成，口感豐富，入口即化。精美的外觀和多變的風味使其成為各種場合的理想甜點選擇，為您的味蕾帶來無與倫比的享受。', '慕斯蛋糕是一款以輕盈、滑順為特點的甜點，其口感如雲朵般柔軟。慕斯蛋糕的核心是由鮮奶油、巧克力、果泥等材料混合打發而成，帶有豐富且多變的風味。蛋糕的底層通常是由海綿蛋糕或餅乾碎組成，增添了整體的口感層次。精心調配的慕斯蛋糕，每一口都能感受到濃郁的風味和入口即化的質地。\r\n\r\n慕斯蛋糕的外觀同樣令人驚艷，常常會以巧克力屑、新鮮水果或糖霜裝飾，使其更加精緻迷人。這款蛋糕非常適合作為生日、紀念日等特殊場合的甜點選擇，並且能夠滿足任何一位甜點愛好者的味蕾需求。無論是搭配咖啡還是茶，慕斯蛋糕都能完美呈現其獨特魅力。', '幕斯蛋糕', 3, 11, '6吋', '9吋', NULL, 950, 1500, NULL, 300, '2024-05-20 21:28:09', 1),
(10863, '檸檬優格乳酪蛋糕', '新鮮檸檬的酸，一定要用甜來襯托，達到平衡的酸甜口感刺激著味蕾，忍不住一口接一口。\r\n\r\n※和重乳酪蛋糕不同，獨特研發的優格乳酪蛋糕吃起來清爽不膩口，手做核桃餅乾底散發獨特蜂蜜堅果香，頂部水果凍層料好味濃。\r\n\r\n每一步都是細心手做，將我們想讓大家吃到好吃蛋糕的心意包裝進去，讓你驚嘆原來乳酪蛋糕可以這麼豐富。 ', '新鮮檸檬的酸，一定要用甜來襯托，達到平衡的酸甜口感刺激著味蕾，忍不住一口接一口。\r\n\r\n※和重乳酪蛋糕不同，獨特研發的優格乳酪蛋糕吃起來清爽不膩口，手做核桃餅乾底散發獨特蜂蜜堅果香，頂部水果凍層料好味濃。\r\n\r\n每一步都是細心手做，將我們想讓大家吃到好吃蛋糕的心意包裝進去，讓你驚嘆原來乳酪蛋糕可以這麼豐富。 ', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 520, 820, NULL, 300, '2024-05-20 21:31:27', 1),
(10864, '芒果優格乳酪蛋糕', '頂層滿滿芒果丁、裡層濃濃芒果香，從頭到腳下重本的芒到不行。多重口感豐富美味，人氣高居不下第一名。', '頂層滿滿芒果丁、裡層濃濃芒果香，從頭到腳下重本的芒到不行。多重口感豐富美味，人氣高居不下第一名。\r\n※和重乳酪蛋糕不同，獨特研發的優格乳酪蛋糕吃起來清爽不膩口，手做核桃餅乾底散發獨特蜂蜜堅果香，頂部水果凍層料好味濃。\r\n\r\n每一步都是細心手做，將我們想讓大家吃到好吃蛋糕的心意包裝進去，讓你驚嘆原來乳酪蛋糕可以這麼豐富。 ', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 520, 820, NULL, 300, '2024-05-20 21:35:00', 1),
(10865, '草莓優格乳酪蛋糕', '不膩口的優格乳酪醬，加上手工熬煮草莓果醬，可以品嚐到淡淡的草莓香。\r\n夾入產地急凍的漂亮草莓，每一口都是浪漫的味道～', '不膩口的優格乳酪醬，加上手工熬煮草莓果醬，可以品嚐到淡淡的草莓香。\r\n\r\n夾入產地急凍的漂亮草莓，每一口都是浪漫的味道～\r\n\r\n※和重乳酪蛋糕不同，獨特研發的優格乳酪蛋糕吃起來清爽不膩口，手做核桃餅乾底散發獨特蜂蜜堅果香，頂部水果凍層料好味濃。\r\n\r\n每一步都是細心手做，將我們想讓大家吃到好吃蛋糕的心意包裝進去，讓你驚嘆原來乳酪蛋糕可以這麼豐富。 \r\n\r\n', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 520, 820, NULL, 300, '2024-05-20 21:37:09', 1),
(10866, '蜂蜜金桔乳酪蛋糕', '來自台灣自產的金桔，酸香帶勁，搭配上帶著滿滿蜜香的蜂蜜，一個有點酸、一個有點甜，搭配起來剛剛好。', '來自台灣自產的金桔，酸香帶勁，搭配上帶著滿滿蜜香的蜂蜜，一個有點酸、一個有點甜，搭配起來剛剛好。\r\n\r\n一個蛋糕擁有多層次，頂部果凍層口感冰涼、像把蜂蜜金桔果汁最好的香氣一瞬間鎖住凝結，往下品嚐湧上的是優格乳酪蛋糕獨特的綿細口感，接下來底部獨家餅乾底帶來核桃與全麥粉香氣完美收尾。\r\n\r\n▎清爽的滋味最適合在微熱的日子享用！\r\n\r\n※和重乳酪蛋糕不同，獨特研發的優格乳酪蛋糕吃起來清爽不膩口，手做核桃餅乾底散發獨特蜂蜜堅果香，頂部水果凍層料好味濃。每一步都是細心手做，將我們想讓大家吃到好吃蛋糕的心意包裝進去，讓你驚嘆原來乳酪蛋糕可以這麼豐富。 ', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 520, 820, NULL, 300, '2024-05-20 21:39:50', 1),
(10867, '芝麻重乳酪蛋糕', '台灣土產芝麻慢工研磨成的芝麻粉，\r\n不計成本的加入乳酪蛋糕，\r\n和低溫烘烤的核桃，相得益彰。', '台灣土產芝麻慢工研磨成的芝麻粉，\r\n不計成本的加入乳酪蛋糕，\r\n和低溫烘烤的核桃，相得益彰。', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 520, 820, NULL, 300, '2024-05-20 21:41:25', 1),
(10868, '巧克力重乳酪蛋糕', '上層濃厚巧克力層，濃郁到像在吃生巧克力、\r\n下層原味乳酪層，同時滿足對純粹乳酪的渴望、\r\n頂層微苦法芙娜可可粉，中和甜味帶出更深的巧克力尾韻。\r\n適合任何情況的巧克力成癮者', '上層濃厚巧克力層，濃郁到像在吃生巧克力、\r\n下層原味乳酪層，同時滿足對純粹乳酪的渴望、\r\n頂層微苦法芙娜可可粉，中和甜味帶出更深的巧克力尾韻。\r\n適合任何情況的巧克力成癮者', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 600, 820, NULL, 300, '2024-05-20 21:43:13', 1),
(10869, '玫瑰紅茶重乳酪蛋糕', '來自屏東的有機玫瑰花瓣，\r\n細心撿拾慢熬，成就花香芬芳的甜蜜果醬。\r\n使用英國皇家認證Twinings伯爵茶，\r\n研磨成茶粉以絕佳比例與乳酪混合，從飲食開始--貴族化。', '來自屏東的有機玫瑰花瓣，\r\n細心撿拾慢熬，成就花香芬芳的甜蜜果醬。\r\n使用英國皇家認證Twinings伯爵茶，\r\n研磨成茶粉以絕佳比例與乳酪混合，從飲食開始--貴族化。', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 600, 820, NULL, 300, '2024-05-20 21:44:35', 1),
(10870, '芋泥巴斯克', '芋頭、法國愛樂薇奶油乳酪(Elle&Vire)、法國愛樂薇物性鮮奶油、南投新畜走地放養雞蛋、糖、、日本NIPPN麵粉、雪鐵龍無鹽奶油\r\n*本產品含有乳製品、堅果、麩質穀類製品可能導致過敏原', '芋頭、法國愛樂薇奶油乳酪(Elle&Vire)、法國愛樂薇物性鮮奶油、南投新畜走地放養雞蛋、糖、、日本NIPPN麵粉、雪鐵龍無鹽奶油\r\n*本產品含有乳製品、堅果、麩質穀類製品可能導致過敏原', '乳酪蛋糕', 3, 9, '6吋', '9吋', NULL, 450, 650, NULL, 300, '2024-05-20 21:46:59', 1),
(10871, '古坑咖啡生巧克力', '選用雲林古坑本產咖啡豆，\r\n佐咖啡利口酒提香，添加L-阿拉伯糖\r\n擁有咖啡、焦糖、炭焙、可可多層次的口感。', '什麼是生巧克力？\r\n\r\n生巧克力的「生」字源自日文「生チョコレート」，是新鮮的意思,\r\n\r\n加入鮮奶油混合，口感滑順並帶有Ｑ感\r\n\r\n視覺、味覺上 絕對讓您驚艷\r\n\r\n \r\n\r\n \r\n\r\n選用雲林古坑本產咖啡豆，\r\n\r\n佐咖啡利口酒提香，添加L-阿拉伯糖\r\n\r\n擁有咖啡、焦糖、炭焙、可可多層次的口感。', '巧克力', 5, 16, '', '', NULL, 520, 0, NULL, 300, '2024-05-20 21:52:01', 1),
(10872, '85%經典生巧克力', '使用頂級黑巧克力，\r\n結合馬達加斯加天然香草莢，\r\n含酒提香展現可可原始純粹的味道。', '什麼是生巧克力？\r\n\r\n生巧克力的「生」字源自日文「生チョコレート」，是新鮮的意思,\r\n\r\n加入鮮奶油混合，口感滑順並帶有Ｑ感\r\n\r\n視覺、味覺上 絕對讓您驚艷!\r\n\r\n \r\n\r\n \r\n\r\n使用頂級黑巧克力，\r\n\r\n結合馬達加斯加天然香草莢，\r\n\r\n含酒提香展現可可原始純粹的味道。', '巧克力', 5, 16, '', '', NULL, 520, 0, NULL, 300, '2024-05-20 21:53:24', 1),
(10873, '百香果生巧克力', '使用百香果熬煮出來的果泥，\r\n加入台灣小農蜂蜜提出鮮果味，\r\n鮮果的濃郁完整鎖在裡面。', '什麼是生巧克力？\r\n\r\n生巧克力的「生」字源自日文「生チョコレート」，是新鮮的意思,\r\n\r\n加入鮮奶油混合，口感滑順並帶有Ｑ感\r\n\r\n視覺、味覺上 絕對讓您驚艷!\r\n使用百香果熬煮出來的果泥，\r\n加入台灣小農蜂蜜提出鮮果味，\r\n鮮果的濃郁完整鎖在裡面。\r\n\r\n ', '巧克力', 5, 16, '', '', NULL, 520, 0, NULL, 300, '2024-05-01 21:31:27', 1),
(10874, '文山包種茶達克瓦茲', '包種茶奶油霜/洛神花奶油霜/紫蘇青梅凍/包種茶粉', '包種茶奶油霜/洛神花奶油霜/紫蘇青梅凍/包種茶粉', '達克瓦茲', 4, 13, '', '', NULL, 110, 0, NULL, 300, '2024-09-23 18:09:59', 1),
(10875, '黑糖奶茶達克瓦茲', '錫蘭紅茶達可瓦茲/黑糖奶茶奶油霜/黑糖麻吉\r\n\r\n使用點甜嚴選錫蘭紅茶葉，清香不澀，將其揉合進蛋糕體、烤製成擁有酥脆的外殼，內裡卻鬆軟輕盈的達可瓦茲，配上濃郁的黑糖奶茶霜。\r\n\r\n吃下口，就像不論季節都想來上一杯的黑糖奶茶，啊，好療鬱！\r\n', '錫蘭紅茶達可瓦茲/黑糖奶茶奶油霜/黑糖麻吉\r\n\r\n使用點甜嚴選錫蘭紅茶葉，清香不澀，將其揉合進蛋糕體、烤製成擁有酥脆的外殼，內裡卻鬆軟輕盈的達可瓦茲，配上濃郁的黑糖奶茶霜。\r\n\r\n吃下口，就像不論季節都想來上一杯的黑糖奶茶，啊，好療鬱！', '達克瓦茲', 4, 13, '', '', NULL, 110, 0, NULL, 300, '2024-09-23 18:40:47', 1),
(10876, '日本柚抹茶達克瓦茲', '因為它就像個小漢堡般的存在。有別於一般達克瓦茲，我們用雙倍高的模框、雙倍量的奶油霜製成，希望更能突顯達可瓦茲外酥內軟的口感。\r\n\r\n外殼烤的酥脆，蛋白蛋糕體內卻柔軟蓬鬆，加上濃郁柔軟的抹茶甘奈許與爽口的柚子奶油霜。達克瓦茲看似堅實的男子外表，靈魂卻是不折不扣的溫柔，你說，女孩們怎能不愛他呢？', '因為它就像個小漢堡般的存在。有別於一般達克瓦茲，我們用雙倍高的模框、雙倍量的奶油霜製成，希望更能突顯達可瓦茲外酥內軟的口感。\r\n\r\n外殼烤的酥脆，蛋白蛋糕體內卻柔軟蓬鬆，加上濃郁柔軟的抹茶甘奈許與爽口的柚子奶油霜。達克瓦茲看似堅實的男子外表，靈魂卻是不折不扣的溫柔，你說，女孩們怎能不愛他呢？', '達克瓦茲', 4, 13, '', '', NULL, 110, 0, NULL, 300, '2024-09-23 18:46:19', 1),
(10877, '柚香茶韻慕斯蛋糕', '「音樂響起，讓我們在你口中跳首圓舞曲吧～」\r\n\r\n於是，輕柔的柚子慕斯 踏著小碎步在獨舞著，微酸的口感在舌尖上挑起陣陣漣漪，才一轉身，便被鐵觀音口味的乳酪蛋糕擁入懷中，迸出爽口清香的味道。姍姍來遲的百香果凍則落落大方，施展多變的香味要與之爭鋒。就在這麼來往間，一場口感的盛宴已在腦中揮之不去。', '產 品 風 味｜鐵觀音起司乳酪、柚香慕斯、隨意揮灑百香果凍\r\n\r\n「音樂響起，讓我們在你口中跳首圓舞曲吧～」\r\n\r\n於是，輕柔的柚子慕斯 踏著小碎步在獨舞著，微酸的口感在舌尖上挑起陣陣漣漪，才一轉身，便被鐵觀音口味的乳酪蛋糕擁入懷中，迸出爽口清香的味道。姍姍來遲的百香果凍則落落大方，施展多變的香味要與之爭鋒。就在這麼來往間，一場口感的盛宴已在腦中揮之不去。', '幕斯蛋糕', 3, 11, '6吋', '9吋', NULL, 1250, 2100, NULL, 300, '2024-09-23 18:52:27', 1),
(10878, '草莓達克瓦茲', '草莓達可瓦茲/可爾必思奶油霜/草莓巧克力甘納許\r\n\r\n粉紅草莓奶油霜，特別以嘉麗寶紅寶石巧克力取代白巧，少了甜膩厚重，多了份輕盈果酸；鵝黃奶油霜，把可爾必思拌入希臘優格，讓酸，多了點深度內涵，乳酸感在口中酸甜層疊，喜歡得讓人抿抿嘴。綿滑細緻的奶油餡多包藏一整顆熬煮多時的草莓果肉，邊咀嚼，幸福感被大大加值。', '草莓達可瓦茲/可爾必思奶油霜/草莓巧克力甘納許\r\n\r\n裡面像暗藏一臺時光機。\r\n\r\n咬一口，彷彿回到小學下課，伸手從福利社冰箱拿出的乳酸飲，讓今天變成一百分！酥脆外殼下擠入雙股雙色奶油餡，有著雙重食感驚喜。粉紅草莓奶油霜，特別以嘉麗寶紅寶石巧克力取代白巧，少了甜膩厚重，多了份輕盈果酸；鵝黃奶油霜，把可爾必思拌入希臘優格，讓酸，多了點深度內涵，乳酸感在口中酸甜層疊，喜歡得讓人抿抿嘴。綿滑細緻的奶油餡多包藏一整顆熬煮多時的草莓果肉，邊咀嚼，幸福感被大大加值。', '達克瓦茲', 4, 13, '', '', NULL, 110, 0, NULL, 300, '2024-09-23 19:30:07', 1),
(10879, '烏龍達克瓦茲', '經過烘焙的茶葉，帶著烘火的濃厚香氣，卻保留著本來綠茶的底蘊，不苦不澀，清新順口。\r\n\r\n\r\n將其揉合進蛋糕體，烤製成擁有酥脆的外殼，內裡卻鬆軟輕盈的達克瓦茲，配上輕盈滑順的芝麻奶油霜，潤滑了達克瓦茲的口感。\r\n\r\n\r\n吃下口，彷彿就神遊到日本，坐在榻榻米上，在飯飽後喝著熱茶。', '經過烘焙的茶葉，帶著烘火的濃厚香氣，卻保留著本來綠茶的底蘊，不苦不澀，清新順口。\r\n\r\n\r\n將其揉合進蛋糕體，烤製成擁有酥脆的外殼，內裡卻鬆軟輕盈的達克瓦茲，配上輕盈滑順的芝麻奶油霜，潤滑了達克瓦茲的口感。\r\n\r\n\r\n吃下口，彷彿就神遊到日本，坐在榻榻米上，在飯飽後喝著熱茶。', '達克瓦茲', 4, 13, '', '', NULL, 110, 0, NULL, 300, '2024-09-23 19:37:46', 1),
(10880, '芒果千層蛋糕', '內餡夾層的芒果果凍採獨家技術製成\r\n，滿滿芒果香氣完整保留芒果原味\r\n入口酸甜交織口感清爽，層次分明的口感，忍不住讓人一口接一口，層層的繁複手工，造就了另類絕妙的口感。', '內餡夾層的芒果果凍採獨家技術製成\r\n，滿滿芒果香氣完整保留芒果原味\r\n入口酸甜交織口感清爽，層次分明的口感，忍不住讓人一口接一口，層層的繁複手工，造就了另類絕妙的口感。', '千層蛋糕', 3, 8, '6吋', '9吋', NULL, 900, 1600, NULL, 300, '2024-09-23 20:12:10', 1);

-- --------------------------------------------------------

--
-- 資料表結構 `product_favorite`
--

CREATE TABLE `product_favorite` (
  `product_favorite_id` int(6) NOT NULL,
  `user_id_fk` int(6) NOT NULL,
  `product_id_fk` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product_favorite`
--

INSERT INTO `product_favorite` (`product_favorite_id`, `user_id_fk`, `product_id_fk`) VALUES
(8, 4, 10825),
(22, 4, 10831),
(34, 4, 10823),
(36, 4, 8),
(41, 4, 5),
(43, 4, 10824),
(45, 4, 10833),
(46, 4, 10836),
(47, 4, 10837),
(48, 4, 10834),
(52, 4, 3),
(54, 4, 2),
(65, 4, 16),
(67, 9, 10823),
(68, 9, 10824),
(71, 10, 10834),
(72, 10, 10839),
(76, 10, 10863),
(77, 11, 10825);

-- --------------------------------------------------------

--
-- 資料表結構 `product_image`
--

CREATE TABLE `product_image` (
  `product_image_id` int(6) NOT NULL,
  `product_id_fk` int(6) NOT NULL,
  `product_image_filename` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `product_image`
--

INSERT INTO `product_image` (`product_image_id`, `product_id_fk`, `product_image_filename`) VALUES
(4, 10823, '108231.jpg'),
(5, 10823, '108232.jpg'),
(6, 10824, '108241.jpg'),
(7, 10824, '108242.jpg'),
(8, 10824, '108243.jpg'),
(9, 10825, '108251.jpg'),
(10, 10825, '108252.jpg'),
(11, 10825, '108253.jpg'),
(12, 10826, '108261.jpg'),
(13, 10826, '108262.jpg'),
(14, 10826, '108263.jpg'),
(15, 10827, '108271.jpg'),
(16, 10827, '108272.jpg'),
(17, 10827, '108273.jpg'),
(18, 10828, '108281.jpg'),
(19, 10828, '108282.jpg'),
(20, 10828, '108283.jpg'),
(21, 10829, '108291.jpg'),
(22, 10829, '108292.jpg'),
(23, 10829, '108293.jpg'),
(24, 10830, '108301.jpg'),
(25, 10830, '108302.jpg'),
(26, 10830, '108303.jpg'),
(27, 10831, '108311.jpg'),
(28, 10831, '108312.jpg'),
(29, 10831, '108313.jpg'),
(30, 10832, '108321.jpg'),
(31, 10832, '108322.jpg'),
(32, 10832, '108323.jpg'),
(33, 10833, '108331.jpg'),
(34, 10833, '108332.jpg'),
(35, 10833, '108333.jpg'),
(36, 10834, '108341.jpg'),
(37, 10834, '108342.jpg'),
(38, 10834, '108343.jpg'),
(39, 10835, '108351.jpg'),
(40, 10835, '108352.jpg'),
(41, 10835, '108353.jpg'),
(42, 10836, '108361.jpg'),
(43, 10836, '108362.jpg'),
(44, 10836, '108363.jpg'),
(45, 10837, '108371.jpg'),
(46, 10837, '108372.jpg'),
(47, 10837, '108373.jpg'),
(48, 10838, '108381.jpg'),
(49, 10838, '108382.jpg'),
(50, 10838, '108383.jpg'),
(51, 10839, '108391.jpg'),
(52, 10839, '108392.jpg'),
(53, 10839, '108393.jpg'),
(54, 10840, '108401.jpg'),
(55, 10840, '108402.jpg'),
(56, 10840, '108403.jpg'),
(57, 10841, '108411.jpg'),
(58, 10841, '108412.jpg'),
(59, 10841, '108413.jpg'),
(60, 10842, '108421.jpg'),
(61, 10842, '108422.jpg'),
(62, 10842, '108423.jpg'),
(63, 10844, '108441.jpg'),
(64, 10844, '108442.jpg'),
(65, 10844, '108443.jpg'),
(66, 10845, '108451.jpg'),
(67, 10845, '108452.jpg'),
(68, 10845, '108453.jpg'),
(69, 10846, '108461.jpg'),
(70, 10846, '108462.jpg'),
(71, 10846, '108463.jpg'),
(72, 10847, '108471.jpg'),
(73, 10847, '108472.jpg'),
(74, 10848, '108481.jpg'),
(75, 10848, '108482.jpg'),
(76, 10848, '108483.jpg'),
(77, 10849, '108491.jpg'),
(78, 10849, '108492.jpg'),
(79, 10849, '108493.jpg'),
(80, 10850, '108501.jpg'),
(81, 10850, '108502.jpg'),
(82, 10850, '108503.jpg'),
(83, 10852, '108521.jpg'),
(84, 10852, '108522.jpg'),
(85, 10852, '108523.jpg'),
(86, 10853, '108531.jpg'),
(87, 10853, '108532.jpg'),
(88, 10853, '108533.jpg'),
(89, 10854, '108541.jpg'),
(90, 10854, '108542.jpg'),
(91, 10854, '108543.jpg'),
(92, 10855, '108551.jpg'),
(93, 10855, '108552.jpg'),
(94, 10855, '108553.jpg'),
(95, 10856, '108561.jpg'),
(96, 10857, '108571.jpg'),
(97, 10857, '108572.jpg'),
(98, 10857, '108573.jpg'),
(99, 10858, '108581.jpg'),
(100, 10858, '108582.jpg'),
(101, 10859, '108591.jpg'),
(102, 10859, '108592.jpg'),
(103, 10860, '108601.jpg'),
(104, 10861, '108611.jpg'),
(105, 10862, '108621.jpg'),
(106, 10862, '108622.jpg'),
(107, 10862, '108623.jpg'),
(108, 10863, '108631.jpg'),
(109, 10863, '108632.jpg'),
(110, 10863, '108633.jpg'),
(111, 10864, '108641.jpg'),
(112, 10864, '108642.jpg'),
(113, 10864, '108643.jpg'),
(114, 10865, '108651.jpg'),
(115, 10865, '108652.jpg'),
(116, 10865, '108653.jpg'),
(117, 10866, '108661.jpg'),
(118, 10866, '108662.jpg'),
(119, 10866, '108663.jpg'),
(120, 10867, '108671.jpg'),
(121, 10867, '108672.jpg'),
(122, 10867, '108673.jpg'),
(123, 10868, '108681.jpg'),
(124, 10868, '108682.jpg'),
(125, 10868, '108683.jpg'),
(126, 10869, '108691.jpg'),
(127, 10869, '108692.jpg'),
(128, 10869, '108693.jpg'),
(129, 10870, '108701.jpg'),
(130, 10870, '108702.jpg'),
(131, 10870, '108703.jpg'),
(132, 10871, '108711.jpg'),
(133, 10871, '108712.jpg'),
(134, 10872, '108721.jpg'),
(135, 10872, '108722.jpg'),
(136, 10873, '108731.jpg'),
(137, 10873, '108732.jpg'),
(138, 10874, '108741.jpg'),
(139, 10874, '108742.jpg'),
(140, 10874, '108743.jpg'),
(141, 10875, '108751.jpg'),
(142, 10875, '108752.jpg'),
(143, 10875, '108753.jpg'),
(144, 10876, '108761.jpg'),
(145, 10876, '108762.jpg'),
(146, 10876, '108763.jpg'),
(147, 10877, '108771.jpg'),
(148, 10877, '108772.jpg'),
(149, 10877, '108773.jpg'),
(150, 10878, '108781.jpg'),
(151, 10878, '108782.jpg'),
(152, 10878, '108783.jpg'),
(153, 10878, '108781.jpg'),
(154, 10878, '108782.jpg'),
(155, 10878, '108783.jpg'),
(156, 10879, '108791.jpg'),
(157, 10879, '108792.jpg'),
(158, 10879, '108793.jpg'),
(159, 10880, '108801.jpg'),
(160, 10880, '108802.jpg'),
(161, 10880, '108803.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `purchase_item`
--

CREATE TABLE `purchase_item` (
  `id` int(11) NOT NULL,
  `order_id` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `purchase_order`
--

CREATE TABLE `purchase_order` (
  `id` varchar(255) NOT NULL COMMENT 'UUID',
  `user_id` int(11) NOT NULL,
  `amount` int(11) DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `payment` varchar(255) DEFAULT NULL COMMENT 'LINE Pay, 信用卡, ATM',
  `shipping` varchar(255) DEFAULT NULL COMMENT '7-11, Family Mart, Hi-Life, OK Mart, 郵局, 宅配',
  `status` varchar(255) DEFAULT NULL COMMENT 'pending, paid, fail, cancel, error',
  `order_info` text DEFAULT NULL COMMENT 'send to line pay',
  `reservation` text DEFAULT NULL COMMENT 'get from line pay',
  `confirm` text DEFAULT NULL COMMENT 'confirm from line pay',
  `return_code` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  `user_nickname` varchar(50) DEFAULT NULL,
  `user_account` varchar(50) DEFAULT NULL,
  `user_password` varchar(300) DEFAULT NULL,
  `user_email` varchar(300) NOT NULL,
  `user_gender` varchar(30) DEFAULT '不願透漏',
  `user_birthday` date DEFAULT NULL,
  `user_image` varchar(300) DEFAULT NULL,
  `user_phone` varchar(20) DEFAULT NULL,
  `user_address` varchar(300) DEFAULT NULL,
  `user_notes` varchar(300) DEFAULT NULL,
  `user_status` tinyint(4) DEFAULT 1,
  `google_uid` varchar(255) DEFAULT NULL,
  `line_uid` varchar(255) DEFAULT NULL,
  `line_access_token` text DEFAULT NULL,
  `user_createtime` datetime NOT NULL,
  `user_updatetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 傾印資料表的資料 `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_nickname`, `user_account`, `user_password`, `user_email`, `user_gender`, `user_birthday`, `user_image`, `user_phone`, `user_address`, `user_notes`, `user_status`, `google_uid`, `line_uid`, `line_access_token`, `user_createtime`, `user_updatetime`) VALUES
(1, NULL, NULL, '賴元皇', '$2b$10$bjspDdhB2l5fwr82GUNI0OxY6xUohp1dTQuG/xHjcxm0bUKcOmHE.', 'ga523485@gmail.com', '男性', '1995-01-16', '1.jpg', NULL, NULL, NULL, 1, NULL, NULL, NULL, '2024-05-18 15:36:57', '2024-05-18 15:36:57'),
(2, NULL, NULL, '小智', '$2b$10$5vUDKn.9xL1A5/Ym5abQNu7uxYFPs1pstuETWjvV8V8s1Ufl0/tsm', 'satoshi@gmail.com', '男性', NULL, '2.jpg', NULL, NULL, NULL, 1, NULL, NULL, NULL, '2024-05-18 15:43:28', '2024-05-18 15:43:28'),
(3, NULL, NULL, '專業孵蛋師', '$2b$10$MDH2xYnYJrdOTvbyGVgnG.WrHQilA2fD/l3PgpBFSco0mOIlQzXcq', 'nolan48@gmail.com', '不願透漏', NULL, '3.jpg', NULL, NULL, NULL, 1, NULL, NULL, NULL, '2024-05-18 15:45:32', '2024-05-18 15:45:32'),
(4, NULL, NULL, 'YEE LING', '$2b$10$mWW7.C7zrE9d7Izu4nc5Mu6bcWVMJ2Q7HGsRq8XRkMirp1puWVHa6', 'ling8132@gmail.com', '女性', NULL, '4.png', NULL, NULL, NULL, 1, NULL, NULL, NULL, '2024-05-18 15:48:02', '2024-05-18 15:48:02'),
(5, NULL, NULL, '晚安小吉', '$2b$10$HUzTz11ybvhxQlmfSKXTve2cEhRK0R1YFpNG3v1XxaFBGhD3QUxKa', 'lynn_29612@gmail.com', '女性', NULL, '5.jpg', NULL, NULL, NULL, 1, NULL, NULL, NULL, '2024-05-18 15:49:36', '2024-05-18 15:49:36'),
(6, NULL, NULL, '包子', '$2b$10$SuYd68cr9noicMdb0i7HN.UsaD2lMk5sOgcg/Go721DQPPkVYPQjO', 'armin69969@gmail.com', '男性', NULL, '6.jpg', NULL, NULL, NULL, 1, NULL, NULL, NULL, '2024-05-18 15:54:48', '2024-05-18 15:54:48'),
(7, NULL, NULL, 'baobao', '$2b$10$oPUL8Ju8svuffVfDXEmueO0eZ1mp93HltRKmP5DeSi2uOQr1OTrMi', 'baobao@gmail.com', '女性', NULL, '7.jpg', NULL, NULL, NULL, 1, NULL, NULL, NULL, '2024-05-18 16:03:45', '2024-05-18 16:03:45'),
(8, NULL, NULL, '寶媽', '$2b$10$tTzg02SH8y2DBvPys2TGx.c78GfgiI3XLTdiygiPhaZBrTQIy9eCS', 'baoma@gmail.com', '女性', NULL, '8.jpg', NULL, NULL, NULL, 1, NULL, NULL, NULL, '2024-05-18 16:08:01', '2024-05-18 16:08:01'),
(9, NULL, NULL, 'wachi', NULL, 'ltgy99999der@gmail.com', '不願透漏', NULL, 'https://lh3.googleusercontent.com/a/ACg8ocIGLazigSIhtF128Wstk-Fkk4_7gtzfNLRzcWuXmE0GRZkEF_rk=s96-c', NULL, NULL, NULL, 1, '109432627767949649440', NULL, NULL, '2024-05-20 01:41:19', '2024-05-20 01:41:19'),
(10, NULL, NULL, 'cindy09919@gmail.com', '$2b$10$BpbYUjVOOeRmdxzwL1UFZ.H1.U.MMGo.pFj4hmb7pstiOUvjElej.', 'cindy09919@gmail.com', '不願透漏', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, '2024-09-09 15:35:02', '2024-09-09 15:35:02'),
(11, NULL, NULL, 'air890615@gmail.com', '$2b$10$N2lKxb4.eiQRteBLhcROfOD3t7qJ6819Sx/QHizfQZxAmI3yelqCC', 'air890615@gmail.com', '不願透漏', NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, '2024-09-23 14:27:53', '2024-09-23 14:27:53');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`article_id`);

--
-- 資料表索引 `article_comment`
--
ALTER TABLE `article_comment`
  ADD PRIMARY KEY (`article_comment_id`);

--
-- 資料表索引 `article_favorite`
--
ALTER TABLE `article_favorite`
  ADD PRIMARY KEY (`article_favorite_id`);

--
-- 資料表索引 `article_image`
--
ALTER TABLE `article_image`
  ADD PRIMARY KEY (`article_image_id`);

--
-- 資料表索引 `cart_item`
--
ALTER TABLE `cart_item`
  ADD PRIMARY KEY (`cart_item_id`);

--
-- 資料表索引 `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- 資料表索引 `category_sub`
--
ALTER TABLE `category_sub`
  ADD PRIMARY KEY (`subcategory_id`);

--
-- 資料表索引 `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`class_id`);

--
-- 資料表索引 `class_commet`
--
ALTER TABLE `class_commet`
  ADD PRIMARY KEY (`class_commet_id`);

--
-- 資料表索引 `class_favorite`
--
ALTER TABLE `class_favorite`
  ADD PRIMARY KEY (`class_favorite_id`);

--
-- 資料表索引 `class_image`
--
ALTER TABLE `class_image`
  ADD PRIMARY KEY (`class_image_id`);

--
-- 資料表索引 `class_reply`
--
ALTER TABLE `class_reply`
  ADD PRIMARY KEY (`class_reply_id`);

--
-- 資料表索引 `class_teacher`
--
ALTER TABLE `class_teacher`
  ADD PRIMARY KEY (`teacher_id`);

--
-- 資料表索引 `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`coupon_id`);

--
-- 資料表索引 `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`);

--
-- 資料表索引 `course_commet`
--
ALTER TABLE `course_commet`
  ADD PRIMARY KEY (`class_commet_id`);

--
-- 資料表索引 `course_favorite`
--
ALTER TABLE `course_favorite`
  ADD PRIMARY KEY (`class_favorite_id`);

--
-- 資料表索引 `course_image`
--
ALTER TABLE `course_image`
  ADD PRIMARY KEY (`class_image_id`);

--
-- 資料表索引 `course_teacher`
--
ALTER TABLE `course_teacher`
  ADD PRIMARY KEY (`teacher_id`);

--
-- 資料表索引 `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`order_id`);

--
-- 資料表索引 `order_item`
--
ALTER TABLE `order_item`
  ADD PRIMARY KEY (`order_item_id`);

--
-- 資料表索引 `otp`
--
ALTER TABLE `otp`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- 資料表索引 `product_favorite`
--
ALTER TABLE `product_favorite`
  ADD PRIMARY KEY (`product_favorite_id`);

--
-- 資料表索引 `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`product_image_id`);

--
-- 資料表索引 `purchase_item`
--
ALTER TABLE `purchase_item`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `purchase_order`
--
ALTER TABLE `purchase_order`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `article`
--
ALTER TABLE `article`
  MODIFY `article_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `article_comment`
--
ALTER TABLE `article_comment`
  MODIFY `article_comment_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `article_favorite`
--
ALTER TABLE `article_favorite`
  MODIFY `article_favorite_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `article_image`
--
ALTER TABLE `article_image`
  MODIFY `article_image_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cart_item`
--
ALTER TABLE `cart_item`
  MODIFY `cart_item_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `category_sub`
--
ALTER TABLE `category_sub`
  MODIFY `subcategory_id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class`
--
ALTER TABLE `class`
  MODIFY `class_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_commet`
--
ALTER TABLE `class_commet`
  MODIFY `class_commet_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_favorite`
--
ALTER TABLE `class_favorite`
  MODIFY `class_favorite_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_image`
--
ALTER TABLE `class_image`
  MODIFY `class_image_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_reply`
--
ALTER TABLE `class_reply`
  MODIFY `class_reply_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `class_teacher`
--
ALTER TABLE `class_teacher`
  MODIFY `teacher_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `coupon`
--
ALTER TABLE `coupon`
  MODIFY `coupon_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `course`
--
ALTER TABLE `course`
  MODIFY `course_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `course_commet`
--
ALTER TABLE `course_commet`
  MODIFY `class_commet_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `course_favorite`
--
ALTER TABLE `course_favorite`
  MODIFY `class_favorite_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `course_image`
--
ALTER TABLE `course_image`
  MODIFY `class_image_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `course_teacher`
--
ALTER TABLE `course_teacher`
  MODIFY `teacher_id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order`
--
ALTER TABLE `order`
  MODIFY `order_id` int(6) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order_item`
--
ALTER TABLE `order_item`
  MODIFY `order_item_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `otp`
--
ALTER TABLE `otp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10881;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_favorite`
--
ALTER TABLE `product_favorite`
  MODIFY `product_favorite_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_image`
--
ALTER TABLE `product_image`
  MODIFY `product_image_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=162;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `purchase_item`
--
ALTER TABLE `purchase_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
