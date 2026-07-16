import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useLang } from '../../context/LanguageContext';
import cvFile from '../../assets/CV terbaru 2.pdf';

// Point pdfjs worker to the bundled worker from pdfjs-dist
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const CVPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLang();
  const cv = t.cv;

  const [numPages, setNumPages] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(860);

  // Measure container width for responsive PDF rendering
  const containerRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      const observer = new ResizeObserver((entries) => {
        const width = entries[0].contentRect.width;
        if (width > 0) setContainerWidth(width);
      });
      observer.observe(node);
    }
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'CV-Cahya-Yoga-Ariyanto.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#F1F5F9] min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 text-sm text-[#475569] hover:text-[#0F172A] transition-colors duration-200 cursor-pointer"
          >
            <ArrowLeftIcon />
            <span className="hidden sm:inline">{cv.backBtn}</span>
            <span className="sm:hidden">Back</span>
          </button>

          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-[#0F172A] hidden md:block">{cv.name}</span>
            <span className="text-sm text-[#94A3B8] hidden md:block mx-2">·</span>
            <span className="text-sm text-[#475569] hidden md:block">{cv.pageTitle}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 text-sm bg-[#191A23] text-white rounded-full px-4 py-1.5 hover:bg-[#2d2f3a] transition-all duration-200 cursor-pointer"
            >
              <DownloadIcon />
              <span className="hidden sm:inline">{cv.downloadBtn}</span>
              <span className="sm:hidden">PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* PDF Pages */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="py-8 px-4 sm:px-6 pb-16"
      >
        <div
          ref={containerRef}
          className="max-w-[860px] mx-auto flex flex-col gap-6"
        >
          <Document
            file={cvFile}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={
              <div className="flex items-center justify-center py-24">
                <div className="w-8 h-8 border-2 border-[#2563EB] border-t-transparent rounded-full animate-spin" />
              </div>
            }
            error={
              <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                <p className="text-[#0F172A] font-semibold">Gagal memuat PDF</p>
                <p className="text-[#64748B] text-sm">Silakan unduh file untuk melihat CV.</p>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 bg-[#191A23] text-white rounded-full px-5 py-2 text-sm cursor-pointer hover:bg-[#2d2f3a] transition-colors"
                >
                  <DownloadIcon />
                  {cv.downloadBtn}
                </button>
              </div>
            }
          >
            {Array.from({ length: numPages }, (_, i) => (
              <div
                key={`page-${i + 1}`}
                className="rounded-2xl overflow-hidden bg-white"
                style={{
                  boxShadow:
                    '0 4px 6px -1px rgba(0,0,0,0.05), 0 20px 60px -10px rgba(0,0,0,0.12)',
                }}
              >
                <Page
                  pageNumber={i + 1}
                  width={containerWidth}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                />
              </div>
            ))}
          </Document>
        </div>
      </motion.div>
    </div>
  );
};

export default CVPage;
