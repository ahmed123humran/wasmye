import Image from "next/image";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('ComingSoon');

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-stone-900 font-sans">
      <LanguageSwitcher />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 text-white">
        <Image
          src="/heritage-bg.png"
          alt="Yemeni Heritage Background"
          fill
          className="object-cover opacity-60 scale-105 animate-pulse-slow"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-stone-900/40 to-black/80" />
      </div>

      {/* Content Container */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* Logo or Main Icon Area */}
        <div className="mb-12 flex h-32 w-32 items-center justify-center rounded-full border-2 border-amber-500/30 bg-stone-800/40 p-4 backdrop-blur-xl animate-fade-in-up">
          <svg
            viewBox="0 0 24 24"
            className="h-20 w-20 text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]"
            fill="currentColor"
          >
            <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
          </svg>
        </div>

        {/* Text Content */}
        <div className="space-y-6 max-w-2xl animate-fade-in">
          <h2 className="text-xl font-medium tracking-widest text-amber-500 uppercase">
            {t('subtitle')}
          </h2>

          <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl">
            {t('mainTitle')}
          </h1>

          <p className="mx-auto max-w-lg text-lg leading-relaxed text-stone-300 md:text-xl">
            {t('mainDescription')}
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="my-12 flex items-center gap-4 w-full max-w-xs justify-center opacity-50">
          <div className="h-px w-full bg-gradient-to-l from-transparent to-amber-500" />
          <div className="text-amber-500">◆</div>
          <div className="h-px w-full bg-gradient-to-r from-transparent to-amber-500" />
        </div>

        {/* Features/Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-stone-400 mt-8 mb-16 animate-fade-in">
          <div className="flex flex-col items-center">
            <span className="text-amber-500 text-2xl mb-2">🏺</span>
            <span className="text-sm font-medium">{t('features.antiques')}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-amber-500 text-2xl mb-2">⚔️</span>
            <span className="text-sm font-medium">{t('features.daggers')}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-amber-500 text-2xl mb-2">💍</span>
            <span className="text-sm font-medium">{t('features.silver')}</span>
          </div>
        </div>

        {/* Footer Info */}
        <footer className="mt-12 text-sm text-stone-500 tracking-wider">
          &copy; {new Date().getFullYear()} {t('title')}. {t('copyright')}
        </footer>
      </main>

      {/* Decorative Floating Elements (Optional/Subtle) */}
      <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-amber-600/10 blur-[100px]" />
      <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-stone-500/10 blur-[100px]" />
    </div>
  );
}
