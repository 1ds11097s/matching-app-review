<template lang="pug">
main.container
  h3.subsubtitle ～マッチングアプリOmiaiの紹介と使用してみた感想～
  .main_img
    img(src="../../static/omiai/main.png", alt="メイン画像" width="1472px" height="828px")
  .app_info1(v-if="$ua.deviceType() !== 'pc'", class="about_omiai_not_pc")
    b Omiaiってどんなアプリ？
  .app_info1(v-else-if="$ua.deviceType() === 'pc'")
    b Omiaiってどんなアプリ？
  .info1
    img(src="../../static/omiai/logo.png", alt="Omiaiロゴ画像",v-if="$ua.deviceType() !== 'pc'",class="omiai_logo_not_pc" width="170" height="250")
    img(src="../../static/omiai/logo.png", alt="Omiaiロゴ画像",v-else-if="$ua.deviceType() === 'pc'" width="170" height="250")
    img(src="../../static/omiai/media.png", alt="メディア紹介" width="500" height="250")
    blockquote
      p Omiai（オミアイ）は日本初のFacebookを利用した安心・安全なマッチングサービスです。
      p これまでのオンラインデーティングサービスは誰が登録しているかわからず、不安がつきまといました。
      p OmiaiではFacebookアカウントでログインできるため、身元の明るい人だけが使えるサービスになっています。
  .add_info1
    p OmiaiはFacebookを利用しているので他のマッチングサービスに比べても信頼ができるサービスとなっています。
    p また、2019年4月の時点では既に会員数は400万人を超えるかなり大手のサービスとなっています。
    p マッチングサービスを使う人なら一度は利用したことがあることが多く、また利用をお勧めできるサービスです。
    p また、多数のメディアにも紹介されておりそれがまた信頼につながっている一つの理由となっています。
  .start_omiai_text ↓ Omiaiを始める ↓
  .start_omiai_not_pc(v-if="$ua.deviceType() !== 'pc'")
    a(href="https://t.afi-b.com/visit.php?guid=ON&a=R100461-L337044D&p=s687592m" target="_blank" rel="nofollow")
      img(src="https://www.afi-b.com/upload_image/10046-1530825205-3.png" width="320" height="50" style="border:none;" alt="【Omiai -オミアイ-】")
  .start_omiai(v-else)
    a(href="https://t.afi-b.com/visit.php?guid=ON&a=R100461-L337044D&p=s687592m" target="_blank" rel="nofollow")
      img(src="https://www.afi-b.com/upload_image/10046-1530825205-3.png" width="320" height="50" style="border:none;" alt="【Omiai -オミアイ-】")
  .app_info2
    b なぜOmiaiが安全・安心なのか？
    .info2
      img(src="../../static/omiai/secure1.png", alt="安全・安心の理由1",v-if="$ua.deviceType() !== 'pc'",class="secure_not_pc" width="200" height="200")
      img(src="../../static/omiai/secure1.png", alt="安全・安心の理由1",v-else-if="$ua.deviceType() === 'pc'" width="200" height="200")
      img(src="../../static/omiai/secure2.png", alt="安全・安心の理由2",v-if="$ua.deviceType() !== 'pc'",class="secure_not_pc" width="200" height="200")
      img(src="../../static/omiai/secure2.png", alt="安全・安心の理由2",v-else-if="$ua.deviceType() === 'pc'" width="200" height="200")
      img(src="../../static/omiai/secure3.png", alt="安全・安心の理由3",v-if="$ua.deviceType() !== 'pc'",class="secure_not_pc" width="200" height="200")
      img(src="../../static/omiai/secure3.png", alt="安全・安心の理由3",v-else-if="$ua.deviceType() === 'pc'" width="200" height="200")
      img(src="../../static/omiai/secure4.png", alt="安全・安心の理由4",v-if="$ua.deviceType() !== 'pc'",class="secure_not_pc" width="200" height="200")
      img(src="../../static/omiai/secure4.png", alt="安全・安心の理由4",v-else-if="$ua.deviceType() === 'pc'" width="200" height="200")
      img(src="../../static/omiai/secure5.png", alt="安全・安心の理由5",v-if="$ua.deviceType() !== 'pc'",class="secure_not_pc" width="200" height="200")
      img(src="../../static/omiai/secure5.png", alt="安全・安心の理由5",v-else-if="$ua.deviceType() === 'pc'" width="200" height="200")
  .add_info2 
    span Omiaiは以下の点で安全・安心の理由を挙げています。
    ul
      li Omiaiの追加についてはFacebookに投稿されない
      li 実名がばれる心配がない
      li FacebookにOmiaiの友達は表示されない
      li 悪質なユーザーの監視体制が万全
      li 年齢確認の審査がある
      li 注意人物にはイエローカードが付くので見分けがつく
  .app_info4
    b Omiaiを使った他ユーザーのレビュー
  .add_info4
    .good_review 
      b.review_type_text 評価の高いレビュー
      .good_review1.good_review_style
        .review_title 福岡県で出会い結婚
        .star ★★★★☆
        .content 
          | 出会いないから出会い系で何となく探そうと思って登録。マッチした人と…今結婚して5年目です！<br>
          | 見覚えのあるアプリがPRであったので感謝を込めまして5年越しのお世話になりました！
      br
      .good_review2.good_review_style
        .review_title 今から4年前
        .star ★★★★★
        .content 
          | 地方に赴任して、彼女を作る目的で利用しました。二か月くらい課金した覚えがあります。その時出会った人と結婚しました。<br>
          | 今はこういうアプリが乱立してるので何とも言えませんが、少なくとも結婚まで行きついた人はいます。
      br
      .good_review3.good_review_style 
        .review_title 結婚しました
        .star ★★★★☆
        .content
          | 2ヶ月で3,40人と会ってみて、全員悪くもないけど良いという決めてもないかな？と思っていたけど、最後の一人と結婚しました。ちなみにアラサー女です。<br>
          | 奢られるのが得意じゃなかったからその2ヶ月はめちゃくちゃお金使ったけど、いい人と出会えたし、<br>
          | それ以外の出会いもいい経験になったと思ってるからやってよかったと思ってる！
      br
      .good_review4.good_review_style
        .review_title 素敵な方と出会い、結婚に至りました。
        .star ★★★★★
        .content 色んな方々がいましたが、最終的には素敵な人に出会えて、結婚ができました。ありがとうございました。
      br
      .good_review5.good_review_style 
        .review_title 結婚しました
        .star ★★★★★
        .content 
          | 信じてもらえないかもしれませんが、ここで出会った方と結婚して1年が経ちました。<br>
          | 最初は正直全く興味がなくタイプでもない方でしたがデートを重ねるうちに私のほうが惹かれてしまいました。<br>
          | 普通に出会っていたら100%眼中になかったはずです。全くタイプじゃなかったので笑<br>
          | ここで出会えたから向き合えたんだと思います。今はとっても幸せです。
    .bad_review 
      b.review_type_text 評価の低いレビュー
      .bad_review1.bad_review_style
        .review_title 怪しい。
        .star ★☆☆☆☆
        .content
          | 退会間近になると、異様にマッチングしだす。<br>
          | そして、LINEなどの交換もOKだから、LINEしだすと全く返事がない。<br>
          | これが、3人もいました、サクラな気がします。
      .bad_review2.bad_review_style
        .review_title メールやり取り
        .star ★★☆☆☆
        .content まず、マッチング全然しません。マッチングした後もこちらがあいさつメール送った(はじめまして)だけで連絡途絶えました
      .bad_review3.bad_review_style
        .review_title 始めたばかりですが退会検討中
        .star ★☆☆☆☆
        .content
          | 過疎県は他の似たようなアプリに比べて人が少ないです。さらに胡散臭い会員が多いように感じました。<br>(初めて業者に遭遇しました)正直お金を返してほしい気分です。
      .bad_review4.bad_review_style
        .review_title 業者？ 
        .star ★☆☆☆☆
        .content 詐欺まがいの勧誘にあったのでやめた。下手をすると犯罪に巻き込まれる可能性があるような内容だったので、そういう悪い人も使っているので注意が必要。
      .bad_review5.bad_review_style
        .review_title あまり…
        .star ★☆☆☆☆
        .content
          | オススメが毎日同じ人ばかり。スキップしたら好みじゃないのに同じ人しか表示されない…<br>
          | しかも、同じ地域だけでオススメとか、いい加減すぎる。これじゃ恋人探しじゃなくても好みじゃない人見てるだけ…
    .user_review_summary
      p 
        b レビューをみてOmiaiを始めようか迷っている方へ
      .user_review_summary_content
        p 高評価と低評価のレビューをいくつか紹介しましたが、高評価のレビューでは実際に出会ってから結婚した方もいるようです。
        p ここでは数件しか取り上げていませんが、さらにたくさんの良縁報告が寄せられていました。
        p 低評価のレビューではサクラが多かったり、サービスの運営の仕方に疑問を抱く声が挙がっています。
        p どんなアプリにも良い点や悪い点はあると思います。
        p 私個人の考えにはなりますが、良いレビューを挙げた人は悪いレビューの内容も実際に体験しているのではないかと思います。
        p 実際私自身使っている中で確かにサクラや業者のような女性は何人もいました。
        p マッチング成立した後にすぐにLINEの連絡先を聞いてきて、交換したら別サイトに誘導させるか1通目でメッセージが返ってこなくなったりといったことは何度もありました。
        p ただ、Omiaiは他のサービスと比べてそういったユーザーを排除するまでの対応がかなり早いと思います。
        p マッチングして15分後にはそのユーザーが強制退会となっているなど運営側が検知して対応をしています。
        p ですがそうじゃない純粋に良い出会いを求めて登録している女性もたくさんいます。
        p 使う地域によるかもしれませんが私の住んでいる福岡ではかなり可愛い女性も沢山登録しています。
        p 結論としては実際に使ってみないと何もわからないので1度自身で利用してみることをオススメします。
        p そこでOmiaiというサービスが自身に会うか会わないか判断していただければよいのではないでしょうか？
  .start_omiai_text ↓ Omiaiを始める ↓
  .start_omiai_not_pc(v-if="$ua.deviceType() !== 'pc'")
    a(href="https://t.afi-b.com/visit.php?guid=ON&a=R100461-L337044D&p=s687592m" target="_blank" rel="nofollow")
      img(src="https://www.afi-b.com/upload_image/10046-1530825205-3.png" width="320" height="50" style="border:none;" alt="【Omiai -オミアイ-】")
  .start_omiai(v-else)
    a(href="https://t.afi-b.com/visit.php?guid=ON&a=R100461-L337044D&p=s687592m" target="_blank" rel="nofollow")
      img(src="https://www.afi-b.com/upload_image/10046-1530825205-3.png" width="320" height="50" style="border:none;" alt="【Omiai -オミアイ-】")
  .app_info3 
    b Omiaiをやろうと思うけどどれぐらい料金がかかるの？
    .info3
      img(src="../../static/omiai/payment1.png", alt="料金について1",v-if="$ua.deviceType() !== 'pc'",class="payment_not_pc scale_image" width="790" height="642")
      img(src="../../static/omiai/payment1.png", alt="料金について1",v-else-if="$ua.deviceType() === 'pc'",class="scale_image" width="250" height="200")
      img(src="../../static/omiai/payment2.png", alt="料金について2",v-if="$ua.deviceType() !== 'pc'",class="payment_not_pc scale_image" width="1185" height="729")
      img(src="../../static/omiai/payment2.png", alt="料金について2",v-else-if="$ua.deviceType() === 'pc'",class="scale_image" width="300" height="200")
      img(src="../../static/omiai/payment3.png", alt="料金について3",v-if="$ua.deviceType() !== 'pc'",class="payment_not_pc" width="300" height="150")
      img(src="../../static/omiai/payment3.png", alt="料金について3",v-else-if="$ua.deviceType() === 'pc'" width="300" height="150")
  .add_info3
    p 基本的には男性が有料、女性が無料となっています。
    p 料金については上の画像の通りですが、
    p.red じゃあどれを買えばいいの？、どういう意味か分かりにくい！
    p という方の為になるべく分かりやすく説明をしていきます。
    span.plan1.plan ・有料会員プランについて
    .plan1_info 　　
      p 有料会員プランは支払方法と何か月で利用するかを自分で決めて金額を払うプランです。
      p 支払方法には「クレジットカード決済」「コンビニ決済」「AppleID決済」「GooglePlay決済」の4種類がありますが
      p.red 一番安いのはクレジットカード決済です。
      p その中でも1ヶ月から12ヶ月までプランがありますが
      p.red おすすめは3ヶ月か6ヶ月です。
      p 1ヶ月だとなかなかいい相手が見つからないまま終わってしまう可能性が高いです。
      p 逆に12ヶ月だと途中でやらなくなって無駄に払い続けるといったことになりやすいです。
      p.red まずはお試しでという方は3ヶ月、しっかり相手を見つけるまでやりたい！という方には6ヶ月がおすすめです！
    .start_omiai_text ↓ Omiaiを始める ↓
      .start_omiai_not_pc(v-if="$ua.deviceType() !== 'pc'")
        a(href="https://t.afi-b.com/visit.php?guid=ON&a=R100461-L337044D&p=s687592m" target="_blank" rel="nofollow")
          img(src="https://www.afi-b.com/upload_image/10046-1530825205-3.png" width="320" height="50" style="border:none;" alt="【Omiai -オミアイ-】")
      .start_omiai(v-else)
        a(href="https://t.afi-b.com/visit.php?guid=ON&a=R100461-L337044D&p=s687592m" target="_blank" rel="nofollow")
          img(src="https://www.afi-b.com/upload_image/10046-1530825205-3.png" width="320" height="50" style="border:none;" alt="【Omiai -オミアイ-】")
    span.plan2.plan ・プレミアムパックについて
    .plan2_info
      img(src="../../static/omiai/payment1.png", alt="料金について1",v-if="$ua.deviceType() !== 'pc'",class="payment_not_pc" width="250" height="200")
      img(src="../../static/omiai/payment1.png", alt="料金について1",v-else-if="$ua.deviceType() === 'pc'" width="250" height="200")
      .plan2_info1 プレミアムパックとは購入すると通常の有料会員に比べて2.2倍マッチング率が高くなるサービスのことです。<br>
        | プレミアムパックを購入すると以下のサービスが使えるようになります。
      .plan2_wrapper  
        .plan2_info2(v-if="$ua.deviceType() !== 'pc'",class="plan2_not_pc")
          .description
            p
              b 検索機能の追加
            p ・ログイン順で検索 - ログインした順にユーザーを検索できるのでメッセージのやり取りにつながりやすくなります。
            p ・人気順での検索 - 他の男性ユーザーからいいね！をたくさんもらっている女性を表示します。
            p ・登録日を絞って検索 - 登録した日から女性を絞って検索することができます。
            p ・メッセージできる検索 - 年齢確認が済んでいるやり取りの可能な女性を表示することができます。
            p ・お相手のいいね数検索 - いいね！の数がいくつの範囲かを絞って検索することができます。
            img(src="../../static/omiai/plan2_info2.png", alt="検索イメージ",width="150" height="300")
        .plan2_info2(v-else-if="$ua.deviceType() === 'pc'")
          .description
            p
              b 検索機能の追加
            p ・ログイン順で検索 - ログインした順にユーザーを検索できるのでメッセージのやり取りにつながりやすくなります。
            p ・人気順での検索 - 他の男性ユーザーからいいね！をたくさんもらっている女性を表示します。
            p ・登録日を絞って検索 - 登録した日から女性を絞って検索することができます。
            p ・メッセージできる検索 - 年齢確認が済んでいるやり取りの可能な女性を表示することができます。
            p ・お相手のいいね数検索 - いいね！の数がいくつの範囲かを絞って検索することができます。
            img(src="../../static/omiai/plan2_info2.png", alt="検索イメージ",width="150", height="300")
      .plan2_wrapper    
        .plan2_info3(v-if="$ua.deviceType() !== 'pc'",class="plan2_not_pc")
          .description
            p
              b 詳細プロフィールの追加
            p 相手が自分のプロフィールを表示した際に詳細なプロフィールを見ることができます。
            p 詳細プロフィールが設定されているアイコンが表示されるので相手から自分のプロフィールを見てもらいやすくなります。
            p 通常の有料会員より多くの情報を載せることができるのでその分女性からも自分のことを知ってもらいやすくなり<br>いいねやマッチングの数が上がりやすくなります。
            img(src="../../static/omiai/plan2_info3.png", alt="詳細プロフィールイメージ",width="150", height="300")
        .plan2_info3(v-else-if="$ua.deviceType() === 'pc'")
          .description
            p
              b 詳細プロフィールの追加
            p 相手が自分のプロフィールを表示した際に詳細なプロフィールを見ることができます。
            p 詳細プロフィールが設定されているアイコンが表示されるので相手から自分のプロフィールを見てもらいやすくなります。
            p 通常の有料会員より多くの情報を載せることができるのでその分女性からも自分のことを知ってもらいやすくなり<br>いいねやマッチングの数が上がりやすくなります。
            img(src="../../static/omiai/plan2_info3.png", alt="詳細プロフィールイメージ",width="150", height="300")
      .plan2_wrapper    
        .plan2_info4(v-if="$ua.deviceType() !== 'pc'",class="plan2_not_pc") つぶやきphotoの利用が可能
          p TwitterやInstagramのように画像を投稿してコメントを載せることができます。
          p 画像付きのコメントなので相手からのマッチングもしやすくなります。
        .plan2_info4(v-else-if="$ua.deviceType() === 'pc'") つぶやきphotoの利用が可能
          p TwitterやInstagramのように画像を投稿してコメントを載せることができます。
          p 画像付きのコメントなので相手からのマッチングもしやすくなります。
      .plan2_wrapper    
        .plan2_info5(v-if="$ua.deviceType() !== 'pc'",class="plan2_not_pc") 相手のログインの状況を知ることができる
          p 相手が最後にログインしてからどれぐらい時間がたっているのか、今ログインしているのかを知ることができます。
          p ログインしている時にメッセージやいいねを送ればマッチングしやすくなります。
        .plan2_info5(v-else-if="$ua.deviceType() === 'pc'") 相手のログインの状況を知ることができる
          p 相手が最後にログインしてからどれぐらい時間がたっているのか、今ログインしているのかを知ることができます。
          p ログインしている時にメッセージやいいねを送ればマッチングしやすくなります。
      .plan2_wrapper    
        .plan2_info6(v-if="$ua.deviceType() !== 'pc'",class="plan2_not_pc") Omiaiポイント購入時にもらえるポイントが増量
          p 大容量のOmiaiポイントを購入した時にもらえるポイントが以下の様に1.5倍になります。
          table
            tbody
              tr
                th 料金
                th 通常
                th プレミアムパック
              tr
                td 29,800円
                td 350ポイント
                td 550ポイント
              tr
                td 11,800円
                td 120ポイント
                td 200ポイント
        .plan2_info6(v-else-if="$ua.deviceType() === 'pc'") Omiaiポイント購入時にもらえるポイントが増量
          p 大容量のOmiaiポイントを購入した時にもらえるポイントが以下の様に1.5倍になります。
          table
            tbody
              tr
                th 料金
                th 通常
                th プレミアムパック
              tr
                td 29,800円
                td 350ポイント
                td 550ポイント
              tr
                td 11,800円
                td 120ポイント
                td 200ポイント
      .plan2_wrapper
        .plan2_info7(v-if="$ua.deviceType() !== 'pc'",class="plan2_not_pc") 一部で消費するポイントが減る
          p スペシャルいいね！とメッセージ付きみてね！の2つが、通常に比べて2ポイント少ない消費ポイントで送ることができます。<br>
            | 2ポイント自体は小さな差かもしれませんが何度も送ることを考えるとかなり消費を抑えることができその分マッチングもしやすくなります。
          table
            tbody
              tr
                th 
                th 通常
                th プレミアムパック
              tr
                td スペシャルいいね！
                td 5ポイント
                td 3ポイント
              tr
                td メッセージ付きみてね！
                td 5ポイント
                td 3ポイント
        .plan2_info7(v-else-if="$ua.deviceType() === 'pc'") 一部で消費するポイントが減る
          p スペシャルいいね！とメッセージ付きみてね！の2つが、通常に比べて2ポイント少ない消費ポイントで送ることができます。<br>
            | 2ポイント自体は小さな差かもしれませんが何度も送ることを考えるとかなり消費を抑えることができその分マッチングもしやすくなります。
          table
            tbody
              tr
                th 
                th 通常
                th プレミアムパック
              tr
                td スペシャルいいね！
                td 5ポイント
                td 3ポイント
              tr
                td メッセージ付きみてね！
                td 5ポイント
                td 3ポイント        
      .plan2_summary.red プレミアムパックを買うべきか
      p 上記で紹介したようにプレミアムパックには通常会員に比べて多くの有利な特典を受けることができます。<br>
        | しかし、料金表にあるように一番安い支払方法でも4000円程かかります。<br>
        | 通常の支払いに追加で4000円でマッチングが2.2倍になるのは確かに魅力的かもしれませんが、多少高い印象です。
        | 購入する場合はよく考えてからすることをおすすめします笑 
    span.plan3.plan ・Omiaiポイントについて
      .plan3_info
        img(src="../../static/omiai/payment2.png", alt="料金について2",v-if="$ua.deviceType() !== 'pc'",class="payment_not_pc" width="300" height="200")
        img(src="../../static/omiai/payment2.png", alt="料金について2",v-else-if="$ua.deviceType() === 'pc'" width="300" height="200")
        .plan3_info1 Omiaiポイントとは通常の有料会員が使える機能にさらに追加してマッチングしやすくなる機能を使うためのポイントです。<br>
          | Omiaiポイントで使える機能には以下があります。
        .plan3_info2 いいね！が送れる
          p 1いいね！を1ポイントで送ることができます。<br>
            | いいね！を送れる回数がなくなった場合はポイントを消費して送ることが可能です。
        .plan3_info3 スペシャルいいね！が送れる
          p Omiaiポイントを5ポイント消費してコメント付きのいいね！を送ることができます。<br>
            | 人気のある女性会員は多くの男性からいいね！をもらっているのでコメント付きのいいね！を送れば自然とマッチングもしやすくなります。
        .plan3_info4 みてね！が送れる
          p Omiaiポイントを3ポイント消費していいね！を送った後にもう一度見てほしい時に送ることができます。<br>
            | いいね！を送ったけど返信がなかった。けどなんとかしてやり取りがしたいというときに使える有効な方法の1つです。
        .plan3_info5 ハイライト表示される
          p Omiaiポイントを2-8ポイント消費して検索結果の上位に表示されやすくなります。<br>
            | まず相手に見てもらわないといいね！をもらえないのでマッチングしやすくなる有効な方法1つとなります。<br>
            | ただし、ハイライト表示はアプリ版のみの機能でPC版にはありません。
  .start_omiai_text ↓ Omiaiを始める ↓
  .start_omiai_not_pc(v-if="$ua.deviceType() !== 'pc'")
    a(href="https://t.afi-b.com/visit.php?guid=ON&a=R100461-L337044D&p=s687592m" target="_blank" rel="nofollow")
      img(src="https://www.afi-b.com/upload_image/10046-1530825205-3.png" width="320" height="50" style="border:none;" alt="【Omiai -オミアイ-】")
  .start_omiai(v-else)
    a(href="https://t.afi-b.com/visit.php?guid=ON&a=R100461-L337044D&p=s687592m" target="_blank" rel="nofollow")
      img(src="https://www.afi-b.com/upload_image/10046-1530825205-3.png" width="320" height="50" style="border:none;" alt="【Omiai -オミアイ-】")
  .app_info5 
    b Omiaiを使用してみた感想
  .add_info5
    p Omiaiを使い始めたのは2019年の1月からになりますが今のところはまだ実際に会った方は0人です。笑
    p 基本的には検索機能の「新メンバー」と「おすすめ順」のみを使っています。
    p その中で気になった女性にいいね！を送って相手からいいね！が来てマッチングが成立したらメッセージのやり取りをしています。
    p メッセージのやりとりは数十人程度しましたが、サクラや業者のようなLINEだけ聞いてきてそのあとは音信不通になるパターンや別サイトへ誘導する相手もいました。
    p しかし、それは少数の割合で真面目にいい出会いを探してOmiaiに登録している女性も沢山いました。
    p やり取りをしている中で途中からメッセージが来なくなってしまいそこで終わってしまうパターンが100%なので
    p 恐らく単純に私自身のメッセージの内容が良くなかったかまたは相手のOmiaiに対するやる気がなくなってしまったのかもしれません笑
    p 今後も継続して使っていけば会える手ごたえは間違いなくあるのでその時は体験談として報告をしたいと思います。
    p 別のサービスとも比較をして記事を投稿していきたいと思いますが今の時点ではOmiaiは多くあるマッチングサービスの中では比較的上位に来るようなサービスだと思います。
    p 気になった方は1度利用してみることをオススメできるサービスと言えると思います。
  .start_omiai_text ↓ Omiaiを始める ↓
  .start_omiai_not_pc(v-if="$ua.deviceType() !== 'pc'")
    a(href="https://t.afi-b.com/visit.php?guid=ON&a=R100461-L337044D&p=s687592m" target="_blank" rel="nofollow")
      img(src="https://www.afi-b.com/upload_image/10046-1530825205-3.png" width="320" height="50" style="border:none;" alt="【Omiai -オミアイ-】")
  .start_omiai(v-else)
    a(href="https://t.afi-b.com/visit.php?guid=ON&a=R100461-L337044D&p=s687592m" target="_blank" rel="nofollow")
      img(src="https://www.afi-b.com/upload_image/10046-1530825205-3.png" width="320" height="50" style="border:none;" alt="【Omiai -オミアイ-】")
