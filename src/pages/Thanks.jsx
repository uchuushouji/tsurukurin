import { Link } from 'react-router-dom';

export default function ThanksPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">送信完了！</h1>
      <p className="text-gray-700 mb-8">
        ご依頼ありがとうございます。<br />
        担当者より折り返しご連絡いたします。
      </p>
      <Link
        to="/"
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 px-8 rounded-full hover:from-blue-600 hover:to-blue-800 transition"
      >
        ホームに戻る
      </Link>
    </div>
  );
}
