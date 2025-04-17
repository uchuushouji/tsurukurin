export default function Contact() {
  return (
    <div className="p-6 pb-20">
      <h1 className="text-2xl font-bold mb-4">お問い合わせ</h1>
      <p className="mb-4">LINEまたはお電話でお気軽にどうぞ！</p>
      <a
        href="https://line.me/ti/p/xxxxx" // LINEリンクに変更してね
        className="block bg-green-500 text-white text-center py-3 rounded mb-3"
      >
        LINEで相談する
      </a>
      <a
        href="tel:08012345678"
        className="block bg-blue-500 text-white text-center py-3 rounded"
      >
        電話する
      </a>
    </div>
  );
}
