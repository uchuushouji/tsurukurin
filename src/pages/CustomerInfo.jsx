import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CustomerInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const estimateData = location.state;

  const [formData, setFormData] = useState({
    postalCode: '',
    name: '',
    address: '',
    phone: '',
    email: '',
    preferredDate1: null,
    preferredDate2: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fetchAddressFromZip = async () => {
    if (!formData.postalCode) return;
    try {
      const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${formData.postalCode}`);
      const data = await res.json();
      if (data.results && data.results[0]) {
        const result = data.results[0];
        const address = `${result.address1}${result.address2}${result.address3}`;
        setFormData(prev => ({
          ...prev,
          address,
        }));
      }
    } catch (error) {
      console.error('住所取得失敗:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirm', {
      state: {
        estimate: estimateData,
        customer: formData,
      },
    });
  };

  if (!estimateData) {
    return <p className="text-center text-red-500 mt-10">見積もり情報がありません。最初からやり直してください。</p>;
  }

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">お客様情報の入力</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            郵便番号 <span className="text-sm text-red-500">※必須</span>
          </label>
          <input
            type="text"
            name="postalCode"
            maxLength="7"
            required
            value={formData.postalCode}
            onChange={handleChange}
            onBlur={fetchAddressFromZip}
            placeholder="例: 1000001"
            className="w-full border rounded-lg px-3 py-2 bg-white text-black"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            住所 <span className="text-sm text-red-500">※必須</span>
          </label>
          <input
            type="text"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 bg-white text-black"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            名前 <span className="text-sm text-red-500">※必須</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 bg-white text-black"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            電話番号 <span className="text-sm text-red-500">※必須</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 bg-white text-black"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Emailアドレス <span className="text-sm text-red-500">※必須</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 bg-white text-black"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            第一希望日 <span className="text-sm text-red-500">※必須</span>
          </label>
          <DatePicker
            selected={formData.preferredDate1}
            onChange={(date) => setFormData({ ...formData, preferredDate1: date })}
            dateFormat="yyyy/MM/dd"
            className="w-full border rounded-lg px-3 py-2 bg-white text-black"
            placeholderText="日付を選択"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            第二希望日
          </label>
          <DatePicker
            selected={formData.preferredDate2}
            onChange={(date) => setFormData({ ...formData, preferredDate2: date })}
            dateFormat="yyyy/MM/dd"
            className="w-full border rounded-lg px-3 py-2 bg-white text-black"
            placeholderText="日付を選択"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 rounded-full hover:from-blue-600 hover:to-blue-800 transition"
        >
          確認画面へ進む
        </button>
      </form>
    </div>
  );
}
