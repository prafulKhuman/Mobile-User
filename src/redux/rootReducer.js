import { all } from "redux-saga/effects";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import * as topics from "../app/modules/Topic/_redux/topicRedux";
import * as subtopics from "../app/modules/SubTopic/_redux/subtopicsRedux";
import * as questions from "../app/modules/Question/_redux/questionsRedux";
import * as diagram from "../app/modules/Diagram/_redux/DiagramRedux";
import * as predefinedLogic from "../app/modules/PredefinedLogic/_redux/PredefinedLogicRedux";
import * as traversHistory from "../app/modules/TraversHistory/_redux/TraversHistoryRedux";
import * as users from "../app/modules/Users/_redux/usersRedux";
import * as organizations from "../app/modules/Organizations/_redux/organizationsRedux";
import * as fileUpload from "../app/modules/UploadFile/_redux/UploadFileRedux";
import * as helpSection from "../app/modules/HelpSection/_redux/HelpSectionRedux";

const appReducer = combineReducers({
  auth: auth.reducer,
  topics: topics.reducer,
  subtopics: subtopics.reducer,
  questions: questions.reducer,
  diagram: diagram.reducer,
  predefinedLogic: predefinedLogic.reducer,
  traversHistory: traversHistory.reducer,
  users: users.reducer,
  organizations: organizations.reducer,
  fileUpload: fileUpload.reducer,
  helpSection: helpSection.reducer,
});
export const rootReducer = (state, action) => {
  if (action.type === "[Logout] Action") {
    // for all keys defined in your persistConfig(s)
    storage.removeItem("persist:auth");
    storage.removeItem("persist:topic");
    storage.removeItem("persist:subtopic");
    storage.removeItem("persist:diagram");
    storage.removeItem("persist:traversHistory");
    storage.removeItem("persist:question");
    storage.removeItem("persist:organizations");
    storage.removeItem("persist:users");
    storage.removeItem("persist:fileUpload");
    storage.removeItem("persist:helpSection");
    // storage.removeItem('persist:otherKey')

    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};
export function* rootSaga() {
  yield all([
    auth.saga(),
    topics.saga(),
    subtopics.saga(),
    questions.saga(),
    users.saga(),
    diagram.saga(),
    predefinedLogic.saga(),
    traversHistory.saga(),
    organizations.saga(),
    fileUpload.saga(),
    helpSection.saga(),
  ]);
}
