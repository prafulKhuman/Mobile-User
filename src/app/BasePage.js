// import React, { Suspense, lazy } from "react";
// import { Redirect, Switch, Route } from "react-router-dom";
// import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
// import { DashboardPage } from "./pages/DashboardPage";
// import { TopicsPage } from "./pages/TopicsPage";
// import { SubTopicsPage } from "./pages/SubTopicsPage";
// import { DiagramPage } from "./pages/DiagramPage";
// import { TopicQuestionPage } from "./pages/TopicQuestionPage";
// import { OrganizationPage } from "./pages/OrganizationPage";
// import { UsersPage } from "./pages/UsersPage";
// import { TraversHistoryPage } from "./pages/TraversHistoryPage";
// import { UserDetailsPage } from "./pages/UserDetailsPage";
// import { PredefinedLogicPage } from "./pages/PredefinedLogicPage";
// import { ReportTemplatePage } from "./pages/ReportTemplatePage";
// import { PredefinedLogicDiagramPage } from "./pages/PredefinedLogicDiagramPage";
// import { EditOrganization } from "./pages/EditOrganization";

// import { UploadFilePage } from "./pages/UploadFilePage";
// import { Toolbox } from "./pages/Toolbox";
// import { ToolboxPage } from "./pages/ToolboxPage";
// import { ToolboxDetailsPage } from "./pages/ToolBoxDetailPage";
// import { HelpListPage } from "./pages/HelpListPage";

// const UserProfilepage = lazy(() =>
//   import("./modules/UserProfile/UserProfilePage")
// );

// export default function BasePage() {
//   return (
//     <Suspense fallback={<LayoutSplashScreen />}>
//       <Switch>
//         {<Redirect exact from="/" to="/dashboard" />}
//         <ContentRoute path="/dashboard" component={DashboardPage} />
//         <ContentRoute path="/topics" component={TopicsPage} />
//         <ContentRoute path="/diagram/:id" component={DiagramPage} />
//         <ContentRoute path="/subtopic/:id" component={SubTopicsPage} />
//         <ContentRoute exact path="/organization" component={OrganizationPage} />
//         <ContentRoute path="/question/:id" component={TopicQuestionPage} />
//         <ContentRoute exact path="/users" component={UsersPage} />
//         <ContentRoute path="/users/:id" component={UserDetailsPage} />
//         <ContentRoute path="/upload" component={UploadFilePage} />
//         <ContentRoute exact path="/toolbox" component={Toolbox} />
//         <ContentRoute
//           exact
//           path="/toolbox/:id"
//           component={ToolboxDetailsPage}
//         />
//         <ContentRoute
//           exact
//           path="/toolbox/add/:subtopic"
//           component={ToolboxPage}
//         />
//         <ContentRoute exact path="/toolbox/edit/:id" component={ToolboxPage} />
//         <ContentRoute
//           path="/travers-history/:id"
//           component={TraversHistoryPage}
//         />

//         <ContentRoute
//           path="/organization/edit/:id"
//           component={EditOrganization}
//         />
//         <Route path="/user-profile" component={UserProfilepage} />
//         <Route path="/predefined-logic" exact component={PredefinedLogicPage} />
//         <Route path="/report-template" exact component={ReportTemplatePage} />
//         <Route
//           path="/predefined-logic/:id"
//           exact
//           component={PredefinedLogicDiagramPage}
//         />
//         <Route path="/help-section" exact component={HelpListPage} />
//         <Redirect to="error/error-v1" />
//       </Switch>
//     </Suspense>
//   );
// }
