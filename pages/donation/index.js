import dynamic from "next/dynamic";
import Head from "next/head";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../../components/Paypal"),
  { ssr: false }
);

function Home() {
  return (
    <div>
      <Head>
        <script src="https://www.paypal.com/sdk/js?client-id=AWKytFGu4kNLPRMxebIkzgS7cZKW5rxfZ6AwwLldnmQR5p1vIGWMB5RJs76VESbVp3rduTNESnQzmOrg"></script>
      </Head>
      <DynamicComponentWithNoSSR />
      <p>HOME PAGE is here!</p>
    </div>
  );
}

export default Home;
