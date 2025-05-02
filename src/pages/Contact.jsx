export default function Contact() {
  return (
    <div className="p-6 pb-20">
      <h1 className="text-2xl font-bold mb-6">お問い合わせ</h1>
      <form
        action="https://formsubmit.co/uchuu.shouji@gmail.com"
        method="POST"
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1">お名前</label>
          <input
            type="text"
            name="お名前"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">メールアドレス</label>
          <input
            type="email"
            name="メールアドレス"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">ご用件</label>
          <textarea
            name="内容"
            required
            rows="4"
            className="w-full border border-gray-300 rounded px-4 py-2 bg-white text-black"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition"
        >
          送信
        </button>
      </form>
    </div>
  );
}
