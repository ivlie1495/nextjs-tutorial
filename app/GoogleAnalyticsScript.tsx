import Script from 'next/script'

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8C0VGP3RC4"
      />
      <Script id="google-analytics-script">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date()); gtag('config', 'G-8C0VGP3RC4');`}
      </Script>
    </>
  )
}

export default GoogleAnalyticsScript
