export default function Services() {
  const categories = [
    { id: 'aircon', label: 'エアコン\nクリーニング', icon: '/img/ac.png' },
    { id: 'water', label: '水回り\nクリーニング', icon: '/img/bathtub.png' },
    { id: 'washing', label: '洗濯機\nクリーニング', icon: '/img/washing.png' },
    { id: 'kitchen', label: 'キッチン\nクリーニング', icon: '/img/kitchen.png' },
    { id: 'airbnb', label: '民泊・Airbnb\nクリーニング', icon: '/img/airbnb.png' },
    { id: 'vacant', label: '空き家\nクリーニング', icon: '/img/house.png' },
  ];

  const details = {
    aircon: ['お掃除機能付き'],
    water: ['お風呂クリーニング', 'トイレクリーニング', '洗面台クリーニング'],
    washing: ['縦型', 'ドラム式'],
    kitchen: ['レンジフード', '換気扇', 'キッチンクリーニング', '冷蔵庫', '食洗機クリーニング'],
    airbnb: [],
    vacant: [
      '1R ¥20,000', '1K ¥23,000', '1DK ¥28,000', '1LDK ¥38,000',
      '2K ¥38,000', '2DK ¥40,000', '2LDK ¥45,000', '3K ¥45,000',
      '3DK ¥50,000', '3LDK ¥70,000', '4K ¥72,000', '4DK ¥80,000', '4LDK ¥90,000'
    ]
  };

  const descriptions = {
    aircon: '高圧洗浄で内部のカビや汚れを徹底除去！',
    water: '浴室、洗面台、トイレなど水回り全般をピカピカに！',
    washing: '見えない内部のカビや石鹸カスをしっかり除去！',
    kitchen: '換気扇やコンロの油汚れ、シンクの水垢まで対応！',
    airbnb: 'チェックアウト後の清掃を迅速＆丁寧に対応します。',
    vacant: '長期間放置された住居を清潔に整えます。'
  };

  return (
    <div className="p-6 pb-20 scroll-smooth">
      <h1 className="text-2xl font-bold mb-6 text-center">サービス一覧</h1>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat, index) => (
          <a href={`#${cat.id}`} key={index} className="block">
            <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
              <div className="flex flex-col items-center justify-center p-4">
                <img
                  src={cat.icon}
                  alt={cat.label}
                  className="w-12 h-12 mb-2"
                />
                <p className="text-center text-base text-black whitespace-pre-line font-medium leading-snug">
                  {cat.label}
                </p>
                <div className="mt-2 text-blue-500">▼</div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* 詳細セクション */}
      {categories.map((cat) => (
        <section id={cat.id} key={cat.id} className="mt-10">
          <h2 className="text-xl font-bold mb-2 w-full bg-blue-600 text-white px-4 py-3 rounded shadow-md">
            {cat.label.replace('\n', ' ')}
          </h2>
          <div className="bg-white shadow rounded p-4 text-gray-800">
            {details[cat.id]?.length > 0 && (
              <ul className="list-disc list-inside mb-4">
                {details[cat.id].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            <p>{descriptions[cat.id]}</p>
          </div>
        </section>
      ))}
    </div>
  );
}
