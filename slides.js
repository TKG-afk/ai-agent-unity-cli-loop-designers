window.LESSON = [
  {
    "title": "AIエージェントと<br>Unity CLI Loopで<br><em>デザイナーでも<br>ゲームが作れる！</em>",
    "body": "<p class=\"cover-sub\">ゲームクリエイター科 4年生｜卒業制作</p><div class=\"cover-loop\"><span>決める</span><i>→</i><span>作る</span><i>→</i><span>遊んで確かめる</span><i>↶</i></div><p class=\"cover-meta\">45分 / Windows / 資料確認 2026.10.01</p>",
    "minutes": 1,
    "chapter": "01 導入",
    "note": "0:00–1:00。コードを書くことだけが制作ではない。観察・見た目・操作感を判断する力を入口にする。タイトルは可能性を示すもので、無検証の完成を約束しない。",
    "refs": [],
    "kind": "cover"
  },
  {
    "title": "今日のゴールは「次の一歩」が分かること",
    "body": "<div class=\"cols\"><div class=\"card\"><span class=\"num\">01</span><h3>道具を見分ける</h3><p>役割と、自分のAIの条件が分かる。</p></div><div class=\"card\"><span class=\"num\">02</span><h3>接続を確かめる</h3><p>どの作品から、何が返ったかを見る。</p></div><div class=\"card\"><span class=\"num\">03</span><h3>小さく作り直す</h3><p>成功の条件を決め、結果を比べる。</p></div></div><div class=\"callout\">設定が終わらなくてもOK。止まった場所と、次に確かめることを持ち帰る。</div>",
    "minutes": 2,
    "chapter": "01 導入",
    "note": "1:00–3:00。全員の導入完了を保証しない。導入5分、仕組み7分、準備15分、実例8分、演習7分、まとめ3分。インストール待ちは教員デモを見る。課金や校内PC権限で止まった人は見学ルートへ。",
    "refs": [],
    "kind": ""
  },
  {
    "title": "完成例は「遊び」と「確認」を見る",
    "body": "<div class=\"cols\"><div class=\"card\"><span class=\"badge wait\">実物素材待ち</span><h3>Codex＋Unity CLI Loopで<br>作成したレースゲーム</h3><p>動画・画像・プロジェクトが未提供のため、実物画面は未掲載。</p></div><div class=\"card\"><h3>見るポイント</h3><p>① 何を操作する？<br>② どんな瞬間が楽しい？<br>③ 何を確かめて直した？</p></div></div><div class=\"callout\">素材が届いたら、このページに完成映像を入れる。詳細紹介は27分から。</div>",
    "minutes": 2,
    "chapter": "01 導入",
    "note": "3:00–5:00。本来は完成映像30–60秒を見せ、学生から操作と楽しさを聞く。素材未提供の現状では実例として説明しない。代替として各自の卒業制作で「操作→結果」を考えさせる2分。事例の推測・架空画像の代用は禁止。",
    "refs": [],
    "kind": ""
  },
  {
    "title": "人間が決め、3つの道具で形にする",
    "body": "<div class=\"owner\"><b>人間</b> 作りたい遊びを決め、結果を見て採用する。</div><div class=\"cols\"><div class=\"card\"><span class=\"num\">1</span><h3>AIエージェント</h3><p>指示を受け、ファイルを読み、コードや作業を進めるAI。</p></div><div class=\"card\"><span class=\"num\">2</span><h3>Unity CLI Loop</h3><p>AIがUnityを操作し、結果を受け取る橋渡し。</p></div><div class=\"card\"><span class=\"num\">3</span><h3>Unity</h3><p>素材や仕組みを組み立て、ゲームを動かす場所。</p></div></div>",
    "minutes": 2,
    "chapter": "02 仕組み",
    "note": "5:00–7:00。AIエージェントは「文章の返事」から「道具を使って作業する」へ広がるものと説明。Unityは導入済みだがバージョンを後で確認する。Uの用途に沿った授業用の平易な説明。",
    "refs": [
      "U"
    ],
    "kind": ""
  },
  {
    "title": "お願いは、結果といっしょに戻ってくる",
    "body": "<p class=\"caption\">操作の対応を示す模式図</p><div class=\"flow\"><div>学生<small>「シーンを見せて」</small></div><i>→</i><div>AI<small>スキルを読む</small></div><i>→</i><div>CLI Loop<small>命令を届ける</small></div><i>→</i><div>Unity<small>情報を取得</small></div></div><div class=\"return\">← 結果を読む ← 返ったファイルを開く ←</div><div class=\"callout\">学生がUnity画面と比べる → 合っているか判断 → 次のお願いへ</div><p>スキル＝AIが読む「作業の手順書」。<br>CLI＝文字の命令で道具を動かす方法。</p>",
    "minutes": 2,
    "chapter": "02 仕組み",
    "note": "7:00–9:00。比喩から実操作へ結ぶ。AIがuloop get-hierarchyを実行し、返却パスのJSONを読んで要約し、人間がHierarchyと照合する。V3のWindows通信は名前付きパイプ。これは補足へ。",
    "refs": [
      "U",
      "H"
    ],
    "kind": ""
  },
  {
    "title": "あなたのAIは、この3つができる？",
    "body": "<div class=\"cols\"><div class=\"card\"><span class=\"num\">①</span><h3>PCのファイルを扱う</h3><p>Unityプロジェクトの中を読み、必要な変更ができる。</p></div><div class=\"card\"><span class=\"num\">②</span><h3>命令を実行する</h3><p>同じWindows上で<br>uloop を動かせる。</p></div><div class=\"card\"><span class=\"num\">③</span><h3>スキルを読む</h3><p>導入先を認識し、手順に沿って作業できる。</p></div></div><div class=\"callout\">名前だけで「対応」と決めない。ブラウザのチャットに文章を送るだけでは接続にならない。</div>",
    "minutes": 1.5,
    "chapter": "02 仕組み",
    "note": "9:00–10:30。ローカル＝いま使っているPC。クラウドの別PC上の実行と区別。使うアプリのモード、フォルダ権限、コマンド実行権限を確認。未知のエージェントは条件を調べてから実機確認。",
    "refs": [
      "U",
      "C",
      "AS"
    ],
    "kind": ""
  },
  {
    "title": "共通の準備＋AIごとの設定",
    "body": "<table><thead><tr><th>共通：全員同じ</th><th>個別：自分のAIで確認</th></tr></thead><tbody><tr><td>Unity 2022.3以降の対象作品</td><td>ローカル作業・ログイン・利用枠</td></tr><tr><td>CLI ＋ Unityパッケージ</td><td>スキルの保存先と読み込み</td></tr><tr><td>対象作品から結果を取得</td><td>ファイル・コマンド・通信の許可</td></tr></tbody></table><div class=\"callout\">例：Codex → .agents/skills　｜　Claude Code → .claude/skills</div><p class=\"caption\">公式資料で導入方法を確認済み。各学生PCでの接続成功は、まだ別の確認。</p>",
    "minutes": 1.5,
    "chapter": "02 仕組み",
    "note": "10:30–12:00。具体例はCodexだが必須ではない。Claude Codeも別ルートを提示する。料金・未導入アプリの準備は補足。未知のツールは無理に切り替えさせない。",
    "refs": [
      "U",
      "CS",
      "AS"
    ],
    "kind": ""
  },
  {
    "title": "準備① 対象作品とバージョンを決める",
    "body": "<div class=\"step\"><p><b>開く・場所</b>Unity Hub → Projects／エクスプローラー</p><p><b>操作</b>練習用の作品を選び、保存場所とUnityの版を確認。</p><p><b>目的</b>違う作品を操作しないため。</p></div><div class=\"status\"><p><b>成功</b>Unity 2022.3以降。対象フォルダが分かる。</p><p><b>困ったら最初に</b>Hubの作品名・保存場所・Editor Versionを確認。</p></div><div class=\"callout\">初回は練習用のコピーで。元作品は保存し、復元できる状態を残す。</div>",
    "minutes": 1.5,
    "chapter": "03 導入・接続",
    "note": "12:00–13:30。Hubの保存場所の表示方法は版により異なる。Unityを終了してからExplorerで練習用コピーを作る等、学校の手順を優先。V2利用中は授業内で更新せず補足へ。インストールは今から学生が行う授業手順であり、この教材制作では実行していない。",
    "refs": [
      "U"
    ],
    "kind": ""
  },
  {
    "title": "「プロジェクトフォルダ」は、この階層",
    "body": "<div class=\"cols\"><div class=\"folder\"><span class=\"badge\">エクスプローラーの模式図</span><h3>MyRacingProject 📁</h3><p>├ Assets <small>素材・コード</small><br>├ Packages <small>追加機能</small><br>└ ProjectSettings <small>作品の設定</small></p></div><div><h3>3つが並ぶ親フォルダ</h3><p>Assetsの中まで入らない。<br>フォルダ名は人によって違う。</p><p>① ここを開く<br>② 上のアドレス欄で場所を確認<br>③ この場所から命令する</p></div></div><div class=\"callout\">これ以降の「プロジェクトのルート」＝この親フォルダ。</div>",
    "minutes": 1,
    "chapter": "03 導入・接続",
    "note": "13:30–14:30。ルート＝いちばん上の基準となるフォルダ。Explorerのアドレス欄をクリックすると場所の文字列を確認できる。AssetsだけをAIに開かせる誤りを防ぐ。",
    "refs": [],
    "kind": ""
  },
  {
    "title": "準備② エクスプローラーで<br>対象作品の場所を確認する",
    "body": "<div class=\"step\"><p><b>開く・場所</b>エクスプローラー → 対象プロジェクトの親フォルダ</p><p><b>操作</b>アドレス欄をクリックし、フォルダの場所を確認。</p><p><b>目的</b>Unity・Claude Codeで同じ作品を開くため。</p></div><div class=\"status\"><p><b>成功</b>Assets・Packages・ProjectSettingsが同じ場所に見える。</p><p><b>困ったら最初に</b>違う作品なら、Unity Hubの保存場所から探し直す。</p></div><div class=\"callout\">ここでは命令を入力しない。コマンドで行う別ルートは補足A3・A6。</div>",
    "minutes": 1,
    "chapter": "03 導入・接続",
    "note": "14:30–15:30。アドレス欄＝現在開いている場所を示す欄。主手順では、対象フォルダを覚える・コピーするためだけに使う。命令を入力する必要はない。Claude Codeでフォルダを選ぶときに同じ場所を使う。",
    "refs": [],
    "kind": ""
  },
  {
    "title": "Claude Codeへつなぐ<br>記事の3ステップ",
    "body": "<div class=\"article-flow\"><div><b>1</b><span>Unityに<br>パッケージ</span></div><i>→</i><div><b>2</b><span>Settingsで<br>CLIを導入</span></div><i>→</i><div><b>3</b><span>Claude用<br>Skillsを導入</span></div></div><div class=\"callout\">この導入例は、指定Zenn記事のUnity画面を使う方法。次のページから実際の記事画像を見ながら進める。</div><p class=\"caption\">記事の環境：macOS／Unity 6000.3.10f1／掲載CLI 1.3.0。学生PCはWindowsなので、画面名や成功表示は導入中のUnity CLI Loopの版で変わる場合があります。</p>",
    "minutes": 1,
    "chapter": "03 導入・接続",
    "note": "15:30–16:30。指定記事の主張は「Claude CodeなどのAIエージェントからUnity Editorを操作できる」。本編の主導入経路をUnity画面へ差し替える。記事のOSと学生PCは異なるため、スクリーンショットの文字列を学生の成功条件に固定しない。最新の公式READMEも参照し、記事の1.3.0を現在の版と断定しない。",
    "refs": [
      "Z",
      "U"
    ],
    "kind": ""
  },
  {
    "title": "導入① Package Managerで<br>Unity CLI Loopを追加する",
    "body": "<div class=\"article-images two\"><figure><img src=\"https://static.zenn.studio/user-upload/e88284c8176b-20260324.png\" alt=\"Zenn記事のPackage Manager画面。プラスボタンからgit URL導入を選ぶ例\"><figcaption>① 「＋」→ Git URLから追加（記事画像）</figcaption></figure><figure><img src=\"https://static.zenn.studio/user-upload/6d7d591a1b95-20260324.png\" alt=\"Zenn記事のGit URL入力画面\"><figcaption>② URLを貼り付けてInstall（記事画像）</figcaption></figure></div><div class=\"codebox\"><div class=\"codehead\">Unity Package Manager の「Git URL」入力欄に貼る<button class=\"copy\">コピー</button></div><pre>https://github.com/hatayama/unity-cli-loop.git?path=/Packages/src</pre></div><div class=\"callout\">開く場所：Unity → Window → Package Manager。目的：Unity EditorにAIからの命令を受け取るパッケージを追加する。</div><p class=\"caption\">成功：Package ManagerでUnity CLI Loopの読込が完了。困ったら：Git URLの入力と、UnityのConsoleを確認。</p>",
    "minutes": 1.5,
    "chapter": "03 導入・接続",
    "note": "16:30–18:00。記事の画面を拡大して示す。学生は対象の練習用プロジェクトをUnityで開いてから行う。Unity公式にはGit URL導入のためWindowsではGitとPATH設定が必要とある。未導入の場合に授業中のPC設定変更はしない。PowerShell主手順は補足A3へ移す。",
    "refs": [
      "Z",
      "UP",
      "U"
    ],
    "kind": ""
  },
  {
    "title": "導入② Settingsから<br>CLIを入れる",
    "body": "<div class=\"article-images solo\"><figure><img src=\"https://static.zenn.studio/user-upload/bcb0c034c0fb-20260324.png\" alt=\"Zenn記事のUnity CLI Loop Settings画面。Install CLIボタンを押す例\"><figcaption>指定記事のSettings画面（クリック位置の例）</figcaption></figure><div><h3>操作</h3><p>Unity → Window →<br>Unity CLI Loop → Settings</p><p><b>Install CLI</b> をクリック。</p><h3>目的</h3><p>Claude CodeとUnityをつなぐ<br><code>uloop</code>コマンドを入れる。</p></div></div><div class=\"callout\">成功：SettingsにCLIの版または導入済み・更新済みの表示が出る。表示文言は版により異なる。</div><p class=\"caption\"><code>uloop --version</code> による版確認は授業後の補足。ここでは必要ありません。</p>",
    "minutes": 1.5,
    "chapter": "03 導入・接続",
    "note": "18:00–19:30。記事ではボタンがUp to dateに変わる例。公式V3 READMEの表示例はUninstall CLIと版番号。いずれも「CLIを認識している」状態を示す可能性がある。コマンドでの版確認は補足A3へ移し、授業のUnity画面ルートでは必須にしない。",
    "refs": [
      "Z",
      "U"
    ],
    "kind": ""
  },
  {
    "title": "導入③ TargetでClaudeを選び<br>Skillsを入れる",
    "body": "<div class=\"article-images three\"><figure><img src=\"https://static.zenn.studio/user-upload/5265ba3589b6-20260324.png\" alt=\"Zenn記事のTarget選択画面。Claudeを選ぶ例\"><figcaption>① Target：Claude</figcaption></figure><figure><img src=\"https://static.zenn.studio/user-upload/2dcb43cd2a7c-20260324.png\" alt=\"Zenn記事のInstall Skillsボタン画面\"><figcaption>② Install Skills</figcaption></figure><figure><img src=\"https://static.zenn.studio/user-upload/0e7d1b80b202-20260324.png\" alt=\"Zenn記事のSkills一覧画面\"><figcaption>③ Skillsが並ぶ</figcaption></figure></div><div class=\"callout\">目的：Claude CodeがUnityを操作するための「手順書」を、プロジェクトへ入れる。</div><p class=\"caption\">成功：<code>.claude/skills</code> に <code>uloop-…/SKILL.md</code> が作られる。困ったら：パッケージ読込完了・Target・対象プロジェクトを確認。</p>",
    "minutes": 1.5,
    "chapter": "03 導入・接続",
    "note": "19:30–21:00。Skill＝AIが読む作業手順。記事ではClaude Targetを選択しInstall Skills。記事は20スキルを掲載しているが、現在の公式READMEと数・名称が異なるため、授業では使う実際のスキル名をSkillsフォルダで確認させる。",
    "refs": [
      "Z",
      "U",
      "AS"
    ],
    "kind": ""
  },
  {
    "title": "導入④ Claude Codeで<br>同じ作品のフォルダを開く",
    "body": "<div class=\"step\"><p><b>開く・場所</b>Claude Code（デスクトップアプリまたはローカルCLI）</p><p><b>操作</b>対象のUnityプロジェクトの親フォルダを作業場所として選ぶ。</p><p><b>目的</b>Claude Codeの作業場所と、Unityの作品を一致させる。</p></div><div class=\"status\"><p><b>成功</b>Claude Codeが対象作品と <code>.claude/skills</code> を確認できる。</p><p><b>困ったら最初に</b>フォルダが違う場合は、対象作品の親フォルダを選び直す。</p></div><div class=\"codebox ai\"><div class=\"codehead\">AIの会話欄に貼る｜授業用の依頼文<button class=\"copy\">コピー</button></div><pre>変更はまだしないでください。\nこのプロジェクトの絶対パスと、Assets・Packages・ProjectSettingsを確認してください。\nUnity CLI LoopのSkillsを読めるか、保存場所を報告してください。</pre></div>",
    "minutes": 1.5,
    "chapter": "03 導入・接続",
    "note": "21:00–22:30。ブラウザ上のClaudeチャットへ文章を送るだけでは、PC内Unityの操作にはならない。Claude CodeのデスクトップアプリまたはローカルCLIで、対象フォルダを開く。初回認証や契約が必要な場合は学校のルールを優先する。CLIの起動方法は補足A6。",
    "refs": [
      "A",
      "AW",
      "AS",
      "AP",
      "Z"
    ],
    "kind": ""
  },
  {
    "title": "接続確認：Claude Codeから<br>シーン構造を取得する",
    "body": "<div class=\"codebox ai\"><div class=\"codehead\">AIの会話欄に貼る｜授業用の依頼文<button class=\"copy\">コピー</button></div><pre>前ページで選んだUnityプロジェクトで作業してください。\nuloop-get-hierarchyでシーン構造を取得してください。\n返ったファイルを開き、シーン名と主な物の名前を報告してください。\nコード・シーンは変更せず、再生もしないでください。</pre></div><div class=\"callout\">Claude Codeがスキルを読む → Unityが情報を返す → 返却ファイルを開く → UnityのHierarchyと照合</div><p class=\"caption\">最初の確認は、作品を変えない「シーン構造の取得」にする。</p>",
    "minutes": 2,
    "chapter": "03 導入・接続",
    "note": "22:30–24:30。記事の動作確認例は実際に変更・再生も含む。本授業の初回確認は影響の小さい取得だけにする。対象パス不明なら先に止める。get-hierarchyは.uloop/outputsにJSONを保存する。結果パスだけで終わらず、ファイルを読みUnity画面と照合。",
    "refs": [
      "Z",
      "T",
      "H"
    ],
    "kind": ""
  },
  {
    "title": "「起動」と「接続」は違う",
    "body": "<table><thead><tr><th>実行したこと</th><th>返ったもの・確かめること</th><th>判定</th></tr></thead><tbody><tr><td>UnityとClaude Codeを開いた</td><td>ウィンドウが表示された</td><td>起動のみ</td></tr><tr><td>uloop --version</td><td>CLIの版が表示された</td><td>CLI導入のみ</td></tr><tr><td>Claude Codeからシーン情報を取得</td><td>結果ファイルを読み、Unityの一覧と一致</td><td>その作品への接続確認</td></tr></tbody></table><div class=\"callout\">接続OKは「この操作が通った」という意味。ゲームの完成・品質は別に確かめる。</div>",
    "minutes": 1,
    "chapter": "03 導入・接続",
    "note": "24:30–25:30。教材に実行済みの返答や架空の成功ログは載せない。記事の動作確認は作者の環境での記録であり、学生PCの接続証拠にはならない。",
    "refs": [
      "Z",
      "U",
      "H"
    ],
    "kind": ""
  },
  {
    "title": "止まったら「どこで」を確かめる",
    "body": "<table><thead><tr><th>症状</th><th>最初に見る場所</th><th>次の行動</th></tr></thead><tbody><tr><td>命令が見つからない</td><td>PowerShellの uloop -v</td><td>開き直して確認 → 補足A1</td></tr><tr><td>違う作品の情報が返る</td><td>AIのパスとUnityの作品名</td><td>同じ親フォルダを選び直す</td></tr><tr><td>スキルが見えない</td><td>AIの作業場所・skillsフォルダ</td><td>導入先を確認 → AIを再起動</td></tr><tr><td>待ち続ける／赤いエラー</td><td>Unityの進捗・Console</td><td>処理完了を待つ／エラーを保存</td></tr></tbody></table><div class=\"callout\">27分で一度区切る。未完了の人も、実例の観察とミニ演習へ進む。</div>",
    "minutes": 1.5,
    "chapter": "03 導入・接続",
    "note": "25:30–27:00。ConsoleはWindow > General > Console。連打しない。エラー文と作品パスを控える。権限エラーは担当教員に相談、全権限開放を授業の必須手順にしない。詳細は補足A1/A2。",
    "refs": [],
    "kind": ""
  },
  {
    "title": "実例① まず、実物を遊んで見る",
    "body": "<div class=\"media-wait\"><span>REAL PROJECT / 素材待ち</span><h3>レースゲームの動画・画像</h3><p>実物の素材が提供されてから掲載します。</p></div><div class=\"callout\">観察：入力 → 車の反応 → プレイヤーが感じる楽しさ</div>",
    "minutes": 2,
    "chapter": "04 レースゲーム実例",
    "note": "27:00–29:00。素材提供後は動画またはスクリーンショットを表示し、操作と楽しさを説明。現在、タイトル・操作・ルール・機能は未確認。代替：各自の作品について入力と画面の変化を2人で話す。実例であるかのような口頭補完をしない。",
    "refs": [],
    "kind": ""
  },
  {
    "title": "実例② 人間の依頼とAIの実装を分ける",
    "body": "<table><thead><tr><th>確認する資料</th><th>そこから言えること</th><th>現在</th></tr></thead><tbody><tr><td>依頼文・会話記録</td><td>人間が何を頼んだか</td><td>素材待ち</td></tr><tr><td>コード・変更履歴</td><td>何が実装されたか</td><td>素材待ち</td></tr><tr><td>会話＋変更履歴の照合</td><td>AIと人間が担当した範囲</td><td>素材待ち</td></tr></tbody></table><div class=\"callout\">動画だけでは「AIが作った部分」や「制作時間」は分からない。</div>",
    "minutes": 2,
    "chapter": "04 レースゲーム実例",
    "note": "29:00–31:00。素材が来たら引用箇所とファイル名・記録日時をメモする。コードだけからAIの作者性を断定しない。未提供なら学生に「自分なら依頼前に何を決めるか」を尋ねる。",
    "refs": [],
    "kind": ""
  },
  {
    "title": "実例③ 直す前と、直した後を比べる",
    "body": "<div class=\"cols\"><div class=\"card\"><span class=\"badge wait\">素材待ち</span><h3>修正前の画面・動き</h3><p>どんな場面で困ったか。<br>どうすれば同じ現象が起きるか。</p></div><div class=\"card\"><span class=\"badge wait\">素材待ち</span><h3>修正後の画面・動き</h3><p>同じ操作をして、結果を比べる。<br>別の所が壊れていないかも見る。</p></div></div><div class=\"callout\">必要な記録：試した操作／期待した結果／実際の結果／次の修正</div>",
    "minutes": 2,
    "chapter": "04 レースゲーム実例",
    "note": "31:00–33:00。比較素材・テスト記録がなければ実際の改善内容を作らない。代替：自作品の困りごとを1つ選び、同じ操作で比べられる確認方法を考える。",
    "refs": [],
    "kind": ""
  },
  {
    "title": "実例④ 自分の卒業制作へ持ち帰る",
    "body": "<div class=\"cols\"><div class=\"card\"><span class=\"num\">見る</span><h3>観察</h3><p>文字は読める？<br>次に何をすればよいか分かる？</p></div><div class=\"card\"><span class=\"num\">触る</span><h3>操作感</h3><p>反応は遅くない？<br>思った方向に動く？</p></div><div class=\"card\"><span class=\"num\">決める</span><h3>採用する判断</h3><p>狙った楽しさに近い？<br>どこを残し、どこを直す？</p></div></div><div class=\"callout\">ここは授業の応用ポイント。実例の制作成果を断定したものではありません。</div>",
    "minutes": 2,
    "chapter": "04 レースゲーム実例",
    "note": "33:00–35:00。実例が揃えば観察点を実物の該当場面に結びつける。現状は一般的な制作への応用。デザイナーの目が結果を選ぶことを強調。",
    "refs": [],
    "kind": ""
  },
  {
    "title": "大きなお願いを、4つに分ける",
    "body": "<p class=\"caption\">以下はすべて授業用の例。実際のレースゲームの仕様・依頼記録ではありません。</p><table><thead><tr><th>小さな依頼</th><th>何ができたら成功？</th></tr></thead><tbody><tr><td>① 車を動かす</td><td>例：W/Sで前後、A/Dで左右に移動できる</td></tr><tr><td>② コースとゴールを追加</td><td>スタートからゴールまで走れる</td></tr><tr><td>③ ゴール時のタイム表示</td><td>到着時に数字が止まり、記録を読める</td></tr><tr><td>④ 文字と操作感を調整</td><td>指定した大きさ・反応を実機で確認できる</td></tr></tbody></table>",
    "minutes": 1.5,
    "chapter": "05 ミニ演習",
    "note": "35:00–36:30。前後左右への移動は初心者用の仮仕様で、車の操舵方式を意味しない。1つ確認してから次へ。成功条件を具体的な操作・観察にする。",
    "refs": [],
    "kind": ""
  },
  {
    "title": "お願いには、3つの文を入れる",
    "body": "<div class=\"codebox ai\"><div class=\"codehead\">AIの会話欄に貼る｜授業用の依頼文<button class=\"copy\">コピー</button></div><pre>作りたいこと：練習用シーンで、車がW/Sで前後、A/Dで左右に移動するようにしたい。\n変える範囲：車の移動だけ。コース・ゴール・見た目はまだ変えない。\n成功の条件：再生して4方向に動き、キーを離すと止まる。確認した操作と結果を報告して。</pre></div><div class=\"callout\">AIの「できました」の後に、自分でも動かして確かめる。</div>",
    "minutes": 1.5,
    "chapter": "05 ミニ演習",
    "note": "36:30–38:00。これは実制作の引用でなく授業用の指示例。再生＝UnityのPlayボタンで実際に動かすこと。複雑な企画なら最初の1動作まで小さくする。変更前に保存・復元手段を確保。",
    "refs": [],
    "kind": ""
  },
  {
    "title": "3分で、自分のゲームの依頼を書く",
    "body": "<div class=\"exercise\"><label>作りたいこと<textarea placeholder=\"例：ボタンを押すと、扉が開く。\"></textarea></label><label>変える範囲<textarea placeholder=\"例：最初の部屋の扉1つだけ。\"></textarea></label><label>成功の条件<textarea placeholder=\"例：近くでEを押すと開き、遠くでは開かない。\"></textarea></label></div><div class=\"exercise-actions\"><button id=\"downloadExercise\">文章を保存</button><span>紙・メモ帳でもOK。入力内容は自動保存されません。</span></div>",
    "minutes": 3,
    "chapter": "05 ミニ演習",
    "note": "38:00–41:00。最初の2分は個人、最後1分は隣同士で成功条件を読んで確認。タイマーは教員が管理。設定未完了の学生も同じ課題。入力を行うとき左右キーは文字編集を優先。保存はTXTダウンロード。",
    "refs": [],
    "kind": ""
  },
  {
    "title": "最後に「見て確かめられる？」",
    "body": "<div class=\"cols\"><div class=\"card\"><h3>あいまいな条件</h3><p>「いい感じに」<br>「もっと面白く」</p></div><div class=\"card\"><h3>観察できる条件</h3><p>「3回押して、毎回1回だけ開く」<br>「画面の端でも文字が切れない」</p></div></div><div class=\"callout\">今日の一文を、次の制作で1つだけ試す。結果が違えば、操作と画面を添えて頼み直す。</div>",
    "minutes": 1,
    "chapter": "05 ミニ演習",
    "note": "41:00–42:00。成功条件の具体性を相互確認。面白さ自体は人が判断するが、そのための観察場面を用意する。",
    "refs": [],
    "kind": ""
  },
  {
    "title": "小さな完成を、4段階で育てる",
    "body": "<div class=\"flow phases\"><div>企画<small>規模と計画を決める</small></div><i>→</i><div>アルファ<small>最初から最後まで遊べる</small></div><i>→</i><div>ベータ<small>機能・素材を揃えテスト</small></div><i>→</i><div>マスター<small>公開できる品質へ</small></div></div><div class=\"callout\">各段階で教員レビュー。指摘を、次の計画と改善に反映する。</div><p>制作者は自分。AIの出力を選び、直し、成果物に責任を持つ。</p>",
    "minutes": 1,
    "chapter": "06 卒業制作へ",
    "note": "42:00–43:00。実施要項は2026年度案。詳細な日程・提出形式は担当教員の案内。アルファは仮素材可。マスターは想定環境で安定動作。授業資料では公開作業は行わない。",
    "refs": [
      "G"
    ],
    "kind": ""
  },
  {
    "title": "作業のあとに、4項目を記録する",
    "body": "<div class=\"cols\"><div class=\"card\"><span class=\"num\">1</span><h3>使ったAI</h3><p>サービス名と、分かる範囲のモデル名。</p></div><div class=\"card\"><span class=\"num\">2</span><h3>目的・使った箇所</h3><p>どの工程で何のために使ったか。</p></div></div><div class=\"cols\"><div class=\"card\"><span class=\"num\">3</span><h3>自分の修正</h3><p>選んだ理由と、直した内容。</p></div><div class=\"card\"><span class=\"num\">4</span><h3>確認方法</h3><p>試した操作・実際の結果・素材の利用条件。</p></div></div>",
    "minutes": 1,
    "chapter": "06 卒業制作へ",
    "note": "43:00–44:00。最終報告書で必要になるので制作中から記録。素材には画像・音声・フォント・ライブラリ・AI生成物を含む。出典・許諾・商用利用・改変・クレジットを確認。不明なら教員へ。理解できないコードをそのまま採用しない。",
    "refs": [
      "G"
    ],
    "kind": ""
  },
  {
    "title": "作るのはAIと。決めるのは自分。",
    "body": "<p class=\"closing\">観察する力が、<br><em>ゲームを良くする力になる。</em></p><div class=\"next\"><b>今日、持ち帰るもの</b><p>自分の接続状況 ＋ 小さな依頼文 ＋ 成功の条件</p></div><p>未接続 → 止まった場所を補足で確認<br>接続済み → 1つ作る → 動かす → 記録する</p>",
    "minutes": 1,
    "chapter": "06 卒業制作へ",
    "note": "44:00–45:00。出口確認：AI・Unity・CLI Loopの役割を一言ずつ。起動と接続の違いは何か。各自が次の一手を答える。ここで45分本編終了。右矢印は表紙へ戻る。補足は目次から選ぶ。",
    "refs": [
      "G"
    ],
    "kind": ""
  },
  {
    "title": "A1 命令・作品・スキルの確認",
    "body": "<table><thead><tr><th>症状</th><th>アプリ／場所</th><th>操作と成功の目安</th></tr></thead><tbody><tr><td>uloopが見つからない</td><td>PowerShell／対象作品</td><td>開き直し、uloop -v。版が出ればCLI認識。</td></tr><tr><td>違う作品になる</td><td>Explorer・AI・Unity</td><td>3つの保存場所を比較。一致させて再取得。</td></tr><tr><td>スキルが認識されない</td><td>Explorer／親フォルダ</td><td>該当するskills内にSKILL.mdを確認。</td></tr><tr><td>スキルの設置失敗</td><td>Unity／Package Manager</td><td>Loop導入完了後、同じ導入コマンドを再確認。</td></tr></tbody></table><div class=\"callout\">PATH＝命令を探す場所の一覧。手動で直す前に、導入結果と端末の再起動を確認。</div>",
    "minutes": 0,
    "chapter": "補足・授業後",
    "note": "スキルがファイルとしてあるのに認識されない場合はAIの再起動、対応保存先、現在の作業フォルダを確認。コマンドの不明点を推測で補わず公式READMEを再確認。V2のnpm版がV3を隠している場合はA7。",
    "refs": [
      "U",
      "CS",
      "AS"
    ],
    "kind": ""
  },
  {
    "title": "A2 待ち時間・エラー・権限の確認",
    "body": "<table><thead><tr><th>症状</th><th>最初の確認場所</th><th>次の行動／成功の目安</th></tr></thead><tbody><tr><td>Unityが処理中</td><td>Unityの進捗表示</td><td>完了を待つ。何度も命令しない。</td></tr><tr><td>コンパイルエラー</td><td>Window → General → Console</td><td>赤い行を保存して相談。解消後に再取得。</td></tr><tr><td>接続を拒否される</td><td>AIの実行結果・権限設定</td><td>対象パスと許可範囲を教員と確認。</td></tr><tr><td>取得は成功、内容が違う</td><td>返却ファイル＋Hierarchy</td><td>作品・シーンを照合。正しい場所で再試行。</td></tr></tbody></table><div class=\"callout\">コンパイル＝コードを動く形に変える処理。エラー＝処理を止める問題の知らせ。</div>",
    "minutes": 0,
    "chapter": "補足・授業後",
    "note": "最初から全権限を開放しない。Loop READMEのClaude sandbox除外は環境依存。Claude公式ではネイティブWindowsのsandboxは非対応なのでWindows主手順へ一律追加しない。WSL等は別環境として教員が公式資料で診断。",
    "refs": [
      "U",
      "AW",
      "C",
      "UP"
    ],
    "kind": ""
  },
  {
    "title": "A3 PowerShellから入れる別ルート",
    "body": "<div class=\"codebox ps\"><div class=\"codehead\">Windows PowerShell に入力<button class=\"copy\">コピー</button></div><pre>irm https://raw.githubusercontent.com/hatayama/unity-cli-loop/main/scripts/install.ps1 | iex\nuloop package install\nuloop launch\nuloop skills install --claude</pre></div><div class=\"step\"><p><b>開く・場所</b>PowerShell → 対象作品の親フォルダ</p><p><b>操作</b>上から順に1行ずつ実行。</p><p><b>目的</b>Unity UIの導入ではなく、命令でCLI・パッケージ・Claude用Skillsを入れる。</p></div><div class=\"status\"><p><b>成功</b>uloop --versionで版が出て、Unityが対象作品を開き、.claude/skillsができる。</p><p><b>困ったら最初に</b>命令が見つからない・作品が違う・UnityのConsoleに赤いエラーがないか確認。</p></div><div class=\"callout\">本編は指定記事に合わせたUnity画面ルート。こちらは授業後の別ルート。</div>",
    "minutes": 0,
    "chapter": "補足・授業後",
    "note": "公式READMEのWindows PowerShell用手順。外部スクリプトを取得して実行する導入操作なので、学校の管理・導入ルールに従う。実行をブロックされたら学生判断で保護設定を無効にしない。CLI・パッケージ・スキルをUI導入と重複して実行しない。",
    "refs": [
      "U"
    ],
    "kind": ""
  },
  {
    "title": "A4 Settingsの表示が記事と違うとき",
    "body": "<div class=\"settings-grid\"><div><p><b>記事の例</b></p><img src=\"https://static.zenn.studio/user-upload/bcb0c034c0fb-20260324.png\" alt=\"Zenn記事のCLI Settings画面\"><p class=\"caption\">Up to date の例</p></div><div><p><b>現行READMEの例</b></p><img src=\"assets/settings-cli-not-installed.png\" alt=\"公式READMEのCLI未導入Settings画面\"><p class=\"caption\">Install CLI の例</p></div><div><h3>見るべきこと</h3><p>① CLIが入ったか<br>② Claude用Skillsを入れたか<br>③ 対象作品と同じ場所か</p><p>表示文言だけで判断しない。<br><code>uloop --version</code> と、Claude Codeからの取得で確認。</p></div></div>",
    "minutes": 0,
    "chapter": "補足・授業後",
    "note": "Zenn記事は2026-04-15、READMEは取得時点のmainを参照。UI表記は版で異なる。画像はどちらも説明用で、当PCの導入結果ではない。Zenn画像は外部URLを使うため、オフライン時は本文と公式画像で授業を進める。",
    "refs": [
      "Z",
      "U"
    ],
    "kind": ""
  },
  {
    "title": "A5 AIの利用準備・費用を確認する",
    "body": "<table><thead><tr><th>AIの例</th><th>導入とスキル</th><th>利用条件</th></tr></thead><tbody><tr><td>Codex（ローカル）</td><td>デスクトップ版等を用意。<br>Common (.agents) を使用。</td><td>Free/Goは展開状況で利用範囲が異なる。<br>CLI等は対応プラン／API課金を確認。</td></tr><tr><td>Claude Code（ローカル）</td><td>アプリまたはCLIを用意。<br>Claude Code用スキルを使用。</td><td>Pro/Max・組織契約・Console等。<br>デスクトップは有料契約が必要。</td></tr><tr><td>その他</td><td>公式資料でファイル・命令・<br>スキル読込・Windowsを確認。</td><td>契約・追加ソフト・利用枠も個別確認。<br>未確認のまま接続対応としない。</td></tr></tbody></table><div class=\"callout\">授業中の新規契約は必須にしない。利用できない人は観察・依頼文づくりへ。</div>",
    "minutes": 0,
    "chapter": "補足・授業後",
    "note": "確認日2026-10-01。価格の金額や無料枠の永続性は保証しない。CodexのFree/Goはデスクトップの段階展開との記載。Claude API等は利用量に応じた費用があり、学校の契約を確認。各公式リンクはフッターから。",
    "refs": [
      "CP",
      "CA",
      "AP",
      "A"
    ],
    "kind": ""
  },
  {
    "title": "A6 別のAIを使うときの具体例",
    "body": "<div class=\"cols\"><div class=\"card\"><h3>Claude Code CLI</h3><p>導入済みなら、対象作品の<br>PowerShellで下を入力。</p><div class=\"codebox ps\"><div class=\"codehead\">Windows PowerShell に入力<button class=\"copy\">コピー</button></div><pre>claude</pre></div><p>会話欄で /uloop-get-hierarchy を指定し、対象作品の情報を取得。</p></div><div class=\"card\"><h3>その他のエージェント</h3><p>対応の名前一覧だけでは決めない。<br>使う版・実行場所・保存先を調べる。</p><p>Gemini CLIはスキル保存先を確認済み。ただし移行告知があり、今回の導入例から除外。</p></div></div><div class=\"callout\">成功：AIがスキルを読み、同じ作品の情報が返る。失敗：作業場所・認証・スキルを確認。</div>",
    "minutes": 0,
    "chapter": "補足・授業後",
    "note": "Claude Code未導入なら公式setupのWindows手順を教員と確認する。必要な契約も先に確認。claudeはローカルCLIでのみ実行。本編と同じく取得だけの指示を添える。Gemini CLIの公式サイトは無料・Google One利用者に2026-06-18のAntigravity CLI移行告知あり。その後継のWindows/Loop連携をここで検証していないため未確認。",
    "refs": [
      "AW",
      "AS",
      "AP",
      "GS",
      "GI"
    ],
    "kind": ""
  },
  {
    "title": "A7 V3と古い手順を混ぜない",
    "body": "<table><thead><tr><th>今回の授業：V3</th><th>旧V2を使う作品</th></tr></thead><tbody><tr><td>Loop本体のためのNode.js導入は不要</td><td>V2をV3 CLIから扱う場合はNode.js 22以降が必要</td></tr><tr><td>Windows内の名前付きパイプで接続</td><td>古いポート設定をV3へ持ち込まない</td></tr><tr><td>PCへCLI、作品へパッケージとスキル</td><td>旧カスタムツールがあれば移行資料を確認</td></tr></tbody></table><div class=\"callout\">既存作品がV2なら、授業中の一斉更新はしない。教員と公式の移行手順を確認。</div><p class=\"caption\">名前付きパイプ＝同じPC内で情報をやり取りする通り道。AI側のNode.js要件は別です。</p>",
    "minutes": 0,
    "chapter": "補足・授業後",
    "note": "V3 CLIは作品ごとのrunnerを使い分ける。旧npm版を入れ直すと命令の優先順位が競合しうる。READMEのV2併用・移行資料に誘導し、アンインストールやSafe Mode変更を初心者の通常手順へ混ぜない。",
    "refs": [
      "U",
      "GI"
    ],
    "kind": ""
  },
  {
    "title": "A8 記録は、この形で残せる",
    "body": "<div class=\"codebox ai\"><div class=\"codehead\">AIの会話欄に貼る｜授業用の依頼文<button class=\"copy\">コピー</button></div><pre>日付／対象作品：\nAIのサービス名・モデル名（分かる範囲）：\n目的・AIを使った箇所：\n依頼文：\n自分が判断・修正した内容：\n確認した操作・期待した結果・実際の結果：\n素材の出典・利用条件・必要な表記：\n次に直すこと：</pre></div><div class=\"callout\">記録用テンプレート。AIへ送信する必要はなく、メモ帳などに保存できます。</div>",
    "minutes": 0,
    "chapter": "補足・授業後",
    "note": "卒業制作要件の項目を授業用に再構成。個人情報・認証情報・第三者の非公開情報を許可なく入力しない。実例の記録が後から見つかったら、その日付と出典を明記して事実だけ追記する。",
    "refs": [
      "G"
    ],
    "kind": ""
  },
  {
    "title": "A9 確認範囲",
    "body": "<p class=\"big\">資料の確認日：<b>2026年10月1日</b></p><div class=\"cols\"><div class=\"card\"><h3>確認済み</h3><p>卒業制作要件（2026年度案）<br>Unity CLI Loopの導入手順<br>Claude Codeの利用条件</p></div><div class=\"card\"><h3>未確認・素材待ち</h3><p>レースゲーム本体・映像・制作記録<br>学生ごとのAI契約・設定・接続<br>各PCでの導入・実機の実行結果</p></div></div><div class=\"callout\"><a href=\"teacher-notes.html\" target=\"_blank\">講師用メモを開く ↗</a></div>",
    "minutes": "0",
    "chapter": "補足・授業後",
    "note": "添付Codex画面は過去の相談資料としてのみ参照。画面内の説明を現在の接続状態や技術仕様の根拠には使用していない。ソフト導入・PC設定変更・Unity作品の変更は教材制作中に実行していない。",
    "refs": [
      "G",
      "U",
      "C",
      "CS",
      "AS"
    ],
    "kind": ""
  }
];
window.SOURCES = [["Z", "Zenn：Claude CodeからUnity Editorを操作できるUnity CLI Loopの導入手順", "https://zenn.dev/unsoluble_sugar/articles/bf666326e854d1", "2026-04-15更新。Claude Code向けのUnity UI導入例と画面画像。記事の実行環境はmacOS／Unity 6000.3.10f1で、掲載CLI版は1.3.0。"], ["G", "卒業制作 実施要項 2026年度案", "https://u-zu.co.jp/graduation-project-2026/#1", "企画・責任・4段階・AI利用記録・素材の権利。Web取得は一度失敗し、同URLのHTMLを直接取得して全13節を確認。"], ["U", "Unity CLI Loop 日本語README", "https://github.com/hatayama/unity-cli-loop/blob/c6aabe3a5286bd5f143b875031d4ea844ccd292a/README_ja.md", "V3。Unity 2022.3以降、Windows導入、3要素、スキル、接続方式。授業前はmainとの差分も確認。"], ["T", "Unity CLI Loop ツールリファレンス", "https://github.com/hatayama/unity-cli-loop/blob/c6aabe3a5286bd5f143b875031d4ea844ccd292a/Packages/src/Documentation~/tools_ja.md", "get-hierarchyは結果をファイルに保存。get-logsはConsoleログを取得。"], ["H", "get-hierarchy スキル", "https://github.com/hatayama/unity-cli-loop/blob/c6aabe3a5286bd5f143b875031d4ea844ccd292a/.agents/skills/uloop-get-hierarchy/SKILL.md", "返却値はMessageとHierarchyFilePath。返却ファイル内のContext/Hierarchyを読む。"], ["C", "OpenAI：Windows", "https://developers.openai.com/codex/windows", "取得時の転送先：learn.chatgpt.com/docs/windows/windows-sandbox。ローカルWindows環境・権限。"], ["CS", "OpenAI：スキル", "https://developers.openai.com/codex/skills", "転送先：learn.chatgpt.com/docs/build-skills。.agents/skillsと再起動。"], ["CA", "OpenAI：デスクトップアプリ", "https://developers.openai.com/codex/app", "転送先：learn.chatgpt.com/docs/app。サインイン、フォルダ選択、新しいチャット。表示名は配布版で異なる。"], ["CP", "OpenAI：料金・利用範囲", "https://developers.openai.com/codex/pricing", "転送先：learn.chatgpt.com/docs/pricing。Free/Goのデスクトップ利用は展開状況に依存。CLI等の利用範囲はプランを確認。APIは別料金。"], ["A", "Claude Code：概要", "https://code.claude.com/docs/en/overview", "ローカルファイル編集・コマンド実行。デスクトップは有料契約が必要。"], ["AS", "Claude Code：スキル", "https://code.claude.com/docs/en/skills", "プロジェクト内.claude/skills、/skill-nameで呼び出し。"], ["AW", "Claude Code：Windows導入", "https://code.claude.com/docs/en/setup", "ネイティブWindows、PowerShell利用。Git for Windowsは任意。ネイティブWindowsのsandboxは非対応。"], ["AP", "Claude Code：認証", "https://code.claude.com/docs/en/authentication", "Pro/Max、組織契約、Consoleなど。学生の契約は未確認。"], ["GS", "Gemini CLI：スキル", "https://geminicli.com/docs/cli/skills/", " .agents/skills別名を確認。ただし無料・Google One利用者への移行告知があるため本授業の導入例には採用しない。"], ["GI", "Gemini CLI：導入", "https://geminicli.com/docs/get-started/installation/", "Node.js 20以降等はGemini CLI側の条件。Unity CLI Loop V3本体の要件と混同しない。"], ["UP", "Unity：Git URLからのパッケージ導入", "https://docs.unity3d.com/Manual/upm-ui-giturl.html", "Gitクライアント2.14.0以降、WindowsのPATH登録が前提。ボタン名はUnityの版でAdd／Installが異なる。"]];