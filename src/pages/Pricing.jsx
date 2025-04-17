export default function Pricing() {
  return (
    <div className="p-6 pb-20">
      <h1 className="text-2xl font-bold mb-4">料金表</h1>
      <table className="w-full border text-left text-sm">
        <thead>
          <tr>
            <th className="border p-2">サービス</th>
            <th className="border p-2">料金（税込）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">エアコン1台</td>
            <td className="border p-2">¥9,800</td>
          </tr>
          <tr>
            <td className="border p-2">浴室</td>
            <td className="border p-2">¥12,000</td>
          </tr>
          <tr>
            <td className="border p-2">キッチン</td>
            <td className="border p-2">¥11,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
