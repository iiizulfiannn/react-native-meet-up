/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from "react-native";

export const MeetUpView = requireNativeComponent("RNJitsiMeetView");
export const MeetUpModule = NativeModules.RNJitsiMeetModule;
const call = MeetUpModule.call;
const audioCall = MeetUpModule.audioCall;
MeetUpModule.call = (url, userInfo) => {
  userInfo = userInfo || {};
  call(url, userInfo);
};
MeetUpModule.audioCall = (url, userInfo) => {
  userInfo = userInfo || {};
  audioCall(url, userInfo);
};
export default MeetUpModule;
