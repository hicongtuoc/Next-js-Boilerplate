import { getTranslations } from 'next-intl/server';

import { SignUp } from '@/modules/auth';

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const t = await getTranslations({ locale, namespace: 'SignUp' });

    return {
        title: t('meta_title'),
        description: t('meta_description'),
    };
}

const SignUpPage = () => <SignUp />;

export default SignUpPage;
