import BrowseRouterProvider from "./Router";
import MuiThemeProvider from "./MuiTheme";

export default function Provider() {
  return (
    <>
      <MuiThemeProvider>
        <BrowseRouterProvider />
      </MuiThemeProvider>
    </>
  );
}
