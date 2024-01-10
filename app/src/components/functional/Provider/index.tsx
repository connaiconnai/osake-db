import BrowseRouterProvider from "./Router";
import MuiThemeProvider from "./MuiTheme";
import RecoilProvider from "./Recoil";
import { FetchDataProvider } from "@functional/FetchData";

export default function Provider() {
  return (
    <>
      <RecoilProvider>
        <FetchDataProvider />
        <MuiThemeProvider>
          <BrowseRouterProvider />
        </MuiThemeProvider>
      </RecoilProvider>
    </>
  );
}
