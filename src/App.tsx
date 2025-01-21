import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer, AreaChart, Area } from 'recharts';

const LoadTestReport = () => {
  const responseTimeData = [
    { name: 'Minimum', value: 414.24 },
    { name: 'Rata-rata', value: 11308.15 },
    { name: 'Median', value: 11476.82 },
    { name: 'P90', value: 14682.56 },
    { name: 'P95', value: 15280.67 },
    { name: 'Maximum', value: 27183.71 }
  ];

  const networkMetrics = [
    { name: 'Koneksi', value: 2.81 },
    { name: 'TLS', value: 3.13 },
    { name: 'Pengiriman', value: 0.29 },
    { name: 'Penerimaan', value: 0.57 }
  ];

  const testResults = [
    { name: 'Login Staff', total: 100, sukses: 100 },
    { name: 'Generate Token', total: 100, sukses: 100 },
    { name: 'Iterasi Polling', total: 1283, sukses: 1283 },
    { name: 'Update Polling', total: 1250, sukses: 1250 }
  ];

  return (
    <div className="space-y-8 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Load Test Performance Polling Report</CardTitle>
          <p className="text-sm text-gray-500">Date: January 21, 2025 12:08</p>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Executive Summary</h2>
          <p className="mb-4">
            Load Test telah dilakukan pada sistem polling untuk mengevaluasi kinerjanya di bawah tekanan.
            Pengujian mensimulasikan hingga 100 pengguna concurrent yang melakukan berbagai operasi terkait polling.
            Secara keseluruhan, sistem menunjukkan kinerja yang kuat tanpa adanya permintaan yang gagal.
          </p>

          <h2 className="text-xl font-bold mb-4">Grafik Waktu Respons (ms)</h2>
          <div className="h-64 mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={responseTimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#3b82f6" name="Waktu (ms)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <h2 className="text-xl font-bold mb-4">Kinerja Jaringan (ms)</h2>
          <div className="h-64 mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={networkMetrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#10b981" name="Waktu (ms)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <h2 className="text-xl font-bold mb-4">Hasil Pengujian</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={testResults}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="total" stackId="1" stroke="#6366f1" fill="#6366f1" name="Total Request" />
                <Area type="monotone" dataKey="sukses" stackId="2" stroke="#10b981" fill="#10b981" name="Sukses" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <h2 className="text-xl font-bold mt-8 mb-4">Key Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold mb-2">Test Scope</h3>
              <ul className="list-disc pl-4">
                <li>Total Permintaan: 2.633</li>
                <li>Durasi: ~5,5 menit</li>
                <li>Pengguna Virtual: 3-100</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-bold mb-2">Transfer Data</h3>
              <ul className="list-disc pl-4">
                <li>Diterima: 4,96 MB</li>
                <li>Dikirim: 0,56 MB</li>
                <li>Rate: 7,98 request/detik</li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-bold mt-8 mb-4">Rekomendasi</h2>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <ol className="list-decimal pl-4">
              <li className="mb-2">Optimasi waktu respons untuk meningkatkan pengalaman pengguna</li>
              <li className="mb-2">Implementasi load balancing untuk mengurangi waktu respons maksimum</li>
              <li>Penerapan pemantauan berkelanjutan untuk metrik kinerja</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoadTestReport;