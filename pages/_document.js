import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="stylesheet" href="/assets/css/main.css" />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Scripts And Jquery */}
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
          <script src="/assets/js/vendor/jquery-2.2.4.min.js"></script>
          <script src="/assets/js/functions-min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
