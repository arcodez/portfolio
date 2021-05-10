import dynamic from "next/dynamic";
import Head from "next/head";

/* Importo El Componente de Paypal Sin SSR */
const DynamicComponentWithNoSSR = dynamic(
  () => import("../../components/Paypal/Paypal"),
  { ssr: false }
);

function Home() {
  return (
    <>
      <Head>
        <title>Abel Rodriguez</title>
        <link rel="shortcut icon" href="react-icon.svg" type="image/x-icon" />
        <script src="https://www.paypal.com/sdk/js?client-id=AWKytFGu4kNLPRMxebIkzgS7cZKW5rxfZ6AwwLldnmQR5p1vIGWMB5RJs76VESbVp3rduTNESnQzmOrg"></script>
      </Head>
      <DynamicComponentWithNoSSR />
    </>
  );
}

export default Home;
