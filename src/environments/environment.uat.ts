export const environment = {
    production: false,
    baseHref: '/',
    GTM: {
        forHead: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=smp3hDtOACiIFYPh0EhIhw&gtm_preview=env-8&gtm_cookies_win=x';f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-TCLHV5Q');`,
        forBody: `<iframe src="https://googletagmanager.com/ns.html?id=GTM-TCLHV5Q&gtm_auth=smp3hDtOACiIFYPh0EhIhw&gtm_preview=env-8&gtm_cookies_win=x" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    },
    mailchimpListID: 'd1e46e5571',
    name: 'uat'
  };
