import { useLocation, useNavigate } from 'react-router-dom';

const services = [
  { category: 'エアコンクリーニング', items: [
    { name: 'ノーマル', price: 9000 },
    { name: 'お掃除機能付き', price: 17000 },
  ]},
  { category: '水回りクリーニング', items: [
    { name: 'お風呂クリーニング', price: 15000 },
    { name: 'トイレクリーニング', price: 8000 },
    { name: '洗面台クリーニング', price: 6000 },
  ]},
  { category: '洗濯機クリーニング', items: [
    { name: '縦型', price: 15000 },
    { name: 'ドラム式', price: 20000 },
  ]},
  { category: 'キッチンのクリーニング', items: [
    { name: 'レンジフード', price: 12000 },
    { name: '換気扇', price: 9000 },
    { name: 'キッチンクリーニング', price: 15000 },
    { name: '冷蔵庫', price: 6000 },
    { name: '食洗機クリーニング', price: 60000 },
  ]},
  { category: '民泊・Airbnbクリーニング', items: [] },
  { category: '空き家クリーニング', items: [
    { name: '1R', price: 20000 },
    { name: '1K', price: 23000 },
    { name: '1DK', price: 28000 },
    { name: '1LDK', price: 38000 },
    { name: '2K', price: 38000 },
    { name: '2DK', price: 40000 },
    { name: '2LDK', price: 45000 },
    { name: '3K', price: 45000 },
    { name: '3DK', price: 50000 },
    { name: '3LDK', price: 70000 },
    { name: '4K', price: 72000 },
    { name: '4DK', price: 80000 },
    { name: '4LDK', price: 90000 },
  ]},
];

export default function ConfirmPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { estimate, customer } = location.state || {};

  const findPrice = (key) => {
    for (const service of services) {
      for (const item of service.items) {
        const itemKey = `${service.category} - ${item.name}`;
        if (itemKey === key) {
          return item.price;
        }
      }
    }
    return 0;
  };

  const calculateDetails = () => {
    let total = 0;
    const details = Object.entries(estimate)
      .filter(([_, qty]) => qty > 0)
      .map(([key, qty]) => {
        const price = findPrice(key);
        const itemTotal = price * qty;
        total += itemTotal;
        const [category, name] = key.split(' - ');
        return { category, name, qty, price, itemTotal };
      });
    return { details, total };
  };

  const { details, total } = calculateDetails();
  const tax = Math.floor(total * 0.1);
  const grandTotal = total + tax;

  const handleSend = async () => {
    const estimateDetails = details.map(({ category, name, qty, itemTotal }) =>
      `${category}\n　${name}: ${qty}個 - ¥${itemTotal.toLocaleString()}`
    ).join('\n');
  
    const emailContent = `
  【見積もり内容】
  ${estimateDetails}
  
  【小計】
  ¥${total.toLocaleString()}
  【消費税（10%）】
  ¥${tax.toLocaleString()}
  【合計金額】
  ¥${grandTotal.toLocaleString()}
  
  【お客様情報】
  名前: ${customer.name}
  住所: ${customer.address}
  電話番号: ${customer.phone}
  Email: ${customer.email}
  第一希望日: ${customer.preferredDate1 ? new Date(customer.preferredDate1).toLocaleDateString() : ''}
  第二希望日: ${customer.preferredDate2 ? new Date(customer.preferredDate2).toLocaleDateString() : 'なし'}
  `;
  
    try {
      await fetch('https://formspree.io/f/mdkgarvw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          _replyto: customer.email,
          _subject: `【${customer.name}様】から依頼がきたよ！`,
          message: emailContent
        })
      });
  
      alert('見積もり依頼を送信しました！');
      navigate('/thanks');
    } catch (error) {
      alert('送信に失敗しました。もう一度お試しください。');
      console.error(error);
    }
  };
  

  if (!estimate || !customer) {
    return <p className="text-center text-red-500 mt-10">情報が不足しています。最初からやり直してください。</p>;
  }

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">内容確認</h1>
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-700 mb-4">見積もり内容</h2>
        <div className="space-y-4">
          {details.map(({ category, name, qty, price, itemTotal }) => (
            <div key={category + name} className="p-4 border rounded-lg shadow-sm">
              <div className="font-bold text-gray-800">
                {category}<br /><span className="pl-4">{name}</span>
              </div>
              <div className="text-sm text-gray-600">
                単価: ¥{price.toLocaleString()} × 数量: {qty} =
                <span className="font-semibold text-black ml-1">¥{itemTotal.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-gray-800 font-bold text-right">
          小計: ¥{total.toLocaleString()}<br />
          消費税 (10%): ¥{tax.toLocaleString()}<br />
          合計金額: <span className="text-xl text-green-600">¥{grandTotal.toLocaleString()}</span>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-700 mb-2">お客様情報</h2>
        <p className="text-gray-700">名前: {customer.name}</p>
        <p className="text-gray-700">住所: {customer.address}</p>
        <p className="text-gray-700">電話番号: {customer.phone}</p>
        <p className="text-gray-700">Email: {customer.email}</p>
        <p className="text-gray-700">
          第一希望日: {customer.preferredDate1 ? new Date(customer.preferredDate1).toLocaleDateString() : '未設定'}
        </p>
        <p className="text-gray-700">
          第二希望日: {customer.preferredDate2 ? new Date(customer.preferredDate2).toLocaleDateString() : 'なし'}
        </p>
      </div>
      <button
        onClick={handleSend}
        className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-3 rounded-full hover:from-green-600 hover:to-green-800 transition"
      >
        この内容で送信する
      </button>
    </div>
  );
}
