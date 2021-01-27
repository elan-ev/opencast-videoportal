import { bug } from "./util/err";


// The ID of the HTML element containing our configuration.
const ID = "tobira-frontend-config";

// Loads the frontend config and returns it as object.
const parseFrontendConfig: () => FrontendConfig = () => {
    const tag = document.getElementById(ID);
    if (tag === null) {
        return bug(`No <script> tag with ID '${ID}' in HTML: cannot load frontend config`);
    }
    if (!(tag instanceof HTMLScriptElement)) {
        return bug(`Element with ID '${ID}' is not a <script> tag: cannot load frontend config`);
    }

    // We just cast the parsed type without checking. We might want to add a
    // check later, but it's not that important because this value is completely
    // controlled by us.
    return JSON.parse(tag.text) as FrontendConfig;
};

type FrontendConfig = {
    logo: LogoConfig;
};

type LogoConfig = {
    large: string;
    small: string;
};

export const FRONTEND_CONFIG: FrontendConfig = parseFrontendConfig();