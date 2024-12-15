import React from 'react';

export default function CourseDetails() {
  return (
    <div className="mb-8 ml-[150px]">
      <img src="/public/assetsvivit/Banner.png" alt="Banner" className="w-full h-auto rounded-2xl mb-6" />
      <h1 className="text-4xl font-bold mb-4">PortoPolish Batch 5</h1>
      <div className="flex justify-between items-center mb-4">
        <p className="text-2xl font-semibold">Rp 23.000</p>
        <p className="text-lg line-through text-gray-500">Rp 60.000</p>
      </div>
      <section className="mb-6">
  <h2 className="text-2xl font-semibold mb-2">Deskripsi</h2>
  <p className="text-justify">
    Ingin membuat portofolio yang menarik dan mencerminkan kemampuan Anda
    secara profesional? Layanan Review Portofolio kami dirancang khusus
    untuk membantu Anda menonjol di dunia kerja atau proyek freelance.
    Dengan saran dari para ahli, portofolio Anda akan tampil lebih rapi,
    menarik, dan efektif!
  </p>
</section>
<section>
  <h2 className="text-2xl font-semibold mb-2">Ketentuan</h2>
  <p className="text-justify">
    Pastikan portofolio yang diunggah dalam format PDF dengan ukuran
    maksimal 5 MB untuk proses review yang optimal. Setelah pembayaran
    dikonfirmasi, tim kami akan memulai proses review yang berlangsung
    selama 2-4 hari kerja, tergantung kompleksitas portofolio Anda.
  </p>
</section>
    </div>
  );
}

