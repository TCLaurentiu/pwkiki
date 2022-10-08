import "../styles/globals.css";
import Layout from "../components/general/layout";
import AuthUserProvider from "../lib_firebase/authcontext";
import "react-notifications/lib/notifications.css";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <>
    <AuthUserProvider>
      <Layout>
          <Component {...pageProps} /></Layout>
          </AuthUserProvider>
    <NotificationContainer />
    </>
    </>
  );
}

export default MyApp;