</template>

<script>
import Card from '~/components/card.vue'

export default {
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: 'マッチングアプリOmiaiを実際に使ってみて本当に会えるのかをレビューします。またOmiaiとはどのようなサービスなのか、どういうコンテンツがあるのか、強みは何かも合わせて紹介していきます！' },
        { name: 'keywords', content: 'マッチングアプリ,Omiai,レビュー,出会い,婚活'},
      ],
      link: [
        { rel: 'canonical', href: 'https://matching-app-review.xyz/categories/Omiai'}
      ],
      title: '【2019年7月更新】マッチングアプリOmiaiを実際に使ってのレビュー、本当に会えるの？',
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

<style scoped lang="scss">
.container {
  width: 90%;
  margin: auto;
  .main_img img {
    max-width: 100%;
  }
  .subsubtitle {
    font-size: 24px;
    color:#35495e;
    text-align: center;
  }
  .app_info1,.app_info2,.app_info3,.app_info4,.app_info5 {
    text-align:left;
    font-size: 20px;
  }
  .add_info4 {
    margin-top:50px;
    .review_type_text {
      display:block;
    }
    .user_review_summary_content {
      padding: 10px 30px;
    }
    .good_review .review_type_text {
      color:#5555c6;
    }
    .bad_review .review_type_text {
      color:#ff2020;
    }
    .good_review_style,.bad_review_style {
      position: relative;
      padding: 20px;
      margin: 2em 0;
      color: #000;
      line-height:2.0;
      display:inline-block;
    }
    .good_review_style {
      background: #e6f4ff;
    }
    .bad_review_style {
      background: #ffefef;
    }
    .good_review_style:after,.bad_review_style:after {
      position: absolute;
      content: '';
      top: 100%;
      border: 15px solid transparent;
      width: 0;
      height: 0;
    }
    .good_review_style:after {
      left: 30px;
      border-top: 15px solid #e6f4ff;
    }
    .bad_review_style:after {
      right: 30px;
      border-top: 15px solid #ffefef;
    }
    .review_title {
      font-weight:bold;
    }
    .star {
      color:#ffd22c;
    }
  }
  .add_info5 {
    padding:20px;
  }
  .app_info1 {
    margin-top:50px;
  }
  .about_omiai_not_pc {
    text-align:center;
  }
  .start_omiai_not_pc {
    width:100%;
    text-align:center;
  }
  .start_omiai_btn_not_pc {
    max-width: 100%;
    width : auto;
  }
  .omiai_logo_not_pc,.secure_not_pc,.payment_not_pc {
    padding-right:0px;
  }
  .payment_not_pc {
    height:auto;
    max-width: 100%;
  }
  .plan2_not_pc {
    justify-content: center;
    flex-wrap: wrap;
    width:auto;
    max-width: 87%;
    .description {
      padding:1em;
    }
  }
  .info1,.info2,.info3 {
    display: flex;
    justify-content: center;
    padding-top: 50px;
    flex-wrap: wrap;
    img {
      height: 203px;
      padding-right: 50px;
      max-width:100%;
    }
    // .scale_image {
    //   transition-duration: 0.5s;
    // }
    // .scale_image:hover {
    //   transform: scale(2.0,2.0); /*画像の拡大*/
    // }
    blockquote {
      padding: 0.5em 1em;
      border: double 5px #4ec4d3;
      font-size:17px;
    }
  }
  .info1,.info3 {
    amp-img {
      margin:10px;
    }
  }
  .app_info2 {
    margin-bottom:50px;
  }
  .add_info1,.add_info2 {
    margin-bottom: 50px;
    ul, ol {
      background: #f1f8ff;
      box-shadow: 0px 0px 0px 10px #f1f8ff;/*線の外側*/
      border: dashed 2px #668ad8;/*破線*/
      border-radius: 9px;
      margin-left: 10px;/*はみ出ないように調整*/
      margin-right: 10px;/*はみ出ないように調整*/
      padding: 0.5em 0.5em 0.5em 2em;
    }
    ul li, ol li {
      line-height: 1.5;
      padding: 0.5em 0;
    }
    span {
      font-weight: bold;
    }
  }
  .add_info3 {
    .plan {
      font-size:17px;
      font-weight:bold;
    }
    .plan1_info,.plan2_info,.plan3_info {
      padding: 20px;
    }
    .plan2_info1,.plan3_info1 {
      margin: 20px 0px;
    }
    .plan2_summary {
      font-weight:bold;
    }
    .plan3_info1 {
      font-weight:normal;
    }
    .plan2_wrapper {
      display:inline-block;
      .plan2_info2,.plan2_info3 {
        display: flex;
        justify-content: left;
      }
    }
    .plan1_info,.plan3_info2,.plan3_info3,.plan3_info4,.plan3_info5 {
      font-weight:bold;
      margin: 2em 0em;
      padding: 1em;
      max-width: 100%;
      background-color: #fff; /* 背景色 */
      border: 1px solid #ccc; /* 枠線 */
      p {
        font-weight:normal;
      }
    }
    .plan2_info2,.plan2_info3,.plan2_info4,.plan2_info5,.plan2_info6,.plan2_info7 {
      font-weight:bold;
      margin: 2em 0em;
      padding: 1em;
      width: 100%;
      background-color: #fff; /* 背景色 */
      border: 1px solid #ccc; /* 枠線 */
      p {
        font-weight:normal;
      }
      table{
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
      }
      table th,table td{
        padding: 10px 0;
        text-align: center;
        font-weight:normal;
      }
      table tr:nth-child(odd){
        background-color: #eee
      }
    }
  }
  .red {
    color: red;
    font-weight: bold;
  }
  // .start_omiai {
  //   width:330px;
  //   margin: 20px auto;
  //   .btn-square-shadow {
  //     display: inline-block;
  //     padding: 0.5em 1em;
  //     text-decoration: none;
  //     background: #668ad8;/*ボタン色*/
  //     color: #FFF;
  //     border-bottom: solid 4px #627295;
  //     border-radius: 3px;
  //     width: 80%;
  //     text-align: center;
  //     letter-spacing: 10px;
  //   }
  //   .btn-square-shadow:active {
  //     /*ボタンを押したとき*/
  //     -webkit-transform: translateY(4px);
  //     transform: translateY(4px);/*下に動く*/
  //     box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);/*影を小さく*/
  //     border-bottom: none;
  //   }
  // }
  .start_omiai_text {
    font-size:20px;
    font-weight:bold;
    color: #3F9AD1;
    text-align:center;
  }
  .start_omiai {
    height:70px;
  }
  .start_omiai_not_pc {
    height:50px;
  }
  .start_omiai,.start_omiai_not_pc {
    width:500px;
    max-width:86%;
    position: relative;
    text-align:center;
    padding: 0.5em 1em;
    margin: 2em auto;
    color: #3F9AD1;
    background: #B8DBF3;
    border-top: #3F9AD1;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.32);
    a {
      display: block;
      position: absolute;
      top: 10px;
      left: 0;
      width: 100%;
      height: 100%;
      amp-img {
        padding-top: 13px;
        max-width:80%;
      }
    }
  }
}
</style>