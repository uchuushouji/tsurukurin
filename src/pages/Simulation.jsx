import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  ]}
];

export default function Simulation() {
  const [selection, setSelection] = useState({});
  const [openCategory, setOpenCategory] = useState(null);
  const navigate = useNavigate();

  const handleChange = (key, quantity) => {
    setSelection(prev => ({
      ...prev,
      [key]: quantity,
    }));
  };

  const calculateTotal = () => {
    let total = 0;
    services.forEach(service => {
      service.items.forEach(item => {
        const key = `${service.category} - ${item.name}`;
        if (selection[key]) {
          total += item.price * selection[key];
        }
      });
    });
    return total;
  };

  const toggleCategory = (category) => {
    setOpenCategory(prev => prev === category ? null : category);
  };

  const handleProceed = () => {
    navigate('/CustomerInfo', { state: selection });
  };

  const hasSelection = Object.values(selection).some(qty => qty > 0);

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">見積もりシミュレーション</h1>

      {services.map(service => (
        <div key={service.category} className="mb-6 border rounded-xl overflow-hidden">
          <button
            onClick={() => toggleCategory(service.category)}
            className="w-full text-left p-5 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold hover:from-blue-500 hover:to-blue-700 transition"
          >
            {service.category}
          </button>

          {openCategory === service.category && (
            <div className="p-6 bg-gray-50 space-y-4">
              {service.items.map(item => {
                const key = `${service.category} - ${item.name}`;
                return (
                  <div key={key} className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">{item.name} - ¥{item.price}</span>
                    <input
                      type="number"
                      min="0"
                      value={selection[key] || ''}
                      onChange={(e) => handleChange(key, Number(e.target.value))}
                      className="border rounded-lg px-3 py-2 w-24 text-right focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-black"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}

      <div className="mt-12 text-center">
        <div className="text-2xl font-bold mb-6 text-gray-800">
          合計金額: ¥{calculateTotal().toLocaleString()}
        </div>

        {hasSelection && (
          <button
            onClick={handleProceed}
            className="bg-gradient-to-r from-green-400 to-green-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-green-500 hover:to-green-700 transition"
          >
            この内容で依頼する
          </button>
        )}
      </div>
    </div>
  );
}
