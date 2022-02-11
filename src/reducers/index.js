import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      "id": "1",
      "name": "多色寶山大王",
      "artist": "美秀集團",
      "description": "美秀集團在臉書上介紹到：「如果說《電火王》是你記憶中最熟悉的台式豔紅，《多色寶山大王》就是只存在你最瘋狂的夢境中那閃爍的異色。如同迷失在山林中的人看見山嵐折射的七彩眩光，如同迷失在極地中的人看見極光，多色在光學的本質中其實就是無色，它獲得一切的剎那是如此炫彩奪目，逼得我們只能閉上雙眼，但那一瞬間的視覺滯留早已深深的烙印在腦海之中，即使睜開雙眼後一切化為透明。無色即是多色，迷失即是目的，美秀集團依舊無法定義，依舊是愛情的小壞蛋。」",
      "isShown": true,
      "isAdd": false,
      "type": "pop",
      "image": "https://blow.streetvoice.com/wp-content/uploads/2021/10/244681870_429132075235436_2530772835573303699_n.jpeg"
    },
    {
      "id": "2",
      "name": "兄弟沒夢不應該",
      "artist": "拍謝少年",
      "description": "在上山下海、提名金曲獎的生猛《海口味》之後，拍謝少年回歸日時上班領薪水，暗時熱炒唸歌詩的青年生活。少年仔炙熱的橫衝直撞，逐漸轉化成青年內斂的透徹目光；從台語搖滾繼續出發，拍謝少年精煉寫作能力，探索更多樣化的編曲可能性，在本格的豪邁音色中，加入藍調民謠、廟會唸歌、重唱和聲等元素，更以同步錄音的製作方式，保留拍謝少年現場演出生猛氣味。",
      "isShown": true,
      "isAdd": false,
      "type": "punk",
      "image": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/27/c9/ee/27c9eeb2-333a-5470-29ad-dfb2c9d9028b/887375519852.jpg/500x500bb.webp"
    },
    {
      "id": "3",
      "name": "夜光信號",
      "artist": "步行者",
      "description": "「 摩斯密碼隱藏著訊息，以光作為信號傳遞。短光、長光；我們被這樣黑暗中的光所吸引著。 帶著心跳及眼前閃爍的信號光芒，我們一起聚光前行。 」 經過了多年的籌備，步行者於2020年推出首張後搖滾專輯《夜光信號》，以「摩斯密碼」、「光」為主題貫穿整張專輯。摩斯密碼的聲音作為媒介，傳達與聽眾之間的對話，專輯內共有三段對話，代表著求救、以及最終獲得救贖信號的隱喻。在黑暗之中，我們會被光所吸引，儘管只是微光。藉由摩斯密碼的聲音，代替光，以此作為信號傳遞。告訴你：「在黑暗中，步行者會與你同行。」",
      "isShown": true,
      "isAdd": false,
      "type": "country",
      "image": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/6e/d1/81/6ed1811d-1a8d-a03d-5f98-5834492c7e27/193017022094.jpg/500x500bb.webp"
    },
    {
      "id": "4",
      "name": "卡通人物",
      "artist": "茄子蛋",
      "description": "我已經用盡整個人生在表達我的感情，但你們都覺得我好笑，因為我就是一個好笑的人。於是我也跟著一起笑，這樣我就跟大家一樣了。因為你們都把我當成卡通人物。",
      "isShown": true,
      "isAdd": false,
      "type": "rock",
      "image": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/77/db/aa/77dbaac2-4c06-e6d3-d622-220f7dbc4e34/5056198914297_cover.jpg/500x500bb.webp"
    },
    {
      "id": "5",
      "name": "嗜愛動物",
      "artist": "麋先生",
      "description": "嗜愛 才能被愛餵養學會成長示愛 才能為愛勇敢拒絕遺憾在愛裡受傷 在愛裡求生愛上癮，是我戒不掉的癮！渴望愛也渴望被愛，誰叫我們是愛的動物關住愛再敞開來愛，從心當個示愛的動物麋先生睽違四年勇於自首《嗜愛動物》新專輯一年打掉重練一次，激盪愛的共識 從全知觀點回到凡人視角認愛",
      "isShown": true,
      "isAdd": false,
      "type": "jazz",
      "image": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b4/29/21/b4292149-5220-8da4-a397-671c003b84f0/1._1500_-_-.jpg/500x500bb.webp"
    },
    {
      "id": "6",
      "name": "GOLDEN 太子 BRO",
      "artist": "血肉果汁機",
      "description": "道裝子民們。吉整出萬其。日備征眾聚已等壹來準。出狼貳相殺。現煙參伴翻誰沒夢想過最頂端到位置？路途上有多少懷疑的目光？太子哥，滿腔熱血、野心勃勃，帶領著支持自己夢想大業的戰隊往頂端衝。總想讓信道他的信眾知道「沒有飛不出的夢想，只有跨不出的步伐。」所以當衝入高處空氣稀薄的雲海中，當墜入伸手不見五指的深淵中，當他困在夢想大道十字路口時，他該怎麼辦？殺出另一個漂亮成績回來，就這麼辦！這次，全新的血肉太子哥帶上新專輯，磨刀霍霍，準備殺翻。",
      "isShown": true,
      "isAdd": false,
      "type": "rock",
      "image": "https://lineimg.omusic.com.tw/img/album/3647712.jpg?v=20201231145301"
    },
    {
      "id": "7",
      "name": "摩天動物園",
      "artist": "G.E.M. 鄧紫棋",
      "description": "點擊破億全創作天后 G.E.M.鄧紫棋 無畏系犀利文筆 〈摩天動物園〉借動物隱喻文明與獸性之間的拉扯面對慾望的誘惑 你會怎麼選擇？個性一向直來直往、愛恨分明的G.E.M.鄧紫棋，創作兼具剛與柔、理性批判與感性關懷，她用音樂詞曲勾勒出人性的不同面貌，以充滿能量且細膩多層次的歌聲反映出每個人的心聲。這次鄧紫棋在歌詞的文字創作上也相當犀利精準，她將自己觀察到的人性百態以及對社會的關懷化為歌曲，創作出一座「摩天動物園」！鄧紫棋以她敢說敢言的筆法切入，藉動物形象隱喻人性，同時也映照自己過去一路走來的經驗。",
      "isShown": true,
      "isAdd": false,
      "type": "rock",
      "image": "https://lineimg.omusic.com.tw/img/album/1816026.jpg?v=20210330101838"
    },
    {
      "id": "8",
      "name": "夜空裡的光",
      "artist": "魏嘉瑩",
      "description": "我總是好奇著神秘的夜空裡，有著什麼樣的美麗。活在世界上的我們，總是不停地經歷著各種磨難，有時候是人，有時候是事，有時候是物。久而久之，慢慢地，忘記了初衷，忘記心裡的良善，忘記自己曾經是怎麼樣的一個人，也忘了，除了消磨自己的人事物以外，曾經在世界上得到過的溫暖。那個曾經善良的我們，曾經彼此照亮，曾經是彼此的星光。即使夜空已經黯淡無光，但只要銀河在心中，我們就是照亮彼此的光。",
      "isShown": true,
      "isAdd": false,
      "type": "rock",
      "image": "https://lineimg.omusic.com.tw/img/album/1765745.jpg?v=20210826174026"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
