import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Main from "../../Layout/Main";
function LandingPage(props) {
  return (
    <div>
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default withRouter(LandingPage);
