export default function AuthLayout({
    children, // will be a page or nested layout
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    console.log('LOG locale', locale);
    //   let clerkLocale = enUS;
    //   let signInUrl = '/sign-in';
    //   let signUpUrl = '/sign-up';
    //   let dashboardUrl = '/dashboard';

    //   if (locale === 'fr') {
    //     clerkLocale = frFR;
    //   }

    //   if (locale !== 'en') {
    //     signInUrl = `/${locale}${signInUrl}`;
    //     signUpUrl = `/${locale}${signUpUrl}`;
    //     dashboardUrl = `/${locale}${dashboardUrl}`;
    //   }

    return (
        <div>
            {/* <ClerkProvider
        localization={clerkLocale}
        signInUrl={signInUrl}
        signUpUrl={signUpUrl}
        afterSignInUrl={dashboardUrl}
        afterSignUpUrl={dashboardUrl}
      > */}
            {children}
            {/* </ClerkProvider> */}
        </div>
    );
}
