import * as React from "react"
import { makeStyles } from "@fluentui/react-components";
import Contact from "./views/Contact";
import MeetingForm from "./views/MeetingForm";
import LogoutPage from "./views/LogoutPage";
import LoginPage from "./views/LoginPage";


interface AppProps {
  title: string;
}

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App: React.FC<AppProps> = () => {
  const styles = useStyles();


  return (
    <div className={styles.root}>
      {/* <LoginPage/> */}
      <Contact/>
      {/* <MeetingForm/> */}
      {/* <LogoutPage/> */}
      
    </div>
  );
};

export default App;
