import { getTranslations } from 'next-intl/server';

import { SignIn } from '@/modules/auth';

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const t = await getTranslations({ locale, namespace: 'SignIn' });

    return {
        title: t('meta_title'),
        description: t('meta_description'),
    };
}

const SignInPage = () => <SignIn />;

export default SignInPage;
