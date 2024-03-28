import { StatusBar } from "expo-status-bar";
import { BaseNavigation } from "./src/navigations/baseNavigation";

export default function App() {
  return (
    <>
      <BaseNavigation />
      <StatusBar style="auto" />
    </>
  );
}
