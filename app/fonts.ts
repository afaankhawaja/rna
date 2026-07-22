import localFont from "next/font/local";

export const arvo = localFont({
  src: [
    {
      path: "../public/fonts/Arvo/Arvo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Arvo/Arvo-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Arvo/Arvo-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Arvo/Arvo-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-arvo",
});

export const lato = localFont({
  src: [
    {
      path: "../public/fonts/Lato/Lato-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato/Lato-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/Lato/Lato-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato/Lato-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Lato/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato/Lato-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Lato/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato/Lato-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Lato/Lato-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Lato/Lato-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-lato",
});

export const mont =localFont({
  src:[
    {
      path: "../public/fonts/Montserrat/static/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/Montserrat/static/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../public/fonts/Montserrat/static/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal"
    },
    {
      path: "../public/fonts/Montserrat/static/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "../public/fonts/Montserrat/static/Montserrat-Italic.ttf",
      weight: "400",
      style: "italic"
    },
    {
      path: "../public/fonts/Montserrat/static/Montserrat-MediumItalic.ttf",
      weight: "500",
      style: "italic"
    },
    {
      path: "../public/fonts/Montserrat/static/Montserrat-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic"
    },
    {
      path: "../public/fonts/Montserrat/static/Montserrat-BoldItalic.ttf",
      weight: "700",
      style: "italic"
    }
  ],
  variable: "--font-mont"
})