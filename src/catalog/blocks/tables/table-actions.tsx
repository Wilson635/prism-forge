export default function TableActions() {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200">
      <table className="w-full text-sm">
        <thead className="bg-zinc-50 text-left text-xs uppercase text-zinc-500">
          <tr><th className="px-4 py-3">Invoice</th><th className="px-4 py-3">Amount</th><th className="px-4 py-3"></th></tr>
        </thead>
        <tbody>
          {[["#INV-2041", "$1,240"], ["#INV-2040", "$890"], ["#INV-2039", "$2,150"]].map(([id, amount]) => (
            <tr className="border-t border-zinc-100">
              <td className="px-4 py-3 font-medium text-zinc-900">{id}</td>
              <td className="px-4 py-3 text-zinc-600">{amount}</td>
              <td className="px-4 py-3 text-right">
                <button className="rounded-lg px-3 py-1.5 text-xs font-medium text-amber-700 hover:bg-amber-50">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between border-t border-zinc-100 px-4 py-3 text-xs text-zinc-500">
        <span>Showing 3 of 24</span>
        <div className="flex gap-1">
          <button className="rounded px-2 py-1 hover:bg-zinc-50">Prev</button>
          <button className="rounded px-2 py-1 hover:bg-zinc-50">Next</button>
        </div>
      </div>
    </div>
  )
}
