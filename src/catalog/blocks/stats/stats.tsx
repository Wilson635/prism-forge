export default function Stats() {
  const metrics = [
    { label: 'Active users', value: '24.8k', change: '+18.4%' },
    { label: 'Revenue', value: '$84.2k', change: '+12.8%' },
    { label: 'Conversion', value: '8.64%', change: '+4.6%' },
    { label: 'Projects shipped', value: '1,284', change: '+24.1%' },
  ]

  return (
    <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {metrics.map(({ label, value, change }) => (
        <div>
          <dt className="text-sm text-zinc-500">{label}</dt>
          <dd className="mt-3 text-4xl font-semibold text-zinc-950">{value}</dd>
          <span className="mt-2 inline-flex text-xs text-emerald-700">{change} this month</span>
        </div>
      ))}
    </dl>
  )
}
