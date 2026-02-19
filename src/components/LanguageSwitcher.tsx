'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();
    const params = useParams();

    const handleLanguageChange = (newLocale: string) => {
        router.replace(
            // @ts-ignore
            { pathname, params },
            { locale: newLocale }
        );
    };

    return (
        <div className="absolute top-6 right-6 z-50 flex gap-2 sm:top-10 sm:right-10">
            <button
                onClick={() => handleLanguageChange('ar')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${locale === 'ar'
                    ? 'bg-amber-500 text-stone-900 border-amber-500'
                    : 'bg-stone-800/50 text-stone-300 border border-stone-700 hover:border-amber-500/50'
                    }`}
            >
                العربية
            </button>
            <button
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${locale === 'en'
                    ? 'bg-amber-500 text-stone-900 border-amber-500'
                    : 'bg-stone-800/50 text-stone-300 border border-stone-700 hover:border-amber-500/50'
                    }`}
            >
                English
            </button>
        </div>
    );
}
