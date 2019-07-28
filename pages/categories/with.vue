<template lang="pug">
main.container_with
  h3.subsubtitle ～マッチングアプリwithの紹介と使用してみた感想～
  .main_img
    img(src="../../static/with/main.jpg", alt="メイン画像" width="2208" height="1242")
  .app_info1
    b 紹介動画 (画像をクリックするとyoutubeで再生します)
  .app_movie_wrap
    .app_movie1
      a(href="https://www.youtube.com/watch?v=aGlEbsvxVtM" target="_blank" rel="noopener nofollow")
        img(src="../../static/with/youtube11.png", alt="with紹介動画1" width="800" height="500")
    .app_movie2
      a(href="https://www.youtube.com/watch?v=Zc2zUGGX4-o" target="_blank" rel="noopener nofollow")
        img(src="../../static/with/youtube22.png", alt="with紹介動画2" width="800" height="500")
      //- no-ssr
      //-   youtube(
      //-     class="youtube1"
      //-     ref="youtube"
      //-     video-id="aGlEbsvxVtM"
      //-     :player-vars="{autoplay:1}"
      //-     host="https://www/youtube.com")
      //- .app_movie2
      //-   no-ssr
      //-     youtube(
      //-       class="youtube1"
      //-       ref="youtube"
      //-       video-id="Zc2zUGGX4-o"
      //-       :player-vars="{start: 0, autoplay: 0}"
      //-       origin='https://www.youtube.com')
  .app_info1(v-if="$ua.deviceType() !== 'pc'", class="about_with_not_pc")
    b withってどんなアプリ？
  .app_info1(v-else-if="$ua.deviceType() === 'pc'")
    b withってどんなアプリ？
  .info1
    img(src="../../static/with/img1.jpg", alt="with紹介画像",v-if="$ua.deviceType() !== 'pc'",class="with_logo_not_pc" width="800" height="500")
    img(src="../../static/with/img1.jpg", alt="with紹介画像",v-else-if="$ua.deviceType() === 'pc'" width="800" height="500")
    img(src="../../static/with/img2.jpg", alt="with紹介画像" width="800" height="500")
    blockquote
      p(style="color:#6E2203;font-weight:bold") 3人に2人がマッチング成功！
      p(style="color:#FE636D;font-weight:bold;font-size:20px") 運命よりも、確実な恋愛へ
      p(style="color:#FE636D") facebookを使った恋愛・婚活アプリ
      p(style="color:#FE636D;font-weight:bold") メンタリストDaiGo 監修
  .add_info1
    p.pink TBS『NEWS23』日テレ『B面政治家』紹介！
    p.pink 雑誌『anan』『Oggi』『美ST』等で掲載！
    p.pink イベント『Super!C CHANNEL』ブース出展！
    p withはFacebookを利用しているので他のマッチングサービスに比べても信頼ができるサービスとなっています。
    p 心理学×統計学を元に、あなたの「性格」「価値観」といった内面から相性のいいお相手を見つけることができます。
    p 3秒に1組マッチングが成立しています。
    p.pink トーク画面やプロフで「出身地が同じ」や「映画が好き」、「音楽が好き」などお互いの共通点を見つけやすくそこから話が発展しやすいことが特徴です。
    p 定期的にイベントが開催されておりイベントに参加した同士でマッチングがしやすくなる様々な仕組みが提供されています。
    p またDaiGo監修ということで2択のアンケートのようなものに答えていくと自分と同じ回答をした相手や似た回答をした相手を紹介してくれるのでマッチングしやすくなっています。
    p このアンケートで一致率が高い相手との恋愛は長続きしやすいというデータが出ているようです。
    p コミュニティも豊富で同じ共通点を持った相手を見つけやすくマッチングもしやすいというのがこのアプリの特徴となっています。
    p 最近知名度もかなり上がってきているようでサービスの内容も充実しているので一度使ってみるのをオススメできるアプリとなっています。
  .start_with_text ↓ withを始める ↓
  .start_with_not_pc(v-if="$ua.deviceType() !== 'pc'")
    a(href="https://t.afi-b.com/visit.php?guid=ON&a=Y9306j-J315373G&p=s687592m" target="_blank" rel="noopener nofollow")
      img(src="https://www.afi-b.com/upload_image/9306-1519773417-3.gif" width="468" height="60" style="border:none;" alt="with（ウィズ）")
    img(src="https://t.afi-b.com/lead/Y9306j/s687592m/J315373G" width="1" height="1" style="border:none;" alt="with（ウィズ）")
  .start_with(v-else)
    a(href="https://t.afi-b.com/visit.php?guid=ON&a=Y9306j-J315373G&p=s687592m" target="_blank" rel="noopener nofollow")
      img(src="https://www.afi-b.com/upload_image/9306-1519773417-3.gif" width="468" height="60" style="border:none;" alt="with（ウィズ）")
    img(src="https://t.afi-b.com/lead/Y9306j/s687592m/J315373G" width="1" height="1" style="border:none;" alt="with（ウィズ）")
  .app_info2
    b なぜwithが安全・安心なのか？
    .info2
      img(src="../../static/with/secure1.jpg", alt="安全・安心の理由1",v-if="$ua.deviceType() !== 'pc'",class="secure_not_pc" width="800" height="500")
      img(src="../../static/with/secure1.jpg", alt="安全・安心の理由1",v-else-if="$ua.deviceType() === 'pc'" width="800" height="500")
  .add_info2 
    span withは以下の点で安全・安心の理由を挙げています。
    ul
      li Facebookログインは友達が表示されない
      li 公的証明書による本人確認
      li Facebookの友達は表示されない
      li 悪質なユーザーの監視体制が万全
      li 上場企業が運営
  .app_info2
    b withはイベントの豊富さが特徴的です
    .info2
      img(src="../../static/with/campaign1.jpg", alt="イベント・キャンペーン1",v-if="$ua.deviceType() !== 'pc'",class="secure_not_pc" width="100" height="250")
      img(src="../../static/with/campaign1.jpg", alt="イベント・キャンペーン1",v-else-if="$ua.deviceType() === 'pc'" width="100" height="250")
      img(src="../../static/with/campaign2.jpg", alt="イベント・キャンペーン2",v-if="$ua.deviceType() !== 'pc'",class="secure_not_pc" width="100" height="250")
      img(src="../../static/with/campaign2.jpg", alt="イベント・キャンペーン2",v-else-if="$ua.deviceType() === 'pc'" width="100" height="250")
      img(src="../../static/with/campaign3.jpg", alt="イベント・キャンペーン3",v-if="$ua.deviceType() !== 'pc'",class="secure_not_pc" width="100" height="250")
      img(src="../../static/with/campaign3.jpg", alt="イベント・キャンペーン3",v-else-if="$ua.deviceType() === 'pc'" width="100" height="250")
      img(src="../../static/with/campaign4.jpg", alt="イベント・キャンペーン4",v-if="$ua.deviceType() !== 'pc'",class="secure_not_pc" width="100" height="250")
      img(src="../../static/with/campaign4.jpg", alt="イベント・キャンペーン4",v-else-if="$ua.deviceType() === 'pc'" width="100" height="250")
      img(src="../../static/with/campaign5.jpg", alt="イベント・キャンペーン5",v-if="$ua.deviceType() !== 'pc'",class="secure_not_pc" width="100" height="250")
      img(src="../../static/with/campaign5.jpg", alt="イベント・キャンペーン5",v-else-if="$ua.deviceType() === 'pc'" width="100" height="250")
      img(src="../../static/with/campaign6.jpg", alt="イベント・キャンペーン6",v-if="$ua.deviceType() !== 'pc'",class="secure_not_pc" width="100" height="250")
      img(src="../../static/with/campaign6.jpg", alt="イベント・キャンペーン6",v-else-if="$ua.deviceType() === 'pc'" width="100" height="250")
  .add_info2 
    span withではキャンペーンやイベントがいつも行われています！
      p 他のマッチングアプリと大きく違う点の一つとしてこのイベントやキャンペーンが豊富な点が挙げられます。   
      p 見ているだけでワクワクしてきそうなこのカラフルなイベントですがこのイベントに参加することで参加者同士の共通点が分かり自然と似た相手を探すことができます。
      p 似た相手ってわかるだけでマッチングしやすくなったり、話すきっかけになったりしやすいはずです。
      p イベントに参加するとアンケートのようなものに答えていきますが、デザインも凝っているので回答することも楽しめると思います！
  .start_with_text ↓ withを始める ↓
  .start_with_not_pc(v-if="$ua.deviceType() !== 'pc'")
    a(href="https://t.afi-b.com/visit.php?guid=ON&a=Y9306j-J315373G&p=s687592m" target="_blank" rel="noopener nofollow")
      img(src="https://www.afi-b.com/upload_image/9306-1519773417-3.gif" width="468" height="60" style="border:none;" alt="with（ウィズ）")
    img(src="https://t.afi-b.com/lead/Y9306j/s687592m/J315373G" width="1" height="1" style="border:none;" alt="with（ウィズ）")
  .start_with(v-else)
    a(href="https://t.afi-b.com/visit.php?guid=ON&a=Y9306j-J315373G&p=s687592m" target="_blank" rel="noopener nofollow")
      img(src="https://www.afi-b.com/upload_image/9306-1519773417-3.gif" width="468" height="60" style="border:none;" alt="with（ウィズ）")
    img(src="https://t.afi-b.com/lead/Y9306j/s687592m/J315373G" width="1" height="1" style="border:none;" alt="with（ウィズ）")
  .app_info4
    b withを使った他ユーザーのレビュー
  .add_info4
    .good_review 
      b.review_type_text 評価の高いレビュー
      .good_review1.good_review_style
        .review_title 良い出会いありました
        .star ★★★★☆
        .content 
          | 3年弱何度かアプリの出戻りを繰り返してましたが、大切な彼女と出会えました。<br>
          | ありがとうございました。
      br
      .good_review2.good_review_style
        .review_title 大切な人に出会えました♡
        .star ★★★★★
        .content 
          | 共通点がたくさんで一緒にいる時が本当に本当に楽しいです！<br>
          | withがなかったら出会えてなかったと思うと、やってみて本当によかったなって心から思います。<br>
          | 付き合って4ヶ月経って、同棲の話までするくらいトントン拍子！笑<br>
          | 気軽だし、なにもしないよりとりあえずやってみる価値は絶対ある！
      br
      .good_review3.good_review_style 
        .review_title 彼氏ができた
        .star ★★★★☆
        .content
          | 私はこれで彼氏ができました。<br>
          | イベントで相性合う人とマッチングできるので、かなり良いです。
      br
      .good_review4.good_review_style
        .review_title 本気でパートナーが欲しいなら課金
        .star ★★★★★
        .content 課金しないと何も始まらないのですが、逆に飲み一回分くらいのお金で幸せを手に入れられると思えば安いのかなと思います。
      br
      .good_review5.good_review_style 
        .review_title withが一番やりやすいと感じます
        .star ★★★★★
        .content 
          | 他のマッチングアプリより、UIが良いと感じます。<br>
          | また、女性の方々も真面目で綺麗な方が多いイメージです。
    .bad_review 
      b.review_type_text 評価の低いレビュー
      .bad_review1.bad_review_style
        .review_title こんなんでパートナーが見つかると思えない
        .star ★☆☆☆☆
        .content
          | 1ヶ月使って6人に会いました。<br>
          | マッチ数でいったらその10倍ぐらいですが、女性はそこそこの容姿なら男性を選び放題でゲーム感覚なのは否めないです<br>
          | さらにただで使えるのでやる気がなく、平気でドタキャンだったり女性のモラルが問われます。<br>
          | 男性は料金を払っているので、やり取りしたり会ったりした女性のプレビュー機能が欲しいです。<br>
          | そうすれば女性も評価を落としたくないはずなので、もう少しまともな対応をしてくれるのではないかと思います。
      .bad_review2.bad_review_style
        .review_title 良いことも悪いことも
        .star ★★☆☆☆
        .content 
          | 普通の女性もいる。何人かとお会いもできましたが、いかんせんサクラが多い。<br>
          | マッチングしても返事が来ない。<br>
          | 定型文張り付けているだけで、返事がゆっくりです的なことを書いているのはほぼサクラか業者。<br>
          | 通報しても特に対応はないですし。<br>
          | まあ女性が無料では健全なマッチングアプリにはならんです。<br>
          | 根気よく20人マッチングして一人会えるくらいの気持ちでやらないとですね。<br>
          | 女性には出会いやすいかもですが、男は根気とお金がかかる笑
      .bad_review3.bad_review_style
        .review_title 返信がほとんどない
        .star ★☆☆☆☆
        .content
          | 本当に実在している人がやってるのかってくらいマッチングした後の返信がない<br>
          | かなり怪しいサイトだと思います。
      .bad_review4.bad_review_style
        .review_title 業者？ 
        .star ★☆☆☆☆
        .content 
          | 詐欺まがいの勧誘にあったのでやめた。<br>
          | 下手をすると犯罪に巻き込まれる可能性があるような内容だったので、そういう悪い人も使っているので注意が必要。
      .bad_review5.bad_review_style
        .review_title ひどい
        .star ★★☆☆☆
        .content
          | 顔写真乗せてない女の人多すぎ。いいねもらっても不審すぎて返せない。<br>
          | 自分はガッチガチに加工した写真載せて人を顔で選んで何がしたいかわからん。<br>
          | 写真無し、加工写真禁止にしてほしい。
    .user_review_summary
      p 
        b レビューをみてwithを始めようか迷っている方へ
      .user_review_summary_content
        p 高評価と低評価のレビューをそれぞれいくつか紹介しましたが、運命の人に出会えたという方もいれば全く出会えないといった方もいるようです。
        P やはりこれは絶対に起きうることだと思います。どんなものにもいい点があれば悪い点があるというのが単純に書かれているだけだと思います。
        p マッチングアプリで大事なことはあきらめず続けることかなと私自身思っています。
        p サクラや業者が多いというレビューもありましたが私自身はwithでそれを体験したことは数回しかありません。
        p 他のサービスだとその割合が結構多かったりするのですがそれらと比較するとかなりの優良サービスだと感じています。
        p.pink 実際に私自身2019/05に初めてwithを通じて女性と会いました。
        p.pink withについては実際に出会えるアプリであると言えます。
        p その時の女性とはその一回だけで終わってしまったのですが、アプリ全体の印象としてはかなりいいです。
        p まず、他のサービスと比べてもかなりデザインに凝っており、思わずやってみたくなるような楽しさを感じるようなイベントが多いです。
        p また、これは地域にもよるかもしれませんが福岡は女性のレベルが一番高いのではないかと思います。
        p 実際にレビューで書いてあることは自分自身でやってみて確かめてみることをおすすめします。
        p.pink 気軽に始めることができるので、もしあなたが悩んでいるのなら自信を持ってオススメできるサービスなので一度やってみてください！
  .start_with_text ↓ withを始める ↓
  .start_with_not_pc(v-if="$ua.deviceType() !== 'pc'")
    a(href="https://t.afi-b.com/visit.php?guid=ON&a=Y9306j-J315373G&p=s687592m" target="_blank" rel="noopener nofollow")
      img(src="https://www.afi-b.com/upload_image/9306-1519773417-3.gif" width="468" height="60" style="border:none;" alt="with（ウィズ）")
    img(src="https://t.afi-b.com/lead/Y9306j/s687592m/J315373G" width="1" height="1" style="border:none;" alt="with（ウィズ）")
  .start_with(v-else)
    a(href="https://t.afi-b.com/visit.php?guid=ON&a=Y9306j-J315373G&p=s687592m" target="_blank" rel="noopener nofollow")
      img(src="https://www.afi-b.com/upload_image/9306-1519773417-3.gif" width="468" height="60" style="border:none;" alt="with（ウィズ）")
    img(src="https://t.afi-b.com/lead/Y9306j/s687592m/J315373G" width="1" height="1" style="border:none;" alt="with（ウィズ）")
  .app_info3 
    b withをやろうと思うけどどれぐらい料金がかかるの？
    .info3
      img(src="../../static/with/plan.png", alt="料金について1",v-if="$ua.deviceType() !== 'pc'",class="payment_not_pc scale_image" width="400" height="400")
      img(src="../../static/with/plan.png", alt="料金について1",v-else-if="$ua.deviceType() === 'pc'",class="scale_image" width="400" height="460")
      img(src="../../static/with/point.png", alt="料金について2",v-if="$ua.deviceType() !== 'pc'",class="payment_not_pc scale_image" width="460" height="400")
      img(src="../../static/with/point.png", alt="料金について2",v-else-if="$ua.deviceType() === 'pc'",class="scale_image" width="400" height="460")
  .add_info3
    p 基本的には男性が有料、女性が無料となっています。
    p 料金については上の画像の通りですが、
    p.red じゃあどれを買えばいいの？、どういう意味か分かりにくい！
    p という方の為になるべく分かりやすく説明をしていきます。
    span.plan1.plan ・有料会員プランについて
    .plan1_info 　　
      p 有料会員プランは支払方法と何か月で利用するかを自分で決めて金額を払うプランです。
      p 支払方法には「クレジットカード決済」「AppleID決済」「GooglePlay決済」の4種類がありますが
      p.red 一番安いのはクレジットカード決済です。
      p その中でも1ヶ月から12ヶ月までプランがありますが
      p.red おすすめは3ヶ月か6ヶ月です。
      p 1ヶ月だとなかなかいい相手が見つからないまま終わってしまう可能性が高いです。
      p 逆に12ヶ月だと途中でやらなくなって無駄に払い続けるといったことになりやすいです。
      p.red まずはお試しでという方は3ヶ月、しっかり相手を見つけるまでやりたい！という方には6ヶ月がおすすめです！
  span.plan2.plan ・VIPオプションについて
    .plan2_info
      img(src="../../static/with/plan.png", alt="料金について1",v-if="$ua.deviceType() !== 'pc'",class="payment_not_pc" width="460" height="400")
      img(src="../../static/with/plan.png", alt="料金について1",v-else-if="$ua.deviceType() === 'pc'" style="padding-bottom:20px;" width="460" height="400")
      .plan2_info1 
        | VIPオプションとは通常の有料会員のサービスに加えて追加で利用できるサービスのことです。<br>
        | VIPオプションを購入すると以下の特典が使えるようになります。
      .plan2_wrapper  
        .plan2_info2(v-if="$ua.deviceType() !== 'pc'",class="plan2_not_pc")
          .description
            p ・「いいね！」が毎月20回付与されます。既に有料会員の方は毎月累計50回付与されます
            p ・送ったメッセージがお相手に読まれたかどうかを知ることができます。
            p ・足跡を6件以上閲覧できます。
            p ・オンライン表示を隠すことができます。
            p ・フリーワード検索が利用できます。
            p ・ユーザーの並び替え条件が増えます（Facebookの友達の多い順 / いいね！の多い順 / 登録日が新しい順）
            p ・検索結果の上位に表示されます。
            p ・初回メッセージを優先的に審査いたします。
        .plan2_info2(v-else-if="$ua.deviceType() === 'pc'")
          .description
            p ・「いいね！」が毎月20回付与されます。既に有料会員の方は毎月累計50回付与されます
            p ・送ったメッセージがお相手に読まれたかどうかを知ることができます。
            p ・足跡を6件以上閲覧できます。
            p ・オンライン表示を隠すことができます。
            p ・フリーワード検索が利用できます。
            p ・ユーザーの並び替え条件が増えます（Facebookの友達の多い順 / いいね！の多い順 / 登録日が新しい順）
            p ・検索結果の上位に表示されます。
            p ・初回メッセージを優先的に審査いたします。
  .app_info5 
    b withを使用してみた感想
  .add_info5
    p.pink withを使い始めたのは2019年の1月辺りからだったと思いますが、全体の感想としてはかなり優良なアプリだと思いました。
    p まず、イベントが豊富なことが挙げられます。
    p 見ているだけでワクワクするようなデザインのイベントが短い周期の入れ替わりで開催されています。
    p 他のアプリよりもマッチングするきっかけが多い印象です。
    p.pink 実際私がこの記事を書いているのが2019年5月ですが、これまでで1人会うことができています。
    p 私はある程度仲良くなってからややはりお相手の外見を気にしてしまう(笑)ことがあるので1人しか会えていませんが、
    p とにかく会ってみるという人だったら恐らく1ヶ月で4 ~ 6人は会うことができると思います。
    p レビューではサクラや業者が多い書き込みがありますが、このアプリではほぼそういった方がいないと思いました。
    p もちろん何回かは遭遇したことがあります。
    p 連絡先を交換したら1回話しただけで返信が来なくなったり、別のサイトに誘導されたりといったことはありました。
    p ただ、他のアプリに比べてそういった方は非常に少ない印象です。
    p 恐らく本人確認やFacebookを使っているということが効いているのだと思います。
    p.pink 金額としてはPairsがやはり最安だとは思いますが、Pairsよりもレベルの高い女性が多い印象があるのでせっかく課金をするなら私としてはwithの方をおすすめします。
    p 気になっている方は一度使ってみることを是非おすすめします！
  .start_with_text ↓ withを始める ↓
  .start_with_not_pc(v-if="$ua.deviceType() !== 'pc'")
    a(href="https://t.afi-b.com/visit.php?guid=ON&a=Y9306j-J315373G&p=s687592m" target="_blank" rel="noopener nofollow")
      img(src="https://www.afi-b.com/upload_image/9306-1519773417-3.gif" width="468" height="60" style="border:none;" alt="with（ウィズ）")
    img(src="https://t.afi-b.com/lead/Y9306j/s687592m/J315373G" width="1" height="1" style="border:none;" alt="with（ウィズ）")
  .start_with(v-else)
    a(href="https://t.afi-b.com/visit.php?guid=ON&a=Y9306j-J315373G&p=s687592m" target="_blank" rel="noopener nofollow")
      img(src="https://www.afi-b.com/upload_image/9306-1519773417-3.gif" width="468" height="60" style="border:none;" alt="with（ウィズ）")
    img(src="https://t.afi-b.com/lead/Y9306j/s687592m/J315373G" width="1" height="1" style="border:none;" alt="with（ウィズ）")
  
</template>

<script>
import Vue from 'vue'
// import VueYoutube from 'vue-youtube'
//import VueYouTubeEmbed from 'vue-youtube-embed'
//Vue.use(VueYouTubeEmbed)

//Vue.use(VueYoutube)

export default {
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: 'マッチングアプリwithを実際に使ってみて本当に会えるのかをレビューします。またwithとはどのようなサービスなのか、どういうコンテンツがあるのか、強みは何かも合わせて紹介していきます！' },
        { name: 'keywords', content: 'マッチングアプリ,with,レビュー,出会い,婚活'},
      ],
      link: [
        { rel: 'canonical', href: 'https://matching-app-review.xyz/categories/with'}
      ],
      title: '【2019年7月更新】マッチングアプリwithを実際に使ってのレビュー、本当に会えるの？',
    }
  },
  components: {
   
  },
  methods: {
    something() {
      const deviceType = this.$ua.deviceType()
      this.deviceType = deviceType
    }
  },
  actions: {
    getDeviceType ({ commit }) {
      const deviceType = this.$ua.deviceType()
      commit('SET_DEVICE_TYPE', deviceType)
    }
  }
}
</script>